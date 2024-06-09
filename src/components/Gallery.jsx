import { useContext } from "react";
import { Fotos } from "../assets/context/Fotos";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { photos, setPhotos } = useContext(Fotos);

  const like = (index) => {
    const explorarLike = photos.map((photo, i) => 
      i === index ? { ...photo, liked: !photo.liked } : photo
    );
    setPhotos(explorarLike );
  };

  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.map((element, i) => (
        <div
          key={i}
          className="photo"
          style={{ backgroundImage: `url(${element.src.large})` }}
        >
          <IconHeart filled={element.liked} onClick={() => like(i)} />
        </div>
      ))}
    </div>
  );
};
export default Gallery;
