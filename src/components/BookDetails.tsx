import { useParams } from "react-router-dom"
import { useGetDataSingle } from "../custom-hooks/FetchDataSingle"
import { server_calls } from "../api/userServer"
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom'

function BookDetails() {
    const params = useParams()
    const bookId = params.bookId

    const { bookData, getData } = useGetDataSingle(bookId);

    const hardcover = bookData['hardcover'] === true ? <div id="ParagraphText">Hard Cover</div> : <div id="ParagraphText"> Paper Back</div>

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const AddToCart = (data: any) => {
        delete data['id']
        delete data['user_token']
        server_calls.create(data);
        // setTimeout(() => {window.location.reload()}, 1000);
        handleOpen()
      }

      const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '1.5px groove rgb(205, 137, 250)',
        boxShadow: 24,
        p: 4,
      };
    
    
  return (
    <>
    <div className="bg-slate-50 justify-items-center py-10 grid">
        <div className="sm:container grid grid-cols-7 justify-items-center pb-4 w-4/5">
            <div className="col-span-7 w-full text-center text-slate-600 border-b outline-bottom border-violet-500 sm:mb-5 mb-2" id="TitleText">Book Details</div>
            <img src={bookData['image']} className=" h-80 w-fit lg:h-96 col-span-7 sm:col-span-4 md:col-span-3 lg:col-span-2"/>
            <div className="md:justify-self-start col-span-7 sm:col-span-3 md:col-span-4 lg:col-span-5 pt-4 sm:pt-10">
                <div id="HeaderText" className="border-b border-slate-400 w-64 md:w-80">{bookData['title']}</div>
                <div id="SubtitleText">By: {bookData['author']}</div>
                <div id="ParagraphText">Published: {bookData['year']}</div>
                <div id="ParagraphText">Pages: {bookData['pagecount']}</div>
                {hardcover}
                <div id="ParagraphText">ISBN: {bookData['isbn']}</div>
                <div id="ParagraphText">Cost: ${bookData['price']}</div>

                <button className= ' bg-purple-600 text-purple-100 rounded border hover:bg-purple-100 hover:text-gray-800 hover:border-purple-300 h-12 transition duration-500 w-32 mt-5'
                onClick={()=>AddToCart(bookData)}>
                Add to Cart
                </button>
                <button className="bg-green-500 p-2 rounded ms-4 text-slate-50" disabled>Available</button>
                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div className="text-center">{bookData['title']} has been added to your Cart!</div>
                        <div className="text-center mt-2">
                        <button className= ' bg-purple-600 text-purple-100 rounded border hover:bg-purple-100 hover:text-gray-800 hover:border-purple-300 h-12 transition duration-500 w-28 mx-3'>
                        <Link to='/cart'>Cart</Link>
                        </button>
                        <button className= ' bg-purple-600 text-purple-100 rounded border hover:bg-purple-100 hover:text-gray-800 hover:border-purple-300 h-12 transition duration-500 w-28 mx-3'>
                        <Link to='/books'>Books</Link>
                        </button>
                        </div>
                        
                    </Box>
                </Modal>
            </div>
        </div>
    </div>
    </>
  )
}

export default BookDetails