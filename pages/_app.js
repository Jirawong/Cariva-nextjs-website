import '../styles/globals.css'; // Import your global CSS here
import React from 'react';
import { Poppins } from '@next/font/google';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      {/* You can add any global components or layouts here */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
