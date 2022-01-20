import './style.scss'

export function CarouselHeader({ data }) {
  return (
    <div className="header-carousel">
      <div className="carousel-img" style={{ backgroundImage: `url(${data.userImage})` }}></div>
      <p className="carousel-user-name">/{data.name}</p>
    </div>
  )
}