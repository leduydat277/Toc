import { Color } from "app/types/Color";

export const hsbToRgb = ({ hue, saturation, brightness }: Color): string => {
    hue = Math.max(0, Math.min(360, hue));
    saturation = Math.max(0, Math.min(1, saturation));
    brightness = Math.max(0, Math.min(1, brightness));

    const chroma = brightness * saturation;
    const huePrime = hue / 60;
    const x = chroma * (1 - Math.abs((huePrime % 2) - 1));
    const m = brightness - chroma;

    let [r, g, b] = [0, 0, 0];

    if (huePrime >= 0 && huePrime < 1) [r, g, b] = [chroma, x, 0];
    else if (huePrime < 2) [r, g, b] = [x, chroma, 0];
    else if (huePrime < 3) [r, g, b] = [0, chroma, x];
    else if (huePrime < 4) [r, g, b] = [0, x, chroma];
    else if (huePrime < 5) [r, g, b] = [x, 0, chroma];
    else if (huePrime <= 6) [r, g, b] = [chroma, 0, x];

    const rgb = [
        Math.max(0, Math.min(255, Math.round((r + m) * 255))),
        Math.max(0, Math.min(255, Math.round((g + m) * 255))),
        Math.max(0, Math.min(255, Math.round((b + m) * 255))),
    ];

    return `rgb(${rgb.join(", ")})`;
};

export const rgbToHsb = (rgb: string) => {
    if (!rgb) return { hue: 0, saturation: 0, brightness: 0 };

    const match = rgb.match(/\d+/g);
    if (!match || match.length < 3)
        return { hue: 0, saturation: 0, brightness: 0 };

    const [r, g, b] = match
        .map(Number)
        .map((v) => Math.max(0, Math.min(255, v)) / 255);

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;

    let hue = 0;
    if (delta !== 0) {
        if (max === r) hue = ((g - b) / delta) % 6;
        else if (max === g) hue = (b - r) / delta + 2;
        else hue = (r - g) / delta + 4;

        hue = Math.round(hue * 60);
        if (hue < 0) hue += 360;
    }

    const saturation = max === 0 ? 0 : delta / max;
    const brightness = max;

    return {
        hue,
        saturation: parseFloat((saturation * 100).toFixed(2)),
        brightness: parseFloat((brightness * 100).toFixed(2)),
    };
};
