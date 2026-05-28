/* =========================================================
   Dynamo Player — modules/subtitles.js
   HBO Max Style Subtitles System
   ========================================================= */

/**
 * Default subtitle styling configuration (HBO Max inspired)
 */
const DEFAULT_STYLES = {
  fontFamily: '"Netflix Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: '2.5vw',
  fontWeight: '700',
  color: '#ffffff',
  textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)',
  background: 'rgba(0, 0, 0, 0.75)',
  padding: '0.3em 0.6em',
  borderRadius: '4px',
  lineHeight: '1.4'
};

/**
 * Injects subtitle styling into the document
 */
function injectSubtitleStyles(video, customStyles = {}) {
  const styles = { ...DEFAULT_STYLES, ...customStyles };
  const styleId = 'dynamo-subtitle-styles';
  
  // Remove existing styles
  document.getElementById(styleId)?.remove();
  
  const styleSheet = document.createElement('style');
  styleSheet.id = styleId;
  styleSheet.textContent = `
    /* HBO Max Style Subtitles */
    ${video.id ? `#${video.id}` : 'video'}::cue {
      font-family: ${styles.fontFamily};
      font-size: ${styles.fontSize};
      font-weight: ${styles.fontWeight};
      color: ${styles.color};
      text-shadow: ${styles.textShadow};
      background: ${styles.background};
      padding: ${styles.padding};
      border-radius: ${styles.borderRadius};
      line-height: ${styles.lineHeight};
      white-space: pre-wrap;
    }
    
    ${video.id ? `#${video.id}` : 'video'}::cue-region {
      font-family: ${styles.fontFamily};
    }
    
    /* Fallback for browsers that don't fully support ::cue */
    .dynamo-wrapper video::cue {
      font-family: ${styles.fontFamily};
      font-size: clamp(14px, ${styles.fontSize}, 32px);
      font-weight: ${styles.fontWeight};
      color: ${styles.color};
      text-shadow: ${styles.textShadow};
      background: ${styles.background};
      padding: ${styles.padding};
      border-radius: ${styles.borderRadius};
      line-height: ${styles.lineHeight};
    }
    
    /* Fullscreen subtitle adjustments */
    .dynamo-wrapper:fullscreen video::cue,
    .dynamo-wrapper:-webkit-full-screen video::cue {
      font-size: clamp(18px, 2.2vw, 42px);
    }
  `;
  
  document.head.appendChild(styleSheet);
}

/**
 * Creates a custom subtitle container for enhanced styling control
 */
function createCustomSubtitleContainer(wrapper) {
  const existing = wrapper.querySelector('.dynamo-subtitles');
  if (existing) return existing;
  
  const container = document.createElement('div');
  container.className = 'dynamo-subtitles';
  container.setAttribute('aria-live', 'polite');
  container.setAttribute('aria-atomic', 'true');
  wrapper.appendChild(container);
  
  return container;
}

/**
 * Injects subtitles as <track> elements into the <video>
 * and applies visibility based on the active label.
 */
export function initSubtitles(video, state, customStyles = {}) {
  const wrapper = video.closest('.dynamo-wrapper');
  
  // Inject HBO Max style subtitle CSS
  injectSubtitleStyles(video, customStyles);
  
  // Create custom subtitle container if needed
  if (wrapper) {
    createCustomSubtitleContainer(wrapper);
  }
  
  // Clear previous tracks
  video.querySelectorAll('track').forEach(t => t.remove());

  if (state.globalSubtitles.length > 0) {
    state.globalSubtitles.forEach((sub, index) => {
      const track = document.createElement('track');
      track.kind = 'subtitles';
      track.label = sub.label;
      track.srclang = sub.srclang || sub.lang || 'en';
      track.src = sub.src;
      track.id = `dynamo-track-${index}`;
      
      // Set default track
      if (sub.default && state.activeSubtitleLabel === 'Off' && !video._subsInit) {
        track.default = true;
        state.activeSubtitleLabel = sub.label;
      }
      
      video.appendChild(track);
    });
    
    video._subsInit = true;
  }

  // Apply visibility after browser parses tracks
  requestAnimationFrame(() => {
    setTimeout(() => applySubtitleVisibility(video, state), 100);
  });
}

/**
 * Iterates through textTracks and shows only the active one
 */
function applySubtitleVisibility(video, state) {
  if (!video.textTracks) return;
  
  const tracks = Array.from(video.textTracks);
  
  tracks.forEach(track => {
    const shouldShow = track.label === state.activeSubtitleLabel;
    track.mode = shouldShow ? 'showing' : 'hidden';
    
    // Sync with custom container if using enhanced subtitles
    if (shouldShow && track.cues) {
      syncCustomSubtitles(video, track);
    }
  });
}

/**
 * Syncs native cues with custom subtitle container
 * for enhanced styling on browsers with limited ::cue support
 */
function syncCustomSubtitles(video, track) {
  const wrapper = video.closest('.dynamo-wrapper');
  const container = wrapper?.querySelector('.dynamo-subtitles');
  
  if (!container || !track.cues) return;
  
  const updateCue = () => {
    const activeCues = track.activeCues;
    
    if (activeCues && activeCues.length > 0) {
      container.innerHTML = Array.from(activeCues)
        .map(cue => `<span class="dynamo-cue">${cue.text}</span>`)
        .join('<br>');
      container.classList.add('active');
    } else {
      container.innerHTML = '';
      container.classList.remove('active');
    }
  };
  
  track.addEventListener('cuechange', updateCue);
}

/**
 * Changes the active subtitle track
 */
export function setSubtitle(video, state, selectedLabel, hlsId = -1) {
  state.activeSubtitleLabel = selectedLabel;

  // Handle HLS.js subtitles
  if (state.hlsInstance && state.globalSubtitles.some(s => s.isHls)) {
    state.hlsInstance.subtitleTrack = parseInt(hlsId, 10);
  } else {
    applySubtitleVisibility(video, state);
  }
  
  // Clear custom container if turning off
  if (selectedLabel === 'Off') {
    const wrapper = video.closest('.dynamo-wrapper');
    const container = wrapper?.querySelector('.dynamo-subtitles');
    if (container) {
      container.innerHTML = '';
      container.classList.remove('active');
    }
  }
}

/**
 * Gets available subtitle tracks
 */
export function getSubtitleTracks(video, state) {
  const tracks = [{ label: 'Off', value: -1 }];
  
  if (state.globalSubtitles.length > 0) {
    state.globalSubtitles.forEach((sub, index) => {
      tracks.push({
        label: sub.label,
        lang: sub.srclang || sub.lang || '',
        value: index,
        isActive: sub.label === state.activeSubtitleLabel
      });
    });
  }
  
  return tracks;
}

/**
 * Updates subtitle font size based on video dimensions
 */
export function updateSubtitleSize(video, scale = 1) {
  const wrapper = video.closest('.dynamo-wrapper');
  if (!wrapper) return;
  
  const videoWidth = video.offsetWidth;
  const baseFontSize = Math.max(14, Math.min(32, videoWidth * 0.028));
  const scaledSize = baseFontSize * scale;
  
  wrapper.style.setProperty('--subtitle-font-size', `${scaledSize}px`);
}
