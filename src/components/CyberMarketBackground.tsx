import React, { useEffect, useRef } from 'react';

const CyberMarketBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        interface Candle {
            x: number;
            open: number;
            close: number;
            high: number;
            low: number;
            width: number;
            color: string;
        }

        interface Line {
            points: { x: number; y: number; originalY: number }[];
            color: string;
            opacity: number;
        }

        const candles: Candle[] = [];
        const lines: Line[] = [];
        const candleWidth = 12;
        const gap = 8;
        const count = Math.ceil(width / (candleWidth + gap));

        // Initialize lines
        for (let i = 0; i < 3; i++) {
            const points = [];
            let lastY = height * 0.5 + (Math.random() - 0.5) * 200;
            for (let x = -100; x <= width + 100; x += 50) {
                const y = lastY + (Math.random() - 0.5) * 100;
                points.push({ x, y, originalY: y });
                lastY = y;
            }
            lines.push({
                points,
                color: i === 0 ? '#00ff88' : i === 1 ? '#ff3344' : '#00ccff',
                opacity: 0.15
            });
        }

        // Initialize candles
        let lastPrice = height * 0.5;
        for (let i = 0; i < count; i++) {
            const open = lastPrice;
            const close = open + (Math.random() - 0.5) * 60;
            const high = Math.max(open, close) + Math.random() * 20;
            const low = Math.min(open, close) - Math.random() * 20;
            candles.push({
                x: i * (candleWidth + gap),
                open,
                close,
                high,
                low,
                width: candleWidth,
                color: close > open ? '#00ff88' : '#ff3344'
            });
            lastPrice = close;
        }

        const animate = () => {
            ctx.fillStyle = '#050505';
            ctx.fillRect(0, 0, width, height);

            const mouse = mouseRef.current;

            // Draw Lines
            lines.forEach(line => {
                ctx.beginPath();
                ctx.strokeStyle = line.color;
                ctx.lineWidth = 1;

                // Interaction: Lines rise when mouse is near
                line.points.forEach(p => {
                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const force = Math.max(0, (200 - dist) / 200);

                    // Push UP (Rise)
                    p.y = p.originalY - (force * 100);

                    // Movement
                    p.x -= 0.3;
                    if (p.x < -100) {
                        p.x = width + 100;
                        p.originalY = height * 0.5 + (Math.random() - 0.5) * 200;
                        p.y = p.originalY;
                    }
                });

                line.points.sort((a, b) => a.x - b.x);

                ctx.moveTo(line.points[0].x, line.points[0].y);
                for (let i = 1; i < line.points.length; i++) {
                    const xc = (line.points[i].x + line.points[i - 1].x) / 2;
                    const yc = (line.points[i].y + line.points[i - 1].y) / 2;
                    ctx.quadraticCurveTo(line.points[i - 1].x, line.points[i - 1].y, xc, yc);
                }

                // Active glow if mouse is near
                const lineDist = Math.min(...line.points.map(p => Math.abs(p.x - mouse.x)));
                ctx.globalAlpha = lineDist < 200 ? 0.4 : line.opacity;
                ctx.stroke();
            });

            // Draw Candles
            candles.forEach(c => {
                const dx = (c.x + c.width / 2) - mouse.x;
                const dist = Math.abs(dx);
                const isNear = dist < 150;

                ctx.globalAlpha = isNear ? 0.5 : 0.15;
                ctx.fillStyle = c.color;
                ctx.strokeStyle = c.color;

                // Rising effect for candles
                const lift = isNear ? (150 - dist) / 5 : 0;

                // Wick
                ctx.beginPath();
                ctx.moveTo(c.x + c.width / 2, c.low - lift);
                ctx.lineTo(c.x + c.width / 2, c.high - lift);
                ctx.stroke();

                // Body
                const bodyY = Math.min(c.open, c.close) - lift;
                const bodyHeight = Math.abs(c.open - c.close);
                ctx.fillRect(c.x, bodyY, c.width, Math.max(bodyHeight, 1));

                // Move candles
                c.x -= 0.5;
                if (c.x < -candleWidth) {
                    c.x = width;
                    const lastC = candles[(candles.indexOf(c) + count - 1) % count];
                    c.open = lastC.close;
                    c.close = c.open + (Math.random() - 0.5) * 60;
                    c.high = Math.max(c.open, c.close) + Math.random() * 20;
                    c.low = Math.min(c.open, c.close) - Math.random() * 20;
                    c.color = c.close > c.open ? '#00ff88' : '#ff3344';
                }
            });

            ctx.globalAlpha = 1;
            requestAnimationFrame(animate);
        };

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10 bg-[#050505]"
        />
    );
};

export default CyberMarketBackground;
