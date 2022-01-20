import "./style.scss";

export function Carousel({ data }) {
  return (
    <div className="carousel">
      <div className="carousel-content">
        <div
          className="carousel-img"
          style={{ backgroundImage: `url(${data.product})` }}
        ></div>
        <p className="carousel-user-name">{data.category}</p>
      </div>
    </div>
  );
}
