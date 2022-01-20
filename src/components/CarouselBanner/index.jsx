import "./style.scss";

export function CarouselBanner({ data }) {
  return (
    <div className="carousel-banner">
      <div className="carousel-banner-text">
        <h3>Outlet de</h3>
        <h1>Verão</h1>
        <p>Danielle Biquines e maiôs</p>
        <a href="#" className="btn-link-banner">
          Conhecer coleção!
        </a>
      </div>
      <div
        className="carousel-banner-img"
        style={{ backgroundImage: `url(${data.image})` }}
      ></div>
    </div>
  );
}
