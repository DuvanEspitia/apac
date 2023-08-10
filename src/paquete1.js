import React, { useEffect, useRef } from 'react';
import Aos from 'aos';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../src/images/logo.png';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import "aos/dist/aos.css"
import emailjs from '@emailjs/browser';
import s1 from "../src/images/s10.jpeg";
import s2 from "../src/images/s2.jpeg";
import s3 from "../src/images/s3.jpeg";
import {  useNavigate } from 'react-router-dom';
import s11 from "../src/images/s11.jpeg";
import s12 from "../src/images/s12.jpeg";

import next from "./images/next.png"
import back from "./images/back.png"
import whataspp from "../src/images/w.png";
import facebook from "../src/images/f.png";
import instagram from "../src/images/i.png";
function Home() {

  useEffect(() => {

    Aos.init({ duration: 2000 })
  }, []);

  const navigate = useNavigate();
  const paquete1 = () => {

    navigate('/paquete2');
  };
  const paquete2 = () => {

      navigate('/paquete3');
    };
  const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hu3jk9e', 'template_r6qr61f', form.current, 'wUSkq2aAR-p08fau7')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    e.target.reset()
};

  return (
    <div className="App">

      
      <nav class="navbar fixed-top navbar-expand-lg  " >
        <div class="container-fluid">

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto justify-content-center">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">INICIO</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">NOSOTROS</a>
              </li>
              <a class="navbar-brand" href="/"><img className='logo' src={logo}></img></a>
              <li class="nav-item">
                <a class="nav-link" href="/">PRODUCTOS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">CONTACTO</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>


   

   
        <div className='pad'>
      <div class="row">
  <div class="col-md-6 " >
    <br />
    <h3 class="mb-0">"Camino al Zafiro"  </h3>
  
    <div id="carouselExampleControls22" class="carousel slide" data-bs-ride="carousel" data-aos="flip-left">
        <div class="carousel-inner how-img2">
          <div class="carousel-item active">
            <div className="content">
              <img src={s1} className='paques' alt="..." />
            </div>
          </div>
          <div class="carousel-item">
            <div className="content">
              <img src={s11} className='paques' alt="..." />
            </div>
          </div>
          <div class="carousel-item">
            <div className="content">
              <img src={s12} className='paques' alt="..." />
            </div>
          </div>
     
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls22" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls22" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    <br />  <br />
  
  </div >
  <div class="col-md-6 " >
    <br/>
    <br/> <br/>
   <div class="row">
  <div class="col-md-6 " >
    <div className='left'>

    <h3 class="mb-0">Plan 1.1 incluye: </h3>
   
  • Póliza de accidentes<br />
• Guía turístico<br />
• Refrigerio con bebida saludable<br />
• Almuerzo Casero<br />
• Caminata ecológica de 400 metros(Saliendo del parque principal de cachipay recorriendo la línea férrea,
camino real, carretera, llegada a la finca)<br />
• Recorrido interno por la finca y muestra de los diferentes productos agropecuarios y turísticos<br />
• Servicio de baño<br />
• Presentación de video experiencia<br />

(Tiempo estimado 3 horas)<br />
<h6 class="mb-0"> Valor por $ 60.000</h6>
</div></div><br />
<div class="col-md-6 " >
<div className='left'>
<h3 class="mb-0">Plan 1.2 incluye: </h3>
• Llegada directamente al zafiro sin caminata<br />
• Póliza de accidentes<br />
• Guía turístico<br />
• Refrigerio con bebida saludable<br />
• Almuerzo Casero<br />
• Recorrido interno por la finca y muestra de los diferentes productos agropecuarios y
turísticos<br />
• Servicio de baño<br />
• Presentación de video experiencia<br />

(Tiempo estimado 3 horas)<br />
<h6 class="mb-0"> Valor por $ 60.000</h6>
</div>
</div>
</div>
</div>
 
  </div>
  <div class="col-md-12 " >
    <div class="row">
<div class="col-md-6 " >
<button  onClick={paquete2} className='controls'><img className='icon' src={back}></img>Atrás </button>
</div>
<div class="col-md-6" >
  
    <button onClick={paquete1} className='controls'>Siguiente <img className='icon' src={next}></img></button>
</div>
</div>

</div>

</div>


  
     
      <footer class="text-center text-lg-start">

        <div class="text-center p-3" >
          <a class="text-black">© 2023 Copyright:  APAC   </a>

        </div>

      </footer>
      <div id='delegar'  fill="currentColor" >
        <a href='https://www.instagram.com/asoapac/'>
         <img className='i1' src={instagram}></img>
         </a>
      </div>

      <div id='delegar1'  fill="currentColor" >
        <a href='https://www.facebook.com/profile.php?id=100094220070455'>
         <img  className='i2' src={facebook}></img>
         </a>
      </div>
      <div id='delegar2'  fill="currentColor" >
        <a href='https://wa.link/o16z44'>
         <img className='i3' src={whataspp}></img>
         </a>
      </div>
      
    </div>
  );
}

export default Home;
