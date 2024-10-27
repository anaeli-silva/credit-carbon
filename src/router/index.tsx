import { Home } from "../pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}