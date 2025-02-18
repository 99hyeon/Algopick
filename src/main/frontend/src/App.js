import {useEffect, useState} from "react";
import axios from "axios";

function App() {
  const [hello, setHello] = useState('');

    axios.get("http://localhost:8080/api/test")
        .then(res => setHello(res.data))
        .catch(err => console.error(err));

  return (
      <div className="App">
        백엔드 데이터 : {hello}
      </div>
  );
}

export default App;