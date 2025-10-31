import style from "../Botao/Botao.module.css"
export default function Botao({label, onClick, type="default"}) {

    return (
        <>

            <h1>sdad</h1>
            <button className={`${style.button} ${style[type]}`} onClick={onClick}>
                {label}
            </button>

        </>
    )
}