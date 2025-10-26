import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import IntroSection from './intro/IntroSection.jsx'
import HeroPage from './pages/Hero.jsx'
const App = () => {

  return (
    <>
      <Routes>
        {/* Shared layout & nested routes */}
        <Route path="/" element={<IntroSection />} />
        <Route path="/hero" element={<HeroPage />} />

        {/* Redirects */}
        <Route path="home" element={<Navigate to="/" replace />} />

        {/* 404 */}
      </Routes>
      
    </>
  )
}

export default App
