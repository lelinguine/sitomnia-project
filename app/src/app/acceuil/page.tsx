import Menu from '@/components/menu/Menu';

const Main = () => {
  return (
    <>
    <div className='view'>
      <div className='flex flex-col pb-[var(--padding-app)] w-full'>
        <span className='lg-text mb-[-10px]'>Bonjour Claude !</span>
        <span className='md-text'>Que puis-je faire pour vous ?</span>
      </div>
      <Menu/>
    </div>
    </>
  );
};

export default Main;