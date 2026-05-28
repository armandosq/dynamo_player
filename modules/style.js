/* =========================================================
   Dynamo Player — modules/style.js
   HBO Max Style - Complete Minified CSS
   ========================================================= */

export const rawStyle = `
/* Base & Reset */
.hidden{display:none!important}
.dynamo-wrapper{position:relative;display:inline-block;width:100%;aspect-ratio:16/9;background:#0a0a0a;border-radius:12px;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;user-select:none;-webkit-user-select:none;overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,.6)}
.dynamo-wrapper video{display:block;object-fit:contain;width:100%;height:100%;border-radius:12px;position:relative;z-index:1}

/* Poster */
.dynamo-poster{position:absolute;inset:0;background-size:cover;background-position:center;background-color:#0a0a0a;border-radius:12px;z-index:2;transition:opacity .5s cubic-bezier(.4,0,.2,1)}
.dynamo-poster.hidden{opacity:0;pointer-events:none}

/* Loader */
.dynamo-loader{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:10;opacity:0;pointer-events:none;transition:opacity .3s ease}
.dynamo-loader.active{opacity:1;z-index:20}
.dynamo-spinner{width:56px;height:56px;border:3px solid rgba(255,255,255,.1);border-top-color:#b385ff;border-radius:50%;animation:dynamo-spin 1s cubic-bezier(.4,0,.2,1) infinite}
@keyframes dynamo-spin{to{transform:rotate(360deg)}}

/* Big Play Overlay */
.dynamo-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none;opacity:0;z-index:2;border-radius:12px;transition:opacity .3s cubic-bezier(.4,0,.2,1)}
.dynamo-overlay.visible{opacity:1;pointer-events:auto}
.dynamo-big-play{width:88px;height:88px;display:flex;align-items:center;justify-content:center;border-radius:50%;cursor:pointer;background:rgba(179,133,255,.9);color:#fff;border:none;box-shadow:0 0 40px rgba(179,133,255,.5);transition:transform .3s cubic-bezier(.4,0,.2,1),box-shadow .3s ease}
.dynamo-big-play:hover{transform:scale(1.1);box-shadow:0 0 60px rgba(179,133,255,.7)}
.dynamo-big-play svg{width:40px;height:40px;margin-left:4px}

/* Overscreen Controls */
.dynamo-overscreen{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:48px;background:linear-gradient(to bottom,rgba(0,0,0,.1) 0%,transparent 30%,transparent 70%,rgba(0,0,0,.3) 100%);z-index:4;opacity:0;pointer-events:none;transition:opacity .4s cubic-bezier(.4,0,.2,1)}
.dynamo-wrapper:not(.hide-controls) .dynamo-overscreen{opacity:1;pointer-events:auto}
.dynamo-btn-os{width:56px;height:56px;display:flex;align-items:center;justify-content:center;border-radius:50%;cursor:pointer;background:rgba(255,255,255,.1);border:none;color:#fff;backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);transition:transform .25s cubic-bezier(.4,0,.2,1),background .25s ease}
.dynamo-btn-os:hover{transform:scale(1.15);background:rgba(255,255,255,.2)}
.dynamo-btn-os svg{width:28px;height:28px}
.dynamo-btn-os.play-pause-os{width:72px;height:72px;background:rgba(179,133,255,.85);box-shadow:0 4px 24px rgba(179,133,255,.4)}
.dynamo-btn-os.play-pause-os:hover{background:rgba(179,133,255,1);box-shadow:0 4px 32px rgba(179,133,255,.6)}
.dynamo-btn-os.play-pause-os svg{width:36px;height:36px}

/* Bottom Controls */
.dynamo-controls{position:absolute;bottom:0;left:0;right:0;display:flex;flex-direction:column;gap:8px;padding:24px 20px 16px;background:linear-gradient(to top,rgba(0,0,0,.95) 0%,rgba(0,0,0,.7) 50%,transparent 100%);border-bottom-left-radius:12px;border-bottom-right-radius:12px;opacity:1;transform:translateY(0);pointer-events:auto;z-index:5;transition:opacity .4s cubic-bezier(.4,0,.2,1),transform .4s cubic-bezier(.4,0,.2,1)}
.dynamo-wrapper.hide-controls .dynamo-controls{opacity:0;transform:translateY(12px);pointer-events:none}

/* Progress Bar */
.dynamo-progress-wrap{position:relative;display:flex;align-items:center;width:100%;height:20px;cursor:pointer;padding:8px 0}
.dynamo-progress-track{position:relative;width:100%;height:4px;overflow:visible;background:rgba(255,255,255,.2);border-radius:4px;transition:height .2s cubic-bezier(.4,0,.2,1)}
.dynamo-progress-wrap:hover .dynamo-progress-track{height:6px}
.dynamo-progress-buffer{position:absolute;top:0;left:0;height:100%;width:0;background:rgba(255,255,255,.35);border-radius:4px;z-index:1;transition:width .3s ease}
.dynamo-progress-fill{position:absolute;top:0;left:0;height:100%;background:linear-gradient(90deg,#b385ff,#9966ff);border-radius:4px;z-index:2;pointer-events:none}
.dynamo-progress-thumb{position:absolute;top:50%;transform:translate(-50%,-50%) scale(0);width:16px;height:16px;background:#fff;border-radius:50%;z-index:3;pointer-events:none;box-shadow:0 2px 8px rgba(0,0,0,.4),0 0 0 3px rgba(179,133,255,.3);transition:transform .2s cubic-bezier(.4,0,.2,1)}
.dynamo-progress-wrap:hover .dynamo-progress-thumb{transform:translate(-50%,-50%) scale(1)}

/* Thumbnail Preview */
.dynamo-progress-preview-container{position:absolute;bottom:24px;left:0;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;opacity:0;pointer-events:none;z-index:10;transition:opacity .25s ease}
.dynamo-progress-wrap:hover .dynamo-progress-preview-container{opacity:1}
.dynamo-progress-thumb-box{width:180px;height:101px;display:flex;align-items:center;justify-content:center;background:#0a0a0a;border:2px solid rgba(179,133,255,.6);border-radius:8px;overflow:hidden;margin-bottom:8px;box-shadow:0 8px 24px rgba(0,0,0,.6)}
.dynamo-progress-thumb-box canvas{width:100%;height:100%;object-fit:cover}
.dynamo-progress-tooltip{display:block;text-align:center;white-space:nowrap;padding:6px 12px;border-radius:6px;font-size:13px;font-weight:600;color:#fff;background:rgba(20,20,20,.95);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);box-shadow:0 4px 12px rgba(0,0,0,.4)}

/* Bottom Button Row */
.dynamo-bottom{display:flex;align-items:center;gap:4px}
.dynamo-btn{display:flex;align-items:center;justify-content:center;padding:8px;border:none;border-radius:8px;background:transparent;color:rgba(255,255,255,.85);cursor:pointer;flex-shrink:0;transition:color .2s ease,background .2s ease,transform .2s ease}
.dynamo-btn:hover{color:#fff;background:rgba(255,255,255,.1);transform:scale(1.05)}
.dynamo-btn:active{transform:scale(.95)}
.dynamo-btn svg{width:24px;height:24px}

/* Volume */
.dynamo-volume-group{display:flex;align-items:center;gap:4px}
.dynamo-volume-slider{display:flex;align-items:center;overflow:hidden;width:0;transition:width .3s cubic-bezier(.4,0,.2,1)}
.dynamo-volume-group:hover .dynamo-volume-slider,.dynamo-volume-slider:focus-within{width:80px}
.dynamo-volume-slider input[type=range]{width:72px;height:4px;appearance:none;-webkit-appearance:none;background:rgba(255,255,255,.2);border-radius:4px;outline:none;cursor:pointer}
.dynamo-volume-slider input[type=range]::-webkit-slider-thumb{width:14px;height:14px;border-radius:50%;background:#fff;cursor:pointer;-webkit-appearance:none;box-shadow:0 2px 6px rgba(0,0,0,.3);transition:transform .15s ease}
.dynamo-volume-slider input[type=range]::-webkit-slider-thumb:hover{transform:scale(1.2)}
.dynamo-volume-slider input[type=range]::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:#fff;cursor:pointer;border:none;box-shadow:0 2px 6px rgba(0,0,0,.3)}

/* Time & Spacer */
.dynamo-spacer{flex:1}
.dynamo-time{padding:0 8px;font-size:13px;font-weight:500;white-space:nowrap;color:rgba(255,255,255,.9);letter-spacing:.02em}

/* Menu Context */
.dynamo-menu-context{position:absolute;bottom:56px;right:16px;width:240px;overflow:hidden;border-radius:12px;color:#fff;font-size:14px;font-weight:500;background:rgba(20,20,20,.95);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.08);box-shadow:0 8px 32px rgba(0,0,0,.5);opacity:0;transform:translateY(8px) scale(.98);pointer-events:none;z-index:10;transition:opacity .25s cubic-bezier(.4,0,.2,1),transform .25s cubic-bezier(.4,0,.2,1)}
.dynamo-menu-context.active{opacity:1;transform:translateY(0) scale(1);pointer-events:auto}
.dynamo-menu-list{list-style:none;margin:0;padding:8px 0;max-height:280px;overflow-y:auto;overflow-x:hidden}
.dynamo-menu-list::-webkit-scrollbar{width:6px}
.dynamo-menu-list::-webkit-scrollbar-track{background:transparent}
.dynamo-menu-list::-webkit-scrollbar-thumb{background:rgba(255,255,255,.15);border-radius:3px}
.dynamo-menu-list::-webkit-scrollbar-thumb:hover{background:rgba(255,255,255,.25)}
.dynamo-menu-item{display:flex;align-items:center;justify-content:space-between;padding:12px 20px;cursor:pointer;transition:background .2s ease}
.dynamo-menu-item:hover{background:rgba(255,255,255,.1)}
.dynamo-menu-item.selected{color:#b385ff}
.dynamo-menu-item .val{display:flex;align-items:center;gap:8px;color:rgba(255,255,255,.5);font-size:13px}
.dynamo-menu-header{display:flex;align-items:center;gap:10px;padding:14px 20px;font-weight:600;cursor:pointer;border-bottom:1px solid rgba(255,255,255,.08);transition:background .2s ease}
.dynamo-menu-header:hover{background:rgba(255,255,255,.05)}

/* HBO Max Style Subtitles */
.dynamo-subtitles{position:absolute;bottom:80px;left:50%;transform:translateX(-50%);text-align:center;pointer-events:none;z-index:6;opacity:0;transition:opacity .2s ease}
.dynamo-subtitles.active{opacity:1}
.dynamo-cue{display:inline-block;padding:6px 16px;margin:2px 0;font-family:'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:clamp(14px,2.5vw,32px);font-weight:700;color:#fff;text-shadow:0 2px 4px rgba(0,0,0,.8),0 0 20px rgba(0,0,0,.5);background:rgba(0,0,0,.75);border-radius:4px;line-height:1.4}
.dynamo-wrapper:fullscreen .dynamo-subtitles{bottom:100px}
.dynamo-wrapper:fullscreen .dynamo-cue{font-size:clamp(18px,2.2vw,42px)}
.dynamo-wrapper video::cue{font-family:'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:2.5vw;font-weight:700;color:#fff;text-shadow:0 2px 4px rgba(0,0,0,.8),0 0 20px rgba(0,0,0,.5);background:rgba(0,0,0,.75);padding:.3em .6em;border-radius:4px;line-height:1.4}

/* Ripple Effect */
.dynamo-ripple{position:absolute;transform:scale(0);border-radius:50%;background:rgba(179,133,255,.3);pointer-events:none;z-index:10;animation:dynamo-ripple-anim .6s cubic-bezier(.4,0,.2,1) forwards}
@keyframes dynamo-ripple-anim{to{transform:scale(4);opacity:0}}

/* Cursor Auto-Hide */
.dynamo-wrapper.is-playing.hide-controls{cursor:none}
.dynamo-wrapper.is-playing.hide-controls video,.dynamo-wrapper.is-playing.hide-controls .dynamo-overscreen,.dynamo-wrapper.is-playing.hide-controls .dynamo-btn-os{cursor:none}

/* Ambient Mode */
.dynamo-ambient-canvas{position:absolute;top:50%;left:50%;width:100%;height:100%;border-radius:12px;transform:translate(-50%,-50%) scale(1.15);opacity:0;z-index:0;pointer-events:none;filter:blur(80px) brightness(1.1) saturate(1.4);transition:opacity 2s cubic-bezier(.4,0,.2,1)}
.dynamo-wrapper.ambient-active .dynamo-ambient-canvas{opacity:.35}

/* PiP Button */
.dynamo-pip-btn{display:none}

/* Responsive - Tablet */
@media (max-width:768px){
.dynamo-wrapper{border-radius:8px}
.dynamo-wrapper video,.dynamo-poster,.dynamo-overlay,.dynamo-loader,.dynamo-overscreen{border-radius:8px}
.dynamo-controls{padding:16px 12px 12px;gap:6px;border-bottom-left-radius:8px;border-bottom-right-radius:8px}
.dynamo-big-play{width:72px;height:72px}
.dynamo-big-play svg{width:32px;height:32px}
.dynamo-btn-os{width:48px;height:48px}
.dynamo-btn-os svg{width:24px;height:24px}
.dynamo-btn-os.play-pause-os{width:60px;height:60px}
.dynamo-btn-os.play-pause-os svg{width:28px;height:28px}
.dynamo-overscreen{gap:32px}
.dynamo-btn svg{width:22px;height:22px}
.dynamo-btn{padding:6px}
.dynamo-time{font-size:12px;padding:0 4px}
.dynamo-spinner{width:44px;height:44px}
.dynamo-progress-thumb-box{width:140px;height:79px}
.dynamo-menu-context{width:200px;right:12px;bottom:48px}
.dynamo-menu-item{padding:10px 16px;font-size:13px}
.dynamo-subtitles{bottom:60px}
}

/* Responsive - Mobile */
@media (max-width:480px){
.dynamo-wrapper{border-radius:6px}
.dynamo-wrapper video,.dynamo-poster,.dynamo-overlay,.dynamo-loader,.dynamo-overscreen{border-radius:6px}
.dynamo-controls{padding:12px 10px 10px;border-bottom-left-radius:6px;border-bottom-right-radius:6px}
.dynamo-big-play{width:64px;height:64px}
.dynamo-big-play svg{width:28px;height:28px}
.dynamo-btn-os{width:42px;height:42px}
.dynamo-btn-os svg{width:20px;height:20px}
.dynamo-btn-os.play-pause-os{width:52px;height:52px}
.dynamo-btn-os.play-pause-os svg{width:24px;height:24px}
.dynamo-overscreen{gap:24px}
.dynamo-volume-group:hover .dynamo-volume-slider,.dynamo-volume-slider:focus-within{width:60px}
.dynamo-volume-slider input[type=range]{width:52px}
.dynamo-progress-preview-container{display:none}
.dynamo-menu-context{width:180px;right:8px;bottom:44px;font-size:13px}
.dynamo-ambient-canvas{filter:blur(60px) brightness(1.1) saturate(1.3)}
.dynamo-subtitles{bottom:50px}
.dynamo-cue{font-size:clamp(12px,4vw,18px);padding:4px 12px}
}

/* Touch Devices */
@media (hover:none){
.dynamo-progress-wrap:hover .dynamo-progress-track{height:4px}
.dynamo-progress-wrap:hover .dynamo-progress-thumb{transform:translate(-50%,-50%) scale(1)}
.dynamo-volume-group .dynamo-volume-slider{width:60px}
.dynamo-btn:hover{background:transparent;transform:none}
.dynamo-btn:active{background:rgba(255,255,255,.1)}
}
`.trim();
