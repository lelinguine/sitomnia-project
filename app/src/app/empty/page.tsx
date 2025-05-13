import Icon from '@assets/icon.png';

const Empty = () => {

  return (
    <>
      <div className='flex flex-col items-center justify-center gap-[10px]'>
        <span className='md-text'>Fonctionnalité non implémentée.</span>
        <a href="/acceuil">Retour</a>
      </div>

      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 sm-text">
        v0.1-a
      </span>
    </>
  );
};

export default Empty;