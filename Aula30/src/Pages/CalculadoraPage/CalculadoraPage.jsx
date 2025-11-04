import { useState } from "react";

import Input from "../../components/Input/Input";

import style from "../CalculadoraPage/CalculadoraPage.module.css"
import Botao from "../../components/Botao/Botao";

export default function CalculadoraPage() {

    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");

    const [resultado, setResultado] = useState("");

    function calcular(op){
        const n1 = parseFloat(num1)
        const n2 = parseFloat(num2)

        if (isNaN(n1) || isNaN(n2)){
            setResultado("Digite valores válidos!");
            return;
        }
        switch(op){
            case "+":
                setResultado(n1+n2);
                break;
            case "-":
                setResultado(n1-n2);
                break;
            case "*":
                setResultado(n1*n2);
                break;
            case "%":
                setResultado(n2==0 ? "Err: Divisão por zero":n1/n2);
                break;
        }
    }

    return (
        <div className={style.corpo}>
            <header>
                <h1>Calculadora</h1>
            </header>
            <main>
                <Input label={"Primeiro valor:"} value={num1} onChange={(e) => setNum1(e.target.value)} placeholder={"Digite um valor"}/>
                <Input label={"Segundo valor:"} value={num2} onChange={(e) => setNum2(e.target.value)} placeholder={"Digite outro valor"}/>

                <div>
                    <Botao label="+" onClick={() => calcular("+")} />
                    <Botao label="-" onClick={() => calcular("-")} />
                    <Botao label="×" onClick={() => calcular("*")} type="sucess" />
                    <Botao label="÷" onClick={() => calcular("%")} type="danger" />
                </div>  
                <p>Resultado: {resultado}</p>      
            </main>
            <footer>
                <h2>Todos os direitos reservados - 2025</h2>
            </footer>
        </div>


    )
}