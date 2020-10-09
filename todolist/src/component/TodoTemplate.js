import React, { useState } from "react";
import "./TodoTemplate.scss";

function TodoTemplate() {
    return (
        <div className="TodoTemplate">
            <div className="TodoTemplate_header">
                <div className="TodoTemplate_header_mainTitle">뭐하냐?</div>
                <div className="TodoTemplate_header_subTitle">
                    일정관리 잘 하라구~
                </div>
            </div>
            <div className="TodoTemplate_body"></div>
            <div className="TodoTemplate_footer">FOOTER</div>
        </div>
    );
}

export default TodoTemplate;
