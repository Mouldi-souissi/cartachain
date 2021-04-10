import React, { useEffect } from "react";
import video from "../assets/cartachain.mp4";
import monitor from "../assets/laptop.png";
import arrow from "../assets/arrow.gif";
import Feature1 from "../assets/f1.svg";
import Feature2 from "../assets/f2.svg";
import Feature3 from "../assets/f3.svg";
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";

const Landing = () => {
  useEffect(() => {
    // navbar transparent
    var myNav = document.querySelector(".navbar");
    window.onscroll = function () {
      if (
        document.body.scrollTop >= 200 ||
        document.documentElement.scrollTop >= 200
      ) {
        myNav.classList.add("active");
      } else {
        myNav.classList.remove("active");
      }
    };
  }, []);
  return (
    <div>
      {/* navbar */}
      <header className="header">
        <nav className="navbar navbar-expand-lg fixed-top py-3">
          <div className="container">
            <a
              href="/"
              className="navbar-brand text-uppercase font-weight-bold"
            >
              Cartachain
            </a>
            <button
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              className="navbar-toggler navbar-toggler-right"
            >
              <i className="fa fa-bars"></i>
            </button>

            <div
              id="navbarSupportedContent"
              className="collapse navbar-collapse"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a
                    href="/"
                    className="nav-link text-uppercase font-weight-bold"
                  >
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/"
                    className="nav-link text-uppercase font-weight-bold"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/"
                    className="nav-link text-uppercase font-weight-bold"
                  >
                    Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/"
                    className="nav-link text-uppercase font-weight-bold"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <section className="hero text-center d-flex align-items-center mt-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="display-4  hero-text">
                This is the revolution
                <hr className="h-line mb-3 w-50 mx-auto" />
              </div>
              <a href="/" id="btn-gra" className="btn-gra shadow-lg">
                join us
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* services */}
      <section className="services album mb-5 mt-0" id="services">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "80px" }}>
            <h2 className="section-heading text-uppercase text-secondary pt-5 display-4">
              Services
            </h2>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div
                className="card mb-4 shadow p-4"
                style={{ borderRadius: "20px" }}
                data-aos="zoom-in"
              >
                <i
                  className="fa fa-shopping-cart text-primary mx-auto mb-3 fa-3x mt-3"
                  aria-hidden="true"
                />
                <div className="card-body">
                  <h4 className="mb-3 text-center">E-Commerce</h4>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minima maxime quam architecto quo inventore harum ex magni,
                    dicta impedit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card mb-4 shadow p-4"
                style={{ borderRadius: "20px" }}
                data-aos="zoom-in"
              >
                <i
                  className="fa fa-laptop text-primary mx-auto mb-3 fa-3x mt-3"
                  aria-hidden="true"
                />
                <div className="card-body">
                  <h4 className="mb-3 text-center">Responsive Design</h4>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minima maxime quam architecto quo inventore harum ex magni,
                    dicta impedit.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="card mb-4 shadow p-4"
                style={{ borderRadius: "20px" }}
                data-aos="zoom-in"
              >
                <i
                  className="fa fa-lock text-primary mx-auto mb-3 fa-3x mt-3"
                  aria-hidden="true"
                />
                <div className="card-body">
                  <h4 className="mb-3 text-center">Web Security</h4>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minima maxime quam architecto quo inventore harum ex magni,
                    dicta impedit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* video */}
      <section className="video-section">
        <div className="container-fluid">
          <div className="row py-5">
            <div
              className="col-md-6 my-auto video-text py-5"
              data-aos="fade-right"
            >
              <h4 className="text-center text-secondary font-weight-bold display-4">
                Check out our video
              </h4>
              <img
                src={arrow}
                alt="arrow"
                height="200px"
                width="200px"
                style={{ marginLeft: "50px" }}
              />
            </div>
            <div className="col-md-6 video-container" data-aos="fade-in">
              <img src={monitor} className="monitor" alt="laptop" />
              <video controls className="video">
                <source src={video} type="video/mp4" />
              </video>
            </div>
            <svg
              className="waves"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#0099ff"
                fill-opacity="1"
                d="M0,288L48,293.3C96,299,192,309,288,282.7C384,256,480,192,576,181.3C672,171,768,213,864,240C960,267,1056,277,1152,250.7C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </section>
      {/* about us */}
      <section className="about-us pb-5">
        <div className="display-4 text-center text-white about-text">
          ABOUT US
        </div>
        <div className="container">
          <div
            className="row featurette d-flex align-items-center mt-5"
            data-aos="fade-left"
            style={{ marginBottom: "100px", borderRadius: "20px" }}
          >
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading mb-5 text-muted text-center font-weight-bold ">
                Expand your business
              </h2>
              <p className="lead ">
                In carthachain we offer every startup the opportunity to expand
                their business and turn its ideas into reality by launching a
                raise fund from everyone and even from foreign investors through
                our decentralized platforms.
              </p>
              <p className="lead mb-5">
                Organizations keep embracing the blockchain development services
                for security, transparency, and traceability that this
                technology offers. We help startups and corporate clients build
                secure, trusted and decentralized environments using Blockchain.
                We help our clients adopt the newest technologies to optimize
                processes, adapt, innovate and lead through Blockchain.
              </p>
            </div>
            <div className="col-md-5 my-auto">
              <img
                src={Feature1}
                alt="feature"
                className="img-fluid"
                width="400"
                height="400"
              />
            </div>
          </div>

          <div
            className="row featurette d-flex align-items-center"
            data-aos="fade-right"
            style={{ marginBottom: "100px", borderRadius: "20px" }}
          >
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading text-muted font-weight-bold mb-5 text-center">
                Blockchain Consulting
              </h2>
              <p className="lead">
                Free consultation with our devs on effective engagement of the
                Blockchain to enhance the potential of your business.
              </p>
              <p className="lead mb-5">
                We help startups and corporate clients build secure, trusted and
                decentralized environments using Blockchain. We help our clients
                adopt the newest technologies to optimize processes, adapt,
                innovate and lead through Blockchain. Blockchain Technology will
                help you regulate, track and facilitate payments and other
                business processes with suppliers, partners, contractors, and
                most importantly with your customers.
              </p>
            </div>
            <div className="col-md-5 order-md-1 mb-5 my-auto">
              <img
                src={Feature2}
                alt="feature"
                className="img-fluid"
                width="400"
                height="400"
              />
            </div>
          </div>

          <div
            className="row featurette d-flex align-items-center mb-5"
            data-aos="fade-left"
            style={{ borderRadius: "20px" }}
          >
            <div className="col-md-7">
              <h2 className="featurette-heading text-muted font-weight-bold text-center mb-5">
                DApp development
              </h2>
              <p className="lead mb-5">
                All it takes from you is just an idea. CarthaDevs can translate
                your big ideas into reliable and robust code. We will design and
                publish any decentralized apps based on your requirements in a
                record time.DApps have no need to rely on central servers,
                they’re more reliable than traditional applications.
              </p>
            </div>
            <div className="col-md-5 mt-5 my-auto">
              <img
                src={Feature3}
                alt="feature"
                className="img-fluid"
                width="400"
                height="400"
              />
            </div>
          </div>
        </div>
      </section>
      {/* footer */}
      <footer className="footer bg-dark py-5">
        {/* <hr className="mt-0" /> */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 my-auto h-100 text-center">
              <ul className="list-inline mb-2">
                <li className="list-inline-item mr-3">
                  <a href="/License" className="text-white">
                    License Agreement
                  </a>
                </li>

                <li className="list-inline-item mr-3">
                  <a href="/TermsOfUse" className="text-white">
                    Terms of Use
                  </a>
                </li>

                <li className="list-inline-item">
                  <a href="/PrivacyPolicy" className="text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
              <p className="small mb-4 mb-lg-0 text-white">
                © Cartachain 2021. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-6 my-auto h-100 text-center">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a href="https://www.facebook.com">
                    {/* <i className="fa fa-facebook fa-2x fa-fw"></i> */}
                    <img
                      src={facebook}
                      height="60px"
                      width="60px"
                      alt="facebbok"
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href=" https://twitter.com/">
                    {/* <i className="fa fa-twitter fa-2x fa-fw"></i> */}
                    <img
                      src={twitter}
                      height="60px"
                      width="60px"
                      alt="twitter"
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.instagram.com/">
                    {/* <i className="fa fa-instagram fa-2x fa-fw"></i> */}
                    <img src={insta} height="60px" width="60px" alt="insta" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
