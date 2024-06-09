import { useContext } from "react";
import { Fotos } from "../assets/context/Fotos";
import IconHeart from "../components/IconHeart";

const Favorites = () => {

  const { photos } = useContext(Fotos);

  const fotosFavoritas = photos.filter(photo => photo.liked);
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {fotosFavoritas.map((photo, i) => (
          <div 
            className="photo" 
            style={{ backgroundImage: `url(${photo.src.large})` }} 
            key={i}
          >
            <IconHeart filled={photo.liked} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;