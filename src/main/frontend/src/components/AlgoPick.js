import { useState } from "react";
import "../styles/AlgoPick.css";

export default function AlgoPick() {

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
        <div className="container">
            <div className="container-inner">
                <header className="header">
                    <div className="logo">
                        algo<span className="logo-span">pick</span>
                    </div>
                    <nav>
                        <ul className="nav-list">
                            {['Concept', 'About', 'Works', 'Docs', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="nav-item">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </header>

                <div className="main-content">
                    <h2 className="title">Today's Algorithm🧐</h2>
                    <p className="description">
                        아래 버튼을 누르면 랜덤으로 문제를 추천해줍니다.
                    </p>
                    <div className="infographic-style">
                        <div>{category !== null && <div className="number">{category}</div>}</div>
                        <div>{category !== null && <div className="bar">|</div>}</div>
                        <div>{number !== null && <div className="number">{number} 번</div>}</div>
                        <div>{retry === false ? null : <div className="retry">retry</div>}</div>
                    </div>
                    <button className="btn" onClick={fetchNumber} disabled={loading}>
                        {loading ? "두구두구🥁" : number === null ? "문제 뽑기" : "다시 뽑기"}
                    </button>
                </div>
            </div>
        </div>
    );
}
