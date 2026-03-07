// A reusable color input component that includes a color picker, a text input for hex values, and a preview box.
function ColorInput({ color, setColor, label}) {
    return (
        <div className="flex flex-col gap-2 mb-6">
            <label className="font-semibold text-gray-900">{label}</label>
            <div className="flex items-center gap-3">
                <input
                    type="color"
                    value={color}
                    onChange={e => setColor(e.target.value)}
                    className="w-12 h-12 p-0 rounded cursor-pointer border-0"
                />
                <input
                    type="text"
                    value={color}
                    onChange={e => setColor(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2 w-32 font-mono text-sm"
                    placeholder="#ffffff"
                />
                <div
                    className="w-12 h-12 rounded border border-gray-200"
                    style={{ backgroundColor: color }}
                />
            </div>
        </div>
    )
}

export default ColorInput