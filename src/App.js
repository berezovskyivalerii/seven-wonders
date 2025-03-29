import './App.css'
import { GreatPyramid } from './Components/GreatPyramid'
import { HangingGardens } from './Components/HangingGardens'
import { MainComponent } from './Components/MainComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StartContent } from './Components/StartContent'
import { StatueOfZeus } from './Components/StatueOfZeus'
import { TempleOfArtemis } from './Components/TempleOfArtemis'
import { Mausoleum } from './Components/Mausoleum'
import { Colossus } from './Components/Colossus'
import { Lighthouse } from './Components/LightHouse'

function App() {
    return (
        <BrowserRouter>
            <Routes id="routes-container">
                <Route path="/" element={<MainComponent />}>
                    <Route index element={<StartContent />} />
                    <Route path="/" element={<StartContent />} />
                    <Route path="great-pyramids" element={<GreatPyramid />} />
                    <Route
                        path="hanging-gardens"
                        element={<HangingGardens />}
                    />
                    <Route path="statue-zeus" element={<StatueOfZeus />} />
                    <Route
                        path="temple-artemis"
                        element={<TempleOfArtemis />}
                    />
                    <Route path="mausoleum" element={<Mausoleum />} />
                    <Route path="colossus" element={<Colossus />} />
                    <Route path="lighthouse" element={<Lighthouse />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
