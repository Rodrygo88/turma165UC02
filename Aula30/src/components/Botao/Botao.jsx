import style from "../Botao/Botao.module.css"
export default function Botao({label, onClick, type="default"}) {

    return (
        <>

            <button className={`${style.button} ${style[type]}`} onClick={onClick}>
                {label}
            </button>

        </>
    )
}