"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type propsMetodePembayaran = { src: string };
export default function FooterCarousel({
  metodePembayaran,
}: {
  metodePembayaran: propsMetodePembayaran[];
}) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {metodePembayaran.map((doc) => (
        <div className="h-10" key={doc.src}>
          <Image
            className="px-2 h-full"
            src={`/metodePembayaran/${doc.src}.svg`}
            width={100}
            height={100}
            alt={doc.src}
          />
        </div>
      ))}
    </Slider>
  );
}
