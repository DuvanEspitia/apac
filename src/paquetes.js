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
import s2 from "../src/images/s20.jpeg";
import s21 from "../src/images/s21.jpeg";
import s22 from "../src/images/s22.jpeg";
import s3 from "../src/images/s30.jpeg";
import s31 from "../src/images/s31.jpeg";
import s32 from "../src/images/s32.jpeg";
import s11 from "../src/images/s11.jpeg";
import s12 from "../src/images/s12.jpeg";
import { Routes, Route, useNavigate } from 'react-router-dom';
import whataspp from "../src/images/w.png";
import facebook from "../src/images/f.png";
import instagram from "../src/images/i.png";
function Home() {

  const navigate = useNavigate();
  const paquetes1 = () => {

    navigate('/paquete1');
  };

  const paquetes2 = () => {

    navigate('/paquete2');
  };

  const paquetes3 = () => {

    navigate('/paquete3');
  };
  useEffect(() => {

    Aos.init({ duration: 2000 })
  }, []);


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
                <a class="nav-link" href="/">paquesDUCTOS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">CONTACTO</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>


   
      <blockquote class="blockquote text-center" id='inicio'>

        <h1 class="mb-0" data-aos="fade-up">PAQUETES</h1>

      </blockquote>
   
        <div className='pad'>
      <div class="row">
  <div class="col-md-4 " >
    <br />
    <h3 class="mb-0">Plan 1  </h3>
    <h6 class="subheading" > "Camino al Zafiro"</h6>
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
    <div>
  <button onClick={paquetes1} class="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Conocer descripción
            </button></div>
  </div >
 
  <div class="col-md-4 " >
    <br />
    <h3 class="mb-0">Plan 2  </h3>
    <h6 class="subheading" >"Camino al Zafiro"</h6>
    <div id="carouselExampleControls2" class="carousel slide" data-bs-ride="carousel" data-aos="flip-left">
        <div class="carousel-inner how-img2">
          <div class="carousel-item active">
            <div className="content">
              <img src={s2} className='paques' alt="..." />
            </div>
          </div>
          <div class="carousel-item">
            <div className="content">
              <img src={s21} className='paques' alt="..." />
            </div>
          </div>
          <div class="carousel-item">
            <div className="content">
              <img src={s22} className='paques' alt="..." />
            </div>
          </div>
     
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    <br />  <br />
    <div>
  <button onClick={paquetes2} class="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Conocer descripción
            </button></div>
  </div >
  <div class="col-md-4 " >
    <br />
    <h3 class="mb-0">Plan 3  </h3>
    <h6 class="subheading" >"Conociendo la región a través del Biciturismo"</h6>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-aos="flip-left">
        <div class="carousel-inner how-img2">
          <div class="carousel-item active">
            <div className="content">
              <img src={s3} className='paques' alt="..." />
            </div>
          </div>
          <div class="carousel-item">
            <div className="content">
              <img src={s31} className='paques' alt="..." />
            </div>
          </div>
          <div class="carousel-item">
            <div className="content">
              <img src={s32} className='paques' alt="..." />
            </div>
          </div>
     
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    <br />  <br />
    <div>
  <button  onClick={paquetes3} class="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Conocer descripción
            </button></div>

   
  </div >  </div>
 
<br></br><br></br><br></br>

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
        <a href='https://www.facebook.com/paquesfile.php?id=100094220070455'>
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
