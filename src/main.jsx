import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';

import '../src/styles/index.scss';
import '../src/styles/fonts.scss';
import '../src/styles/_mixins.scss';

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <App />
  // </StrictMode>,
);
