/* =========================================================
   Dynamo Player — modules/controls.js
   HBO Max Style - Modern & Optimized Controls
   ========================================================= */

import { formatTime, ripple } from './utils.js';

// Constants
const HIDE_DELAY = 3000;
const SEEK_STEP = 10;
const KEYBOARD_SEEK = 5;
const VOLUME_STEP = 0.1;
const THUMBNAIL_THROTTLE = 150;

/**
 * Creates an HTML element with optional classes and attributes
 */
const createElement = (tag, className = '', innerHTML = '') => {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (innerHTML) el.innerHTML = innerHTML;
  return el;
};

/**
 * Builds the bottom control bar
 */
export function buildControls(wrapper, ICONS) {
  const controls = createElement('div', 'dynamo-controls', `
    <div class="dynamo-progress-wrap">
      <div class="dynamo-progress-track">
        <div class="dynamo-progress-buffer"></div>
        <div class="dynamo-progress-fill"></div>
      </div>
      <div class="dynamo-progress-thumb"></div>
      <div class="dynamo-progress-preview-container">
        <div class="dynamo-progress-thumb-box"></div>
        <div class="dynamo-progress-tooltip">0:00</div>
      </div>
    </div>
    <div class="dynamo-bottom">
      <button class="dynamo-btn dynamo-play-btn" aria-label="Play">${ICONS.play}</button>
      <div class="dynamo-volume-group">
        <button class="dynamo-btn dynamo-mute-btn" aria-label="Mute">${ICONS.volumeHigh}</button>
        <div class="dynamo-volume-slider">
          <input type="range" min="0" max="1" step="0.01" value="1" class="dynamo-vol-range" aria-label="Volume">
        </div>
      </div>
      <span class="dynamo-time dynamo-time-display">0:00 / 0:00</span>
      <span class="dynamo-spacer"></span>
      <button class="dynamo-btn dynamo-pip-btn" aria-label="Picture in Picture">${ICONS.pip}</button>
      <button class="dynamo-btn dynamo-config-btn" aria-label="Settings">${ICONS.config}</button>
      <button class="dynamo-btn dynamo-fs-btn" aria-label="Fullscreen">${ICONS.fullscreen}</button>
    </div>
  `);
  
  wrapper.appendChild(controls);
  return controls;
}

/**
 * Builds overscreen controls (center play/pause, skip buttons)
 */
export function buildOverscreen(wrapper, video, ICONS) {
  if (video.getAttribute('controlsOverscreen') !== 'true') return null;

  const overscreen = createElement('div', 'dynamo-overscreen', `
    <button class="dynamo-btn-os back-10-os" aria-label="Rewind 10 seconds">${ICONS.back10}</button>
    <button class="dynamo-btn-os play-pause-os" aria-label="Play">${ICONS.play}</button>
    <button class="dynamo-btn-os fwd-10-os" aria-label="Forward 10 seconds">${ICONS.forward10}</button>
  `);
  
  wrapper.appendChild(overscreen);

  const playBtn = overscreen.querySelector('.play-pause-os');
  const backBtn = overscreen.querySelector('.back-10-os');
  const fwdBtn = overscreen.querySelector('.fwd-10-os');

  // Event handlers with event delegation pattern
  const handleClick = (e) => {
    e.stopPropagation();
    const target = e.target.closest('.dynamo-btn-os');
    if (!target) return;

    if (target.classList.contains('play-pause-os')) {
      video.paused ? video.play() : video.pause();
    } else if (target.classList.contains('back-10-os')) {
      video.currentTime = Math.max(0, video.currentTime - SEEK_STEP);
    } else if (target.classList.contains('fwd-10-os')) {
      video.currentTime = Math.min(video.duration, video.currentTime + SEEK_STEP);
    }
  };

  overscreen.addEventListener('click', handleClick);

  // Sync play button icon
  const syncIcon = () => {
    playBtn.innerHTML = video.paused ? ICONS.play : ICONS.pause;
    playBtn.setAttribute('aria-label', video.paused ? 'Play' : 'Pause');
  };

  video.addEventListener('play', syncIcon);
  video.addEventListener('pause', syncIcon);

  return overscreen;
}

/**
 * Main control binding function
 */
export function bindControls(video, wrapper, controls, ICONS, state, loadVideoSource) {
  // Cache DOM references
  const refs = {
    playBtn: controls.querySelector('.dynamo-play-btn'),
    muteBtn: controls.querySelector('.dynamo-mute-btn'),
    fsBtn: controls.querySelector('.dynamo-fs-btn'),
    pipBtn: controls.querySelector('.dynamo-pip-btn'),
    configBtn: controls.querySelector('.dynamo-config-btn'),
    progressWrap: controls.querySelector('.dynamo-progress-wrap'),
    progressTrack: controls.querySelector('.dynamo-progress-track'),
    progressFill: controls.querySelector('.dynamo-progress-fill'),
    progressBuffer: controls.querySelector('.dynamo-progress-buffer'),
    progressThumb: controls.querySelector('.dynamo-progress-thumb'),
    progressTooltip: controls.querySelector('.dynamo-progress-tooltip'),
    progressPreview: controls.querySelector('.dynamo-progress-preview-container'),
    thumbBox: controls.querySelector('.dynamo-progress-thumb-box'),
    timeDisplay: controls.querySelector('.dynamo-time-display'),
    volRange: controls.querySelector('.dynamo-vol-range'),
    poster: wrapper.querySelector('.dynamo-poster'),
    overlay: wrapper.querySelector('.dynamo-overlay'),
    menuContext: wrapper.querySelector('.dynamo-menu-context')
  };

  // State
  let isSeeking = false;
  let hideTimer = null;
  let prevVolume = 1;
  let rafId = null;

  // Utility functions
  const getDuration = () => {
    if (video.duration === Infinity && video.seekable?.length > 0) {
      return video.seekable.end(video.seekable.length - 1);
    }
    return video.duration || 0;
  };

  const clamp = (val, min, max) => Math.max(min, Math.min(max, val));

  const updateProgress = (percent) => {
    const pct = `${percent * 100}%`;
    refs.progressFill.style.width = pct;
    refs.progressThumb.style.left = pct;
  };

  const updateTimeDisplay = (current, total) => {
    refs.timeDisplay.textContent = `${formatTime(current)} / ${formatTime(total)}`;
  };

  // UI visibility
  const showControls = () => {
    if (refs.poster.classList.contains('hidden')) {
      wrapper.classList.remove('hide-controls');
    }
  };

  const hideControls = () => {
    wrapper.classList.add('hide-controls');
  };

  const scheduleHide = () => {
    clearTimeout(hideTimer);
    if (!video.paused) {
      hideTimer = setTimeout(hideControls, HIDE_DELAY);
    }
  };

  // Seek handling
  const handleSeek = (e) => {
    const rect = refs.progressWrap.getBoundingClientRect();
    const percent = clamp((e.clientX - rect.left) / rect.width, 0, 1);
    const duration = getDuration();
    
    if (duration && !isNaN(duration)) {
      video.currentTime = percent * duration;
      updateProgress(percent);
      updateTimeDisplay(video.currentTime, duration);
    }
  };

  // Play/pause toggle
  const togglePlay = () => {
    video.paused ? video.play() : video.pause();
  };

  // Progress bar events
  refs.progressWrap.addEventListener('mousedown', (e) => {
    isSeeking = true;
    handleSeek(e);
  });

  refs.progressWrap.addEventListener('touchstart', (e) => {
    isSeeking = true;
    handleSeek(e.touches[0]);
  }, { passive: true });

  // Global move/up events
  const onMove = (e) => {
    if (isSeeking) {
      const event = e.touches ? e.touches[0] : e;
      handleSeek(event);
    }
  };

  const onUp = () => {
    isSeeking = false;
  };

  window.addEventListener('mousemove', onMove);
  window.addEventListener('mouseup', onUp);
  window.addEventListener('touchmove', onMove, { passive: true });
  window.addEventListener('touchend', onUp);

  // Video events
  video.addEventListener('progress', () => {
    const duration = getDuration();
    if (duration > 0 && video.buffered.length > 0) {
      const buffered = video.buffered.end(video.buffered.length - 1);
      refs.progressBuffer.style.width = `${(buffered / duration) * 100}%`;
    }
  });

  video.addEventListener('timeupdate', () => {
    if (!isSeeking) {
      const duration = getDuration();
      if (duration && !isNaN(duration)) {
        updateProgress(video.currentTime / duration);
        updateTimeDisplay(video.currentTime, duration);
      }
    }
  });

  video.addEventListener('loadedmetadata', () => {
    updateTimeDisplay(0, getDuration());
  });

  video.addEventListener('play', () => {
    wrapper.classList.add('is-playing');
    refs.playBtn.innerHTML = ICONS.pause;
    refs.playBtn.setAttribute('aria-label', 'Pause');
    refs.poster.classList.add('hidden');
    refs.overlay.classList.remove('visible');
    refs.menuContext?.classList.remove('active');
    scheduleHide();
  });

  video.addEventListener('pause', () => {
    wrapper.classList.remove('is-playing');
    refs.playBtn.innerHTML = ICONS.play;
    refs.playBtn.setAttribute('aria-label', 'Play');
    refs.overlay.classList.add('visible');
    showControls();
    clearTimeout(hideTimer);
  });

  video.addEventListener('ended', () => {
    refs.playBtn.innerHTML = ICONS.replay || ICONS.play;
    refs.overlay.classList.add('visible');
    wrapper.classList.remove('hide-controls', 'is-playing');
  });

  // Button clicks
  refs.overlay.addEventListener('click', (e) => {
    e.stopPropagation();
    ripple(wrapper, wrapper.offsetWidth / 2, wrapper.offsetHeight / 2);
    togglePlay();
  });

  video.addEventListener('click', (e) => {
    const rect = wrapper.getBoundingClientRect();
    ripple(wrapper, e.clientX - rect.left, e.clientY - rect.top);
    togglePlay();
  });

  video.addEventListener('dblclick', (e) => {
    e.preventDefault();
    const rect = wrapper.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const third = rect.width / 3;

    if (clickX < third) {
      video.currentTime = Math.max(0, video.currentTime - SEEK_STEP);
    } else if (clickX > third * 2) {
      video.currentTime = Math.min(getDuration(), video.currentTime + SEEK_STEP);
    } else {
      toggleFullscreen();
    }
  });

  video.addEventListener('contextmenu', (e) => e.preventDefault());

  refs.playBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    togglePlay();
  });

  // Volume controls
  refs.volRange.addEventListener('input', (e) => {
    const vol = parseFloat(e.target.value);
    video.volume = vol;
    video.muted = vol === 0;
    if (vol > 0) prevVolume = vol;
  });

  refs.muteBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (video.muted || video.volume === 0) {
      video.muted = false;
      video.volume = prevVolume || 0.5;
    } else {
      prevVolume = video.volume;
      video.muted = true;
    }
  });

  video.addEventListener('volumechange', () => {
    const vol = video.muted ? 0 : video.volume;
    refs.volRange.value = vol;
    
    // Update slider visual
    refs.volRange.style.setProperty('--volume-fill', `${vol * 100}%`);
    
    // Update icon
    let icon, label;
    if (vol === 0 || video.muted) {
      icon = ICONS.volumeMute;
      label = 'Unmute';
    } else if (vol < 0.5) {
      icon = ICONS.volumeLow;
      label = 'Mute';
    } else {
      icon = ICONS.volumeHigh;
      label = 'Mute';
    }
    refs.muteBtn.innerHTML = icon;
    refs.muteBtn.setAttribute('aria-label', label);
  });

  // Fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      wrapper.requestFullscreen?.() || wrapper.webkitRequestFullscreen?.();
    } else {
      document.exitFullscreen?.() || document.webkitExitFullscreen?.();
    }
  };

  refs.fsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleFullscreen();
  });

  const onFullscreenChange = () => {
    const isFs = !!document.fullscreenElement;
    refs.fsBtn.innerHTML = isFs ? ICONS.exitFullscreen : ICONS.fullscreen;
    refs.fsBtn.setAttribute('aria-label', isFs ? 'Exit Fullscreen' : 'Fullscreen');
  };

  document.addEventListener('fullscreenchange', onFullscreenChange);
  document.addEventListener('webkitfullscreenchange', onFullscreenChange);

  // Picture-in-Picture
  const pipEnabled = video.getAttribute('inPicture') === 'true' && document.pictureInPictureEnabled;
  refs.pipBtn.style.display = pipEnabled ? 'flex' : 'none';

  if (pipEnabled) {
    refs.pipBtn.addEventListener('click', async (e) => {
      e.stopPropagation();
      try {
        if (document.pictureInPictureElement) {
          await document.exitPictureInPicture();
        } else {
          await video.requestPictureInPicture();
        }
      } catch (err) {
        console.warn('PiP not available:', err);
      }
    });
  }

  // Mouse/touch visibility
  let touchTimeout;
  
  wrapper.addEventListener('mousemove', () => {
    showControls();
    scheduleHide();
  });

  wrapper.addEventListener('mouseleave', () => {
    if (!video.paused) scheduleHide();
  });

  wrapper.addEventListener('touchstart', () => {
    showControls();
    clearTimeout(touchTimeout);
    touchTimeout = setTimeout(scheduleHide, 100);
  }, { passive: true });

  // Keyboard controls
  wrapper.setAttribute('tabindex', '0');
  
  wrapper.addEventListener('keydown', (e) => {
    const key = e.code;
    
    switch (key) {
      case 'Space':
      case 'KeyK':
        e.preventDefault();
        togglePlay();
        break;
      case 'ArrowRight':
      case 'KeyL':
        e.preventDefault();
        video.currentTime = Math.min(getDuration(), video.currentTime + KEYBOARD_SEEK);
        break;
      case 'ArrowLeft':
      case 'KeyJ':
        e.preventDefault();
        video.currentTime = Math.max(0, video.currentTime - KEYBOARD_SEEK);
        break;
      case 'ArrowUp':
        e.preventDefault();
        video.volume = clamp(video.volume + VOLUME_STEP, 0, 1);
        break;
      case 'ArrowDown':
        e.preventDefault();
        video.volume = clamp(video.volume - VOLUME_STEP, 0, 1);
        break;
      case 'KeyM':
        e.preventDefault();
        video.muted = !video.muted;
        break;
      case 'KeyF':
        e.preventDefault();
        toggleFullscreen();
        break;
      case 'Escape':
        if (refs.menuContext?.classList.contains('active')) {
          refs.menuContext.classList.remove('active');
        }
        break;
      case 'Home':
        e.preventDefault();
        video.currentTime = 0;
        break;
      case 'End':
        e.preventDefault();
        video.currentTime = getDuration();
        break;
    }
    
    // Number keys for percentage seeking (0-9)
    if (/^Digit[0-9]$/.test(key)) {
      e.preventDefault();
      const num = parseInt(key.replace('Digit', ''), 10);
      video.currentTime = getDuration() * (num / 10);
    }
  });

  // Thumbnail preview
  initThumbnailPreview(video, refs);

  return refs;
}

/**
 * Initialize thumbnail preview on progress bar hover
 */
function initThumbnailPreview(video, refs) {
  const needsThumbs = video.getAttribute('autoThumbnails') === 'true';
  
  if (!needsThumbs) {
    if (refs.thumbBox) refs.thumbBox.style.display = 'none';
    return;
  }

  let ghostVideo = null;
  let canvas = null;
  let ctx = null;
  let lastSeekTime = 0;
  let seeking = false;

  // Create ghost video for thumbnails
  ghostVideo = document.createElement('video');
  ghostVideo.preload = 'metadata';
  ghostVideo.muted = true;
  ghostVideo.crossOrigin = 'anonymous';
  ghostVideo.src = video.src || video._currentSrc || '';

  canvas = document.createElement('canvas');
  canvas.width = 160;
  canvas.height = 90;
  ctx = canvas.getContext('2d', { alpha: false, desynchronized: true });

  if (refs.thumbBox) refs.thumbBox.appendChild(canvas);

  // Throttled thumbnail generation
  refs.progressWrap.addEventListener('mousemove', (e) => {
    const duration = video.duration;
    if (!duration || isNaN(duration)) return;

    const rect = refs.progressWrap.getBoundingClientRect();
    const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const hoverTime = percent * duration;

    // Update tooltip
    refs.progressTooltip.textContent = formatTime(hoverTime);
    refs.progressPreview.style.left = `${percent * 100}%`;

    // Throttle thumbnail seeking
    const now = Date.now();
    if (!seeking && ghostVideo.readyState >= 2 && now - lastSeekTime > THUMBNAIL_THROTTLE) {
      seeking = true;
      lastSeekTime = now;
      ghostVideo.currentTime = hoverTime;

      ghostVideo.addEventListener('seeked', () => {
        try {
          ctx.drawImage(ghostVideo, 0, 0, canvas.width, canvas.height);
        } catch (e) {
          // CORS or render error - silent fail
        }
        seeking = false;
      }, { once: true });
    }
  });
}

/**
 * Ambient light effect that samples video colors
 */
export function buildAmbientMode(video, wrapper, thumbUrl) {
  if (video.getAttribute('ambientMode') !== 'true') return;

  const canvas = document.createElement('canvas');
  canvas.className = 'dynamo-ambient-canvas';
  canvas.width = 32;
  canvas.height = 18;
  wrapper.prepend(canvas);

  const ctx = canvas.getContext('2d', { alpha: false, desynchronized: true });
  let rafId = null;

  const drawFrame = (source) => {
    try {
      ctx.drawImage(source, 0, 0, canvas.width, canvas.height);
      wrapper.classList.add('ambient-active');
    } catch (e) {
      // CORS block - silent fail
    }
  };

  const animate = () => {
    if (video.paused || video.ended) return;
    drawFrame(video);
    rafId = requestAnimationFrame(animate);
  };

  // Initial frame from poster or video
  if (thumbUrl) {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => drawFrame(img);
    img.src = thumbUrl;
  } else {
    video.addEventListener('loadeddata', () => {
      requestAnimationFrame(() => drawFrame(video));
    }, { once: true });
  }

  video.addEventListener('play', () => {
    wrapper.classList.add('ambient-active');
    animate();
  });

  video.addEventListener('pause', () => {
    if (rafId) cancelAnimationFrame(rafId);
  });

  video.addEventListener('ended', () => {
    if (rafId) cancelAnimationFrame(rafId);
  });

  // Cleanup on video removal
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((m) => {
      m.removedNodes.forEach((node) => {
        if (node === video || node.contains?.(video)) {
          if (rafId) cancelAnimationFrame(rafId);
          observer.disconnect();
        }
      });
    });
  });

  observer.observe(wrapper.parentNode || document.body, { childList: true, subtree: true });
}
