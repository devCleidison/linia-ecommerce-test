import "./style.scss";

export function CarouselCard({ data }) {
  return (
    <div className="carousel-card" style={{ backgroundImage: `url(${data.img})` }}>
      <a href="#">Ver perfil</a>
    </div>
  );
}
