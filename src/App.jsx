import { useState } from 'react'
import ColorInput from './components/ColorInput'
import ContrastResult from './components/ContrastResult'
import PreviewBox from './components/PreviewBox'
import ColorVisionSimulation from './components/ColorVisionSimulation'
import CSSExport from './components/CSSExport'

function App() {
  const [color1, setColor1] = useState('#ffffff')
  const [color2, setColor2] = useState('#000000')

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold tracking-right text-gray-900">
            Color Accessibility Checker
            </h1>
            <p className="text-xs text-gray-900 mt-0.5">
              WCAG 2.1 • Contrast Ratio • CVD (Color Blindness) Simulation
            </p>
          </div>
          <button className="text-xs font-medium border border-gray-200 rounded-full px-3 py-1.5 text-gray-900 hover:bg-gray-50 transition-colors">
            EN / DE
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-4xl mx-auto px-6 py-8 flex flex-col gap-6">

        {/* Top Selection: Color Inputs + CSS Export */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-900 mb-4">
              Color Selection
            </h2>
            <ColorInput color={color1} setColor={setColor1} label="Background" />
            <ColorInput color={color2} setColor={setColor2} label="Foreground" /> 
            <div className="mt-4 rounded-lg overflow-hidden border border-gray-200">
              <div className="p-4" style={{ backgroundColor: color1 }}>
                <p className="text-base font-semibold mb-1" style={{ color: color2 }}>
                  The quick brown fox jumps over the lazy dog
                </p>
                <p className="text-xs" style={{ color: color2 }}>
                  The jolly wizard brews eclectic magic potions for quirky dwarves.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-900 mb-4">
              CSS Export
            </h2>
            <CSSExport color1={color1} color2={color2} />
          </div>
        </div>

        {/* Contrast Result */}
        <ContrastResult color1={color1} color2={color2} />

        {/* CVD Simulation */}
        <ColorVisionSimulation color1={color1} color2={color2} />

      </main>
    </div>
  )
}  

export default App