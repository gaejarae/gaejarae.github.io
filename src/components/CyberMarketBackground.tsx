import React, { useEffect, useRef } from 'react';

const CyberMarketBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

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
            points: { x: number; y: number }[];
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
            for (let x = 0; x <= width; x += 50) {
                const y = lastY + (Math.random() - 0.5) * 100;
                points.push({ x, y });
                lastY = y;
            }
            lines.push({
                points,
                color: i === 0 ? '#00ff88' : i === 1 ? '#ff3344' : '#00ccff',
                opacity: 0.1
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

            // Draw Lines
            lines.forEach(line => {
                ctx.beginPath();
                ctx.strokeStyle = line.color;
                ctx.globalAlpha = line.opacity;
                ctx.lineWidth = 1;
                ctx.moveTo(line.points[0].x, line.points[0].y);
                for (let i = 1; i < line.points.length; i++) {
                    const xc = (line.points[i].x + line.points[i - 1].x) / 2;
                    const yc = (line.points[i].y + line.points[i - 1].y) / 2;
                    ctx.quadraticCurveTo(line.points[i - 1].x, line.points[i - 1].y, xc, yc);
                }
                ctx.stroke();

                // Move points slightly
                line.points.forEach(p => {
                    p.y += (Math.random() - 0.5) * 1.5;
                    p.x -= 0.5;
                    if (p.x < -50) p.x = width + 50;
                });
                line.points.sort((a, b) => a.x - b.x);
            });

            // Draw Candles
            candles.forEach(c => {
                ctx.globalAlpha = 0.15;
                ctx.fillStyle = c.color;
                ctx.strokeStyle = c.color;

                // Wick
                ctx.beginPath();
                ctx.moveTo(c.x + c.width / 2, c.low);
                ctx.lineTo(c.x + c.width / 2, c.high);
                ctx.stroke();

                // Body
                const bodyY = Math.min(c.open, c.close);
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

        window.addEventListener('resize', handleResize);
        animate();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10 bg-[#050505]"
        />
    );
};

export default CyberMarketBackground;
