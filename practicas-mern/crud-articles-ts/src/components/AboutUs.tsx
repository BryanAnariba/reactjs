import React , { Fragment } from 'react'; 
import { Link } from 'react-router-dom';
import './css/About.css';

const AboutUs = () => {
    return ( 
        <Fragment>
            <div className="jumbotron">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <h1 className="display-4">About Us Zone</h1>
                            <p className="lead">This is a simple React Web App, this example take how backend PhP with MySql Data Base Managenment System, the next example, This App to use With Laravel</p>
                            <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                            <div className="jumbotron-container">
                                <div className="jumbotron-content-btn mr-auto ml-auto">
                                    <p className="lead">
                                    <Link className="btn btn-warning btn-lg" to="/" role="button">Go To Home</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 mx-auto">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ullam quod commodi amet pariatur, in ipsum cupiditate, temporibus fugit magnam at necessitatibus, ducimus dolore. Mollitia quia consequatur expedita soluta eos suscipit, similique animi dolorem vero, laudantium atque nostrum rem molestiae.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ullam quod commodi amet pariatur, in ipsum cupiditate, temporibus fugit magnam at necessitatibus, ducimus dolore. Mollitia quia consequatur expedita soluta eos suscipit, similique animi dolorem vero, laudantium atque nostrum rem molestiae.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ullam quod commodi amet pariatur, in ipsum cupiditate, temporibus fugit magnam at necessitatibus, ducimus dolore. Mollitia quia consequatur expedita soluta eos suscipit, similique animi dolorem vero, laudantium atque nostrum rem molestiae.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default AboutUs;