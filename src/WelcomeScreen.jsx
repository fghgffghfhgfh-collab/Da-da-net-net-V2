import React, { useEffect } from 'react';

const WelcomeScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className="bg-image"
      style={{
        backgroundImage: "url('/bg1.png')",
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
      }}
    >
      <h1>Да-да, Нет-нет</h1>
    </div>
  );
};

export default WelcomeScreen;
