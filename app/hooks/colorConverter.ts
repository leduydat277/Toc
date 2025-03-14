import { Color } from "app/types/Color";

export const hsbToRgb = ({ hue, saturation, brightness }: Color): string => {
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

    return `rgb(${Math.round((r + m) * 255)}, ${Math.round((g + m) * 255)}, ${Math.round((b + m) * 255)})`;
};
