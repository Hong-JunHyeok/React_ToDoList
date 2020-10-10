import React from "react";
import "./App.css";
// 안 쓰는 import는 항상 지워줍시다
import Todolist from "./page/Todolist";

function App() {
    return (
        <div className="App">
            <Todolist />
            {/* 태그에 자식이 들어가지 않는다면 바로 닫아서 코드를 깔끔히 합시다 */}
        </div>
    );
}

export default App;
