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
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">Accessibility Checker</h1>
      <ColorInput color={color1} setColor={setColor1} label="Background" />
      <ColorInput color={color2} setColor={setColor2} label="Text" />
      <ContrastResult color1={color1} color2={color2} />
      <PreviewBox color1={color1} color2={color2} />
      <ColorVisionSimulation color1={color1} color2={color2} />
      <CSSExport color1={color1} color2={color2} />
    </div>
  )
}  

export default App