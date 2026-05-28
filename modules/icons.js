/* =========================================================
   Dynamo Player — modules/icons.js
   Netflix Style Icons - Bold, Filled, Cinematic, Premium
   ========================================================= */
export const DynamoIcons = {
  play: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 3.868c0-1.261 1.37-2.046 2.443-1.4l12.1 7.132c1.057.636 1.057 2.164 0 2.8l-12.1 7.132C6.37 20.178 5 19.393 5 18.132V3.868z"/>
  </svg>`,
  pause: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5 3C6.328 3 7 3.672 7 4.5v15c0 .828-.672 1.5-1.5 1.5h-1A1.5 1.5 0 0 1 3 19.5v-15C3 3.672 3.672 3 4.5 3h1zm13 0c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h1z"/>
  </svg>`,
  back10: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.99 5V1.5l-5.5 4.4 5.5 4.4V7a6 6 0 1 1-5.82 7.5h-2.05A8 8 0 1 0 11.99 5z"/>
    <text x="12" y="16.5" font-size="7.5" font-weight="800" font-family="'Netflix Sans', 'Helvetica Neue', Arial, sans-serif" text-anchor="middle" fill="currentColor">10</text>
  </svg>`,
  forward10: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.01 5V1.5l5.5 4.4-5.5 4.4V7a6 6 0 1 0 5.82 7.5h2.05A8 8 0 1 1 12.01 5z"/>
    <text x="12" y="16.5" font-size="7.5" font-weight="800" font-family="'Netflix Sans', 'Helvetica Neue', Arial, sans-serif" text-anchor="middle" fill="currentColor">10</text>
  </svg>`,
  volumeHigh: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 2.04c.35-.13.74-.06 1.02.18.28.24.44.59.44.96v17.64c0 .37-.16.72-.44.96a1.06 1.06 0 0 1-1.02.18L5.84 18H3c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h2.84L11 2.04z"/>
    <path d="M15.54 8.46a5 5 0 0 1 0 7.08" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M18.48 5.52a9 9 0 0 1 0 12.96" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,
  volumeLow: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 2.04c.35-.13.74-.06 1.02.18.28.24.44.59.44.96v17.64c0 .37-.16.72-.44.96a1.06 1.06 0 0 1-1.02.18L5.84 18H3c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h2.84L11 2.04z"/>
    <path d="M15.54 8.46a5 5 0 0 1 0 7.08" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,
  volumeMute: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 2.04c.35-.13.74-.06 1.02.18.28.24.44.59.44.96v17.64c0 .37-.16.72-.44.96a1.06 1.06 0 0 1-1.02.18L5.84 18H3c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h2.84L11 2.04z"/>
    <path d="M22 9.5l-5 5m0-5l5 5" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,
  fullscreen: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 8.5V5a2 2 0 0 1 2-2h3.5a1 1 0 0 1 0 2H5.5a.5.5 0 0 0-.5.5V8.5a1 1 0 0 1-2 0zm12.5-5.5H19a2 2 0 0 1 2 2v3.5a1 1 0 0 1-2 0V5.5a.5.5 0 0 0-.5-.5h-3a1 1 0 0 1 0-2zM4 15.5a1 1 0 0 1 1 1v2.5a.5.5 0 0 0 .5.5H9a1 1 0 0 1 0 2H5a2 2 0 0 1-2-2v-3.5a1 1 0 0 1 1-1zm16 0a1 1 0 0 1 1 1V19a2 2 0 0 1-2 2h-3.5a1 1 0 0 1 0-2h2.5a.5.5 0 0 0 .5-.5V16.5a1 1 0 0 1 1.5 0z"/>
  </svg>`,
  exitFullscreen: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 3a1 1 0 0 1 1 1v3a2 2 0 0 1-2 2H4a1 1 0 0 1 0-2h3.5a.5.5 0 0 0 .5-.5V4a1 1 0 0 1 1-1zm6 0a1 1 0 0 1 1 1v2.5a.5.5 0 0 0 .5.5H20a1 1 0 0 1 0 2h-4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1zM4 15a1 1 0 0 1 0 2h3.5a.5.5 0 0 1 .5.5V20a1 1 0 0 0 2 0v-3a2 2 0 0 0-2-2H4zm16 0h-4a2 2 0 0 0-2 2v3a1 1 0 0 0 2 0v-2.5a.5.5 0 0 1 .5-.5H20a1 1 0 0 0 0-2z"/>
  </svg>`,
  config: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.14 12.94a7.07 7.07 0 0 0 .06-.94 7.07 7.07 0 0 0-.06-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96a7.04 7.04 0 0 0-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84a.48.48 0 0 0-.48.41l-.36 2.54a7.04 7.04 0 0 0-1.62.94l-2.39-.96a.49.49 0 0 0-.59.22L2.74 9.87a.48.48 0 0 0 .12.61l2.03 1.58a7.2 7.2 0 0 0 0 1.88l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.04.7 1.62.94l.36 2.54c.05.24.26.41.48.41h3.84c.24 0 .44-.17.48-.41l.36-2.54a7.04 7.04 0 0 0 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 0 0-.12-.61l-2.03-1.58zM12 15.6A3.6 3.6 0 1 1 12 8.4a3.6 3.6 0 0 1 0 7.2z"/>
  </svg>`,
  pip: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 3H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM3 5h18v14H3V5z"/>
    <rect x="12" y="11" width="8" height="6" rx="1"/>
  </svg>`,
  quality: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="5" width="20" height="14" rx="3"/>
    <text x="12" y="15.5" font-size="7" font-weight="900" font-family="'Netflix Sans', 'Helvetica Neue', Arial, sans-serif" text-anchor="middle" fill="black">HD</text>
  </svg>`,
  playRate: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
  </svg>`,
  subtitles: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM4 6h16v12H4V6z"/>
    <rect x="6" y="12" width="4" height="2" rx=".5"/>
    <rect x="12" y="12" width="6" height="2" rx=".5"/>
    <rect x="6" y="15.5" width="12" height="2" rx=".5"/>
  </svg>`,
  audio: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/>
  </svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <polyline points="20 6 9 17 4 12"/>
  </svg>`,
  chevronLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <polyline points="15 18 9 12 15 6"/>
  </svg>`,
  chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <polyline points="9 18 15 12 9 6"/>
  </svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>`,
  cast: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 18v3h3a3 3 0 0 0-3-3zm0-4v2a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7zm0-4v2a9 9 0 0 1 9 9h2C12 14.07 7.93 10 1 10zm20-7H3a2 2 0 0 0-2 2v3h2V5h18v14h-7v2h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/>
  </svg>`,
  skipIntro: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4.5a.5.5 0 0 1 .78-.42l9.47 7.5a.5.5 0 0 1 0 .84l-9.47 7.5A.5.5 0 0 1 4 19.5v-15z"/>
    <rect x="17" y="4" width="3" height="16" rx="1"/>
  </svg>`,
  nextEpisode: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 4.27a.5.5 0 0 1 .77-.42l8.5 5.73a.5.5 0 0 1 0 .84l-8.5 5.73a.5.5 0 0 1-.77-.42V4.27z"/>
    <path d="M12.5 4.27a.5.5 0 0 1 .77-.42l8.5 5.73a.5.5 0 0 1 0 .84l-8.5 5.73a.5.5 0 0 1-.77-.42V4.27z"/>
  </svg>`,
  previousEpisode: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.5 4.27v11.46a.5.5 0 0 1-.77.42l-8.5-5.73a.5.5 0 0 1 0-.84l8.5-5.73a.5.5 0 0 1 .77.42z"/>
    <path d="M11.5 4.27v11.46a.5.5 0 0 1-.77.42L2.23 10.42a.5.5 0 0 1 0-.84l8.5-5.73a.5.5 0 0 1 .77.42z"/>
  </svg>`,
  replay: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5V1L7 6l5 5V7a6 6 0 1 1-6 6H4a8 8 0 1 0 8-8z"/>
  </svg>`,
  share: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7A3.07 3.07 0 0 0 9 12c0-.24-.04-.47-.09-.7l7.05-4.11A2.97 2.97 0 0 0 18 8a3 3 0 1 0-3-3c0 .24.04.47.09.7L8.04 9.81A2.97 2.97 0 0 0 6 9a3 3 0 1 0 0 6c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65a2.92 2.92 0 1 0 2.92-2.92z"/>
  </svg>`,
  info: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
    <path d="M11 7h2v2h-2zm0 4h2v6h-2z"/>
  </svg>`,
  download: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 9h-4V3H9v6H5l7 7 7-7z"/>
    <path d="M5 18v2h14v-2H5z"/>
  </svg>`,
  lock: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
  </svg>`,
  airplay: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 22h12l-6-6-6 6z"/>
    <path d="M21 3H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4v-2H3V5h18v12h-4v2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/>
  </svg>`,
  loop: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>
  </svg>`,
  theater: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM4 9h16v6H4V9z"/>
  </svg>`,
  chapters: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="3" height="4" rx="1"/>
    <rect x="9" y="5" width="12" height="2" rx="1"/>
    <rect x="3" y="10" width="3" height="4" rx="1"/>
    <rect x="9" y="11" width="12" height="2" rx="1"/>
    <rect x="3" y="16" width="3" height="4" rx="1"/>
    <rect x="9" y="17" width="12" height="2" rx="1"/>
  </svg>`
};
