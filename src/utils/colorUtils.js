export function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null
}

export function getLuminance(hex) {
    const rgb = hexToRgb(hex)
    if (!rgb) return 0

    const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(val => {
        val = val / 255
        return val <= 0.04045 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4)
    })

    return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

export function getContrastRatio(hex1, hex2) {
    const lum1 = getLuminance(hex1)
    const lum2 = getLuminance(hex2)

    const lighter = Math.max(lum1, lum2)
    const darker = Math.min(lum1, lum2)

    return (lighter + 0.05) / (darker + 0.05)
}