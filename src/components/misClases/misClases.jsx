import React, { Component } from 'react'
import './misClases.css'
import Perfil1 from '../../assets/img/química.jpg'
import Perfil2 from '../../assets/img/derecho.jpg'
import Perfil3 from '../../assets/img/física.jpg'
import Perfil4 from '../../assets/img/Canva - Man In Crew-neck Shirt .png'
import Facetime from '../../assets/img/apple.png'
import Skype from '../../assets/img/skype.png'

export class misClases extends Component {
    render() {
        return (
            <div>
                <p className= "font-weight-bold d-flex justify-content-center font-size"> Haz tomado 4 clases recientemente:</p>

<br></br>
            
        <div className="form-row fans ml-5 mr-5 mb-2 justify-content-around">
            <div>
                <label style= {{color:"green"}} className= "font-weight-bold">9/9/19 15:30- 17:30 Virtual $400</label>
                <ul>
                    <li>Profesor: Juan Castro</li>
                    <li>Área: Inglés</li>
                </ul>
            <img src={Perfil1} className= "rounded-circle" style= {{width:"150px"}} alt="fotodeperfil1"/></div>
            <div className= "col-md-6"><img src={Facetime} className= "rounded-circle" style= {{width:"250px"}} alt=""/></div>
        </div>

        <br></br>

        <div className="form-row fans ml-5 mr-5 mb-2 justify-content-around background-color:yellow">
                <div>
                    <label style= {{color:"green"}} className= "font-weight-bold">6/9/19 10:30- 13:30 Presencial $450</label>
                    <ul>
                        <li>Profesor: Jessica Ramírez</li>
                        <li>Área: Cálculo</li>
                    </ul>
                <img src={Perfil2} className= "rounded-circle" style= {{width:"150px"}} alt="fotodeperfil1"/></div>
                <div className= "col-md-6"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.8802629552843!2d-99.16440904942911!3d19.417578786828546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff3980d3bf21%3A0xdabaf4e144a4e7af!2sImpact%20Hub!5e0!3m2!1ses!2smx!4v1568324838739!5m2!1ses!2smx" width="400" height="300" frameborder="0" style={{border:"0"}} allowfullscreen=""></iframe></div>
            </div>

            <br></br>

            <div className="form-row fans ml-5 mr-5 mb-2 justify-content-around background-color:yellow">
                    <div>
                        <label style= {{color:"green"}} className= "font-weight-bold">20/8/19 21:00- 22:00 Presencial $150</label>
                        <ul>
                            <li>Profesor: John Stewart</li>
                            <li>Área: Historia</li>
                        </ul>
                    <img src={Perfil3} className= "rounded-circle" style={{width:"150px"}} alt="fotodeperfil1"/></div>
                    <div className= "col-md-6"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.0905319292738!2d-99.26681604942993!3d19.365232286858518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d20734cf199eef%3A0xd532213440f5d4d!2sGarden%20Santa%20Fe!5e0!3m2!1ses!2smx!4v1568311883834!5m2!1ses!2smx" width="400" height="300" frameborder="0" style={{border:"0"}} allowfullscreen=""></iframe></div>
                </div>

            <br></br>

                <div className="form-row fans ml-5 mr-5 mb-2 justify-content-around background-color:yellow">
                        <div>
                            <label style= {{color:"green"}} className= "font-weight-bold">16/7/19 15:30- 17:30 Virtual $400</label>
                            <ul>
                                <li>Profesor: Raúl Sánchez</li>
                                <li>Área: Filosofía</li>
                            </ul>
                        <img src={Perfil4} className= "rounded-circle" style= {{width:"150px"}} alt="fotodeperfil1"/></div>
                        <div className= "col-md-6"><img src={Skype} style= {{width:"250px"}} alt=""/></div>
                    </div>
                
            </div>
        )
    }
}

export default misClases

