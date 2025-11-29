import React, { useState, useEffect } from 'react';
import FrameAnimation from './FrameAnimation';

const MainScreen = ({ onActivate }) => {
  const [animState, setAnimState] = useState('idle'); // idle | playing | result
  const [result, setResult] = useState(null);

  const handleClick = () => {
    if (animState !== 'idle') return;
    // choose random result
    const pick = Math.random() < 0.5 ? 'ДА' : 'НЕТ';
    setResult(pick);
    setAnimState('playing');
  };

  // Сразу возвращаемся к idle после окончания анимации
  const handleAnimEnd = () => {
    setAnimState('idle');
    setResult(null);
    if (typeof onActivate === 'function') onActivate(result);
  };

  return (
    <div
      className="bg-image2"
      style={{
        backgroundImage: "url('/bg2.png')",
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
      }}
    >

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
        {/* show 8ball or animation */}
        {animState === 'idle' && (
          <>
              <img src="/8ball.png" alt="8 Ball" style={{ maxWidth: 510, maxHeight: 282, objectFit: 'contain', display: 'block', marginTop: 130 }} />
            {/* Кнопка Activate под 8ball */}
            <img
              src="/activate.png"
              alt="Activate"
              style={{ marginTop: 40, maxWidth: 220, height: 'auto', display: 'block', cursor: 'pointer' }}
              onClick={handleClick}
            />
          </>
        )}

        {animState === 'playing' && (
          result === 'ДА' ? (
            <FrameAnimation folder="/anim_yes_frames/" frameCount={113} fps={35} onEnd={handleAnimEnd} />
          ) : (
            <FrameAnimation folder="/anim_no_frames/" frameCount={113} fps={35} onEnd={handleAnimEnd} />
          )
        )}

        {/* ...result overlay удалён, теперь 8ball появляется сразу после анимации... */}
      </div>
    </div>
  );
};

export default MainScreen;
