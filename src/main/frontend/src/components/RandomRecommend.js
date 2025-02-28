import { useState } from "react";
import "../styles/AlgoPick.css";

export default function RandomRecommend() {
    const [number, setNumber] = useState(null);
    const [category, setCategory] = useState(null);
    const [retry, setRetry] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchNumber = async () => {
        setLoading(true);
        try {
            const response = await fetch("http://localhost:8080/problems/random");
            const data = await response.json();
            setNumber(data.id);
            setCategory(data.category);
            setRetry(data.retry);
        } catch (error) {
            console.error("Error fetching number:", error);
        }
        setLoading(false);
    };

    return (
        <>
            <h2 className="title">Today's Algorithm🧐</h2>
            <p className="description">아래 버튼을 누르면 랜덤으로 문제를 추천해줍니다.</p>
            <div className="infographic-style">
                {category && <div className="number">{category}</div>}
                {category && <div className="bar">|</div>}
                {number && <div className="number">{number} 번</div>}
                {retry && <div className="retry">retry</div>}
            </div>
            <button className="btn" onClick={fetchNumber} disabled={loading}>
                {loading ? "두구두구🥁" : number === null ? "문제 뽑기" : "다시 뽑기"}
            </button>
        </>
    );
}
