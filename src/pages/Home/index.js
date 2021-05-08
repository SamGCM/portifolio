import React from 'react'
import  '../../styles/main.css'
import imgProfile from './images/img-perfil.png'
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
                    <a href="#portifolio" id="link-arrow"><img id="arrow-down" src={arrow} alt="Arrow for down"/></a>
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


                <section id="about-me">
                    <div class="title-section">
                            <h1>Sobre mim</h1>
                            <h2>.</h2>
                    </div>
                    <div id="container-about">
                        <img src={imgProfile} alt="Uma foto minha"/>
                        <span>Localização: Ceará - Brasil</span>
                        <span>Idioma: Portugês(Nativo), Inglês(Básico)</span>
                    </div>
                    <p>
                        Oi, meu nome é Samuel, sou estudante de Front-end desde 20 de Outubro de 2020, sempre 
                        indo atrás de mais conhecimento. Gosto de fazer projetos diferentes para aplicar o aprendizado 
                        dos estudos.
                        Valorizo uma boa comunicação e troca de aprendizado. Assim como ter organização para atingir metas.
                    </p>
                </section>
                <section id="skills">
                    <h3>Competências</h3>
                    <div>
                        <span><strong>Front-end:</strong> HTML5, CSS3/SASS/LESS, JavaScript, JSX, React.JS, JSON, EJS,Parcel</span>
                        <span><strong>Soft-Skills:</strong> Experiência em oratória, boa comunicação, trabalho em equipe, vontade de aprender</span>
                        <span><strong>Outras:</strong> Git/Github, PSCS6, Stack-Overflow, Figma</span>
                    </div>
                </section>
                <section id="form-email">
                    <div class="title-section">
                        <h1>Entre em Contato</h1>
                        <h2>.</h2>
                    </div>
                    <form method="post">
                        <div>
                            <label for='nome'>Nome</label>
                            <input type="text" name='nome' placeholder='Digite seu nome' />
                        </div>
                        <div>
                            <label for='email'>Email</label>
                            <input type="email" name='email' placeholder='Digite seu email' />
                        </div>
                        <div>
                            <label for='message'>Mensagem</label>
                            <textarea type="text" name='message' placeholder='Digite sua mensagem'/>
                        </div>
                        <input id="btn-submit" type='submit' name='enviar' value="Enviar"  />
                    </form>
                </section>
            </body>
        )
    }
}

