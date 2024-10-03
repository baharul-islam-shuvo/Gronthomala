import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookApplication } from "../../Utilities/localStorage";
import ReadList from "../ReadList/ReadList";

const ReadLists = () => {

    const books = useLoaderData();
    // eslint-disable-next-line no-unused-vars
    const [readLists, setReadLists] = useState([]);
    const [displayReadLists, setDisplayReadList] = useState([]);

    useEffect(() => {

        const storedBookIds = getStoredBookApplication();
        if (books.length > 0) {

            const addReadList = [];
            for (const id of storedBookIds) {
                const book = books.find(book => book.bookId === id);

                if (book) {
                    addReadList.push(book)
                }
            }

            setReadLists(addReadList)
            setDisplayReadList(addReadList);

        }

    }, [books])

    return (
        <div>

            {
                console.log("display: ", displayReadLists)
            }

            {
                displayReadLists.map(read_list => <ReadList
                    key={read_list.bookId}
                    read_list={read_list}></ReadList>)
            }

        </div>
    );
};

export default ReadLists;