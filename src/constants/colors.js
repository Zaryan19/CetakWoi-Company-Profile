/**
 * CetakWoi Brand Color Palette — Light Editorial Theme
 * Crisp white paper (#FFFFFF) + Deep ink black (#1A1A1A) + Hairline dividers (#E4E4E7)
 */
export const COLORS = {
  primary: '#1A1A1A',     // Ink Black (main text & primary buttons)
  secondary: '#FFFFFF',   // Pure White
  tertiary: '#114576',    // Deep Corporate Navy Blue
  neutral: {
    DEFAULT: '#E4E4E7',   // Zinc 200 hairline border
    border: '#E4E4E7',
    muted: '#52525B',    // Zinc 600 readable secondary text
    light: '#F4F4F5',    // Zinc 100
  },
  surface: {
    DEFAULT: '#FFFFFF',   // Crisp White Canvas
    elevated: '#F4F4F5',  // Subtle lifted container / hover state
    card: '#F4F4F5',
  },
  onSurface: {
    DEFAULT: '#1A1A1A',   // Ink Black
    muted: '#52525B',    // Muted body text
  },
  accent: {
    navy: '#114576',
    orange: '#EA580C',
  },
  error: '#D92D20',
};

export default COLORS;
