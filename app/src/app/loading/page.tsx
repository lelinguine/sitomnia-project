import Image from 'next/image';
import Icon from "@images/icon.jpg";

const Loading = () => {
  return (
    <>
      <span>Loading</span>
      
      <Image
        src={Icon} // `src` attend un `StaticImageData`
        alt="Loading icon"
        width={40}  // Définis la largeur de l'image
        height={40} // Définis la hauteur de l'image
      />
    </>
  );
};

export default Loading;
