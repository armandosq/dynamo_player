/* =========================================================
   Dynamo Player — modules/style.js
   Netflix Style CSS - Dark, Seamless, Red Accents
   ========================================================= */

export const rawStyle = `
.dynamo-loader, .dynamo-overlay, .dynamo-overscreen, .dynamo-poster {
  inset: 0;
  position: absolute;
}

.dynamo-loader.hidden, .dynamo-overlay.hidden, .dynamo-overscreen.hidden, .dynamo-poster.hidden {
  opacity: 0;
  pointer-events: none;
}

.hidden {
  display: none !important;
}

.dynamo-wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
  aspect-ratio: 16/9;
  background: #000;
  border-radius: 4px; /* Netflix usa bordes muy sutiles o nulos */
  font-family: 'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  user-select: none;
  -webkit-user-select: none;
  overflow: hidden;
}

.dynamo-wrapper video {
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  border-radius: 4px;
}

.dynamo-poster {
  background-size: cover;
  background-position: center;
  background-color: #000;
  z-index: 2;
  transition: opacity 0.4s ease;
}

.dynamo-loader {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: opacity 0.3s;
}

.dynamo-loader.active {
  opacity: 1;
  z-index: 20;
}

/* Spinner estilo Netflix (arco rojo) */
.dynamo-spinner {
  width: 48px;
  height: 48px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top-color: #e50914; /* Netflix Red */
  border-radius: 50%;
  animation: 0.8s linear infinite dynamo-spin;
}

@keyframes dynamo-spin {
  to { transform: rotate(360deg); }
}

.dynamo-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: opacity 0.2s;
}

.dynamo-overlay.visible, 
.dynamo-wrapper:not(.hide-controls) .dynamo-overscreen {
  opacity: 1;
  pointer-events: auto;
}

/* Botón central overscreen simplificado */
.dynamo-big-play {
  width: 76px;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
}

.dynamo-big-play:hover {
  transform: scale(1.1);
  background: rgba(0, 0, 0, 0.7);
  border-color: #e50914;
}

.dynamo-big-play svg {
  width: 36px;
  height: 36px;
  margin-left: 4px;
}

.dynamo-overscreen {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px; /* Más espaciado estilo TV */
  background: rgba(0, 0, 0, 0.4);
  z-index: 4;
  transition: opacity 0.3s;
}

.dynamo-btn-os {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  color: #fff;
  transition: transform 0.2s ease, color 0.2s ease;
}

.dynamo-btn-os:hover {
  transform: scale(1.15);
  color: #e50914;
}

.dynamo-btn-os svg {
  width: 36px;
  height: 36px;
}

.dynamo-btn-os.play-pause-os {
  width: 80px;
  height: 80px;
}

.dynamo-btn-os.play-pause-os svg {
  width: 48px;
  height: 48px;
}

/* Controles inferiores con gradiente oscuro suave */
.dynamo-controls {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 24px 16px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 60%, transparent 100%);
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
  z-index: 5;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.dynamo-wrapper.hide-controls .dynamo-controls {
  opacity: 0;
  transform: translateY(10px);
  pointer-events: none;
}

/* Barra de progreso interactiva */
.dynamo-progress-wrap {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 16px;
  cursor: pointer;
}

.dynamo-progress-track {
  position: relative;
  width: 100%;
  height: 4px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  transition: height 0.15s ease;
}

.dynamo-progress-wrap:hover .dynamo-progress-track {
  height: 6px;
}

.dynamo-progress-buffer {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  background: rgba(255, 255, 255, 0.4);
  z-index: 1;
  transition: width 0.3s ease;
}

.dynamo-progress-fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #e50914; /* Netflix Red */
  border-radius: 2px;
  z-index: 2;
  pointer-events: none;
}

.dynamo-progress-thumb {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 16px;
  height: 16px;
  background: #e50914; /* Bolita roja estilo Netflix */
  border-radius: 50%;
  z-index: 3;
  pointer-events: none;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.dynamo-progress-wrap:hover .dynamo-progress-thumb {
  transform: translate(-50%, -50%) scale(1);
}

/* Tooltip y Preview */
.dynamo-progress-preview-container {
  position: absolute;
  bottom: 24px;
  left: 0;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  z-index: 10;
  transition: opacity 0.2s;
}

.dynamo-progress-wrap:hover .dynamo-progress-preview-container {
  opacity: 1;
}

.dynamo-progress-thumb-box {
  width: 160px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #141414;
  border: 2px solid #fff;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.7);
}

.dynamo-progress-thumb-box canvas {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.dynamo-progress-tooltip {
  display: block;
  text-align: center;
  white-space: nowrap;
  font-size: 13px;
  font-weight: 500;
  color: #fff;
  text-shadow: 0 1px 3px rgba(0,0,0,0.8);
}

/* Botonera inferior */
.dynamo-bottom {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dynamo-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: #fff;
  cursor: pointer;
  opacity: 0.85;
  flex-shrink: 0;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.dynamo-btn:hover {
  opacity: 1;
  transform: scale(1.1);
}

.dynamo-btn svg {
  width: 28px; /* Iconos un poco más grandes */
  height: 28px;
}

/* Control de Volumen */
.dynamo-volume-group {
  display: flex;
  align-items: center;
  gap: 4px;
}

.dynamo-volume-slider {
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 0;
  opacity: 0;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
}

.dynamo-volume-group:hover .dynamo-volume-slider,
.dynamo-volume-slider:focus-within {
  width: 70px;
  opacity: 1;
}

.dynamo-volume-slider input[type=range] {
  width: 65px;
  height: 4px;
  appearance: none;
  -webkit-appearance: none;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  outline: 0;
  cursor: pointer;
  accent-color: #e50914; /* Netflix Red */
}

.dynamo-volume-slider input[type=range]::-webkit-slider-thumb {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #e50914; /* Bolita roja */
  cursor: pointer;
  -webkit-appearance: none;
}

.dynamo-spacer {
  flex: 1;
}

.dynamo-time {
  padding: 0 8px;
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
  color: #fff;
}

/* Efecto Ripple (Opcional) */
.dynamo-ripple {
  position: absolute;
  transform: scale(0);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  pointer-events: none;
  z-index: 10;
  animation: 0.5s ease-out forwards dynamo-ripple-anim;
}

@keyframes dynamo-ripple-anim {
  to { transform: scale(4); opacity: 0; }
}

/* Ocultar cursor inactivo */
.dynamo-wrapper.is-playing.hide-controls,
.dynamo-wrapper.is-playing.hide-controls .dynamo-btn-os,
.dynamo-wrapper.is-playing.hide-controls .dynamo-overscreen,
.dynamo-wrapper.is-playing.hide-controls video {
  cursor: none;
}

/* Menús de Configuración (Subtítulos, Calidad, etc.) */
.dynamo-menu-context {
  position: absolute;
  bottom: 60px;
  right: 16px;
  width: 240px;
  opacity: 0;
  pointer-events: none;
  overflow: hidden;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  background: rgba(20, 20, 20, 0.95);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
  transform: translateY(10px);
  z-index: 10;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.dynamo-menu-context.active {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.dynamo-menu-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  font-weight: 700;
  font-size: 16px;
  background: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: background 0.15s;
}

.dynamo-menu-header:hover {
  background: rgba(255, 255, 255, 0.1);
}

.dynamo-menu-list {
  list-style: none;
  margin: 0;
  padding: 8px 0;
  max-height: 260px;
  overflow-y: auto;
  overflow-x: hidden;
}

.dynamo-menu-list::-webkit-scrollbar {
  width: 6px;
}

.dynamo-menu-list::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
}

.dynamo-menu-list::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}

.dynamo-menu-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  cursor: pointer;
  transition: background 0.1s ease;
}

.dynamo-menu-item:hover {
  background: rgba(255, 255, 255, 0.1);
}

.dynamo-menu-item.selected {
  font-weight: 700;
  /* Netflix usa un checkmark en lugar de colorear el texto, 
     pero si usas color, mantenemos el blanco puro u rojo según preferencia */
  color: #fff; 
}

.dynamo-menu-item .val {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #aaa;
}

/* Subtítulos Nativos estilo Netflix (Sin fondo de caja, solo sombra) */
.dynamo-wrapper video::cue {
  background: transparent;
  color: #fff;
  font-family: 'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 22px; /* Tamaño de TV estándar */
  line-height: 1.3;
  text-shadow: 
    0px 0px 4px rgba(0, 0, 0, 0.8),
    0px 0px 8px rgba(0, 0, 0, 0.8),
    2px 2px 3px rgba(0, 0, 0, 0.9);
}

/* Ambient canvas */
.dynamo-ambient-canvas {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, -50%) scale(1.1);
  z-index: 0;
  filter: blur(60px) brightness(1.2) saturate(1.5);
  transition: opacity 1.5s;
}

.dynamo-wrapper.ambient-active .dynamo-ambient-canvas {
  opacity: 0.4;
}

.dynamo-pip-btn {
  display: none;
}
`;
