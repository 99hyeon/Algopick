import { useState } from "react";
import "../styles/AlgoPick.css";

export default function AlgoPick() {
    const [message, setMessage] = useState("");

    const handleStart = () => {
        setMessage("랜덤 알고리즘 문제를 선택하겠습니다!");
        // 여기에 랜덤 알고리즘 선택 로직 추가 가능
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
                    <h2 className="title">Random + Algorithm + System</h2>
                    <p className="description">
                        "algopick"은 엑셀 파일에서 사용자가 풀지 않은 알고리즘 문제에 대해 무작위로 알고리즘 번호를 생성해주는 시스템입니다.
                    </p>
                    <button className="btn" onClick={handleStart}>시작하기</button>
                    {message && <p className="message">{message}</p>}
                </div>
            </div>
        </div>
    );
}
