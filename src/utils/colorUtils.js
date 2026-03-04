export function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null
}

// Luminance calculation based on WCAG guidelines
export function getLuminance(hex) {
    const rgb = hexToRgb(hex)
    if (!rgb) return 0

    const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(val => {
        val = val / 255
        return val <= 0.04045 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4)
    })

    return 0.2126 * r + 0.7152 * g + 0.0722 * b
}
// Contrast ratio calculation based on WCAG guidelines
export function getContrastRatio(hex1, hex2) {
    const lum1 = getLuminance(hex1)
    const lum2 = getLuminance(hex2)

    const lighter = Math.max(lum1, lum2)
    const darker = Math.min(lum1, lum2)

    return (lighter + 0.05) / (darker + 0.05)
}
// CVD Color Vision Deficiency simulation
export function simulateCVD(hex, type) {
    // Convert hex to RGB
    const rgb = hexToRgb(hex)
    if (!rgb) return hex

    let { r, g, b } = rgb

    // Apply transformation based on CVD type
    switch (type) {
        case 'deuteranopia': // Green color deficiency
            r = Math.round(0.625 * r + 0.375 * g)
            g = Math.round(0.700 * g + 0.300 * r)
            b = Math.round(0.300 * g + 0.700 * b)
            break
        case 'protanopia': // Red color deficiency
            r = Math.round(0.567 * r + 0.433 * g)
            g = Math.round(0.558 * r + 0.442 * g)
            b = Math.round(0.242 * g + 0.758 * b)
            break
        case 'tritanopia': // Blue color deficiency
            r = Math.round(0.950 * r + 0.050 * b)
            g = Math.round(0.433 * g + 0.567 * b)
            b = Math.round(0.475 * r + 0.525 * b)
            break
        default:
            return hex
    }

    r = Math.min(255, Math.max(0, r))
    g = Math.min(255, Math.max(0, g))
    b = Math.min(255, Math.max(0, b))

    return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('')
}