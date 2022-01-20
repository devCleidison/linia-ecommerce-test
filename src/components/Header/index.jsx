/* eslint-disable jsx-a11y/anchor-is-valid */
import "./style.scss";
import "remixicon/fonts/remixicon.css";

import { useRef } from 'react'

import Logo from "../../assets/images/logo.webp";
import Heart from "../../assets/images/heart-icon.webp";
import Cart from "../../assets/images/cart-icon.webp";
import User from "../../assets/images/user-icon.webp";

import { CarouselHeader } from "../CarouselHeader";
import Users from "../../services/Users";

export function Header() {
  const carousel = useRef(null)

  const handleCarousel = (e) => {
    e.preventDefault();

    const btnLeft = document.getElementById('btn-left');
    const btnRight = document.getElementById('btn-right');
    btnLeft.style.display = 'flex'

    if (e.target.id === 'btn-right') {
      if (carousel.current.scrollLeft > 500) {
        btnRight.style.display = 'none'
      } else {
        btnLeft.style.display = 'flex'
      }

      carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    if (e.target.id === 'btn-left') {
      if (carousel.current.scrollLeft < 100) {
        btnLeft.style.display = 'none'
      } else {
        btnRight.style.display = 'flex'
      }

      carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
  }

  return (
    <header className="header-container">
      <div className="header-line" />
      <div className="header-content container">
        <div className="menu-logo">
          <button className="toggle-menu">
            <i className="ri-menu-line"></i>
          </button>
          <a href="/" className="logo">
            <img src={Logo} alt="Linia" />
          </a>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Lojas, Roupas, Estilos, tendências..."
          />
          <button className="btn-search">
            <i className="ri-search-line"></i>
          </button>
        </div>

        <div className="account-container">
          <a href="#" className="links">
            <img src={Heart} />
          </a>
          <a href="#" className="links">
            <img src={Cart} />
          </a>

          <i className="line" />

          <div className="links account">
            <li>
              <a href="cadastro" className="btn-account">
                <img src={User} />
                <p>
                  Faça Login ou <br /> crie seu Cadastro
                </p>
              </a>
            </li>
          </div>
        </div>
      </div>

      <div className="header-menu container">
        <div className="header-carousel-container">
          <div className="header-carousel-content" ref={carousel}>
            {Users.map((item) => (
              <CarouselHeader data={item} key={item.userId} />
            ))}
          </div>

          <div className="buttons-header-carousel">
            <button className="btn-header-carousel" id="btn-left" onClick={handleCarousel}>
              <i className="ri-arrow-left-s-line"></i>
            </button>
            <button className="btn-header-carousel" id="btn-right" onClick={handleCarousel}>
              <i className="ri-arrow-right-s-line"></i>
            </button>
          </div>
        </div>

        <i className="line line-menu" />

        <nav className="header-menu-content">
          <ul className="nav-container">
            <li><a href="#" className="nav-links selected">Todas as Categorias</a></li>
            <li><a href="#" className="nav-links">Promoções</a></li>
            <li><a href="#" className="nav-links">Feminino</a></li>
            <li><a href="#" className="nav-links">Masculino</a></li>
            <li><a href="#" className="nav-links">Infantil</a></li>
            <li><a href="#" className="nav-links">Tendência</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
