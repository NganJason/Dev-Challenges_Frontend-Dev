import React from "react"

function Button({
    color, 
    align, 
    txtAlign, 
    size, 
    mgTop, 
    mgBtm,
    round,
    children
}) {
    const styles = {
        marginTop: `${mgTop ? `${mgTop}rem` : "0"}`,
        marginBottom: `${mgBtm ? `${mgBtm}rem` : "0"}`
    };

    const classNames = `
        btn 
        ${color ? color : "primary"}
        ${align ? align : "center"}
        ${txtAlign ? `txt_${txtAlign}` : "txt_center"}
        ${size ? `btn_${size}` : "btn_md"}
        ${round ? "btn_round" : ""}
    `;

    return (
        <div className={classNames} style={styles}>
            {children}
        </div>
    );
}

export default Button;