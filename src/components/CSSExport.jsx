import { useState } from 'react'

function CSSExport({ color1, color2 }) {
    const [copied, setCopied] = useState(false)

    const cssCode = `:root {
    --color-background: ${color1};
    --color-text: ${color2};
}`

    const handleCopy = () => {
        navigator.clipboard.writeText(cssCode)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="mb-6 p-4 bg-white rounded-lg border border-gray-200">
            <p className="font-semibold text-gray-700 mb-3">CSS Export</p>
            <pre className="bg-gray-50 p-3 rounded text-sm font-mono mb-3">{cssCode}</pre>
            <button onClick={handleCopy} className="px-4 py-2 bg-blue-500 text-white rounded font-semibold hover:bg-blue-600 transition-colors">
                {copied ? 'Copied! ✓' : 'Copy CSS to Clipboard'}
            </button>
        </div>
    )
}

export default CSSExport