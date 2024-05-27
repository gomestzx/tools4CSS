import React, { useState, useRef, useEffect, MouseEvent, TouchEvent } from 'react';

interface AnglePickerProps {
  initialAngle?: number;
  onAngleChange?: (angle: number) => void;
}

const AnglePicker: React.FC<AnglePickerProps> = ({ initialAngle = 0, onAngleChange }) => {
  const [angle, setAngle] = useState<number>(initialAngle);
  const knobRef = useRef<HTMLDivElement>(null);

  const calculateAngle = (x: number, y: number, centerX: number, centerY: number): number => {
    const dx = x - centerX;
    const dy = y - centerY;
    let radians = Math.atan2(dy, dx);
    let degrees = (radians * 180) / Math.PI;
    return (degrees + 90 + 360) % 360;
  };

  const handleMouseMove = (e: MouseEvent | TouchEvent) => {
    if (knobRef.current) {
      const rect = knobRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      const newAngle = Math.round(calculateAngle(clientX, clientY, centerX, centerY));
      setAngle(newAngle);
      if (onAngleChange) {
        onAngleChange(newAngle);
      }
    }
  };

  const handleMouseDown = (e: MouseEvent | TouchEvent) => {
    document.addEventListener('mousemove', handleMouseMove as any);
    document.addEventListener('touchmove', handleMouseMove as any);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchend', handleMouseUp);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove as any);
    document.removeEventListener('touchmove', handleMouseMove as any);
    document.removeEventListener('mouseup', handleMouseUp);
    document.removeEventListener('touchend', handleMouseUp);
  };

  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMouseMove as any);
      document.removeEventListener('touchmove', handleMouseMove as any);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div className="flex items-center w-full">
      <div
        ref={knobRef}
        className="relative w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        style={{ transform: `rotate(${angle}deg)` }}
      >
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-blue-600 w-2 h-2 rounded-full m-1"></div>
      </div>
      <div className="ml-2 text-md w-4">{Math.round(angle)}°</div>
    </div>
  );
};

export default AnglePicker;
