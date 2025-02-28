import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AlgoPick from "./components/AlgoPick";
import RandomRecommend from "./components/RandomRecommend";
import Retry from "./components/Retry";
import Solved from "./components/Solved";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AlgoPick />}>
                    <Route index element={<RandomRecommend />} /> {/* ✅ 초기 세팅 화면 */}
                    <Route path="retry" element={<Retry />} />
                    <Route path="solved" element={<Solved />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;