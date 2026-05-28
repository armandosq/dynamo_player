/* =========================================================
   Dynamo Player — modules/menu.js
   Contextual Settings Menu:
   Quality, Audio, Speed, Subtitles, Aspect Ratio, Cast & Fullscreen.
   ========================================================= */

/**
 * Initializes the settings button and its popup menu.
 *
 * @param {HTMLVideoElement} video
 * @param {HTMLElement} menuContext  - The .dynamo-menu-context div
 * @param {HTMLButtonElement} configBtn
 * @param {object} state             - Shared player state
 * @param {Function} loadVideoSource
 */
export function buildMenu(video, menuContext, configBtn, state, loadVideoSource) {

  configBtn.onclick = (e) => {
    e.stopPropagation();
    menuContext.classList.toggle('active');
    if (!menuContext.classList.contains('active')) return;

    // Pausar el video mientras se navega por el menú (opcional, estilo Netflix)
    video.paused || video.pause();
    renderMenu('main');
  };

  // Cerrar el menú al hacer clic fuera
  document.addEventListener('click', () => menuContext.classList.remove('active'));

  // -------------------------------------------------------
  // View Renderer
  // -------------------------------------------------------
  function renderMenu(view) {
    if (view === 'main')           renderMain();
    else if (view === 'quality')   renderQuality();
    else if (view === 'audio')     renderAudio();
    else if (view === 'speed')     renderSpeed();
    else if (view === 'subtitles') renderSubtitles();
    else if (view === 'aspect')    renderAspectRatio();

    // Botón de "Atrás" en el encabezado de los submenús
    const header = menuContext.querySelector('.dynamo-menu-header');
    if (header) {
      header.onclick = (ev) => { 
        ev.stopPropagation(); 
        renderMenu(header.dataset.target); 
      };
    }
  }

  // -------------------------------------------------------
  // Main View (Todos los controles juntos)
  // -------------------------------------------------------
  function renderMain() {
    // 1. Calidad
    let currentQuality = 'Auto';
    if (state.hlsInstance && state.videoSources[0]?.isHlsLevel) {
      const found = state.videoSources.find(s => s.id === state.hlsInstance.currentLevel);
      currentQuality = found ? found.label : 'Auto';
    } else {
      const idx = state.videoSources.findIndex(s => (video._currentSrc || video.src).includes(s.src));
      if (idx !== -1) currentQuality = state.videoSources[idx].label;
    }

    // 2. Velocidad y Audio
    const currentSpeed = video.playbackRate === 1 ? 'Normal' : `${video.playbackRate}x`;
    const currentAudioLabel = state.globalAudioTracks.find(a => a.id === state.activeAudioTrackId)?.label || 'Original';
    
    // 3. Relación de Aspecto
    const aspectLabels = { 'contain': 'Normal', 'cover': 'Crop', 'fill': 'Stretch' };
    const currentAspect = video.style.objectFit || 'contain';
    const currentAspectLabel = aspectLabels[currentAspect] || 'Normal';

    // Construcción de filas dinámicas
    const audioRow = state.globalAudioTracks.length > 1 ? `
      <li class="dynamo-menu-item" data-target="audio">
        <span>Audio</span>
        <span class="val">${currentAudioLabel} <span style="font-size:16px;">&rsaquo;</span></span>
      </li>` : '';

    const subsRow = state.globalSubtitles.length > 0 ? `
      <li class="dynamo-menu-item" data-target="subtitles">
        <span>Subtitles</span>
        <span class="val">${state.activeSubtitleLabel} <span style="font-size:16px;">&rsaquo;</span></span>
      </li>` : '';

    const fullscreenLabel = document.fullscreenElement ? 'Exit Fullscreen' : 'Fullscreen';

    menuContext.innerHTML = `
      <ul class="dynamo-menu-list">
        <li class="dynamo-menu-item" data-target="quality">
          <span>Quality</span>
          <span class="val">${currentQuality} <span style="font-size:16px;">&rsaquo;</span></span>
        </li>
        ${audioRow}
        ${subsRow}
        <li class="dynamo-menu-item" data-target="speed">
          <span>Speed</span>
          <span class="val">${currentSpeed} <span style="font-size:16px;">&rsaquo;</span></span>
        </li>
        <li class="dynamo-menu-item" data-target="aspect">
          <span>Aspect Ratio</span>
          <span class="val">${currentAspectLabel} <span style="font-size:16px;">&rsaquo;</span></span>
        </li>
        <li class="dynamo-menu-item action-item" data-action="cast">
          <span>Google Cast</span>
        </li>
        <li class="dynamo-menu-item action-item" data-action="fullscreen">
          <span>${fullscreenLabel}</span>
        </li>
      </ul>
    `;

    // Asignar eventos de submenús
    menuContext.querySelectorAll('.dynamo-menu-item:not(.action-item)').forEach(item => {
      item.onclick = (ev) => { ev.stopPropagation(); renderMenu(item.dataset.target); };
    });

    // Asignar eventos de acciones directas (Cast y Pantalla Completa)
    menuContext.querySelectorAll('.action-item').forEach(item => {
      item.onclick = (ev) => {
        ev.stopPropagation();
        const action = item.dataset.action;
        
        if (action === 'fullscreen') {
          const wrapper = video.closest('.dynamo-wrapper');
          if (!document.fullscreenElement) {
            wrapper.requestFullscreen();
          } else {
            document.exitFullscreen();
          }
        } 
        else if (action === 'cast') {
          if (window.cast && window.cast.framework) {
            const castContext = cast.framework.CastContext.getInstance();
            castContext.requestSession().catch(() => console.log('Cast cancelled.'));
          } else if (video.remote && video.remote.prompt) {
            video.remote.prompt().catch(() => {});
          } else {
            alert('Google Cast no está disponible en este navegador.');
          }
        }
        
        menuContext.classList.remove('active');
      };
    });
  }

  // -------------------------------------------------------
  // Quality View
  // -------------------------------------------------------
  function renderQuality() {
    let activeIndex = 0;
    if (state.hlsInstance && state.videoSources[0]?.isHlsLevel) {
      activeIndex = state.videoSources.findIndex(s => s.id === state.hlsInstance.currentLevel);
    } else {
      const currentSrc = video._currentSrc || video.src;
      activeIndex = state.videoSources.findIndex(s => currentSrc.includes(s.src));
    }

    const items = state.videoSources.map((source, idx) =>
      `<li class="dynamo-menu-item ${activeIndex === idx ? 'selected' : ''}" data-index="${idx}">${source.label}</li>`
    ).join('');

    menuContext.innerHTML = `
      <div class="dynamo-menu-header" data-target="main"><span style="font-size:18px;">&lsaquo;</span> Quality</div>
      <ul class="dynamo-menu-list">${items}</ul>
    `;

    menuContext.querySelectorAll('.dynamo-menu-item').forEach(item => {
      item.onclick = (ev) => {
        ev.stopPropagation();
        if (!item.dataset.index) return;

        const idx = parseInt(item.dataset.index);
        const newSource = state.videoSources[idx];

        if (newSource.isHlsLevel && state.hlsInstance) {
          state.hlsInstance.currentLevel = newSource.id;
        } else {
          const currentTime = video.currentTime;
          const wasPlaying = !video.paused;
          loadVideoSource(video, newSource.src, state, () => {});
          setTimeout(() => {
            video.currentTime = currentTime;
            if (wasPlaying) video.play();
          }, 150);
        }
        menuContext.classList.remove('active');
      };
    });
  }

  // -------------------------------------------------------
  // Audio View (HLS multi-audio only)
  // -------------------------------------------------------
  function renderAudio() {
    const items = state.globalAudioTracks.map(track =>
      `<li class="dynamo-menu-item ${state.activeAudioTrackId === track.id ? 'selected' : ''}" data-id="${track.id}">${track.label}</li>`
    ).join('');

    menuContext.innerHTML = `
      <div class="dynamo-menu-header" data-target="main"><span style="font-size:18px;">&lsaquo;</span> Audio Tracks</div>
      <ul class="dynamo-menu-list">${items}</ul>
    `;

    menuContext.querySelectorAll('.dynamo-menu-item').forEach(item => {
      item.onclick = (ev) => {
        ev.stopPropagation();
        if (state.hlsInstance) state.hlsInstance.audioTrack = parseInt(item.dataset.id);
        menuContext.classList.remove('active');
      };
    });
  }

  // -------------------------------------------------------
  // Speed View
  // -------------------------------------------------------
  function renderSpeed() {
    const speeds = [
      { val: 0.5, label: '0.5x' },
      { val: 0.75, label: '0.75x' },
      { val: 1, label: 'Normal' },
      { val: 1.25, label: '1.25x' },
      { val: 1.5, label: '1.5x' },
      { val: 2, label: '2x' }
    ];

    const items = speeds.map(s =>
      `<li class="dynamo-menu-item ${video.playbackRate === s.val ? 'selected' : ''}" data-val="${s.val}">${s.label}</li>`
    ).join('');

    menuContext.innerHTML = `
      <div class="dynamo-menu-header" data-target="main"><span style="font-size:18px;">&lsaquo;</span> Speed</div>
      <ul class="dynamo-menu-list">${items}</ul>
    `;

    menuContext.querySelectorAll('.dynamo-menu-item').forEach(item => {
      item.onclick = (ev) => {
        ev.stopPropagation();
        video.playbackRate = parseFloat(item.dataset.val);
        menuContext.classList.remove('active');
      };
    });
  }

  // -------------------------------------------------------
  // Aspect Ratio View
  // -------------------------------------------------------
  function renderAspectRatio() {
    const modes = [
      { val: 'contain', label: 'Normal' },
      { val: 'cover', label: 'Crop (Fill Screen)' },
      { val: 'fill', label: 'Stretch' }
    ];

    const currentMode = video.style.objectFit || 'contain';

    const items = modes.map(m =>
      `<li class="dynamo-menu-item ${currentMode === m.val ? 'selected' : ''}" data-val="${m.val}">${m.label}</li>`
    ).join('');

    menuContext.innerHTML = `
      <div class="dynamo-menu-header" data-target="main"><span style="font-size:18px;">&lsaquo;</span> Aspect Ratio</div>
      <ul class="dynamo-menu-list">${items}</ul>
    `;

    menuContext.querySelectorAll('.dynamo-menu-item').forEach(item => {
      item.onclick = (ev) => {
        ev.stopPropagation();
        video.style.objectFit = item.dataset.val;
        menuContext.classList.remove('active');
      };
    });
  }

  // -------------------------------------------------------
  // Subtitles View
  // -------------------------------------------------------
  function renderSubtitles() {
    let items = `
      <li class="dynamo-menu-item ${state.activeSubtitleLabel === 'Off' ? 'selected' : ''}"
          data-id="-1" data-label="Off">Off</li>
    `;

    state.globalSubtitles.forEach(sub => {
      const idAttr = sub.isHls ? `data-id="${sub.id}"` : '';
      items += `
        <li class="dynamo-menu-item ${state.activeSubtitleLabel === sub.label ? 'selected' : ''}"
            ${idAttr} data-label="${sub.label}">${sub.label}</li>
      `;
    });

    menuContext.innerHTML = `
      <div class="dynamo-menu-header" data-target="main"><span style="font-size:18px;">&lsaquo;</span> Captions</div>
      <ul class="dynamo-menu-list">${items}</ul>
    `;

    menuContext.querySelectorAll('.dynamo-menu-item').forEach(item => {
      item.onclick = (ev) => {
        ev.stopPropagation();
        // Llama a la función global o importada para manejar los subtítulos
        if (typeof setSubtitle === 'function') {
          setSubtitle(video, state, item.dataset.label, item.dataset.id);
        }
        menuContext.classList.remove('active');
      };
    });
  }
}
