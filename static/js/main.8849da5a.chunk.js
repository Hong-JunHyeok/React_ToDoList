(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(4),c=n.n(i),r=(n(12),n(13),n(2)),s=n(5),l=(n(14),n(1)),u=n.n(l),m=n(6);var d=function(){var e=Object(o.useState)({todos:["\ud22c\ub450\ub9ac\uc2a4\ud2b8\ub97c \uc791\uc131\ud574\ubcf4\uc138\uc694"],input:""}),t=Object(s.a)(e,2),n=t[0],i=t[1],c=function(e){"Enter"===e.key&&(""===d?u.a.fire({icon:"error",title:"\uacf5\ubc31\uc740 \uc81c\ucd9c\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4",showConfirmButton:!1,timer:1e3,background:"#282a36"}):"\ubb50\ud558\ub0d0?"===d?(u.a.fire({icon:"question",title:"\uc9c4\uc9dc \ubb50\ud558\ub0d0?",showConfirmButton:!1,timer:1500,background:"#282a36"}),i({todos:l.concat(d),input:""})):i({todos:l.concat(d),input:""}))},l=n.todos,d=n.input,f=l.map((function(e,t){return a.a.createElement("li",{className:"todo",key:t},e,a.a.createElement(m.a,{className:"delete",onClick:function(){var e;e=t,i({input:"",todos:l.filter((function(t,n){return e!==n}))})}}))})),p=Object(o.useRef)(null);return a.a.createElement("div",{className:"TodoTemplate"},a.a.createElement("div",{className:"TodoTemplate_header"},a.a.createElement("div",{className:"TodoTemplate_header_mainTitle"},"\ubb50\ud558\ub0d0?"),a.a.createElement("div",{className:"TodoTemplate_header_subTitle"},"\uc77c\uc815\uad00\ub9ac \uc798 \ud558\ub77c\uad6c~")),a.a.createElement("div",{className:"TodoTemplate_body"},f),a.a.createElement("div",{className:"TodoTemplate_footer"},a.a.createElement("div",{className:"TodoTemplate_footer_input",ref:p},a.a.createElement("input",{type:"text",value:d,className:"todo_input",onChange:function(e){i(Object(r.a)(Object(r.a)({},n),{},{input:e.target.value}))},onKeyPress:c}),a.a.createElement("input",{type:"button",value:"\uc81c\ucd9c",className:"todo_submit",onClick:function(){""===d?u.a.fire({icon:"error",title:"\uacf5\ubc31\uc740 \uc81c\ucd9c\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4",showConfirmButton:!1,timer:1500,background:"#282a36"}):"\ubb50\ud558\ub0d0?"===d?(u.a.fire({icon:"question",title:"\uc9c4\uc9dc \ubb50\ud558\ub0d0?",showConfirmButton:!1,timer:1500,background:"#282a36"}),i({todos:l.concat(d),input:""})):i({todos:l.concat(d),input:""})},onKeyPress:c}),a.a.createElement("input",{type:"button",value:"\ubaa8\ub450\uc0ad\uc81c",className:"todo_delete-all",onClick:function(){var e=u.a.mixin({customClass:{confirmButton:"btn btn-success",cancelButton:"btn btn-danger"},buttonsStyling:!0});e.fire({title:"\ud655\uc2e4\ud569\ub2c8\uae4c?",text:"\ubaa8\ub4e0 \ub370\uc774\ud130\ub4e4\uc774 \uc0ad\uc81c\ub429\ub2c8\ub2e4!",icon:"warning",showCancelButton:!0,confirmButtonText:"\uc0ad\uc81c\ud560\ub798\uc694!",cancelButtonText:"\ub2e4\uc2dc \uc0dd\uac01\ud574\ubcfc\ub798\uc694!",reverseButtons:!0}).then((function(t){t.isConfirmed?(i({input:"",todos:[]}),e.fire("\uc0ad\uc81c\ud588\uc2b5\ub2c8\ub2e4!","\ubaa8\ub4e0 \ub370\uc774\ud130\ub4e4\uc774 \uc815\uc0c1\uc801\uc73c\ub85c \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4","success")):t.dismiss===u.a.DismissReason.cancel&&e.fire("\ucde8\uc18c\ub418\uc5c8\uc2b5\ub2c8\ub2e4","\ub370\uc774\ud130\ub4e4\uc740 \uc18c\uc911\ud558\ub2c8\uae4c\uc694 ^^","error")}))}}))))};var f=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(d,null))};var p=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.8849da5a.chunk.js.map