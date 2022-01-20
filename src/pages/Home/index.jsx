import "./style.scss";
import Categories from "../../services/Categories";
import Products from "../../services/Products";

import { useRef } from "react";

import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";
import { Carousel } from "../../components/Carousel";
import { PrincipalCardProduct } from "../../components/PrincipalCardProduct";
import { CardProduct } from "../../components/CardProduct";
import { Footer } from "../../components/Footer";

export function Home() {
  const carouselCategories = useRef(null);

  const handleCarouselCategories = (e) => {
    e.preventDefault();

    if (e.target.id === "btn-right-categories") {
      carouselCategories.current.scrollLeft +=
        carouselCategories.current.offsetWidth;
    }

    if (e.target.id === "btn-left-categories") {
      carouselCategories.current.scrollLeft -=
        carouselCategories.current.offsetWidth;
    }
  };

  return (
    <div className="home-page">
      <Header />
      <main>
        <Banner />

        <section className="big-card-container ">
          <div className="big-card-content container">
            <div className="big-card bg-card1">
              <h3>Moda</h3>
              <h1>Verão</h1>
            </div>

            <div className="big-card bg-card2">
              <h3>Moda</h3>
              <h1>Inverno</h1>
            </div>

            <div className="big-card bg-card3">
              <h3>Para mandar bem naquele encontro!</h3>
            </div>
          </div>
        </section>

        <hr />

        <section className="carousel-home-container">
          <div className="carousel-home-content container">
            <div className="categories-container">
              <h2>Categorias</h2>
              <p>
                Para todos os <br /> gostos e modelos
              </p>
            </div>

            <div className="categories-carousel-container">
              <div
                className="categories-carousel-content"
                ref={carouselCategories}
              >
                {Categories.map((item) => (
                  <Carousel data={item} key={item.id} />
                ))}
              </div>

              <div className="buttons-categories-carousel">
                <button
                  className="btn-categories-carousel"
                  id="btn-left-categories"
                  onClick={handleCarouselCategories}
                >
                  <i className="ri-arrow-left-s-line"></i>
                </button>
                <button
                  className="btn-categories-carousel"
                  id="btn-right-categories"
                  onClick={handleCarouselCategories}
                >
                  <i className="ri-arrow-right-s-line"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="more-dresses-container">
          <div className="more-dresses-content container">
            <div className="title-container">
              <h1 className="title">Mais vendidos</h1>
              <a href="#">
                Ver mais <i className="ri-arrow-right-s-line"></i>
              </a>
            </div>

            <div className="products-container">
              <div className="principal-product">
                {Products.map((item) => {
                  if (item.id === 1) {
                    return <PrincipalCardProduct data={item} key={item.id} />;
                  }
                })}
              </div>

              <div className="products-content">
                {Products.map((item) => {
                  if (item.id <= 6) {
                    return <CardProduct data={item} key={item.id} />;
                  }
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="promotions-container">
          <div className="promotions-content container">
            <div className="title-container">
              <h1 className="title">Promoções</h1>
              <p className="promotions-description">até 50% de desconto</p>
              <a href="#">
                Ver mais <i className="ri-arrow-right-s-line"></i>
              </a>
            </div>

            <div className="promotions-products-container">
              {Products.map((item) => {
                if (item.id < 6) {
                  return <CardProduct data={item} key={item.id} />;
                }
              })}
            </div>
          </div>
        </section>

        <section className="all-categories-container">
          <div className="all-categories-content container">
            <div className="title-container">
              <h1 className="title">Todas as categorias</h1>
            </div>

            <div className="all-categories">
              {Products.map((item) => (
                <CardProduct data={item} key={item.id} />
              ))}
            </div>
          </div>
        </section>
      </main>


      <Footer />
    </div>
  );
}
