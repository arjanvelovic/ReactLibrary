import { useGetData } from '../custom-hooks/FetchDataUser';
import { server_calls } from "../api/userServer"
import HardcoverSwitch from '../components/HardcoverSwitch';
import React from 'react';

function Cart() {

  let sumcost = 0
  const [, updateState] = React.useState();
  //@ts-ignore
  const forceUpdate = React.useCallback(() => updateState({}), []);
  //@ts-ignore
  const { bookData, getData } = useGetData();

  for(let i=0; i<bookData.length; i++){
    sumcost += bookData[i]['price']
  }

  const RemoveFromCart = (id: string) => {
    console.log(id)
    server_calls.delete(id);
    setTimeout(() => {window.location.reload()}, 1000);
  }

  const updateCover = (hardcover: any, data: any) => {
    let id = data['id']
    delete data['id']
    delete data['user_token']
    data['hardcover'] = hardcover

    if(hardcover){
      data['price'] += 3
    } else{
      data['price'] -= 3
    }

    server_calls.update(id, data);
    forceUpdate()
  }

  return (
    <div className="bg-slate-50 justify-items-center py-10 grid">
      <div className="sm:container grid pb-4 w-4/5">
      <div className="w-full col-span-full text-center text-slate-600 border-b outline-bottom border-violet-500 mb-3" id="TitleText">Your Cart</div>
          {bookData.map((book:any) => (
            <div className='grid grid-cols-7 justify-items-center border-b border-purple-300 mb-5' key={book['id']}>
              <img src={book['image']} className=" h-80 w-fit col-span-3 mb-2"/>
              <div className="ms-2 justify-self-start col-span-4">
                <div id="HeaderText" className="border-b border-slate-400 w-64 md:w-96">{book['title']}</div>
                <div id="SubtitleText">By: {book['author']}</div>
                <div id="ParagraphText">Published: {book['year']}</div>
                <div id="ParagraphText">Pages: {book['pagecount']}</div>
                <div id="ParagraphText">ISBN: {book['isbn']}</div>
                <div id="ParagraphText">Cost: ${book['price']}</div>

                <HardcoverSwitch hardcover={book['hardcover']} onChange={(event:React.ChangeEvent) => updateCover((event.target as HTMLInputElement).checked, book)}/>
                <div/>

                <button className= 'bg-purple-600 text-purple-100 rounded border hover:bg-purple-100 hover:text-gray-800 hover:border-purple-300 h-12 transition duration-500 w-40' onClick={()=>RemoveFromCart(book['id'])}>
                Remove From Cart
                </button>
              </div>
            </div>
          ))}
        <div className='text-end me-10 md:me-32 xl:me-40' id='SubtitleText'> Total Cost: ${sumcost} </div>
      </div>
      
      
    </div>
  )
}

export default Cart