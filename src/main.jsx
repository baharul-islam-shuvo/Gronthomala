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
import PagesToRead from './Components/PagesToRead/PagesToRead';
import Books from './Components/Books/Books';
import BookDetails from './Components/BookDetails/BookDetails';
import ReadLists from './Components/ReadLists/ReadLists';
import WishLists from './Components/WishLists/WishLists';
import ErrorPage from './ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/books.json")
      },
      {
        path: "/listed-books",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("/books.json"),
          children: [
            {
              index: true,
              element: <ReadLists></ReadLists>,
              loader: () => fetch("/books.json")
            },
            {
              path: "wishlist",
              element: <WishLists></WishLists>,
              loader: () => fetch("/books.json"),
            }
          ]
      },
      {
        path: "/pages-to-read",
        loader: ()=> fetch("/books.json"),
        element: <PagesToRead></PagesToRead>
      },
      {
        path: "/books",
        loader: () => fetch("/books.json"),
        element: <Books></Books>
      },
      {
        path: "/book/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/books.json")
      },
    ],
    errorElement: <ErrorPage></ErrorPage>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
