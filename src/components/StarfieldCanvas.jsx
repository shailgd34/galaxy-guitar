import React, { useEffect, useRef } from 'react';

const StarfieldCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let time = 0;
    const maxZ = 1000;
    let galaxyRotation = 0;

    // 3D Starfield travel particle class
    class TravelingStar {
      constructor() {
        this.reset();
        this.z = Math.random() * maxZ;
        this.prevZ = this.z;
      }

      reset() {
        this.x = (Math.random() - 0.5) * width * 2.2;
        this.y = (Math.random() - 0.5) * height * 2.2;
        this.z = maxZ;
        this.prevZ = maxZ;
        this.size = Math.random() * 1.3 + 0.4;
        this.color = this.getRandomColor();
      }

      getRandomColor() {
        const colors = [
          'rgba(255, 255, 255, ',
          'rgba(0, 229, 255, ',
          'rgba(236, 72, 153, ', // Pink starlight
          'rgba(139, 92, 246, '  // Purple starlight
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      update(scrollFactor) {
        this.prevZ = this.z;
        const travelSpeed = 3.5 + scrollFactor * 0.35;
        this.z -= travelSpeed;

        if (this.z <= 0) {
          this.reset();
        }
      }

      draw(centerX, centerY, scrollFactor) {
        const k = 400 / this.z;
        const px = this.x * k + centerX;
        const py = this.y * k + centerY;

        if (px < 0 || px > width || py < 0 || py > height) {
          return;
        }

        const opacity = Math.min(1, (1 - this.z / maxZ) * 1.5);
        const size = this.size * k * 0.45;

        ctx.strokeStyle = `${this.color}${opacity * 0.95})`;
        ctx.fillStyle = `${this.color}${opacity * 0.95})`;
        ctx.shadowBlur = size * 2.5;
        ctx.shadowColor = `${this.color}${opacity})`;

        if (scrollFactor > 12) {
          const prevK = 400 / this.prevZ;
          const ppx = this.x * prevK + centerX;
          const ppy = this.y * prevK + centerY;

          ctx.beginPath();
          ctx.lineWidth = Math.max(0.5, size * 0.65);
          ctx.moveTo(ppx, ppy);
          ctx.lineTo(px, py);
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(px, py, Math.max(0.2, size), 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // 2D Spiral Galaxy Particle class
    class GalaxyParticle {
      constructor() {
        // Assign to Arm 1 (0) or Arm 2 (PI)
        this.arm = Math.random() > 0.5 ? 0 : Math.PI;
        // Distance from center
        this.distance = Math.pow(Math.random(), 1.8) * 350 + 20;
        // Dispersion offset to make arm look naturally fuzzy
        this.dispersionX = (Math.random() - 0.5) * (this.distance * 0.25);
        this.dispersionY = (Math.random() - 0.5) * (this.distance * 0.25);
        this.size = Math.random() * 1.6 + 0.5;
        this.color = this.getRandomColor();
      }

      getRandomColor() {
        const roll = Math.random();
        if (roll > 0.7) return 'rgba(0, 229, 255, 0.8)';  // Cyan
        if (roll > 0.4) return 'rgba(139, 92, 246, 0.7)'; // Purple
        if (roll > 0.2) return 'rgba(236, 72, 153, 0.8)'; // Hot Pink
        return 'rgba(255, 255, 255, 0.9)';               // White
      }

      draw(centerX, centerY, angleOffset) {
        // Spiral equations (polar: r = a * theta)
        // Adjust spiral density winding factor
        const winding = 0.015;
        const theta = this.distance * winding;
        const currentAngle = this.arm + theta + angleOffset;

        const x = centerX + Math.cos(currentAngle) * this.distance + this.dispersionX;
        const y = centerY + Math.sin(currentAngle) * this.distance + this.dispersionY;

        ctx.beginPath();
        ctx.arc(x, y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = this.size * 3;
        ctx.shadowColor = this.color;
        ctx.fill();
      }
    }

    class Ray {
      constructor(angle, speed, widthFactor) {
        this.angle = angle;
        this.speed = speed;
        this.widthFactor = widthFactor;
      }

      update() {
        this.angle += this.speed;
      }

      draw(centerX, centerY, maxRadius) {
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        
        const a1 = this.angle - this.widthFactor;
        const a2 = this.angle + this.widthFactor;
        
        ctx.lineTo(centerX + Math.cos(a1) * maxRadius, centerY + Math.sin(a1) * maxRadius);
        ctx.lineTo(centerX + Math.cos(a2) * maxRadius, centerY + Math.sin(a2) * maxRadius);
        ctx.closePath();

        const grad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
        grad.addColorStop(0, 'rgba(59, 130, 246, 0.035)');
        grad.addColorStop(0.5, 'rgba(139, 92, 246, 0.015)');
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = grad;
        ctx.fill();
      }
    }

    const rays = Array.from({ length: 6 }, (_, i) => new Ray((i * Math.PI) / 3, 0.0003, 0.12));
    const stars = Array.from({ length: 150 }, () => new TravelingStar());
    const galaxyParticles = Array.from({ length: 220 }, () => new GalaxyParticle());

    let scrollSpeed = 0;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollSpeed = Math.abs(currentScrollY - lastScrollY);
      lastScrollY = currentScrollY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    const render = () => {
      time += 0.0025;
      galaxyRotation += 0.0012; // Spins the spiral galaxy
      const centerX = width / 2;
      const centerY = height / 2;
      const maxRadius = Math.max(width, height);

      // Deep space black backdrop
      ctx.fillStyle = '#030712';
      ctx.shadowBlur = 0;
      ctx.fillRect(0, 0, width, height);

      // Draw Volumetric Nebula Cloud 1 (Purple Glow - increased opacity)
      const neb1X = centerX + Math.cos(time * 0.4) * 80;
      const neb1Y = centerY + Math.sin(time * 0.25) * 60;
      const gradNeb1 = ctx.createRadialGradient(neb1X, neb1Y, 50, neb1X, neb1Y, maxRadius * 0.65);
      gradNeb1.addColorStop(0, 'rgba(139, 92, 246, 0.15)'); // Increased opacity for richer galaxy look
      gradNeb1.addColorStop(0.4, 'rgba(236, 72, 153, 0.07)'); // Pink highlights
      gradNeb1.addColorStop(0.7, 'rgba(8, 17, 31, 0.02)');
      gradNeb1.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradNeb1;
      ctx.fillRect(0, 0, width, height);

      // Draw Volumetric Nebula Cloud 2 (Plasma Cyber Blue - increased opacity)
      const neb2X = centerX - Math.sin(time * 0.3) * 100;
      const neb2Y = centerY - Math.cos(time * 0.5) * 70;
      const gradNeb2 = ctx.createRadialGradient(neb2X, neb2Y, 30, neb2X, neb2Y, maxRadius * 0.5);
      gradNeb2.addColorStop(0, 'rgba(0, 229, 255, 0.12)'); // Increased opacity
      gradNeb2.addColorStop(0.5, 'rgba(14, 27, 52, 0.02)');
      gradNeb2.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradNeb2;
      ctx.fillRect(0, 0, width, height);

      // Draw volumetric rotating light rays
      rays.forEach((ray) => {
        ray.update();
        ray.draw(centerX, centerY, maxRadius);
      });

      // Draw the rotating Spiral Galaxy core and arms
      galaxyParticles.forEach((part) => {
        part.draw(centerX, centerY, galaxyRotation);
      });

      // Draw the galaxy core highlight (hot white-cyan glow in the center)
      const coreGrad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 120);
      coreGrad.addColorStop(0, 'rgba(255, 255, 255, 0.22)');
      coreGrad.addColorStop(0.3, 'rgba(0, 229, 255, 0.12)');
      coreGrad.addColorStop(0.7, 'rgba(139, 92, 246, 0.05)');
      coreGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 120, 0, Math.PI * 2);
      ctx.fill();

      // Update and draw traveling stars (foreground)
      stars.forEach((star) => {
        star.update(scrollSpeed);
        star.draw(centerX, centerY, scrollSpeed);
      });

      if (scrollSpeed > 0) {
        scrollSpeed *= 0.93;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        background: '#030712',
      }}
    />
  );
};

export default StarfieldCanvas;
