import { simulateCVD, getContrastRatio } from "../utils/colorUtils"

const VISION_TYPES = [
    { id: 'deuteranopia', label: 'Deuteranopia', description: 'Green color deficiency' },
    { id: 'protanopia', label: 'Protanopia', description: 'Red color deficiency' },
    { id: 'tritanopia', label: 'Tritanopia', description: 'Blue color deficiency' }
]

function ColorVisionSimulation({ color1, color2 }) {
    return (
        <div className="mb-6">
            <p className="font-semibold text-gray-700 mb-3">Color Vision Simulation</p>
            <div className="flex flex-col gap-4">
                {VISION_TYPES.map(type => {
                    const simColor1 = simulateCVD(color1, type.id)
                    const simColor2 = simulateCVD(color2, type.id)
                    const ratio = getContrastRatio(simColor1, simColor2).toFixed(2)

                    return (
                        <div key={type.id} className="p-4 rounded-lg border border-gray-200 bg-white">
                            <p className="text-sm font-semibold text-gray-600 mb-2">
                                {type.label} - {type.description}
                            </p>
                            <div className="p-4 rounded mb-2" style={{ backgroundColor: simColor1 }}>
                                <p className="text-lg font-bold" style={{ color: simColor2 }}>
                                    The quick brown fox jumps over the lazy dog.
                                </p>
                                <p className="text-sm" style={{ color: simColor2 }}>
                                    Small text:  The jolly wizard brews exotic magic potions for quirky dwarves.
                                </p>
                            </div>
                            <p className="text-sm text-gray-500">Contrast Ratio: {ratio}:1</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ColorVisionSimulation