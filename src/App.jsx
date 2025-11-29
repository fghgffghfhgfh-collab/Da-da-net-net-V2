import React, { useState, useEffect, useRef } from 'react';
import MainScreen from './MainScreen';

function App() {
  const [fade, setFade] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const fadeTimeout = useRef(null);
  const [anim, setAnim] = useState(null); // null | 'yes' | 'no'

  // Функция для кнопки Activate
  const handleActivate = () => {
    if (anim) return;
    const result = Math.random() < 0.5 ? 'yes' : 'no';
    setAnim(result);
    const src = result === 'yes' ? `/anim_yes.gif?t=${Date.now()}` : `/anim_no.gif?t=${Date.now()}`;
    setGifSrc(src);
    setAnimKey(Date.now());
  };

  useEffect(() => {
    if (showWelcome) {
      fadeTimeout.current = setTimeout(() => {
        setFade(true);
        setTimeout(() => setShowWelcome(false), 800); // 800ms = время анимации
      }, 3000);
      return () => {
        clearTimeout(fadeTimeout.current);
      };
    }
  }, [showWelcome]);

  // ...existing code...

  return (
    <div className="app-root">
      <MainScreen />
      {showWelcome && (
        <div className={`bg-image fade-screen${fade ? ' fade-out' : ''}`} style={{ backgroundImage: "url('/bg1.png')" }}>
          <div style={{ textAlign: 'center' }}>
            <h1>Да-да, Нет-нет</h1>
            <div className="subtitle">made for mashkaxd</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
