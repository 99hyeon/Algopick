import { useNavigate } from "react-router-dom";
import "../styles/AlgoPick.css";

export default function Retry() {
    const navigate = useNavigate();

    return (
        <>
            <h2 className="title">다시 풀 문제 등록</h2>
            <p className="description">이미 풀었지만 다시 풀고 싶은 문제를 등록하세요.</p>

            <button className="btn" onClick={() => navigate("/")}>돌아가기</button> {/* ✅ "/"로 이동 */}
        </>
    );
}
