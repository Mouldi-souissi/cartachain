import React, { useEffect } from "react";
import video from "../assets/cartachain.mp4";
import monitor from "../assets/laptop.png";
import arrow from "../assets/arrow.gif";
import Feature1 from "../assets/f1.svg";
import Feature2 from "../assets/f2.svg";
import Feature3 from "../assets/f3.svg";
import Feature4 from "../assets/f4.svg";
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";
import network from "../assets/network.mp4";
import contact from "../assets/contact2.jpg";
import logo from "../assets/logo.png";
import s1 from "../assets/s1.png";
import s4 from "../assets/s4.png";
import t1 from "../assets/f4.png";
import t2 from "../assets/blockchain.png";
import t3 from "../assets/t3.png";
import t4 from "../assets/pgas.png";

const Landing = () => {
  // video auto play
  useEffect(() => {
    window.addEventListener("load", async () => {
      let video = document.getElementById("videoId");
      try {
        await video.play();
      } catch (err) {
        video.controls = true;
      }
    });
  }, []);

  // show up-btn
  useEffect(() => {
    let btn = document.querySelector(".go-up");
    window.onscroll = () => {
      if (
        document.body.scrollTop > 900 ||
        document.documentElement.scrollTop > 900
      ) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    };
  }, []);

  return (
    <div>
      {/* navbar */}
      <header className="header">
        <nav className="navbar navbar-expand-lg fixed-top py-1">
          <div className="container-fluid">
            <a
              href="/"
              className="navbar-brand text-uppercase font-weight-bold"
            >
              <img alt="logo" src={logo} height="80px" />
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
                {/* <li className="nav-item">
                  <a
                    href="/"
                    className="nav-link text-uppercase font-weight-bold"
                  >
                    Gallery
                  </a>
                </li> */}
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
      {/* hero */}
      <section className="hero text-center d-flex align-items-center justify-content-center mb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="hero-video mx-auto">
              <video
                playsInline
                autoPlay
                muted
                loop
                className="bgvideo"
                width="x"
                height="y"
                id="videoId"
                border="none"
                poster="true"
              >
                <source src={network} type="video/mp4" />
              </video>
            </div>
            <div
              className="col-lg-12 col-md-12 col-sm-12 col-xs-12 position-absolute hero-bg"
              style={{ top: "50%" }}
            >
              <div className="display-4 hero-text mb-3">
                This is the revolution
                {/* <hr className="h-line mb-3 w-50 mx-auto" /> */}
              </div>
              <button className="btn mx-auto custom-btn font-weight-bold shadow-sm">
                JOIN US
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* services */}
      <section className="services">
        <div className="container">
          <h2
            className="section-heading display-4"
            style={{ marginBottom: "100px" }}
          >
            SERVICES
          </h2>

          <div className="row mt-5">
            <div className="col-lg-3 col-md-6">
              <div className="service" data-aos="zoom-in">
                <div className="text-center icon-container">
                  <i className="fa fa-expand fa-3x" aria-hidden="true" />
                </div>
                <h5 className="pt-3 text-nowrap">
                  <span className="text-black font-weight-bold mr-1">
                    Expand
                  </span>
                  your business
                </h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service" data-aos="zoom-in">
                <div className="text-center icon-container">
                  <img alt="blocchain" src={s1} className="service-icon" />
                  {/* <i className="fa fa-link fa-3x" aria-hidden="true" /> */}
                </div>
                <h5 className="pt-3">
                  <span className="text-black font-weight-bold mr-1">
                    Blockchain
                  </span>
                  Consulting
                </h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service" data-aos="zoom-in">
                <div className="text-center icon-container">
                  <i className="fa fa-laptop fa-3x" aria-hidden="true" />
                </div>
                <h5 className="pt-3">
                  <span className="text-black font-weight-bold mr-1">DApp</span>
                  development
                </h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service" data-aos="zoom-in">
                <div className="text-center icon-container">
                  <img alt="blocchain" src={s4} className="service-icon" />
                  {/* <i className="fa fa-link fa-3x" aria-hidden="true" /> */}
                </div>
                <h5 className="pt-3">
                  <span className="text-black font-weight-bold mr-1">
                    Smart
                  </span>
                  Contract
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* video */}
      <section className="video-section d-flex align-items-center justify-content-center">
        <div className="container-fluid">
          <div className="row pt-5">
            <div
              className="col-md-6 my-auto video-text pt-5 mx-auto"
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
            <div
              className="video-container"
              data-aos="fade-in"
              style={{ marginBottom: "100px" }}
            >
              <img src={monitor} className="monitor mt-5" alt="laptop" />

              <video controls className="video mt-5">
                <source
                  // src="https://r1---sn-hgn7yn7z.c.drive.google.com/videoplayback?expire=1618563005&ei=fRd5YN2iGI308gTJnJvICA&ip=197.14.133.94&cp=QVRGWkZfUlBORlhPOlN6QWgwaFN3cjhONzBHcUZrdkh1b1VrT3pGZHpHLXl0VVUxcl9YQlU5eXk&id=7780fce319ffe7ac&itag=18&source=webdrive&requiressl=yes&mh=I5&mm=32&mn=sn-hgn7yn7z&ms=su&mv=u&mvi=1&pl=20&ttl=transient&susc=dr&driveid=1dSc6d_BAORuQ1z1f2xtTJ9jRDcsynCPm&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=157.895&lmt=1618540489490355&mt=1618547534&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRQIgGbNxWhDBy9r7bPfo8ecqVrl9mIhXZglWGDblBlnjr0cCIQDBtWbiE3eJtYukJNr8HOuf_ePDG1_6cc6ZnodpI42GXA==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgVmHtALZfzShApb2HcXq7rAxAccuUCaki-vvdhekINIQCIQCiL76oGXE2AXs_Fqla51duxMXJdJIwX0ue2-0DbYt-cA==&cpn=83BgrH7tpSGhRwMg&c=WEB_EMBEDDED_PLAYER&cver=1.20210414.1.0"
                  src={video}
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </section>
      {/* about us */}
      <section className="about-us pb-5">
        <div className="container">
          <div
            className="display-4 text-center section-heading"
            style={{ marginBottom: "100px" }}
          >
            ABOUT US
          </div>
          <div
            className="row featurette d-flex align-items-center mt-5"
            data-aos="fade-left"
            style={{ marginBottom: "100px" }}
          >
            <div className="col-md-6">
              <h2 className="featurette-heading mb-5 font-weight-bold section-lines">
                Expand your business
              </h2>
              <p className="lead text-justify">
                In carthachain we offer every startup the opportunity to expand
                their business and turn its ideas into reality by launching a
                raise fund from everyone and even from foreign investors through
                our decentralized platforms.
              </p>
              <p className="lead mb-5 text-justify">
                Organizations keep embracing the blockchain development services
                for security, transparency, and traceability that this
                technology offers. We help startups and corporate clients build
                secure, trusted and decentralized environments using Blockchain.
                We help our clients adopt the newest technologies to optimize
                processes, adapt, innovate and lead through Blockchain.
              </p>
            </div>
            <div className="col-md-6 my-auto">
              <img
                src={Feature1}
                alt="feature"
                className="img-fluid"
                width="500"
                height="500"
              />
            </div>
          </div>

          <div
            className="row featurette d-flex align-items-center"
            data-aos="fade-right"
            style={{ marginBottom: "100px" }}
          >
            <div className="col-md-6 order-md-2">
              <h2 className="featurette-heading font-weight-bold mb-5 section-lines">
                Blockchain Consulting
              </h2>
              <p className="lead text-justify">
                Free consultation with our devs on effective engagement of the
                Blockchain to enhance the potential of your business.
              </p>
              <p className="lead mb-5 text-justify">
                We help startups and corporate clients build secure, trusted and
                decentralized environments using Blockchain. We help our clients
                adopt the newest technologies to optimize processes, adapt,
                innovate and lead through Blockchain. Blockchain Technology will
                help you regulate, track and facilitate payments and other
                business processes with suppliers, partners, contractors, and
                most importantly with your customers.
              </p>
            </div>
            <div className="col-md-6 order-md-1 mb-5 my-auto">
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
            className="row featurette d-flex align-items-center"
            data-aos="fade-left"
            style={{ marginBottom: "100px" }}
          >
            <div className="col-md-6">
              <h2 className="featurette-heading font-weight-bold mb-5 section-lines">
                DApp development
              </h2>

              <p className="lead mb-5 text-justify">
                All it takes from you is just an idea. CarthaDevs can translate
                your big ideas into reliable and robust code. We will design and
                publish any decentralized apps based on your requirements in a
                record time.DApps have no need to rely on central servers,
                they’re more reliable than traditional applications.
              </p>
            </div>
            <div className="col-md-6 mt-5 my-auto">
              <img
                src={Feature3}
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
            style={{ marginBottom: "50px" }}
          >
            <div className="col-md-6 order-md-2">
              <h2 className="featurette-heading font-weight-bold mb-5 section-lines">
                Smart Contract
              </h2>
              <p className="lead text-justify">
                As smart contracts require extensive technical knowledge for the
                best real-case usage,Carthachain provides smart contract
                development and auditing services with the highest standards.
                Smart contracts are widely used by the advanced business sectors
                to keep up the contract between the two parties of business and
                avoid business conflicts with the safe and unaltered smart
                contracts.
              </p>
            </div>
            <div className="col-md-6 order-md-1 mt-5 my-auto">
              <img
                src={Feature4}
                alt="feature"
                className="img-fluid"
                width="400"
                height="400"
              />
            </div>
          </div>
        </div>
      </section>
      {/* technologies*/}
      <section className="technologies mb-5">
        <div className="container pb-5">
          <h2
            className="section-heading text-center display-4"
            style={{ marginBottom: "100px" }}
          >
            TECHNOLOGIES
          </h2>
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-5 font-weight-bold section-lines">Solidity</h2>
              <p className="legend lead mb-5" data-aos="flip-right">
                Working with Solidity demands a lot of skill, talent and
                experience to get a fully automated and well protected app, we
                can custom make solutions that maximize the effectiveness of
                your existing environment. Every custom blockchain solution
                designed and developed by our team is truly unique to our
                client's needs. Blockchain Technology will help you regulate,
                track and facilitate payments and other business processes with
                suppliers, partners, contractors, and most importantly with your
                customers.
              </p>
              <h2 className="mb-5 font-weight-bold section-lines">
                Blockchain
              </h2>
              <div className="legend lead mb-5" data-aos="flip-right">
                Blockchain is a database that records digital transactions in
                secure and transparent way. It holds lot of data types such as
                transactions and other informations from smart contracts, all
                these information are stored in the blockchain in an indelible
                and immutable way, they are also viewable and accessible by
                everyone. So every one can know how much any address holds, all
                its previous transactions and the data transfered between smart
                contracts. These blockchain features will make fraud more
                difficult, facilitate accounting process (especialy for
                financial and banking domain) and provide provable fairness
                between all entities .
              </div>
              <h2 className="mb-5 font-weight-bold section-lines">Pegasus</h2>
              <div className="legend lead mb-5" data-aos="flip-right">
                Pegasus (Pgas) is a digital currency issued by Carthachain, it
                reflects the value of the company, used to pay for some services
                or to have discounts on others, note that it will be used in
                most of our services & products. Its transactions are very fast
                (just few seconds).
              </div>
              <h2 className="mb-5 font-weight-bold section-lines">
                Cartachain Blockchain
              </h2>
              <div className="legend lead mb-5" data-aos="flip-right">
                Carthachain Blockchain is a very fast transparent blockchain,
                and it is only us and our trusted partners who will check for
                transactions and write them in the blockchain permanently and
                forever so there is no chance for a 51% Attack that is possible
                on "Proof Of Work" blockchains, that's why DigiCash Blockchain
                is more secure than Ethereum, Bitcoin ...
              </div>
              <h2 className="mb-5 font-weight-bold section-lines">
                Proof of Authority
              </h2>
              <div className="legend lead mb-5" data-aos="flip-right">
                Proof of Authority (PoA) : The PoW consensus algorithm used by
                Bitcoin is kind of reliable and secure today. However, it is not
                really scalable. Bitcoin, as well as other PoW-based
                blockchains, have limited performance in terms of transactions
                per second (TPS). Such limitation is related to the fact that
                Bitcoin relies on a distributed network of nodes, which need to
                reach consensus and agree on the current states of the
                blockchain. In PoA-based networks, like Carthachain Blockchain,
                transactions and blocks are validated by approved accounts,
                known as validators, preventing attacks like DoS, 51% blockchain
                attacks... The Proof of Authority model relies on a limited
                number of block validators and this is what makes it a highly
                scalable system. Blocks and transactions are verified by
                pre-approved participants, who act as moderators of the system.
                PoA addresses enterprise's common concerns of inefficient
                upgrade and waste of energy. To make Carthachain Blockchain
                completely decentralized, we give the opportunty to any investor
                to become a validator in our system after verification.
                Candidatures will be announced and opened later on our social
                media channels.
              </div>
            </div>
            <div
              className="col-lg-2 mb-5 card p-4 shadow mx-auto"
              data-aos="slide-up"
            >
              <img src={t1} alt="smart contract" width="150px" />
            </div>
            <div
              className="col-lg-2 mb-5 card p-4 shadow mx-auto"
              data-aos="slide-up"
            >
              <img src={t2} alt="blockchain" width="100px" />
            </div>
            <div
              className="col-lg-2 mb-5 card p-4 shadow mx-auto"
              data-aos="slide-up"
            >
              <img src={t3} alt="solidity" width="150px" />
            </div>
            <div
              className="col-lg-2 mb-5 card p-4 shadow mx-auto"
              data-aos="slide-up"
            >
              <img src={t4} alt="solidity" width="150px" />
            </div>
            <div
              className="col-lg-2 mb-5 card p-4 shadow mx-auto"
              data-aos="slide-up"
            >
              <h3>Proof of Authority</h3>
              <p className="text-center">(PoA)</p>
            </div>
          </div>
        </div>
      </section>
      {/* contact us */}
      <section className="contact-us mb-5">
        <div className="container pb-5">
          <h2
            className="section-heading text-center display-4"
            style={{ marginBottom: "100px" }}
          >
            CONTACT-US
          </h2>
          <div className="row contact-card">
            <div className="col-lg-6 px-0">
              <div className="contact-img-container">
                <img src={contact} alt="contact" className="mb-5 contact-img" />
              </div>
            </div>
            <div className="col-lg-6 p-5">
              <form
                id="contact-form"
                method="post"
                action="#"
                className="contact-form"
              >
                <div className="controls">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Your firstname *</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter your firstname"
                          required="required"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="surname">Your lastname *</label>
                        <input
                          type="text"
                          name="surname"
                          placeholder="Enter your  lastname"
                          required="required"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="surname">Your email *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your  email"
                      required="required"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="surname">Your message for us *</label>
                    <textarea
                      rows="4"
                      name="message"
                      placeholder="Enter your message"
                      required="required"
                      className="form-control"
                    ></textarea>
                  </div>
                  <button className="btn custom-btn2 shadow-sm btn-block">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* footer */}
      <footer className="footer py-4">
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

            <div className="col-lg-5 my-auto h-100 text-center">
              <ul className="list-inline mb-0">
                <div className="h3 text-white list-inline-item pr-3 my-auto">
                  Follow Us
                </div>
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
      {/* scroll top button */}
      <div
        className="go-up"
        onClick={() =>
          window.scroll({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        <i className="fa fa-arrow-up" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default Landing;
