import BookImg from '../../assets/books.jpg'
const Banner = () => {
  return (
    <section className="w-11/12 lg:w-4/5 mx-auto flex max-lg:flex-col-reverse  justify-between lg:items-center px-32 py-20 border rounded-2xl gap-3 lg:gap-14">
      <div className='space-y-3'>
        <h1 className="font-PlayfairDisplay font-bold text-color1 text-56">Books to freshen up your bookshelf</h1>
        <button className="text-18 font-WorkSans font-semibold leading-5 bg-color2 text-white px-7 py-5 rounded-lg">
          View The List
        </button>
      </div>
      <img className='rounded-md w-full lg:w-1/2' src={BookImg} alt=""/>
    </section>
  );
};

export default Banner;