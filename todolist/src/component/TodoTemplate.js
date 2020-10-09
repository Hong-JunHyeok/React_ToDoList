import React, { useState, useRef } from "react";
import "./TodoTemplate.scss";
import Swal from "sweetalert2";

function TodoTemplate() {
    const [state, setState] = useState({
        todos: ["투두리스트를 작성해보세요"],
        input: "",
    });
    const onChange = (e) => {
        setState({
            ...state,
            input: e.target.value,
        });
        console.log(todos);
    };
    const onSubmit = () => {
        if (input === "") {
            Swal.fire({
                icon: "error",
                title: "공백은 제출할 수 없습니다",
                showConfirmButton: false,
                timer: 1500,
                background: "#282a36",
            });
        } else if (input === "뭐하냐?") {
            Swal.fire({
                icon: "question",
                title: "진짜 뭐하냐?",
                showConfirmButton: false,
                timer: 1500,
                background: "#282a36",
            });
            setState({
                todos: todos.concat(input),
                input: "",
            });
        } else {
            setState({
                todos: todos.concat(input),
                input: "",
            });
        }
    };
    const onSubmitEnter = (e) => {
        if (e.key === "Enter") {
            if (input === "") {
                Swal.fire({
                    icon: "error",
                    title: "공백은 제출할 수 없습니다",
                    showConfirmButton: false,
                    timer: 1000,
                    background: "#282a36",
                });
            } else if (input === "뭐하냐?") {
                Swal.fire({
                    icon: "question",
                    title: "진짜 뭐하냐?",
                    showConfirmButton: false,
                    timer: 1500,
                    background: "#282a36",
                });
                setState({
                    todos: todos.concat(input),
                    input: "",
                });
            } else {
                setState({
                    todos: todos.concat(input),
                    input: "",
                });
            }
        }
    };
    const { todos, input } = state;
    const todosList = todos.map((obj, key) => (
        <li className="todo" key={key}>
            {obj}
        </li>
    ));
    const inputs = useRef(null);

    return (
        <div className="TodoTemplate">
            <div className="TodoTemplate_header">
                <div className="TodoTemplate_header_mainTitle">뭐하냐?</div>
                <div className="TodoTemplate_header_subTitle">
                    일정관리 잘 하라구~
                </div>
            </div>
            <div className="TodoTemplate_body">{todosList}</div>
            <div className="TodoTemplate_footer">
                <div className="TodoTemplate_footer_input" ref={inputs}>
                    <input
                        type="text"
                        value={input}
                        className="todo_input"
                        onChange={onChange}
                        onKeyPress={onSubmitEnter}
                    />
                    <input
                        type="button"
                        value="제출"
                        className="todo_submit"
                        onClick={onSubmit}
                        onKeyPress={onSubmitEnter}
                    />
                </div>
            </div>
        </div>
    );
}

export default TodoTemplate;
