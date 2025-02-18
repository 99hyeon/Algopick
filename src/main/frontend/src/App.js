import React, { useState } from "react";
import "./css/AlgoPick.css"

const AlgoPick = () => {
    const [number, setNumber] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchNumber = async () => {
        setLoading(true);
        try {
            const response = await fetch("url");
            const data = await response.json();
            setNumber(data.number);
        } catch (error) {
            console.error("Error fetching number:", error);
        }
        setLoading(false);
    };

    return (
        <div className="container">
            <h1>알고 Pick</h1>
            {number !== null && <h2>{number}</h2>}
            <button onClick={fetchNumber} className="pick-button" disabled={loading}>
                {loading ? "로딩 중..." : number === null ? "문제 뽑기" : "다시 뽑기"}
            </button>
        </div>
    );
};

export default AlgoPick;