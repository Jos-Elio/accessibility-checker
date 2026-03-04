import { getContrastRatio } from '../utils/colorUtils'

function ContrastResult({ color1, color2}) {
    const ratio = getContrastRatio(color1, color2)
    const ratioRounded = ratio.toFixed(2)

    // Determine pass/fail for WCAG levels
    const passAA = ratio >= 4.5
    const passAALarge = ratio >= 3
    const passAAA = ratio >= 7
    const passAAALarge = ratio >= 4.5

    // Determine overall pass/fail based on AA level
    const Badge = ({ pass, label }) => (
        // Simple badge component to display pass/fail status
        <div className={`px-3 py-2 rounded text-white text-sm font-semibold ${pass ? 'bg-green-500' : 'bg-red-500'}`}>
            {label}: {pass ? 'Pass ✓' : 'Fail ✗'}
        </div>
    )

    // Render the contrast ratio and pass/fail badges
    return (
        <div className="mb-6 p-4 bg-white rounded-lg border border-gray-200">
            <p className="text-2xl font-bold mb-4">Contrast Ratio: {ratioRounded}:1</p>
            <div className="grid grid-cols-2 gap-2">
                <Badge pass={passAA} label="AA Normal Text" />
                <Badge pass={passAALarge} label="AA Large Text" />
                <Badge pass={passAAA} label="AAA Normal Text" />
                <Badge pass={passAAALarge} label="AAA Large Text" />
            </div>
        </div>
    )
}

export default ContrastResult