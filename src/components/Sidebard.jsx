import Button from './Button';

const Sidebar = () => {
  return (
    <aside className='bg-stone-900 text-stone-50 w-1/3 px-8 py-16 md:w-72 rounded-r-xl'>
      <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>
        You Projects
      </h2>
      <div>
        <Button>+ Add Project</Button>
      </div>
      <ul></ul>
    </aside>
  );
};

export default Sidebar;
