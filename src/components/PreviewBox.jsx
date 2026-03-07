function PreviewBox({ color1, color2}) {
    return (
        <div className="mb-6">
            <p className="font-semibold text-gray-900 mb-2">Preview</p>
            <div
                className="p-6 rounded-lg border border-gray-200"
                style={{ backgroundColor: color1 }}
            >
                <p
                    className="text-2xl font-bold mb-2"
                    style={{ color: color2 }}
                >
                    The quick brown fox jumps over the lazy dog.
                </p>
                <p
                    className="text-sm"
                    style={{ color: color2 }}
                >
                    Small Text: The jolly wizard brews exotic magic potions for quirky dwarves.
                </p>
            </div>
        </div>
    )
}

export default PreviewBox