import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import XRScene from './Page/XRScene.jsx'
import VRTest from './Page/VRTest.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <XRScene /> */}
    <VRTest />
  </StrictMode>,
)
