import React, { useEffect, useRef, useState } from 'react';

const FrameAnimation = ({ folder = '/anim_yes_frames/', frameCount = 113, fps = 24, onEnd }) => {
  const [frame, setFrame] = useState(1);
  const intervalRef = useRef(null);

  useEffect(() => {
    setFrame(1);
    intervalRef.current = setInterval(() => {
      setFrame((prev) => {
        if (prev < frameCount) {
          return prev + 1;
        } else {
          clearInterval(intervalRef.current);
          if (onEnd) onEnd();
          return prev;
        }
      });
    }, 1000 / fps);
    return () => clearInterval(intervalRef.current);
  }, [folder, frameCount, fps, onEnd]);

  // Формируем имя файла: 0001.png, 0002.png ...
  const pad = (num, size) => {
    return num.toString().padStart(size, '0');
  };

  // Проверяем диапазон кадров
  const safeFrame = Math.min(Math.max(frame, 1), frameCount);
  const src = `${folder}${pad(safeFrame, 4)}.png`;

  return (
    <img src={src} alt={`frame ${safeFrame}`} style={{ maxWidth: 480, maxHeight: 260, objectFit: 'contain', display: 'block' }} />
  );
};

export default FrameAnimation;
