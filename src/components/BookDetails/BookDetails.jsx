import { useLoaderData, useParams } from "react-router-dom";
// import Book from './../Book/Book';

const BookDetails = () => {
  const {bookId} = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);
  const book = data.find((book) => book.bookId === id);
  const {image,tags,bookName,author,category,rating,review,totalPages,publisher,yearOfPublishing}= book;
  // console.log(typeof id , typeof data[0].bookId);
  return (
    <section className="w-11/12 h-fit lg:w-4/5 mx-auto grid items-center grid-cols-1 lg:grid-cols-2  gap-5 lg:gap-12 border rounded-3xl p-6 ">
      <div className="lg:h-[740px] p-12 bg-color1.15 rounded-3xl">
        <img className="h-full rounded-2xl mx-auto" src={image} alt="" />
      </div>
      <div className="space-y-2 lg:space-y-6 ">
        <h1 className="text-color1 font-bold text-40 leading-53 font-PlayfairDisplay">{bookName}</h1>
        <p className="text-color1.8 font-medium text-xl leading-8 font-WorkSans">By: {author}</p>
        <hr className="border-t border-color1.15"/>
        <p className="text-color1.8 font-medium text-xl leading-6 font-WorkSans">{category}</p>
        <hr className="border-t border-color1.15"/>
        <p className="font-WorkSans text-color1.8"><span className="font-bold">Review : </span>{review}</p>
        <div className="space-x-4 flex gap-3 items-center">
          <h1 className="font-bold text-color1">Tag</h1>
              {
                tags.map((tag,idx) => 
                <div key={idx} className="px-4 py-2 bg-color2.05 rounded-full">
                <h2 className="text-color2 font-medium text-base font-WorkSans">{tag}</h2>
              </div>
              )}
        </div>
        <hr className="border-t border-color1.15"/>
        <div className="flex gap-16">
          <div className="font-WorkSans text-color1.8 space-y-2">
            <h3>Number of Pages:</h3>
            <h3>Publisher:</h3>
            <h3>Year of Publishing:</h3>
            <h3>Rating:</h3>
          </div>

          <div className="text-color1 font-WorkSans font-semibold space-y-2">
            <p>{totalPages}</p>
            <p>{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p>{rating}</p>
          </div>
        </div>
        <div className="space-x-5">
          <button className="border border-color1.3 rounded-lg px-7 py-4 text-black font-semibold text-18 leading-5">Read</button>
          <button className="border border-color1.3 rounded-lg px-7 py-4 bg-color5 text-white font-semibold text-18 leading-5">Wishlist</button>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;