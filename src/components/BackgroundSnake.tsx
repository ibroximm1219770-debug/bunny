import { useEffect, useRef } from 'react';
import { playSubtleSnakeSound } from '../utils/audio';

interface BackgroundSnakeProps {
  soundEnabled: boolean;
}

interface Segment {
  x: number;
  y: number;
}

interface ActiveSnake {
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  targetAngle: number;
  speed: number;
  wiggleSpeed: number;
  wiggleAmp: number;
  wigglePhase: number;
  length: number;
  segmentDist: number;
  headRadius: number;
  segments: Segment[];
  alive: boolean;
  spawnTime: number;
}

export default function BackgroundSnake({ soundEnabled }: BackgroundSnakeProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const snakeRef = useRef<ActiveSnake | null>(null);
  const timerRef = useRef<number | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const soundEnabledRef = useRef(soundEnabled);

  useEffect(() => {
    soundEnabledRef.current = soundEnabled;
  }, [soundEnabled]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const spawnSnake = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      // Pick random entry side: 0=left, 1=right, 2=top, 3=bottom, 4=corner
      const side = Math.floor(Math.random() * 5);
      let startX = 0;
      let startY = 0;
      let targetX = w / 2;
      let targetY = h / 2;

      const padding = 80;

      if (side === 0) {
        // Left -> moving right/diagonal
        startX = -padding;
        startY = Math.random() * h;
        targetX = w + padding;
        targetY = Math.random() * h;
      } else if (side === 1) {
        // Right -> moving left/diagonal
        startX = w + padding;
        startY = Math.random() * h;
        targetX = -padding;
        targetY = Math.random() * h;
      } else if (side === 2) {
        // Top -> moving down/diagonal
        startX = Math.random() * w;
        startY = -padding;
        targetX = Math.random() * w;
        targetY = h + padding;
      } else if (side === 3) {
        // Bottom -> moving up/diagonal
        startX = Math.random() * w;
        startY = h + padding;
        targetX = Math.random() * w;
        targetY = -padding;
      } else {
        // Corner diagonal
        startX = Math.random() > 0.5 ? -padding : w + padding;
        startY = Math.random() > 0.5 ? -padding : h + padding;
        targetX = startX < 0 ? w + padding : -padding;
        targetY = startY < 0 ? h + padding : -padding;
      }

      const dx = targetX - startX;
      const dy = targetY - startY;
      const baseAngle = Math.atan2(dy, dx);

      // Random attributes for variety
      const speed = 2.8 + Math.random() * 2.2;
      const segmentCount = 28 + Math.floor(Math.random() * 16);
      const segmentDist = 6 + Math.random() * 3;
      const headRadius = 3.5 + Math.random() * 1.5;

      const segments: Segment[] = [];
      for (let i = 0; i < segmentCount; i++) {
        segments.push({
          x: startX - Math.cos(baseAngle) * (i * segmentDist),
          y: startY - Math.sin(baseAngle) * (i * segmentDist),
        });
      }

      snakeRef.current = {
        x: startX,
        y: startY,
        vx: Math.cos(baseAngle) * speed,
        vy: Math.sin(baseAngle) * speed,
        angle: baseAngle,
        targetAngle: baseAngle,
        speed,
        wiggleSpeed: 0.12 + Math.random() * 0.08,
        wiggleAmp: 0.45 + Math.random() * 0.35,
        wigglePhase: 0,
        length: segmentCount,
        segmentDist,
        headRadius,
        segments,
        alive: true,
        spawnTime: performance.now(),
      };

      if (soundEnabledRef.current) {
        playSubtleSnakeSound();
      }

      // Schedule next spawn in 15 to 30 seconds
      scheduleNextSpawn();
    };

    const scheduleNextSpawn = () => {
      // Random interval between 15,000ms and 30,000ms
      const delay = 15000 + Math.random() * 15000;
      timerRef.current = window.setTimeout(() => {
        spawnSnake();
      }, delay);
    };

    // First spawn after a modest intro delay (10-15s) so it doesn't immediately interrupt the intro
    const initialDelay = 12000 + Math.random() * 8000;
    timerRef.current = window.setTimeout(() => {
      spawnSnake();
    }, initialDelay);

    let lastTime = performance.now();

    const loop = (currentTime: number) => {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const snake = snakeRef.current;
      if (snake && snake.alive) {
        // Advance snake wiggle
        snake.wigglePhase += snake.wiggleSpeed;
        const currentAngle = snake.angle + Math.sin(snake.wigglePhase) * snake.wiggleAmp;

        // Move head
        snake.x += Math.cos(currentAngle) * snake.speed;
        snake.y += Math.sin(currentAngle) * snake.speed;

        // Update segments using inverse kinematics
        snake.segments[0].x = snake.x;
        snake.segments[0].y = snake.y;

        for (let i = 1; i < snake.segments.length; i++) {
          const prev = snake.segments[i - 1];
          const curr = snake.segments[i];
          const segDx = prev.x - curr.x;
          const segDy = prev.y - curr.y;
          const dist = Math.hypot(segDx, segDy);
          if (dist > 0.001) {
            const factor = (dist - snake.segmentDist) / dist;
            curr.x += segDx * factor;
            curr.y += segDy * factor;
          }
        }

        // Draw snake with glow
        ctx.save();
        ctx.shadowColor = 'rgba(255, 255, 255, 0.45)';
        ctx.shadowBlur = 10;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        // Draw body segments with tapering width and opacity
        for (let i = 0; i < snake.segments.length - 1; i++) {
          const progress = i / snake.segments.length;
          const radius = Math.max(1, snake.headRadius * (1 - progress * 0.75));
          const alpha = Math.max(0.1, 0.85 * (1 - progress * 0.6));

          ctx.beginPath();
          ctx.moveTo(snake.segments[i].x, snake.segments[i].y);
          ctx.lineTo(snake.segments[i + 1].x, snake.segments[i + 1].y);
          ctx.strokeStyle = `rgba(240, 244, 255, ${alpha})`;
          ctx.lineWidth = radius * 2;
          ctx.stroke();
        }

        // Draw sleek glowing head
        const head = snake.segments[0];
        ctx.beginPath();
        ctx.arc(head.x, head.y, snake.headRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = 14;
        ctx.fill();

        ctx.restore();

        // Check if snake left visible boundaries by a safe margin
        const margin = 180;
        const allSegmentsOffscreen = snake.segments.every(
          (seg) =>
            seg.x < -margin ||
            seg.x > canvas.width + margin ||
            seg.y < -margin ||
            seg.y > canvas.height + margin
        );

        if (allSegmentsOffscreen && performance.now() - snake.spawnTime > 4000) {
          snake.alive = false;
          snakeRef.current = null;
        }
      }

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', resize);
      if (timerRef.current) clearTimeout(timerRef.current);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="background-snake-canvas"
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
}
