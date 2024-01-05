import React from 'react';

const Background = () => (
  <div style={{
    position: 'fixed', // Changed from 'absolute' to 'fixed'
    top: 0, // Added to ensure the div starts from the top
    left: 0, // Added to ensure the div starts from the left
    width: '100%',
    height: '100%',
    backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 700 700" width="700" height="700">
        <defs>
          <filter id="nnnoise-filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
            <feTurbulence type="turbulence" baseFrequency="0.117" numOctaves="4" seed="15" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence" />
            <feSpecularLighting surfaceScale="13" specularConstant="0.6" specularExponent="20" lighting-color="#9013fe" x="0%" y="0%" width="100%" height="100%" in="turbulence" result="specularLighting">
              <feDistantLight azimuth="3" elevation="85" />
            </feSpecularLighting>
            <feColorMatrix type="saturate" values="0" x="0%" y="0%" width="100%" height="100%" in="specularLighting" result="colormatrix" />
          </filter>
        </defs>
        <rect width="700" height="700" fill="transparent" />
        <rect width="700" height="700" fill="#9013fe" filter="url(#nnnoise-filter)" />
      </svg>
    `)}")`,
    backgroundRepeat: 'repeat',
  }} />
);

export default Background;