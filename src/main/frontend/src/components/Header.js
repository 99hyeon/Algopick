import { useNavigate } from "react-router-dom";
import "../styles/AlgoPick.css";

export default function Header() {
    const navigate = useNavigate();

    return (
        <header className="header">
            <div className="logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                algo<span className="logo-span">pick</span>
            </div>
            <nav>
                <ul className="nav-list">
                    {["Retry", "Solved", "List", "Contact"].map((item) => (
                        <li key={item}>
                            <a
                                href="#"
                                className="nav-item"
                                onClick={() => navigate(item === "Retry" ? "/retry" : `/${item.toLowerCase()}`)}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}