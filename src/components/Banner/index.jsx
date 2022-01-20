import "./style.scss";

import imgBanner from "../../services/BannerImages";
import Profile from "../../services/Profile";

import { CarouselBanner } from "../CarouselBanner";

import { useEffect, useState, useRef } from "react";
import { CarouselCard } from "../CarouselCard";

export function Banner() {
  const [scrollBanner, setScrollBanner] = useState(Number);
  const [scrollCard, setScrollCard] = useState(Number);

  const carouselBanner = useRef(null);
  const carouselCard = useRef(null);

  useEffect(() => {
    const markBanner = document.querySelectorAll(".btn-mark-carousel-banner");
    const by = document.getElementById("by");

    markBanner.forEach((item) => {
      item.classList.remove("selected");
    });

    setTimeout(() => {
      if (scrollBanner < 5) {
        setScrollBanner(scrollBanner + 1);
      } else {
        setScrollBanner(0);
        carouselBanner.current.scrollLeft = 0;
      }
    }, 5000);

    carouselBanner.current.scrollLeft += carouselBanner.current.offsetWidth;

    markBanner[scrollBanner].classList.add("selected");
    by.innerHTML = `<i>Patrocinado por: ${imgBanner[scrollBanner].by}</i>`;
  }, [scrollBanner]);


  useEffect(() => {
    const markCard = document.querySelectorAll('.mark-card')
    markCard.forEach(item => {
      item.classList.remove('selected')
    })

    markCard[scrollCard].classList.add('selected')
    
  }, [scrollCard])

  const handleCarouselCard = (e) => {
    e.preventDefault();

    if(e.target.id === 'btn-card-left' && scrollCard > 0){
      setScrollCard(scrollCard - 1)
      carouselCard.current.scrollLeft -= carouselCard.current.offsetWidth
    }

    if(e.target.id === 'btn-card-right' && scrollCard < 4){
      setScrollCard(scrollCard + 1)
      carouselCard.current.scrollLeft += carouselCard.current.offsetWidth
    }
  }  

  return (
    <section className="banner-container">
      <div className="bg-color-banner" />
      <div className="banner-content container">
        <div className="carousel-card-container">
          <div className="carousel-card-content" ref={carouselCard}>
            {Profile.map((item) => (
              <CarouselCard data={item} key={item.id} />
            ))}
            <button className="btn-close-card"><i className="ri-close-line"></i></button>
          </div>
          <div className="mark-carousel-card">
            <div className="mark-card"></div>
            <div className="mark-card"></div>
            <div className="mark-card"></div>
            <div className="mark-card"></div>
            <div className="mark-card"></div>
          </div>
          <div className="btn-carousel-card-container">
            <button className="btn-carousel-card" id="btn-card-left" onClick={handleCarouselCard}><i className="ri-arrow-left-s-line"></i></button>
            <button className="btn-carousel-card" id="btn-card-right" onClick={handleCarouselCard}><i className="ri-arrow-right-s-line"></i></button>
          </div>
        </div>
        
        <div className="carousel-banner-container">
          <div className="carousel-banner-content" ref={carouselBanner}>
            {imgBanner.map((item) => (
              <CarouselBanner data={item} key={item.id} />
            ))}
          </div>
          <p className="by" id="by"></p>
          <div className="mark-carousel-banner container">
            <div className="btn-mark-carousel-banner"></div>
            <div className="btn-mark-carousel-banner"></div>
            <div className="btn-mark-carousel-banner"></div>
            <div className="btn-mark-carousel-banner"></div>
            <div className="btn-mark-carousel-banner"></div>
            <div className="btn-mark-carousel-banner"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
