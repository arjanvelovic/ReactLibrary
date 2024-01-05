import { useGetData } from '../custom-hooks/FetchData';
import { Link } from "react-router-dom";

export default function Books() {

  //@ts-ignore
  const { bookData, getData } = useGetData();

  console.log(bookData);
  

  return (
      <div className="bg-slate-50 justify-items-center py-10 grid">
            
      <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 justify-items-center pb-10 w-4/5">
      <div className="w-full col-span-full text-center text-slate-600 border-b outline-bottom border-violet-500 mb-1" id="TitleText">Library Catalog</div>
        {bookData.map((book:any) => (
          <div className='px-2 pt-2 pb-4 text-center' key={book['id']}>
            <Link to={`/about/${book['id']}`}>
              <img src={book['image']} className="h-96 w-fit"/>
            </Link>
            <div className='underline'>{book['title']} ({book['year']})</div>
            <div>By: {book['author']}</div>
            <button className= ' bg-purple-600 text-purple-100 rounded border hover:bg-purple-100 hover:text-gray-800 hover:border-purple-300 h-12 transition duration-500 w-28 mx-3'>
              <Link to={`/about/${book['id']}`}>View Details</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
