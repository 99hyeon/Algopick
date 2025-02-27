import React, { useState } from "react";
import AlgoPick from "./components/AlgoPick";

// const AlgoPick = () => {
//     const [number, setNumber] = useState(null);
//     const [category, setCategory] = useState(null);
//     const [loading, setLoading] = useState(false);
//
//     const fetchNumber = async () => {
//         setLoading(true);
//         try {
//             const response = await fetch("http://localhost:8080/problems/random");
//             const data = await response.json();
//             setNumber(data.id);
//             setCategory(data.category);
//         } catch (error) {
//             console.error("Error fetching number:", error);
//         }
//         setLoading(false);
//     };
//
//     return (
//         <div className="container">
//             <h1>알고 Pick</h1>
//             {number !== null && <h2>{number}</h2>}
//             {category !== null && <h2>{category}</h2>}
//             <button onClick={fetchNumber} className="pick-button" disabled={loading}>
//                 {loading ? "로딩 중..." : number === null ? "문제 뽑기" : "다시 뽑기"}
//             </button>
//         </div>
//     );
// };

function App() {
    return (
        <div>
            <AlgoPick />
        </div>
    );
}

export default AlgoPick;