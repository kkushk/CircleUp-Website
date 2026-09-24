import React, { useEffect, useRef } from 'react';
import createGlobe, { Globe } from 'cobe';

interface RotatingGlobeProps {
  className?: string;
  size?: number;
}

export const RotatingGlobe: React.FC<RotatingGlobeProps> = ({ 
  className = '',
  size = 480 
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const phiRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let width = canvas.offsetWidth || size;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let globe: Globe | null = null;
    let animId: number;

    try {
      globe = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: width * 2,
        height: width * 2,
        phi: 0,
        theta: 0.22,
        dark: 1,
        diffuse: 1.4,
        mapSamples: 16000,
        mapBrightness: 4.8,
        baseColor: [0.03, 0.05, 0.09], // Deep obsidian / matte black
        markerColor: [0, 0.4, 1],       // CircleUp vibrant blue
        glowColor: [0.08, 0.12, 0.22],  // Subtle atmospheric edge rim glow
        opacity: 0.98,
        markers: [
          // Key sports communities & athletic club regions
          { location: [42.3601, -71.0589], size: 0.08 }, // Boston
          { location: [40.7128, -74.0060], size: 0.07 }, // New York
          { location: [41.8781, -87.6298], size: 0.06 }, // Chicago
          { location: [37.7749, -122.4194], size: 0.06 }, // San Francisco
          { location: [25.7617, -80.1918], size: 0.06 }, // Miami
          { location: [51.5074, -0.1278], size: 0.06 },  // London
          { location: [28.6139, 77.2090], size: 0.05 },  // New Delhi
          { location: [40.4168, -3.7038], size: 0.06 },  // Madrid (Padel hub)
        ],
      });
    } catch {
      return;
    }

    const onResize = () => {
      if (canvas && globe) {
        width = canvas.offsetWidth || size;
        globe.update({
          width: width * 2,
          height: width * 2,
        });
      }
    };
    window.addEventListener('resize', onResize);

    const animate = () => {
      if (!pointerInteracting.current) {
        phiRef.current += 0.0035;
      }
      if (globe) {
        globe.update({
          phi: phiRef.current + pointerInteractionMovement.current,
        });
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      if (globe) {
        globe.destroy();
      }
    };
  }, [size]);

  return (
    <div 
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{ width: '100%', maxWidth: `${size}px`, aspectRatio: '1 / 1' }}
    >
      {/* Outer ambient glow behind globe */}
      <div className="absolute inset-2 sm:inset-4 rounded-full bg-gradient-to-b from-blue-500/10 via-slate-900/30 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing transition-opacity duration-700"
        style={{ width: '100%', height: '100%', contain: 'layout paint size' }}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = 'grabbing';
          }
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = 'grab';
          }
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = 'grab';
          }
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta * 0.006;
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta * 0.006;
          }
        }}
      />
    </div>
  );
};
