import React from 'react'
import  '../../styles/main.css'
//import imgProfile from './images/img-perfil.png'
import linkedin from './images/linkedin.png'
import github from './images/github.png'
import arrow from './images/arrow-down.png'

import brownieSam from './images/brownie-do-sam.png'
import devflix from './images/devflix.png'
import adoteMe from './images/adote-me.png'

export default class Home extends React.Component{
    render( ){
        return(
            <body>
                <section id="container-1">
                    <h1>Samuel Gama</h1>
                    <div>
                        <a href="https://www.linkedin.com/in/samuel-gama-222a26188">
                            <img src={linkedin} alt="Link for LinkedIn"/>
                        </a>
                        <a href="https://github.com/SamGCM">
                            <img src={github} alt="Link for Github"/>
                        </a>
                    </div>
                    <img id="arrow-down" src={arrow} alt="Arrow for down"/>
                </section>
                <section id="portifolio">
                    <div class="title-section">
                        <h1>Portifolio</h1>
                        <h2>.</h2>
                    </div>
                    <div id="container-grid">
                        <div class="grid-item">
                            <img src={brownieSam} alt="Imagem do site"/>
                            <div>
                                <a href="https://brownie-sam.web.app/" target="_blank" rel="noreferrer">
                                VER MAIS
                                </a>
                            </div>
                            <figcaption>Brownie do Sam</figcaption>
                        </div>
                        <div class="grid-item">
                            <img src={devflix} alt="Imagem do site"/>
                            <div>
                                <a href="https://devflix-samgcm.vercel.app/" target="_blank" rel="noreferrer">
                                    VER MAIS
                                </a>
                            </div>
                            
                            <figcaption>Devflix</figcaption>
                        </div>
                        <div class="grid-item">
                            <img src={adoteMe} alt="Imagem do site"/>
                            <div>
                                <a href="https://adote-3o31jze2n-samgcm.vercel.app/" target="_blank" rel="noreferrer">
                                    VER MAIS
                                </a>
                            </div>
                            
                            <figcaption>Adote me</figcaption>
                        </div>
                    </div>
                </section>
                <section id="about me">

                </section>
                <section id="form-email">
                    <form>
                    </form>
                </section>
            </body>
        )
    }
}

