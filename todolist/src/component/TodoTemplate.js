import React, { useState, useRef } from "react";
import "./TodoTemplate.scss";
import Swal from "sweetalert2";
import { AiFillDelete, AiFillQuestionCircle } from "react-icons/ai";

function TodoTemplate() {
    const [state, setState] = useState({
        todos: ["투두리스트를 작성해보세요"],
        input: "",
    });
    const [safeMode, setSafeMode] = useState(false);
    const onChange = (e) => {
        setState({
            ...state,
            input: e.target.value,
        });
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
    
    const onDelete = (index) => {
        if (safeMode === false) {
            //꺼져있을때
            setState({
                input: "",
                todos: todos.filter((item, i) => index !== i),
            });
        } else {
            //안전모드가 켜져있을때
            Swal.fire({
                title: "확실합니까?",
                text: "데이터가 삭제됩니다!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result.isConfirmed) {
                    setState({
                        input: "",
                        todos: todos.filter((item, i) => index !== i),
                    });
                    Swal.fire(
                        "삭제되었습니다!",
                        "데이터가 정상적으로 삭제되었습니다",
                        "success"
                    );
                } else {
                    Swal.fire(
                        "취소되었습니다!",
                        "데이터는 소중하니까요 ^^",
                        "error"
                    );
                }
            });
        }
    };
    const onDeleteAll = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger",
            },
            buttonsStyling: true,
        });

        swalWithBootstrapButtons
            .fire({
                title: "확실합니까?",
                text: "모든 데이터들이 삭제됩니다!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "삭제할래요!",
                cancelButtonText: "다시 생각해볼래요!",
            })
            .then((result) => {
                //삭제한다고 했을때
                if (result.isConfirmed) {
                    setState({
                        input: "",
                        todos: [], //배열을 비움
                    });
                    swalWithBootstrapButtons.fire(
                        "삭제했습니다!",
                        "모든 데이터들이 정상적으로 삭제되었습니다",
                        "success"
                    );
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                        "취소되었습니다",
                        "데이터들은 소중하니까요 ^^",
                        "error"
                    );
                }
            });
    };
    const onClickSafeModeInfo = () => {
        Swal.fire({
            icon: "question",
            title: "안전모드란?",
            text: "Todo를 삭제할때마다 경고창을 띄우는 기능입니다.",
        });
    };
    const safeModeChange = (e) => {
        setSafeMode(!safeMode);
    };
    const { todos, input } = state;
    const todosList = todos.map((obj, key) => (
        <li className="todo" key={key}>
            {obj}
            <AiFillDelete
                className="delete"
                onClick={() => {
                    onDelete(key);
                }}
            ></AiFillDelete>
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
            <div className="TodoTemplate_nav">
                <div className="TodoTemplate_nav_count">
                    일정 개수 : {todos.length}
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
                    <input
                        type="button"
                        value="모두삭제"
                        className="todo_delete-all"
                        onClick={onDeleteAll}
                    />
                    <div className="safe_mode">
                        <AiFillQuestionCircle
                            className="safe_mode_info"
                            onClick={onClickSafeModeInfo}
                        ></AiFillQuestionCircle>
                        안전모드
                        <input
                            type="checkbox"
                            value={safeMode}
                            onChange={safeModeChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoTemplate;
