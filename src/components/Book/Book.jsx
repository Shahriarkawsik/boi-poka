import { IoMdStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Book = ({book}) => {
  const {bookId,image,tags,bookName,author,category,rating} = book;
  return (
    <Link to={`book/${bookId}`}>
        <div className="border border-color1.15 p-6 rounded-2xl space-y-4">
        <div className="w-full border py-5 rounded-2xl bg-color4">
          <img className="w-1/2 h-80 mx-auto" src={image} alt="" />
        </div>
        <div className="space-y-2">
          <div className="space-x-2 flex gap-3 items-center">
            {
              tags.map((tag,idx) => 
              <div key={idx} className="px-4 py-2 bg-color2.05 rounded-full">
              <h2 className="text-color2 font-medium text-base font-WorkSans">{tag}</h2>
            </div>
            )}
          </div>
          <h1 className="text-color1 font-bold text-2xl font-PlayfairDisplay">{bookName}</h1>
          <p className="text-color1.8 font-medium text-base font-WorkSans">By: {author}</p>

          <hr className="border-t border-color1.15 border-dashed"/>

          <div className="flex justify-between items-center">
            <p className="text-color1.8 font-medium text-base font-WorkSans">{category}</p>
            <div className="flex items-center gap-1">
              <p className="text-color1.8 font-medium text-xl font-WorkSans">{rating}</p>
              <IoMdStarOutline className="text-[rgb(66,66,66)] text-xl"/>
            </div>
          </div>
        </div>
        </div>
    </Link>
    
  );
};

export default Book;