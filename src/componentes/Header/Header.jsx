import React from "react"
import Logo from "./logo.png"

function Header(){
    return(
        <header>
            <img src={Logo} alt="logo de confeitaria"/>
            <ul>
                <li>Sobre</li>
                <li>Contatos</li>
                <li>Cardápio</li>
                <li>Cursos</li>
            </ul>

        </header>
    )
}

export default Header