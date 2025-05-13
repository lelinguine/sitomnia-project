import Image from 'next/image';
import Icon from "@assets/icon.jpg";

const Loading = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-full w-full gap-[10px]'>
              <Image
          src={Icon}
          alt="Loading icon"
          width={80}
          height={80}
        />

        <span className='md-text'>Sitomnia</span>
      </div>

      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 sm-text">v1.0-a</span>
    </>
  );
};

export default Loading;