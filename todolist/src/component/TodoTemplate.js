import React, { useState, useRef, useCallback } from "react";
import "./TodoTemplate.scss";
import Swal from "sweetalert2";
// 외부 라이브 러리를 그대로 사용한다면, 해당 라이브 러리의 사용법이 바뀌었을 때 사용중인 모든 파일에서 코드를 변경해주어야 합니다
// 외부 라이브 러리는 꼭 wrapping해서 사용하도록 합시다
import { AiFillDelete, AiFillQuestionCircle } from "react-icons/ai";

function TodoTemplate() {
    const [state, setState] = useState({
        todos: ["투두리스트를 작성해보세요"],
        input: "",
    });
    const [safeMode, setSafeMode] = useState(false);

    // 변수와 함수는 useCallback, useMemo로 최적화 하도록 합시다.
    const onChange = useCallback((e) => {
        setState(state => ({
            ...state,
            input: e.target.value,
        }));
    }, []);

    const onSubmit = useCallback(() => {
        if (input === "") {
            Swal.fire({
                icon: "error",
                title: "공백은 제출할 수 없습니다",
                showConfirmButton: false,
                timer: 1500,
                background: "#282a36",
            });
            return;
            // 얼리 리턴을 사용한다면 else가 없는 깔끔한 코드를 만들 수 있습니다
        }
        if (input === "뭐하냐?") {
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
            return;
        }
        setState({
            todos: todos.concat(input),
            input: "",
        });
    }, [input]);

    const onKeyPress = useCallback((e) => {
        // 함수 이름은 확장 가능하게 지읍시다
        // 여러 키로 함수를 나누는 용도로 함수를 작성한다면
        // Enter가 아니라 다른 키가 눌렸을떄 함수를 확장할 수 있습니다

        if (e.key === "Enter") {
           onSubmit();
           // 중복되는 코드는 함수를 사용합시다
           return;
        }
    }, [onSubmit]);

    const onDelete = useCallback((index) => {
        if (safeMode === false) {
            // 조건문의 조건이 이미 코드를 설명하고 있습니다
            // 주석은 남발하지 말고, 코드로써 설명되도록 합시다
            setState((todos) => ({
                input: "",
                todos: todos.filter((item, i) => index !== i),
            }));
            return;
        }
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
                setState((todos) => ({
                    input: "",
                    todos: todos.filter((item, i) => index !== i),
                }));
                Swal.fire(
                    "삭제되었습니다!",
                    "데이터가 정상적으로 삭제되었습니다",
                    "success"
                );
                return;
            }
            Swal.fire(
                "취소되었습니다!",
                "데이터는 소중하니까요 ^^",
                "error"
            );
        });
    }, [safeMode]);

    // 아래부턴 직접 최적화 해봅시다!
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
                if (result.isConfirmed) {
                    setState({
                        input: "",
                        todos: [],
                    });
                    swalWithBootstrapButtons.fire(
                        "삭제했습니다!",
                        "모든 데이터들이 정상적으로 삭제되었습니다",
                        "success"
                    );
                } else if (
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

    // 변수명은 일관성 있게 지읍시다
    const onToggleSageMode = useCallback(() => {
        // 사용되지 않는 파라미터는 삭제합시다

        setSafeMode(safeMode => !safeMode);
    }, []);

    // useMemo로 최적화해봅시다
    const todosList = todos.map((obj, key) => (
        <li className="todo" key={key}>
            {obj}
            <AiFillDelete
                className="delete"
                onClick={() => {
                    onDelete(key);
                }}
                // inline 함수를 사용한다면 성능에 문제가 생길 수 있습니다 (매 리렌더링마다 생성)
                // 고차 함수를 사용하거나, 컴포넌트를 나누어서 해당 문제를 없앱시다!
            />
        </li>
    ));

    const inputs = useRef(null);
    // 사용하지 않는 것 같은데?

    // 깨알 정보를 주자면 useRef는 일반적인 자바스크립트 객체입니다
    // heap 영역에 저장되기 때문에 가비지 컬렉팅 되기 전 까지 같은 메모리 주소를 가집니다
    // 이때 어떤 이점이 있을까요? 직접 생각해봅시다

    const { todos, input } = state;
    // 비구조화 할당은 최대한 사용하는 곳과 가까운 곳에서 하도록 합시다
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
                        onKeyPress={onKeyPress}
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
                        />
                        <label>
                            안전모드
                            <input
                                type="checkbox"
                                value={safeMode}
                                onChange={onToggleSageMode}
                            />
                        </label>
                        {/* label로 감싼다면 안전모드 텍스트를 클릭했을때에도 input이 클릭됩니다 */}
                    </div>
                </div>
            </div>
        </div>
    );
}

// 컴포넌트는 최대한 잘게 나눕시다
// https://reactjs.org/docs/thinking-in-react.html#gatsby-focus-wrapper를 읽어본다면 도움이 될 거에요

export default TodoTemplate;
