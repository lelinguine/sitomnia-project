import Menu from '@/components/menu/Menu';

const Main = () => {
  return (
    <>
    <div className='w-fit'>
      <div className='flex flex-col pb-[60px]'>
        <span className='lg-text mb-[-10px]'>Bonjour Claude !</span>
        <span className='md-text'>Que puis-je faire pour vous ?</span>
      </div>
      <Menu/>
    </div>
    </>
  );
};

export default Main;