/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import "./style.scss";

import { Header } from "../../components/Header";
import Logo from "../../assets/images/logo.webp";
import { Form } from '../../components/Form'
import { Footer } from "../../components/Footer";
import { CardLogin } from "../../components/CardLogin";

export function Register() {

  return (
    <div className="register-page">
      <Header />

      <hr />

      <main>
        <div className="main-content container">

          <CardLogin />
          <div className="img-container">
            <div className="opacity" />
            <img className="logoOnForm" src={Logo} />
          </div>

          <div className="area-form-container">
            <div className="login-social">
              <p>
                Registre-se com <br /> sua rede social
              </p>
              <div className="buttons-social-container">
                <a href="#" className="btn-social">
                  <i className="ri-google-fill"></i>
                </a>
                <a href="#" className="btn-social">
                  <i className="ri-facebook-fill"></i>
                </a>
                <a href="#" className="btn-social">
                  <i className="ri-instagram-line"></i>
                </a>
                <a href="#" className="btn-social">
                  <i className="ri-twitter-fill"></i>
                </a>
              </div>
            </div>

            <div className="form-container">
              <h4>Criar conta</h4>

              <Form />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
