import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function HomeCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  const dataCarousel = [
    { src: "mobile_legends.png", alt: "Mobile Legends" },
    { src: "PUBGM.jpg", alt: "PUBG Mobile" },
    { src: "MLBB-Diamond-Shop-Screen.jpg", alt: "MLBB-Diamond-Shop-Screen" },
    { src: "cara-top-up-ff.jpg", alt: "Cara Top Up FF" },
  ];

  return (
    <Slider {...settings}>
      {dataCarousel.map((doc, index) => (
        <Image
          className="h-44 md:h-64 object-cover rounded-xl mb-4"
          key={index}
          src={`/${doc.src}`}
          alt={doc.alt}
          width={1000}
          height={1000}
        />
      ))}
    </Slider>
  );
}
