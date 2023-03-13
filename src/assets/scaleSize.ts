/**
 * Converts pixel unit to rem unit
 * 1px = 0.0625rem
 */
const scaleSize = (size) : string => `${size * 0.0625}rem`;

export default scaleSize;