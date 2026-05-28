/** * __| |___________________________________________________________| |__
* __   ___________________________________________________________   __
* | |                                                           | |  
* | |    _    _______  __  ____ _____ _   _ ____ ___ ___  ____  | |  
* | |   / \  | ____\ \/ / / ___|_   _| | | |  _ \_ _/ _ \/ ___| | |  
* | |  / _ \ |  _|  \  /  \___ \ | | | | | | | | | | | | \___ \ | |  
* | | / ___ \| |___ /  \   ___) || | | |_| | |_| | | |_| |___) || |  
* | |/_/   \_\_____/_/\_\ |____/ |_|  \___/|____/___\___/|____/ | |  
* __| |___________________________________________________________| |__
* __   ___________________________________________________________   __
* | |                          1.6.1 Netflix UI                 | |  
*/
!function() {
  // 1. Nuevos Iconos Estilo Netflix (Rellenos, limpios y modernos)
  var e = {
    play: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 3.40924C5.5 2.15852 6.87704 1.39634 7.91741 2.0519L20.4174 9.92982C21.4019 10.5505 21.4019 11.9961 20.4174 12.6167L7.91741 20.4947C6.87704 21.1502 5.5 20.388 5.5 19.1373V3.40924Z"/></svg>',
    pause: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>',
    back10: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.5C7.30558 2.5 3.5 6.30558 3.5 11H1L4.85355 14.8536C4.93166 14.9317 5.06834 14.9317 5.14645 14.8536L9 11H6.5C6.5 7.96243 8.96243 5.5 12 5.5C15.0376 5.5 17.5 7.96243 17.5 11C17.5 14.0376 15.0376 16.5 12 16.5C10.7497 16.5 9.59682 16.082 8.66572 15.3853L7 17.4735C8.38883 18.7303 10.1066 19.5 12 19.5C16.6944 19.5 20.5 15.6944 20.5 11C20.5 6.30558 16.6944 2.5 12 2.5Z"/><text x="11.5" y="14.5" fill="currentColor" stroke="none" font-size="6.5" font-weight="bold" font-family="sans-serif" text-anchor="middle">10</text></svg>',
    forward10: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.5C16.6944 2.5 20.5 6.30558 20.5 11H23L19.1464 14.8536C19.0683 14.9317 18.9317 14.9317 18.8536 14.8536L15 11H17.5C17.5 7.96243 15.0376 5.5 12 5.5C8.96243 5.5 6.5 7.96243 6.5 11C6.5 14.0376 8.96243 16.5 12 16.5C13.2503 16.5 14.4032 16.082 15.3343 15.3853L17 17.4735C15.6112 18.7303 13.8934 19.5 12 19.5C7.30558 19.5 3.5 15.6944 3.5 11C3.5 6.30558 7.30558 2.5 12 2.5Z"/><text x="12.5" y="14.5" fill="currentColor" stroke="none" font-size="6.5" font-weight="bold" font-family="sans-serif" text-anchor="middle">10</text></svg>',
    volumeHigh: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M13.4142 3.58579C14.3047 2.69526 15.8284 3.32594 15.8284 4.58579V19.4142C15.8284 20.6741 14.3047 21.3047 13.4142 20.4142L8.82843 15.8284C8.45326 15.4533 7.94443 15.2426 7.41421 15.2426H5C3.89543 15.2426 3 14.3472 3 13.2426V10.7574C3 9.65279 3.89543 8.75736 5 8.75736H7.41421C7.94443 8.75736 8.45326 8.54674 8.82843 8.17157L13.4142 3.58579Z"/><path d="M18 16C19.5 14.5 20 12.5 20 10.5C20 8.5 19.5 6.5 18 5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" fill="none"/><path d="M22 19C24 16.5 24.5 13.5 24.5 10.5C24.5 7.5 24 4.5 22 2" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" fill="none"/></svg>',
    volumeLow: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M13.4142 3.58579C14.3047 2.69526 15.8284 3.32594 15.8284 4.58579V19.4142C15.8284 20.6741 14.3047 21.3047 13.4142 20.4142L8.82843 15.8284C8.45326 15.4533 7.94443 15.2426 7.41421 15.2426H5C3.89543 15.2426 3 14.3472 3 13.2426V10.7574C3 9.65279 3.89543 8.75736 5 8.75736H7.41421C7.94443 8.75736 8.45326 8.54674 8.82843 8.17157L13.4142 3.58579Z"/><path d="M18 16C19.5 14.5 20 12.5 20 10.5C20 8.5 19.5 6.5 18 5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" fill="none"/></svg>',
    volumeMute: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M13.4142 3.58579C14.3047 2.69526 15.8284 3.32594 15.8284 4.58579V19.4142C15.8284 20.6741 14.3047 21.3047 13.4142 20.4142L8.82843 15.8284C8.45326 15.4533 7.94443 15.2426 7.41421 15.2426H5C3.89543 15.2426 3 14.3472 3 13.2426V10.7574C3 9.65279 3.89543 8.75736 5 8.75736H7.41421C7.94443 8.75736 8.45326 8.54674 8.82843 8.17157L13.4142 3.58579Z"/><path d="M18 8L24 14M24 8L18 14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" fill="none"/></svg>',
    fullscreen: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h6v2.5H6.5V9H4V4zm16 0h-6v2.5h3.5V9H20V4zM4 20h6v-2.5H6.5V15H4v5zm16 0h-6v-2.5h3.5V15H20v5z"/></svg>',
    exitFullscreen: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9 9H3V6.5h3.5V3H9v6zm6 0h6V6.5h-3.5V3H15v6zM9 15H3v2.5h3.5V21H9v-6zm6 0h6v2.5h-3.5V21H15v-6z"/></svg>',
    config: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3.5"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.5523 2 13 2.44772 13 3V4.22384C14.0768 4.41706 15.0805 4.80164 15.9754 5.34005L16.8423 4.47313C17.2328 4.0826 17.8659 4.0826 18.2565 4.47313L19.5269 5.74351C19.9174 6.13404 19.9174 6.7672 19.5269 7.15773L18.66 8.02462C19.1984 8.91953 19.5829 9.92323 19.7762 11H21C21.5523 11 22 11.4477 22 12V13.7937C22 14.346 21.5523 14.7937 21 14.7937H19.7762C19.5829 15.8705 19.1984 16.8742 18.66 17.7691L19.5269 18.6361C19.9174 19.0266 19.9174 19.6598 19.5269 20.0503L18.2565 21.3207C17.8659 21.7112 17.2328 21.7112 16.8423 21.3207L15.9754 20.4538C15.0805 20.9922 14.0768 21.3768 13 21.57V22.7937C13 23.346 12.5523 23.7937 12 23.7937H10C9.44772 23.7937 9 23.346 9 22.7937V21.57C7.92323 21.3768 6.91953 20.9922 6.02462 20.4538L5.15773 21.3207C4.7672 21.7112 4.13404 21.7112 3.74351 21.3207L2.47313 20.0503C2.0826 19.6598 2.0826 19.0266 2.47313 18.6361L3.34005 17.7691C2.80164 16.8742 2.41706 15.8705 2.22384 14.7937H1C0.447715 14.7937 0 14.346 0 13.7937V12C0 11.4477 0.447715 11 1 11H2.22384C2.41706 9.92323 2.80164 8.91953 3.34005 8.02462L2.47313 7.15773C2.0826 6.7672 2.0826 6.13404 2.47313 5.74351L3.74351 4.47313C4.13404 4.0826 4.7672 4.0826 5.15773 4.47313L6.02462 5.34005C6.91953 4.80164 7.92323 4.41706 9 4.22384V3C9 2.44772 9.44772 2 10 2H12ZM12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5Z"/></svg>',
    pip: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4ZM3 18V6H21V18H3Z"/><rect x="11" y="11" width="10" height="7" rx="1"/></svg>',
    quality: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM4 6V18H20V6H4Z"/><text x="12" y="15.5" fill="currentColor" stroke="none" font-size="8" font-weight="900" font-family="sans-serif" text-anchor="middle">HD</text></svg>',
    playRate: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12Z"/><path d="M12 7.5C11.1716 7.5 10.5 8.17157 10.5 9V12.3787C10.5 12.7765 10.658 13.158 10.9393 13.4393L13.0607 15.5607C13.6464 16.1464 14.5962 16.1464 15.182 15.5607C15.7678 14.9749 15.7678 14.0251 15.182 13.4393L13.5 11.7574V9C13.5 8.17157 12.8284 7.5 12 7.5Z"/></svg>',
    subtitles: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 4C2.34315 4 1 5.34315 1 7V17C1 18.6569 2.34315 20 4 20H20C21.6569 20 23 18.6569 23 17V7C23 5.34315 21.6569 4 20 4H4ZM6 10C5.44772 10 5 10.4477 5 11C5 11.5523 5.44772 12 6 12H9C9.55228 12 10 11.5523 10 11C10 10.4477 9.55228 10 9 10H6ZM13 11C13 10.4477 13.4477 10 14 10H18C18.5523 10 19 10.4477 19 11C19 11.5523 18.5523 12 18 12H14C13.4477 12 13 11.5523 13 11ZM6 14C5.44772 14 5 14.4477 5 15C5 15.5523 5.44772 16 6 16H18C18.5523 16 19 15.5523 19 15C19 14.4477 18.5523 14 18 14H6Z"/></svg>'
  };

  // 2. Funciones core del reproductor
  function t(e) {
    (isNaN(e) || e < 0) && (e = 0);
    const t = Math.floor(e / 3600),
          n = Math.floor(e % 3600 / 60),
          o = Math.floor(e % 60);
    return t > 0 ? `${t}:${String(n).padStart(2,"0")}:${String(o).padStart(2,"0")}` : `${n}:${String(o).padStart(2,"0")}`
  }

  function n(e, t, n) {
    const o = document.createElement("div");
    o.className = "dynamo-ripple";
    o.style.cssText = `width:80px;height:80px;left:${t-40}px;top:${n-40}px;`;
    e.appendChild(o);
    setTimeout(() => o.remove(), 600);
  }

  function o(e, t, n, o) {
    void 0 !== window.Hls && window.Hls.isSupported() ? (
      n.hlsInstance && n.hlsInstance.destroy(), 
      n.hlsInstance = new window.Hls, 
      n.hlsInstance.loadSource(t), 
      n.hlsInstance.attachMedia(e), 
      n.hlsInstance.on(window.Hls.Events.MANIFEST_PARSED, (e, a) => {
        1 === n.videoSources.length && a.levels && a.levels.length > 0 && (n.videoSources = [{
          isHlsLevel: !0, id: -1, label: "Auto", src: t
        }, ...a.levels.map((e, n) => ({
          isHlsLevel: !0, id: n, label: e.height ? `${e.height}p` : `Level ${n+1}`, src: t
        }))].reverse()), o()
      }), 
      n.hlsInstance.on(window.Hls.Events.AUDIO_TRACKS_UPDATED, (e, t) => {
        t.audioTracks && t.audioTracks.length > 1 ? (
          n.globalAudioTracks = t.audioTracks.map(e => ({
            id: e.id, label: e.name || e.lang || `Audio ${e.id}`
          })), 
          n.activeAudioTrackId = n.hlsInstance.audioTrack
        ) : n.globalAudioTracks = []
      }), 
      n.hlsInstance.on(window.Hls.Events.SUBTITLE_TRACKS_UPDATED, (e, t) => {
        if (t.subtitleTracks && t.subtitleTracks.length > 0) {
          n.globalSubtitles = t.subtitleTracks.map(e => ({
            id: e.id, label: e.name || e.lang || `Subtitle ${e.id}`, isHls: !0
          }));
          const e = t.subtitleTracks.find(e => e.default);
          e && "Off" === n.activeSubtitleLabel ? (n.activeSubtitleLabel = e.name || e.lang, n.hlsInstance.subtitleTrack = e.id) : "Off" === n.activeSubtitleLabel && (n.hlsInstance.subtitleTrack = -1)
        }
      }), 
      n.hlsInstance.on(window.Hls.Events.AUDIO_TRACK_SWITCH_DONE, (e, t) => {
        n.activeAudioTrackId = t.id
      })
    ) : e.canPlayType("application/vnd.apple.mpegurl") && (e.src = t, e.addEventListener("loadedmetadata", o, { once: !0 }))
  }

  function a(e, t, n, a) {
    if (e._currentSrc = t, t.includes(".m3u8"))
      if (void 0 === window.Hls) {
        console.log("DynamoPlayer: Loading HLS engine dynamically...");
        const r = document.createElement("script");
        r.src = "https://cdn.jsdelivr.net/npm/hls.js@latest";
        r.onload = () => o(e, t, n, a);
        document.head.appendChild(r)
      } else o(e, t, n, a);
    else n.hlsInstance && (n.hlsInstance.destroy(), n.hlsInstance = null, n.globalAudioTracks = [], n.activeAudioTrackId = -1, n.globalSubtitles = n.globalSubtitles.filter(e => !e.isHls)), e.src = t, a()
  }

  function r(e, t) {
    e.querySelectorAll("track").forEach(e => e.remove());
    t.globalSubtitles.length > 0 && (
      t.globalSubtitles.forEach(n => {
        const o = document.createElement("track");
        o.kind = "subtitles";
        o.label = n.label;
        o.srclang = n.srclang || "";
        o.src = n.src;
        e.appendChild(o);
        n.default && "Off" === t.activeSubtitleLabel && !e._subsInit && (t.activeSubtitleLabel = n.label)
      }), 
      e._subsInit = !0
    );
    setTimeout(() => function(e, t) {
      if (!e.textTracks) return;
      Array.from(e.textTracks).forEach(e => {
        e.mode = e.label === t.activeSubtitleLabel ? "showing" : "hidden"
      })
    }(e, t), 50)
  }

  function i(e, o, a, r, i, s) {
    const l = a.querySelector(".dynamo-play-btn"),
          d = a.querySelector(".dynamo-mute-btn"),
          c = a.querySelector(".dynamo-fs-btn"),
          p = a.querySelector(".dynamo-pip-btn"),
          C = a.querySelector(".dynamo-back-btn"),
          u = a.querySelector(".dynamo-fwd-btn"),
          m = a.querySelector(".dynamo-progress-wrap"),
          f = a.querySelector(".dynamo-progress-fill"),
          g = a.querySelector(".dynamo-progress-buffer"),
          y = a.querySelector(".dynamo-progress-thumb"),
          h = a.querySelector(".dynamo-time-display"),
          b = a.querySelector(".dynamo-vol-range"),
          v = a.querySelector(".dynamo-progress-tooltip"),
          w = a.querySelector(".dynamo-progress-preview-container"),
          k = a.querySelector(".dynamo-progress-thumb-box");
    let x = !1, L = null, S = 1;
    const M = o.querySelector(".dynamo-poster"),
          T = o.querySelector(".dynamo-overlay"),
          H = o.querySelector(".dynamo-menu-context"),
          E = () => e.duration === 1 / 0 && e.seekable && e.seekable.length > 0 ? e.seekable.end(e.seekable.length - 1) : e.duration;

    function V() {
      clearTimeout(L);
      e.paused || (L = setTimeout(() => o.classList.add("hide-controls"), 2800))
    }

    function I(n) {
      const o = m.getBoundingClientRect(),
            a = Math.max(0, Math.min(1, (n.clientX - o.left) / o.width)),
            r = E();
      if (r && !isNaN(r)) {
        const n = a * r;
        e.currentTime = n;
        f.style.width = y.style.left = 100 * a + "%";
        h.textContent = `${t(n)} / ${t(r)}`
      }
    }
    const $ = () => e.paused ? e.play() : e.pause();

    m.addEventListener("mousedown", e => { x = !0; I(e) });
    window.addEventListener("mousemove", e => { x && I(e) });
    window.addEventListener("mouseup", () => { x = !1 });
    e.addEventListener("progress", () => {
      if (e.duration > 0 && e.buffered.length > 0) {
        const t = e.buffered.end(e.buffered.length - 1);
        g.style.width = t / e.duration * 100 + "%"
      }
    });
    e.addEventListener("timeupdate", () => {
      if (!x) {
        const n = E();
        if (n && !isNaN(n)) {
          const o = e.currentTime / n * 100 + "%";
          f.style.width = y.style.left = o;
          h.textContent = `${t(e.currentTime)} / ${t(n)}`
        }
      }
    });
    e.addEventListener("play", () => {
      o.classList.add("is-playing");
      l.innerHTML = r.pause;
      M.classList.add("hidden");
      T.classList.remove("visible");
      H.classList.remove("active");
      V()
    });
    e.addEventListener("pause", () => {
      o.classList.remove("is-playing");
      l.innerHTML = r.play;
      T.classList.add("visible");
      o.classList.remove("hide-controls")
    });
    e.addEventListener("ended", () => {
      l.innerHTML = r.play;
      T.classList.add("visible");
      o.classList.remove("hide-controls", "is-playing")
    });
    T.onclick = e => { e.stopPropagation(); n(o, o.offsetWidth / 2, o.offsetHeight / 2); $() };
    e.onclick = e => { n(o, e.clientX - o.getBoundingClientRect().left, e.clientY - o.getBoundingClientRect().top); $() };
    e.addEventListener("contextmenu", e => e.preventDefault());
    l.onclick = e => { e.stopPropagation(); $() };
    C.onclick = t => { t.stopPropagation(); e.currentTime -= 10 };
    u.onclick = t => { t.stopPropagation(); e.currentTime += 10 };
    b.oninput = t => { e.volume = t.target.value; e.muted = 0 === e.volume; S = e.volume };
    d.onclick = t => {
      t.stopPropagation();
      e.muted ? (e.muted = !1, e.volume = S) : (S = e.volume, e.muted = !0)
    };
    e.addEventListener("volumechange", () => {
      b.value = e.muted ? 0 : e.volume;
      d.innerHTML = e.muted || 0 === e.volume ? r.volumeMute : e.volume < .5 ? r.volumeLow : r.volumeHigh
    });
    c.onclick = e => {
      e.stopPropagation();
      document.fullscreenElement ? (document.exitFullscreen(), c.innerHTML = r.fullscreen) : (o.requestFullscreen(), c.innerHTML = r.exitFullscreen)
    };
    "true" === e.getAttribute("inPicture") && document.pictureInPictureEnabled && (p.style.display = "block", p.onclick = t => {
      t.stopPropagation();
      document.pictureInPictureElement ? document.exitPictureInPicture() : e.requestPictureInPicture().catch(() => {})
    });
    o.onmousemove = () => { M.classList.contains("hidden") && o.classList.remove("hide-controls"); V() };
    o.setAttribute("tabindex", "0");
    o.onkeydown = t => {
      "Space" === t.code && (t.preventDefault(), $());
      "ArrowRight" === t.code && (e.currentTime += 5);
      "ArrowLeft" === t.code && (e.currentTime -= 5)
    };
    function P(e, n, o, a, r) {
      const i = "true" === e.getAttribute("autoThumbnails");
      let s = null, l = null, d = null, c = !1, p = 0;
      i ? (
        s = document.createElement("video"), s.preload = "metadata", s.muted = !0, s.crossOrigin = "anonymous", s.src = e.src || e._currentSrc || "", 
        l = document.createElement("canvas"), l.width = 160, l.height = 90, d = l.getContext("2d", { alpha: !1 }), r && r.appendChild(l)
      ) : r && (r.style.display = "none");
      n.addEventListener("mousemove", r => {
        if (!e.duration || isNaN(e.duration)) return;
        const C = n.getBoundingClientRect();
        let u = (r.clientX - C.left) / C.width;
        u = Math.max(0, Math.min(1, u));
        const m = u * e.duration;
        o.textContent = t(m);
        a.style.left = 100 * u + "%";
        if (i && s && s.readyState >= 2) {
          const e = Date.now();
          !c && e - p > 100 && (c = !0, p = e, s.currentTime = m, s.addEventListener("seeked", () => {
            try { d.drawImage(s, 0, 0, l.width, l.height) } 
            catch (e) { console.warn("DynamoPlayer: Thumbnail capture failed (CORS or render).") } 
            finally { c = !1 }
          }, { once: !0 }))
        }
      })
    }
    P(e, m, v, w, k);
    return { progressWrap: m, progressFill: f, progressBuffer: g, progressThumb: y, timeDisplay: h, volRange: b, playBtn: l, muteBtn: d, fsBtn: c, pipBtn: p, backBtn: C, fwdBtn: u }
  }

  function s(e, t, n, o, a) {
    function r(n) {
      "main" === n ? function() {
        let n = "Auto";
        if (o.hlsInstance && o.videoSources[0]?.isHlsLevel) {
          const e = o.videoSources.find(e => e.id === o.hlsInstance.currentLevel);
          n = e ? e.label : "Auto"
        } else {
          const t = o.videoSources.findIndex(t => (e._currentSrc || e.src).includes(t.src));
          -1 !== t && (n = o.videoSources[t].label)
        }
        const a = 1 === e.playbackRate ? "Normal" : `${e.playbackRate}x`,
              i = o.globalAudioTracks.find(e => e.id === o.activeAudioTrackId)?.label || "Original",
              s = o.globalAudioTracks.length > 1 ? `\n      <li class="dynamo-menu-item" data-target="audio">\n        <span>Audio</span>\n        <span class="val">${i} <span style="font-size:16px;">&rsaquo;</span></span>\n      </li>` : "",
              l = o.globalSubtitles.length > 0 ? `\n      <li class="dynamo-menu-item" data-target="subtitles">\n        <span>Subtitles</span>\n        <span class="val">${o.activeSubtitleLabel} <span style="font-size:16px;">&rsaquo;</span></span>\n      </li>` : "";
        t.innerHTML = `\n      <ul class="dynamo-menu-list">\n        <li class="dynamo-menu-item" data-target="quality">\n          <span>Quality</span>\n          <span class="val">${n} <span style="font-size:16px;">&rsaquo;</span></span>\n        </li>\n        ${s}\n        <li class="dynamo-menu-item" data-target="speed">\n          <span>Speed</span>\n          <span class="val">${a} <span style="font-size:16px;">&rsaquo;</span></span>\n        </li>\n        ${l}\n      </ul>\n    `;
        t.querySelectorAll(".dynamo-menu-item").forEach(e => {
          e.onclick = t => { t.stopPropagation(); r(e.dataset.target) }
        })
      }() : "quality" === n ? function() {
        let n = 0;
        if (o.hlsInstance && o.videoSources[0]?.isHlsLevel) n = o.videoSources.findIndex(e => e.id === o.hlsInstance.currentLevel);
        else {
          const t = e._currentSrc || e.src;
          n = o.videoSources.findIndex(e => t.includes(e.src))
        }
        t.innerHTML = `\n      <div class="dynamo-menu-header" data-target="main"><span style="font-size:18px;">&lsaquo;</span> Quality</div>\n      <ul class="dynamo-menu-list">${o.videoSources.map((e,t)=>`<li class="dynamo-menu-item ${n===t?"selected":""}" data-index="${t}">${e.label}</li>`).join("")}</ul>\n    `;
        t.querySelectorAll(".dynamo-menu-item").forEach(n => {
          n.onclick = r => {
            if (r.stopPropagation(), !n.dataset.index) return;
            const i = parseInt(n.dataset.index), s = o.videoSources[i];
            if (s.isHlsLevel && o.hlsInstance) o.hlsInstance.currentLevel = s.id;
            else {
              const t = e.currentTime, n = !e.paused;
              a(e, s.src, o, () => {});
              setTimeout(() => { e.currentTime = t; n && e.play() }, 150)
            }
            t.classList.remove("active")
          }
        })
      }() : "audio" === n ? (
        t.innerHTML = `\n      <div class="dynamo-menu-header" data-target="main"><span style="font-size:18px;">&lsaquo;</span> Audio Tracks</div>\n      <ul class="dynamo-menu-list">${o.globalAudioTracks.map(e=>`<li class="dynamo-menu-item ${o.activeAudioTrackId===e.id?"selected":""}" data-id="${e.id}">${e.label}</li>`).join("")}</ul>\n    `,
        t.querySelectorAll(".dynamo-menu-item").forEach(e => {
          e.onclick = n => { n.stopPropagation(); o.hlsInstance && (o.hlsInstance.audioTrack = parseInt(e.dataset.id)); t.classList.remove("active") }
        })
      ) : "speed" === n ? (
        t.innerHTML = `\n      <div class="dynamo-menu-header" data-target="main"><span style="font-size:18px;">&lsaquo;</span> Speed</div>\n      <ul class="dynamo-menu-list">${[{val:.5,label:"0.5x"},{val:.75,label:"0.75x"},{val:1,label:"Normal"},{val:1.25,label:"1.25x"},{val:1.5,label:"1.5x"},{val:2,label:"2x"}].map(t=>`<li class="dynamo-menu-item ${e.playbackRate===t.val?"selected":""}" data-val="${t.val}">${t.label}</li>`).join("")}</ul>\n    `,
        t.querySelectorAll(".dynamo-menu-item").forEach(n => {
          n.onclick = o => { o.stopPropagation(); e.playbackRate = parseFloat(n.dataset.val); t.classList.remove("active") }
        })
      ) : "subtitles" === n && function() {
        let n = `\n      <li class="dynamo-menu-item ${"Off"===o.activeSubtitleLabel?"selected":""}"\n          data-id="-1" data-label="Off">Off</li>\n    `;
        o.globalSubtitles.forEach(e => {
          const t = e.isHls ? `data-id="${e.id}"` : "";
          n += `\n        <li class="dynamo-menu-item ${o.activeSubtitleLabel===e.label?"selected":""}"\n            ${t} data-label="${e.label}">${e.label}</li>\n      `
        });
        t.innerHTML = `\n      <div class="dynamo-menu-header" data-target="main"><span style="font-size:18px;">&lsaquo;</span> Captions</div>\n      <ul class="dynamo-menu-list">${n}</ul>\n    `;
        t.querySelectorAll(".dynamo-menu-item").forEach(n => {
          n.onclick = a => { a.stopPropagation(); setSubtitle(e, o, n.dataset.label, n.dataset.id); t.classList.remove("active") }
        })
      }();
      const i = t.querySelector(".dynamo-menu-header");
      i && (i.onclick = e => { e.stopPropagation(); r(i.dataset.target) })
    }
    n.onclick = n => { n.stopPropagation(); t.classList.toggle("active"); t.classList.contains("active") && (e.paused || e.pause(), r("main")) };
    document.addEventListener("click", () => t.classList.remove("active"))
  }

  function l(e, t, n) {
    if ("true" !== e.getAttribute("ambientMode")) return;
    const o = document.createElement("canvas");
    o.className = "dynamo-ambient-canvas";
    t.prepend(o);
    const a = o.getContext("2d", { alpha: !1 });
    let r;
    o.width = 32;
    o.height = 18;
    const i = () => {
      if (!e.paused && !e.ended) {
        try { a.drawImage(e, 0, 0, o.width, o.height) } catch (t) {}
        r = requestAnimationFrame(i)
      }
    };
    if (n) {
      const e = new Image;
      e.crossOrigin = "anonymous";
      e.onload = () => (e => {
        try { a.drawImage(e, 0, 0, o.width, o.height); t.classList.add("ambient-active") } 
        catch (n) { console.warn("DynamoPlayer: Ambient mode CORS block on static image.") }
      })(e);
      e.onerror = () => console.warn("DynamoPlayer: Ambient mode thumb failed.");
      e.src = n + (n.includes("?") ? "&" : "?") + "t=" + (new Date).getTime()
    }
    e.addEventListener("play", () => { cancelAnimationFrame(r); i() });
    e.addEventListener("playing", () => { cancelAnimationFrame(r); i() });
    e.addEventListener("pause", () => cancelAnimationFrame(r));
    e.addEventListener("ended", () => cancelAnimationFrame(r));
    e.paused || e.ended || i()
  }

  !function(t) {
    "use strict";

    function n(t) {
      if (t._dynamoInit) return;
      t._dynamoInit = !0;
      t.crossOrigin || (t.crossOrigin = "anonymous");
      
      const n = document.createElement("div");
      n.className = "dynamo-wrapper";
      t.parentNode.insertBefore(n, t);
      n.appendChild(t);
      n.classList.add("hide-controls");
      
      const o = document.createElement("div");
      o.className = "dynamo-poster";
      n.appendChild(o);
      
      const d = document.createElement("div");
      d.className = "dynamo-loader";
      d.innerHTML = '<div class="dynamo-spinner"></div>';
      n.appendChild(d);
      
      const c = () => { d.classList.add("active"); n.classList.add("hide-controls"); document.querySelector(".dynamo-overscreen")?.classList.add("hidden") },
            p = () => { d.classList.remove("active"); n.classList.remove("hide-controls"); document.querySelector(".dynamo-overscreen")?.classList.remove("hidden") };
      
      t.addEventListener("waiting", c);
      t.addEventListener("playing", p);
      
      const C = document.createElement("div");
      C.className = "dynamo-menu-context";
      n.appendChild(C);
      
      const u = document.createElement("div");
      u.className = "dynamo-overlay visible";
      u.innerHTML = `<div class="dynamo-big-play">${e.play}</div>`;
      n.appendChild(u);
      
      const m = { videoSources: [], globalSubtitles: [], globalAudioTracks: [], activeAudioTrackId: -1, activeSubtitleLabel: "Off", hlsInstance: null },
            f = t.getAttribute("data-src") || t.getAttribute("src"),
            g = t.getAttribute("poster");
            
      if (f) {
        try {
          const e = JSON.parse(f);
          m.videoSources = e.videoSources || e.sources || [];
          m.globalSubtitles = e.globalSubtitles || e.subtitles || [];
          m.videoSources.length > 0 && a(t, m.videoSources[0].src, m, () => r(t, m))
        } catch (h) {
          m.videoSources = [{ label: "Normal", src: f }];
          a(t, f, m, () => r(t, m))
        }
      }
      
      g ? o.style.backgroundImage = `url(${g})` : (
        c(), 
        t.addEventListener("loadeddata", () => {
          const e = t.currentTime;
          t.currentTime = t.duration / 2 || 5;
          t.addEventListener("seeked", function n() {
            try {
              const e = document.createElement("canvas");
              e.width = t.videoWidth;
              e.height = t.videoHeight;
              e.getContext("2d").drawImage(t, 0, 0, e.width, e.height);
              o.style.backgroundImage = `url(${e.toDataURL()})`
            } catch (h) {
              console.warn("DynamoPlayer: CORS capture failed.")
            }
            t.currentTime = e;
            p();
            t.removeEventListener("seeked", n)
          }, { once: !0 })
        }, { once: !0 })
      );
      
      const y = function(e, t) {
        const n = document.createElement("div");
        n.className = "dynamo-controls";
        n.innerHTML = `\n    <div class="dynamo-progress-wrap">\n      <div class="dynamo-progress-track">\n        <div class="dynamo-progress-buffer"></div>\n        <div class="dynamo-progress-fill"></div>\n      </div>\n      <div class="dynamo-progress-thumb"></div>\n      <div class="dynamo-progress-preview-container">\n        <div class="dynamo-progress-thumb-box"></div>\n        <div class="dynamo-progress-tooltip">0:00</div>\n      </div>\n    </div>\n    <div class="dynamo-bottom">\n      <button class="dynamo-btn dynamo-back-btn" title="Back 10s">${t.back10}</button>\n      <button class="dynamo-btn dynamo-play-btn">${t.play}</button>\n      <button class="dynamo-btn dynamo-fwd-btn" title="Forward 10s">${t.forward10}</button>\n      <div class="dynamo-volume-group">\n        <button class="dynamo-btn dynamo-mute-btn">${t.volumeHigh}</button>\n        <div class="dynamo-volume-slider">\n          <input type="range" min="0" max="1" step="0.02" value="1" class="dynamo-vol-range">\n        </div>\n      </div>\n      <span class="dynamo-spacer"></span>\n      <button class="dynamo-btn dynamo-pip-btn" title="Mini player">${t.pip}</button>\n      <button class="dynamo-btn dynamo-config-btn" title="Settings">${t.config}</button>\n      <span class="dynamo-time dynamo-time-display">0:00 / 0:00</span>\n      <button class="dynamo-btn dynamo-fs-btn">${t.fullscreen}</button>\n    </div>\n  `;
        e.appendChild(n);
        return n
      }(n, e);
      
      i(t, n, y, e);
      
      function(e, t, n) {
        if ("true" !== t.getAttribute("controlsOverscreen")) return;
        const o = document.createElement("div");
        o.className = "dynamo-overscreen";
        o.innerHTML = `\n    <button class="dynamo-btn-os back-10-os">${n.back10}</button>\n    <button class="dynamo-btn-os play-pause-os">${n.play}</button>\n    <button class="dynamo-btn-os fwd-10-os">${n.forward10}</button>\n  `;
        e.appendChild(o);
        const a = o.querySelector(".play-pause-os");
        t.addEventListener("play", () => a.innerHTML = n.pause);
        t.addEventListener("pause", () => a.innerHTML = n.play);
        a.onclick = e => { e.stopPropagation(); t.paused ? t.play() : t.pause() };
        o.querySelector(".back-10-os").onclick = e => { e.stopPropagation(); t.currentTime -= 10 };
        o.querySelector(".fwd-10-os").onclick = e => { e.stopPropagation(); t.currentTime += 10 }
      }(n, t, e);
      
      s(t, C, y.querySelector(".dynamo-config-btn"), m, a);
      l(t, n, g)
    }

    // 3. Estilos minificados estilo Netflix
    function o() {
      !function() {
        if (document.getElementById("dynamo-player-styles")) return;
        const e = document.createElement("style");
        e.id = "dynamo-player-styles";
        e.textContent = ".dynamo-loader,.dynamo-overlay,.dynamo-overscreen,.dynamo-poster{inset:0;position:absolute}.dynamo-loader.hidden,.dynamo-overlay.hidden,.dynamo-overscreen.hidden,.dynamo-poster.hidden{opacity:0;pointer-events:none}.hidden{display:none!important}.dynamo-wrapper{position:relative;display:inline-block;width:100%;aspect-ratio:16/9;background:#000;border-radius:4px;font-family:'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;user-select:none;-webkit-user-select:none;overflow:hidden}.dynamo-wrapper video{display:block;object-fit:contain;width:100%;height:100%;position:relative;z-index:1;border-radius:4px}.dynamo-poster{background-size:cover;background-position:center;background-color:#000;z-index:2;transition:opacity .4s ease}.dynamo-loader{display:flex;align-items:center;justify-content:center;z-index:10;transition:opacity .3s}.dynamo-loader.active{opacity:1;z-index:20}.dynamo-spinner{width:48px;height:48px;border:3px solid rgba(255,255,255,.1);border-top-color:#e50914;border-radius:50%;animation:.8s linear infinite dynamo-spin}@keyframes dynamo-spin{to{transform:rotate(360deg)}}.dynamo-overlay{display:flex;align-items:center;justify-content:center;z-index:2;transition:opacity .2s}.dynamo-overlay.visible,.dynamo-wrapper:not(.hide-controls) .dynamo-overscreen{opacity:1;pointer-events:auto}.dynamo-big-play{width:76px;height:76px;display:flex;align-items:center;justify-content:center;border-radius:50%;cursor:pointer;background:rgba(0,0,0,.5);color:#fff;border:2px solid rgba(255,255,255,.2);transition:transform .2s ease,background .2s ease,border-color .2s ease}.dynamo-big-play:hover{transform:scale(1.1);background:rgba(0,0,0,.7);border-color:#e50914}.dynamo-big-play svg{width:36px;height:36px;margin-left:4px}.dynamo-overscreen{display:flex;align-items:center;justify-content:center;gap:60px;background:rgba(0,0,0,.4);z-index:4;transition:opacity .3s}.dynamo-btn-os{width:60px;height:60px;display:flex;align-items:center;justify-content:center;border-radius:50%;cursor:pointer;background:0 0;color:#fff;transition:transform .2s ease,color .2s ease}.dynamo-btn-os:hover{transform:scale(1.15);color:#e50914}.dynamo-btn-os svg{width:36px;height:36px}.dynamo-btn-os.play-pause-os{width:80px;height:80px}.dynamo-btn-os.play-pause-os svg{width:48px;height:48px}.dynamo-controls{position:absolute;bottom:0;left:0;right:0;display:flex;flex-direction:column;gap:8px;padding:20px 24px 16px;background:linear-gradient(to top,rgba(0,0,0,.9) 0,rgba(0,0,0,.5) 60%,transparent 100%);opacity:1;transform:translateY(0);pointer-events:auto;z-index:5;transition:opacity .3s ease,transform .3s ease}.dynamo-wrapper.hide-controls .dynamo-controls{opacity:0;transform:translateY(10px);pointer-events:none}.dynamo-progress-wrap{position:relative;display:flex;align-items:center;width:100%;height:16px;cursor:pointer}.dynamo-progress-track{position:relative;width:100%;height:4px;overflow:hidden;background:rgba(255,255,255,.2);border-radius:2px;transition:height .15s ease}.dynamo-progress-wrap:hover .dynamo-progress-track{height:6px}.dynamo-progress-buffer{position:absolute;top:0;left:0;height:100%;width:0;background:rgba(255,255,255,.4);z-index:1;transition:width .3s ease}.dynamo-progress-fill{position:absolute;top:0;left:0;height:100%;background:#e50914;border-radius:2px;z-index:2;pointer-events:none}.dynamo-progress-thumb{position:absolute;top:50%;transform:translate(-50%,-50%) scale(0);width:16px;height:16px;background:#e50914;border-radius:50%;z-index:3;pointer-events:none;box-shadow:0 0 6px rgba(0,0,0,.5);transition:transform .2s cubic-bezier(.4,0,.2,1)}.dynamo-progress-wrap:hover .dynamo-progress-thumb{transform:translate(-50%,-50%) scale(1)}.dynamo-progress-preview-container{position:absolute;bottom:24px;left:0;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;opacity:0;pointer-events:none;z-index:10;transition:opacity .2s}.dynamo-progress-wrap:hover .dynamo-progress-preview-container{opacity:1}.dynamo-progress-thumb-box{width:160px;height:90px;display:flex;align-items:center;justify-content:center;background:#141414;border:2px solid #fff;border-radius:4px;overflow:hidden;margin-bottom:8px;box-shadow:0 4px 15px rgba(0,0,0,.7)}.dynamo-progress-thumb-box canvas{width:100%;height:100%;object-fit:cover}.dynamo-progress-tooltip{display:block;text-align:center;white-space:nowrap;font-size:13px;font-weight:500;color:#fff;text-shadow:0 1px 3px rgba(0,0,0,.8)}.dynamo-bottom{display:flex;align-items:center;gap:8px}.dynamo-btn{display:flex;align-items:center;justify-content:center;padding:6px;border:none;border-radius:4px;background:0 0;color:#fff;cursor:pointer;opacity:.85;flex-shrink:0;transition:opacity .2s ease,transform .2s ease}.dynamo-btn:hover{opacity:1;transform:scale(1.1)}.dynamo-btn svg{width:28px;height:28px}.dynamo-volume-group{display:flex;align-items:center;gap:4px}.dynamo-volume-slider{display:flex;align-items:center;overflow:hidden;width:0;opacity:0;transition:width .3s cubic-bezier(.4,0,.2,1),opacity .3s ease}.dynamo-volume-group:hover .dynamo-volume-slider,.dynamo-volume-slider:focus-within{width:70px;opacity:1}.dynamo-volume-slider input[type=range]{width:65px;height:4px;appearance:none;-webkit-appearance:none;background:rgba(255,255,255,.3);border-radius:2px;outline:0;cursor:pointer;accent-color:#e50914}.dynamo-volume-slider input[type=range]::-webkit-slider-thumb{width:12px;height:12px;border-radius:50%;background:#e50914;cursor:pointer;-webkit-appearance:none}.dynamo-spacer{flex:1}.dynamo-time{padding:0 8px;font-size:14px;font-weight:400;white-space:nowrap;color:#fff}.dynamo-ripple{position:absolute;transform:scale(0);border-radius:50%;background:rgba(255,255,255,.15);pointer-events:none;z-index:10;animation:.5s ease-out forwards dynamo-ripple-anim}@keyframes dynamo-ripple-anim{to{transform:scale(4);opacity:0}}.dynamo-wrapper.is-playing.hide-controls,.dynamo-wrapper.is-playing.hide-controls .dynamo-btn-os,.dynamo-wrapper.is-playing.hide-controls .dynamo-overscreen,.dynamo-wrapper.is-playing.hide-controls video{cursor:none}.dynamo-menu-context{position:absolute;bottom:60px;right:16px;width:240px;opacity:0;pointer-events:none;overflow:hidden;border-radius:4px;color:#fff;font-size:14px;background:rgba(20,20,20,.95);box-shadow:0 8px 24px rgba(0,0,0,.6);transform:translateY(10px);z-index:10;transition:opacity .2s ease,transform .2s ease}.dynamo-menu-context.active{opacity:1;transform:translateY(0);pointer-events:auto}.dynamo-menu-header{display:flex;align-items:center;gap:12px;padding:14px 16px;font-weight:700;font-size:16px;background:rgba(0,0,0,.4);cursor:pointer;transition:background .15s}.dynamo-menu-header:hover{background:rgba(255,255,255,.1)}.dynamo-menu-list{list-style:none;margin:0;padding:8px 0;max-height:260px;overflow-y:auto;overflow-x:hidden}.dynamo-menu-list::-webkit-scrollbar{width:6px}.dynamo-menu-list::-webkit-scrollbar-thumb{background:rgba(255,255,255,.3);border-radius:3px}.dynamo-menu-list::-webkit-scrollbar-thumb:hover{background:rgba(255,255,255,.5)}.dynamo-menu-item{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;cursor:pointer;transition:background .1s ease}.dynamo-menu-item:hover{background:rgba(255,255,255,.1)}.dynamo-menu-item.selected{font-weight:700;color:#fff}.dynamo-menu-item .val{display:flex;align-items:center;gap:6px;color:#aaa}.dynamo-wrapper video::cue{background:0 0;color:#fff;font-family:'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:22px;line-height:1.3;text-shadow:0 0 4px rgba(0,0,0,.8),0 0 8px rgba(0,0,0,.8),2px 2px 3px rgba(0,0,0,.9)}.dynamo-ambient-canvas{position:absolute;top:50%;left:50%;width:100%;height:100%;opacity:0;pointer-events:none;transform:translate(-50%,-50%) scale(1.1);z-index:0;filter:blur(60px) brightness(1.2) saturate(1.5);transition:opacity 1.5s}.dynamo-wrapper.ambient-active .dynamo-ambient-canvas{opacity:.4}.dynamo-pip-btn{display:none}";
        document.head.appendChild(e)
      }();
      document.querySelectorAll("video#dynamoPlayer").forEach(n)
    }

    "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", o) : o();
    t.DynamoPlayer = { init: o }

  }(window);
}();
//# sourceMappingURL=dynamo-player.iife.js.map
