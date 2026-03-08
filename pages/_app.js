/**
 * _app.js
 * Custom App component — imports global styles.
 */

import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}