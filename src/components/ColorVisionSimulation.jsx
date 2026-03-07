// A component that simulates how colors appear to individuals with different types of color vision deficiencies (CVD)
// Evaluates the contrast ratio of the simulated colors against accessibility standards (WCAG AA and AAA).
import { simulateCVD, getContrastRatio } from "../utils/colorUtils"

const VISION_TYPES = [
    { id: 'deuteranopia', label: 'Deuteranopia', description: 'Green color deficiency' },
    { id: 'protanopia', label: 'Protanopia', description: 'Red color deficiency' },
    { id: 'tritanopia', label: 'Tritanopia', description: 'Blue color deficiency' }
]

// A small badge component to indicate pass/fail status for accessibility criteria.
function Badge({ pass, label }) {
    return (
        <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${pass ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {label}: {pass ? 'Pass ✓' : 'Fail ✗'}
        </span>
    )
}

// Takes two colors and simulates how they would appear under different types of color vision deficiencies
// Calculating the contrast ratio and checking against WCAG standards.
function ColorVisionSimulation({ color1, color2, t }) {
    return (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-base font-semibold text-gray-900 mb-1">
                {t.cvdTitle}
            </h2>
            <p className="text-sm text-gray-900 mb-4">
                {t.cvdSubtitle}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {VISION_TYPES.map(type => {
                    const simColor1 = simulateCVD(color1, type.id)
                    const simColor2 = simulateCVD(color2, type.id)
                    const ratio = getContrastRatio(simColor1, simColor2)
                    const ratioRounded = ratio.toFixed(2)

                    const passAA = ratio >= 4.5
                    const passAAA = ratio >= 7

                    return (
                        <div key={type.id} className="flex flex-col rounded-lg border border-gray-200 overflow-hidden">
                            {/* Card Header */}
                            <div className="px-4 py-3 border-b border-gray-200">
                                <p className="text-sm font-semibold text-gray-900">{type.label}</p>
                                <p className="text-xs text-gray-900">{t.visionTypes[type.id]}</p>
                            </div>

                            {/* Color Preview */}
                            <div className="flex-1 p-4" style={{ backgroundColor: simColor1 }}>
                                <p className="text-base font-semibold mb-1" style={{ color: simColor2}}>
                                    The quick brown fox
                                </p>
                                <p className="text-xs" style={{ color: simColor2}}>
                                    Small text sample
                                </p>
                            </div>

                            {/* Result */}
                            <div className="px-4 py-3 border-t border-gray-200 flex flex-col gap-1.5">
                                <p className="text-sm font-semibold text-gray-900">Ratio: {ratioRounded}:1</p>
                                <div className="flex flex-wrap gap-1">
                                    <Badge pass={passAA} label="AA" />
                                    <Badge pass={passAAA} label="AAA" />
                                </div>
                            </div>                   
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ColorVisionSimulation