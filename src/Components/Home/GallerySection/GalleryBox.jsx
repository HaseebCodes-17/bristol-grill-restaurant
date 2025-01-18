import React, { useEffect } from "react";
import "./Gallery.css";
import Splide from "@splidejs/splide";

const GalleryBox = () => {
  const images = [
    "https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1474898856510-884a2c0be546?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1670984939096-f3cfd48c7408?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1481833761820-0509d3217039?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1679434184720-f729541052eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
    "https://media.istockphoto.com/id/1492460518/photo/empty-clean-white-marble-top-island-table-in-commercial-professional-bakery-kitchen-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=dMoxacyQANWQC3R5Ku9Vb6pJoUDlwtOHrlrwcAMPQd0=",
    "https://media.istockphoto.com/id/1780492193/photo/two-businesswomen-eating-hamburger-at-lunch-break.webp?a=1&b=1&s=612x612&w=0&k=20&c=W3r0s4xXanB9hnTb0az3S1sCY6GEdei5-2hfCsdsVpA=",
    "https://media.istockphoto.com/id/1780492193/photo/two-businesswomen-eating-hamburger-at-lunch-break.webp?a=1&b=1&s=612x612&w=0&k=20&c=W3r0s4xXanB9hnTb0az3S1sCY6GEdei5-2hfCsdsVpA=",
    "https://media.istockphoto.com/id/2134932761/photo/happy-family-talking-while-having-breakfast-in-a-restaurant-at-the-hotel.webp?a=1&b=1&s=612x612&w=0&k=20&c=t7UD6v_ffroLVYIigmUNNirf1nkTeGgU2QvFma0I2BM=",
  ];

  useEffect(() => {
    const main = new Splide("#main-slider", {
      type: "fade",
      heightRatio: 0.5,
      pagination: false,
      arrows: false,
      cover: true,
    });

    const thumbnails = new Splide("#thumbnail-slider", {
      fixedWidth: 104,
      fixedHeight: 58,
      isNavigation: true,
      gap: 5,
      focus: "center",
      pagination: false,
      cover: true,
      dragMinThreshold: {
        mouse: 4,
        touch: 10,
      },
      breakpoints: {
        640: {
          fixedWidth: 66,
          fixedHeight: 38,
        },
      },
    });

    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();
  }, []);

  const handleImageClick = (imageURL) => {
    if (imageURL && typeof imageURL === "string") {
      window.open(imageURL, "_blank");
    } else {
      console.error("Invalid image URL:", imageURL);
    }
  };  

  return (
    <div className="!w-full gallery-container">
      <div id="main-slider" className="splide">
        <div className="splide__track">
          <ul className="splide__list">
            {images.map((image, index) => (
              <li key={index} className="splide__slide">
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  onClick={() => handleImageClick(image)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div id="thumbnail-slider" className="splide thumbnail-slider mt-1">
        <div className="splide__track">
          <ul className="splide__list">
            {images.map((image, index) => (
              <li key={index} className="splide__slide">
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => handleImageClick(image)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GalleryBox;
