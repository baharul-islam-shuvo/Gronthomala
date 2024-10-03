import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";

const Books = () => {
    const books = useLoaderData();
    const [dataLength, setDataLength] = useState(6)
    const handleShowAll = () => {
        setDataLength(books.length)
    }
    return (
        <div className="my-24">

            <h1 className="font-bold text-3xl text-center font-playfair my-6">Books</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    books.slice(0, dataLength).map(book => <Book
                        key={book.bookId}
                        book={book}>
                    </Book>)
                }
            </div>

            <div className={dataLength === books.length ? "hidden" : "text-center"}>
                <button onClick={handleShowAll} className="btn bg-[#23BE0A] text-white text-lg px-6">Show All</button>
            </div>
        </div>
    );
};

export default Books;