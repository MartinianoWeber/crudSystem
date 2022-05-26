import React from 'react';
import { createPortal } from 'react-dom';
import "./ContextMenu.scss";

const text = ["H1", "H2", "P"];
function ContextMenu() {
    const [hideCtxMenu, setHideCtxMenu] = React.useState(true);
    const rightClick = (e)=>{
        const menu = document.getElementById("contextMenu");
        if(text.some(item => item === e.target.tagName)){
            console.log(menu)
            setHideCtxMenu(true);
        }else{
            console.log(document.body.clientWidth)
            e.preventDefault();
            if (hideCtxMenu){
                setHideCtxMenu(false);
            }
            menu.style.left = e.pageX + "px";
            menu.style.top = e.pageY + "px";
        }
        console.log(e.target.tagName)
    }
    
    function hideMenu() {
        setHideCtxMenu(true);
    }
    document.oncontextmenu = rightClick;
    document.onclick = hideMenu;

    return createPortal(
        <ol 
            id='contextMenu'
            hidden = {hideCtxMenu}
            >
            <li>Perfil</li>
            <li>Config</li>
            <li>Visit us</li>
        </ol>
        ,
        document.body
    );
}

export default ContextMenu;