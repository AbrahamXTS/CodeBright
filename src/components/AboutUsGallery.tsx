import "react-image-gallery/styles/css/image-gallery.css";

import Gallery from "react-image-gallery";
const ImageGalleryReact =
  ((Gallery as any).default as typeof Gallery) ?? Gallery;

const images = [
  {
    original: "/about-us-1.jpg",
    originalAlt: "Two drunk engineers",
  },
  {
    original: "/about-us-2.jpg",
    originalAlt: "Three climbing engineers",
  },
];

export default function AboutUsGallery() {
  return (
    <ImageGalleryReact
      autoPlay
      items={images}
      showFullscreenButton={false}
      showPlayButton={false}
    />
  );
}
