import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';
import 'bootstrap';
import sendero from "../src/images/snedero.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../src/images/logo.png';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import pigs from "../src/images/13.png";
import hen from "../src/images/gallina.JPG";
import cow from "../src/images//animales/cow.jpeg";
import pig from "../src/images/cerdo.jpg";
import mision from "../src/images/mi.jpg";
import vision from "../src/images/vi.jpg";
import historia from "../src/images/111.JPG";
import "aos/dist/aos.css"
import emailjs from '@emailjs/browser';
import s1 from "../src/images/s1.jpeg";
import s2 from "../src/images/s2.jpeg";
import s3 from "../src/images/s3.jpeg";
import s4 from "../src/images/snedero2.jpg.png";
import s5 from "../src/images/snedero3j.png";

/////imagenes del carrucel
import a1 from "../src/images/animales/a1.png";
import a2 from "../src/images/animales/a2.png";
import a3 from "../src/images/animales/a3.png";
import a4 from "../src/images/animales/a4.png";
import a5 from "../src/images/animales/a5.png";
import a6 from "../src/images/animales/a6.png";

import f1 from "../src/images/animales/f1.png";
import f2 from "../src/images/animales/f2.png";
import f3 from "../src/images/animales/f3.png";
import f4 from "../src/images/animales/f4.png";
import f5 from "../src/images/animales/f5.png";
import f6 from "../src/images/animales/f.png";

import p1 from "../src/images/1f.png";
import p2 from "../src/images/2f.png";
import p3 from "../src/images/3f.png";
import p4 from "../src/images/4f.png";
import p5 from "../src/images/5f.png";
import p6 from "../src/images/6f.png";
import p7 from "../src/images/7f.png";
import p8 from "../src/images/8f.png";


import whataspp from "../src/images/w.png";
import facebook from "../src/images/f.png";
import instagram from "../src/images/i.png";
function Home() {



  const navigate = useNavigate();
  const paquetes = () => {

    navigate('/paquetes');
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
                <a class="nav-link active" aria-current="page" href="#inicio">INICIO</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#nosotros">NOSOTROS</a>
              </li>
              <a class="navbar-brand" href="#inicio"><div class="center"><img className='logo' src={logo}></img></div></a>
              <li class="nav-item">
                <a class="nav-link" href="#productos">PRODUCTOS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contacto">CONTACTO</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>


      <div class="col-md-12" >
        <img src={pigs} data-aos="fade-up" class="img" />

      </div>
      <br /><br /><br /><br />
      <blockquote class="blockquote text-center" id='inicio'>

        <h1 class="mb-0" data-aos="fade-up">SENDERO ECOLOGICO</h1>

      </blockquote>
      <br />
      <div class="row">
        <span className='col-md-6'>
          <div id="carouselExampleControls22" class="carousel slide" data-bs-ride="carousel" data-aos="flip-left">
            <div class="carousel-inner how-img">
              <div class="carousel-item active">
                <div className="content">
                  <img src={s3} className='pro' alt="..." />
                </div>
              </div>
              <div class="carousel-item">
                <div className="content">
                  <img src={s2} className='pro' alt="..." />
                </div>
              </div>
              <div class="carousel-item">
                <div className="content">
                  <img src={s1} className='pro' alt="..." />
                </div>
              </div>
              <div class="carousel-item">
                <div className="content">
                  <img src={s4} className='pro' alt="..." />
                </div>
              </div>
              <div class="carousel-item">
                <div className="content">
                  <img src={s5} className='pro' alt="..." />
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
        </span>

        <div class="col-md-6">

          <h4 class="subheading" data-aos="fade-left"></h4>
          <p class="sendero" data-aos="fade-left">la Asociación recibió la visita de la Agencia Comercialización e Innovación de Cundinamarca con la finalidad de establecer canales para comercializar nuestros productos Agrícolas, fortalecer los procesos asociativos y la gestión para lograr más certificaciones en Buenas Prácticas Agrícolas y el seguimiento fitosanitario en la zona.</p>
          <button onClick={paquetes} class="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Ver más
          </button>
        </div>

      </div>

      <br />
      <blockquote class="blockquote text-center">
        <h1 class="mb-0" data-aos="fade-up" > LA MAGIA DE LO NATURAL</h1>

      </blockquote>

      <div class="how-section1">
        <div class="row">
          <div class="col-md-6">
            <img src={cow} className='img' alt="" />
          </div>
          <div class="col-md-6" >

            <h4 class="subheading" data-aos="fade-left">¿Sabias que?</h4>
            <p data-aos="fade-left">Las vacas tienen muchos nombres: las vacas macho se llaman "toros" o "novillos", las crías se llaman "terneros" y las vacas jóvenes que aún no han tenido terneros se llaman "vaquillas". Y dependiendo del país o región, pueden haber otras maneras de llamarlas. </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">

            <h4 class="subheading" data-aos="fade-right">¿Sabias que?</h4>
            <p data-aos="fade-right">Los cerdos disfrutan la comida, su fama de ser glotones no es nada. Al ser animales omnívoros, los cerdos comen casi cualquier cosa - incluso pequeños reptiles. Pero eso no quiere decir que no saben disfrutar de una buena comida. Comen despacio y la saborean. Sus alimentos favoritos son hierba, raíces, frutos y semillas, pero pueden adaptar su dieta de acuerdo a la disponibilidad de alimentos.</p>
          </div>
          <div class="col-md-6 ">

            <img src={pig} className='img' alt="" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 ">
            <img src={hen} className='img' alt="" />
          </div>
          <div class="col-md-6">

            <h4 class="subheading" data-aos="fade-left">¿Sabias que?</h4>
            <p data-aos="fade-left">Existe una especie de gallinas llamadas “ponedoras”, estas ponen uno o dos huevos cada día. Los avicultores recogen diariamente sus huevos, pues de no hacerlo, estas gallinas dejarán de poner más. Estos huevos están destinados al consumo de los humanos y no para la crianza de pollos.</p>
          </div>
        </div>

      </div>
      <blockquote class="blockquote text-center" id='nosotros'>
        <h3 class="mb-0" data-aos="fade-up">NOSOTROS</h3>

      </blockquote>
      <br /> <br /> <br /> <br />
      <div class="how-section1">
        <div class="row" className='centro' data-aos="fade-up">
          <div class="col-md-12">

            <img className='imgh' src={historia} alt="" />
          </div>
          <br />
          <div class="col-md-10">


            <p >Por los años 2.015 y 2.016 un grupo de pequeños productores Agropecuarios de Cachipay cansados de no conseguir ninguna ayuda por parte del Gobierno o de los entes Nacionales, Departamentales o Municipales, nos dimos en la tarea de asistir a una serie de cursos en la parte tanto Pecuaria como Agrícola , fue así que un instructor del Sena Andrés Pardo quien nos dictaba el curso Emprendedores en Producción  y Comercialización de Cerdos en Pie, con el mencionado docente el pasado 21de Abril del año 2.016,nos reunimos unos usuarios de las veredas: La laguna, Petaluma, Tocarema, San Antonio Bajo, El Tolú, El Retiro, La Cabaña, la recevera y Peña Negra. Previa convocatoria realizada por el señor Fidel Rubiano quien realizó la convocatoria a petición de las demás personas y que se están capacitando en el Curso Emprendedores en Producción y Comercialización de Cerdos en Pie, esta convocatoria fue realizada telefónica y personal mente a los interesados. Con el objeto de manifestar la voluntad expresa de constituir la entidad sin animo de lucro denominada ASOCIACION DE PRODUCTORES AGROPECUARIOS DE CACHIPAY APAC, los presentes manifestaron la voluntad de pertenecer a esta Asociación y aprueban por unanimidad el nombre y la sigla propuesta. Así nacio APAC.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6" data-aos="fade-up">
            <div class="col-md-12 ">
              <h3 className='centro' class="subheading">MISIÓN</h3>
              <img src={mision} className='imgh' alt="" />
            </div>
            <div class="col-md-12" >


              <p >Ser una Asociación  que represente al gremio de pequeños productores Agropecuarios de Cachipay, Fomentando el modelo asociativo como eje de desarrollo, humano y comunitario</p>
            </div>
          </div>

          <div class="col-md-6  " data-aos="fade-up">
            <div class="col-md-12 ">
              <h3 className='centro' class="subheading">VISIÓN</h3>
              <img src={vision} className='imgh' alt="" />
            </div>
            <div class="col-md-12">


              <p >En el año 2025  APAC Cachipay será reconocida como una Organización de recursos para el desarrollo de proyectos comunitarios, buscando mejorar la calidad de vida de sus asociados.</p>
            </div>

          </div>
        </div>


      </div>
      <blockquote class="blockquote text-center" id='productos'>
        <h1 class="mb-0" data-aos="fade-up">ANIMALES</h1>

      </blockquote>
      <span className='pc'>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-aos="flip-left">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="content">
                <img src={a1} className='pro' alt="..." />
                <img src={a2} className='pro' alt="..." />
                <img src={a3} className='pro' alt="..." />
              </div>
            </div>
            <div class="carousel-item">
              <div className="content">
                <img src={a4} className='pro' alt="..." />
                <img src={a5} className='pro' alt="..." />
                <img src={a6} className='pro' alt="..." />
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
      </span>
      <span className='cell'>
        <div id="carouselExampleControls-c" class="carousel slide" data-bs-ride="carousel" data-aos="flip-left">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="content">
                <img src={a1} className='pro' alt="..." />
                <img src={a2} className='pro' alt="..." />
              </div>
            </div>
            <div class="carousel-item">
              <div className="content">
                <img src={a3} className='pro' alt="..." />
                <img src={a4} className='pro' alt="..." />
              </div>
            </div>
            <div class="carousel-item">
              <div className="content">
                <img src={a5} className='pro' alt="..." />
                <img src={a6} className='pro' alt="..." />
              </div>
            </div>

          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls-c" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls-c" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </span>
      <br /><br /><br />
      <blockquote class="blockquote text-center">
        <h1 class="mb-0" data-aos="fade-up">ÁRBOLES FRUTALES</h1>

      </blockquote>
      <span className='pc'>
        <div id="carouselExampleControls2" class="carousel slide" data-bs-ride="carousel" data-aos="flip-left">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="content">
                <img src={f1} className='pro' alt="..." />
                <img src={f2} className='pro' alt="..." />
                <img src={f3} className='pro' alt="..." />
              </div>
            </div>
            <div class="carousel-item">
              <div className="content">
                <img src={f4} className='pro' alt="..." />
                <img src={f5} className='pro' alt="..." />
                <img src={f6} className='pro' alt="..." />
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
      </span>
      <span className='cell'>
        <div id="carouselExampleControls2-p" class="carousel slide" data-bs-ride="carousel" data-aos="flip-left">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="content">
                <img src={f1} className='pro' alt="..." />
                <img src={f2} className='pro' alt="..." />
              </div>
            </div>
            <div class="carousel-item">
              <div className="content">
                <img src={f3} className='pro' alt="..." />
                <img src={f4} className='pro' alt="..." />
              </div>
            </div>
            <div class="carousel-item">
              <div className="content">
                <img src={f5} className='pro' alt="..." />
                <img src={f6} className='pro' alt="..." />
              </div>
            </div>

          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2-p" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2-p" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </span>
      <br /><br /><br />
      <blockquote class="blockquote text-center">

        <h1 class="mb-0" data-aos="fade-up">FOLLAJES</h1>

      </blockquote>
      <span className='pc'>
        <div id="carouselExampleControls3" class="carousel slide" data-bs-ride="carousel" data-aos="flip-left">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="content">
                <img src={p1} className='pro' alt="..." />
                <img src={p2} className='pro' alt="..." />
                <img src={p6} className='pro' alt="..." />
              </div>
            </div>
            <div class="carousel-item">
              <div className="content">
                <img src={p4} className='pro' alt="..." />
                <img src={p5} className='pro' alt="..." />
                <img src={p3} className='pro' alt="..." />
              </div>
            </div>
            <div class="carousel-item">
              <div className="content">
                <img src={p7} className='pro' alt="..." />
                <img src={p8} className='pro' alt="..." />

              </div>
            </div>

          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </span>
      <span className='cell'>

        <div id="carouselExampleControls3-p" class="carousel slide" data-bs-ride="carousel" data-aos="flip-left">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="content">
                <img src={p1} className='pro' alt="..." />
                <img src={p2} className='pro' alt="..." />

              </div>
            </div>
            <div class="carousel-item">
              <div className="content">
                <img src={p3} className='pro' alt="..." />
                <img src={p4} className='pro' alt="..." />

              </div>
            </div>
            <div class="carousel-item">
              <div className="content">
                <img src={p5} className='pro' alt="..." />
                <img src={p6} className='pro' alt="..." />

              </div>
            </div>
            <div class="carousel-item">
              <div className="content">
                <img src={p7} className='pro' alt="..." />
                <img src={p8} className='pro' alt="..." />

              </div>
            </div>

          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3-p" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3-p" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

      </span>
      <br /><br /><br /><br />

      <blockquote class="blockquote text-center">
        <h1 class="mb-0" id='contacto' data-aos="fade-up">Colocar información para contactarnos contigo</h1>

      </blockquote>
      <br />
      <div class="contac">
        <div className='map' data-aos="fade-up">


          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7952.457456863245!2d-74.43534795000001!3d4.73028845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f656c3f41708f%3A0x95ee8336f0309f34!2sCachipay%2C%20Cundinamarca!5e0!3m2!1ses!2sco!4v1687120139037!5m2!1ses!2sco"
            className='mapa' style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


        </div>

        <div className='form' data-aos="fade-up">


          <div className='center'>
            <form ref={form} onSubmit={sendEmail} className='form-controller'>
              <input class="text" name='from_name' type='text' placeholder='Nombre completo' />
              <input class="text" type='text' name='correo' placeholder='Correo electronico' />
              <input class="text" type='number' name='telefono' placeholder='Numero de telefono' />
              <textarea class="textm" name='message' type="text" placeholder='Mensaje' />
              <button type='submit' class="btn btn-success">Enviar</button>
            </form>
          </div>




        </div>
      </div>
      <br></br>
      <div className='datac'>
        <div class="row">
          <div class="col-md-3" >
            <p>Correo: <br />contacto@asopac.com<br /> Asoapac@gmail.com</p>
          </div>
          <div class="col-md-3" >

            <p >Telefono: <br /> (+57) 3132774395 <br />(+57) 3138294616</p>
          </div>
          <div class="col-md-3" >
            <p >Dirección: <br /> Cachipay, Cundinamarca</p>
          </div>
          <div class="col-md-3" >
            <p >Horario: <br /> lunes a viernes: 7:30 am a 12:00m<br /> 1:00 pm a 5:00 pm
              <br /> sábados: 7:30 am a 1:00 pm</p>
          </div>

        </div>
      </div>
      <footer class="text-center text-lg-start">
        <div className='row'>
          <div class="col-md-8" >
            <div className='dereca'>
              <div class="text-center p-3" >

                <a class="text-black">© 2023 Copyright:  APAC   </a>

              </div>
            </div>
          </div>
          <div class="col-md-4" >

            <div className='dereca'>
              <div className='m-a-c'> Por: Ecoproyectsas</div>
            </div>
          </div>
        </div>
      </footer>

      <div id='delegar' fill="currentColor" >
        <a href='https://www.instagram.com/asoapac/'>
          <img className='i1' src={instagram}></img>
        </a>
      </div>

      <div id='delegar1' fill="currentColor" >
        <a href='https://www.facebook.com/profile.php?id=100094220070455'>
          <img className='i2' src={facebook}></img>
        </a>
      </div>
      <div id='delegar2' fill="currentColor" >
        <a href='https://wa.link/o16z44'>
          <img className='i3' src={whataspp}></img>
        </a>
      </div>

    </div>
  );
}

export default Home;
