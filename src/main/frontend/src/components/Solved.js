import { useNavigate } from "react-router-dom";
import "../styles/AlgoPick.css";
import {useState} from "react";

export default function Solved() {
    const navigate = useNavigate();
    const [problemNumber, setProblemNumber] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleRegister = async () => {
        // if (!problemNumber.trim()) {
        //     setMessage("⚠️ 문제 번호를 입력하세요!");
        //     return;
        // }
        //
        // try {
        //     const response = await fetch("http://localhost:8080/problems/solved", {
        //         method: "POST",
        //         headers: { "Content-Type": "application/json" },
        //         body: JSON.stringify({ id: problemNumber }),
        //     });
        //
        //     const data = await response.json();
        //
        //     if (response.ok) {
        //         setMessage(`✅ 문제 ${problemNumber}이(가) 성공적으로 등록되었습니다!`);
        //     } else {
        //         setMessage(`❌ ${data.message || "문제 등록에 실패했습니다."}`);
        //     }
        // } catch (error) {
        //     setMessage("⚠️ 서버 오류가 발생했습니다. 다시 시도해주세요.");
        //     console.error("Error:", error);
        // }
    };

    return (
        <>
            <h2 className="title">해결한 문제 등록</h2>
            <p className="description">해결한 문제를 등록하세요</p>

            <div className="input-number-style">
                <input
                    type="number"
                    className="input"
                    placeholder="문제 번호 입력"
                    value={problemNumber}
                    onChange={(e) => setProblemNumber(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleRegister()}
                />

                <button
                    className="btn"
                    onClick={handleRegister}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? '등록 중...' : '등록'}
                </button>
            </div>

        </>
    );
}
