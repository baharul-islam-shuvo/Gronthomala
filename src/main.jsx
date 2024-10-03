import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Components/Home/Home';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import PagesToRead from './Components/Banner/PagesToRead/PagesToRead';
import Books from './Components/Books/Books';
import BookDetails from './Components/BookDetails/BookDetails';
import ReadLists from './Components/ReadLists/ReadLists';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/public/books.json")
      },
      {
        path: "/listed-books",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("/public/books.json"),
          children: [
            {
              index: true,
              element: <ReadLists></ReadLists>,
              loader: () => fetch("/public/books.json")
            }
          ]
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead></PagesToRead>
      },
      {
        path: "/books",
        loader: () => fetch("/public/books.json"),
        element: <Books></Books>
      },
      {
        path: "/book/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/public/books.json")
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
