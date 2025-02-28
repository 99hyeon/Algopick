import { Outlet } from "react-router-dom";
import Header from "./Header";
import "../styles/AlgoPick.css";

export default function AlgoPick() {
    return (
        <div className="container">
            <div className="container-inner">
                <Header />
                <div className="main-content">
                    <Outlet /> {/* ✅ 현재 경로에 맞는 컴포넌트가 여기에서 렌더링됨 */}
                </div>
            </div>
        </div>
    );
}
