import React , { Fragment } from 'react';
import './Landing.css';
import urlHeader from './images/responsive.png'
import iconOne from './images/icons-flat/base-de-datos.png';
import iconTwo from './images/icons-flat/computadora.png';
import iconThree from './images/icons-flat/soporte-tecnico.png';
import telefono from './images/icons-flat/telefono.png';
import clientOne from './images/clients/client1.png';
import clientTwo from './images/clients/client2.png';
import clientThree from './images/clients/client3.png';
import clientFour from './images/clients/client4.png';

const Landing = () => {
    return ( 
        <Fragment>
            { /* Zona del header despues del nabvar */ }
            <div id="header" className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 wow bounceInLeft">
                            <h1>Responsive Web Design</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>
                            <button className="btn btn-lg btn-primary">Buy Now</button>
                            <button className="btn btn-lg btn-success">View Detail</button>
                        </div>
                        <div className="col-lg-6 col-md-6 wow bounceInRight">
                            <img src={ urlHeader } alt="" />
                        </div>
                    </div>
                </div>
            </div>
            
            { /* Zona de Servicios */ }
            <div id="services" className="services">
                <div className="container">
                    <h2 className="wow fadeInUp">Services</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.4">Lorem Ipsum is simply dummy text of the printing and typesettin dummy text</p>
                    <div className="row">
                        <div className="col-lg-3 col-md-3 wow fadeInLeft" data-wow-delay="1.8s">
                            <img src={ iconTwo } width="64" alt="mage"/>
                            <h4>web design</h4>
                            <p>Lorem Ipsum passages, and more recently with desktop publishing software</p>
                        </div>
                        <div className="col-lg-3 col-md-3 wow fadeInLeft" data-wow-delay="1.4s">
                            <img src={ telefono } width="64" alt="telefono"/>
                            <h4>Mobile Apps</h4>
                            <p>Lorem Ipsum passages, and more recently with desktop publishing software</p>
                        </div>
                        <div className="col-lg-3 col-md-3 wow fadeInLeft" data-wow-delay="0.8s">
                            <img src={ iconOne } width="64" alt="db"/>   
                            <h4>Database</h4>
                            <p>Lorem Ipsum passages, and more recently with desktop publishing software</p>
                        </div>
                        <div className="col-lg-3 col-md-3 wow fadeInLeft" data-wow-delay="0.4s">
                            <img src={ iconThree } width="64" alt="consulting"/>
                            <h4>Consulting</h4>
                            <p>Lorem Ipsum passages, and more recently with desktop publishing software</p>
                        </div>
                    </div>
                </div>
            </div>

            { /* Our Clients */ }
            <div id="client" className="clients">
                <h2 className="wow fadeInUp">Trusted by</h2>
                <p className="wow fadeInUp" data-wow-delay="0.4">Lorem Ipsum passages, and more recently with desktop publishing software</p>        
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 wow fadeInLeft" data-wow-delay="2s">
                        <img src={ clientOne } alt="Logo 1" />
                        </div>
                        <div className="col-lg-3 col-md-3 wow fadeInLeft" data-wow-delay="1.6s">
                        <img src={ clientTwo } alt="cliente 2" />
                        </div>
                        <div className="col-lg-3 col-md-3 wow fadeInLeft" data-wow-delay="1.2s">
                        <img src={ clientThree } alt="cliente 3" />
                        </div>
                        <div className="col-lg-3 col-md-3 wow fadeInLeft" data-wow-delay="0.8s">
                        <img src={ clientFour } alt="cliente 4" />
                        </div>
                    </div>
                </div>
            </div>

            
        </Fragment>
    );
}

export default Landing;