import "../styles/AlgoPick.css";
import {useState} from "react";
import axios from 'axios';

export default function Retry() {
    const [problemNumber, setProblemNumber] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleRegister = async () => {
        try {
            //todo: api 바꾸기
            const response = await axios.patch(`http://localhost:8080/problems/retry/${problemNumber}`);

            // 서버에서 보낸 상태 코드 확인
            if (response.status === 200) {
                setSuccess(true);
                setMessage("등록이 완료되었습니다.");
            }
        } catch (error) {
            setSuccess(false);
            setMessage("존재하지 않는 문제번호입니다. 다시 입력해주세요.");
        }
    };

    return (
        <>
            <h2 className="title">다시 풀 문제 등록</h2>
            <p className="description">이미 풀었지만 다시 풀고 싶은 문제를 등록하세요.</p>

            <div className="input-number-style">
                <input
                    type="number"
                    className="input"
                    placeholder="문제 번호 입력"
                    value={problemNumber}
                    onChange={(e) => setProblemNumber(e.target.value)}
                />

                <button
                    className="btn"
                    onClick={handleRegister}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? '등록 중...' : '등록'}
                </button>
            </div>
            <div>
                {message && success ? <div className="success-message">{message}</div> : <div className="unsuccess-message">{message}</div>}
            </div>
        </>
    );
}
