import { useEffect, useState } from "react";
import BookModel from "../../models/BookModels";
import { forEachChild } from "typescript";
import { SpinnerLoading } from "../Utils/SpinnerLoading";
import { SearchBook } from "./components/SeachBook";

export const SearchBooksPages = () => {

    const [books, setBooks] = useState<BookModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            const baseUrl: string = "http://192.168.49.2:30291/api/books";
  
            const url: string = `${baseUrl}?page=0&size=5`;
  
            const response = await fetch(url);
  
            if(!response.ok){
              throw new Error('Something went wrong!');
            }
  
            const responseJson = await response.json();
  
            const reponseData = responseJson._embedded.books;
  
            const loadedBooks: BookModel[] = [];
  
            for (const key in reponseData) {
              loadedBooks.push({
                id: reponseData[key].id,
                title: reponseData[key].title,
                author: reponseData[key].author,
                description: reponseData[key].description,
                copies: reponseData[key].copies,
                copiesAvailable: reponseData[key].copiesAvailable,
                category: reponseData[key].category,
                img: reponseData[key].img,
              });  
            }
            setBooks(loadedBooks);
            setIsLoading(false);
        };
        fetchBooks().catch((error : any) => {
          setIsLoading(false);
          setHttpError(error.message);
        })
      },[]);
  
      if(isLoading){
        return(
            <SpinnerLoading></SpinnerLoading>
        )
      }
  
      if(httpError){
        return(
          <div className="container m-5"><p>{httpError}</p></div>
        )
      }

      return (
        <div>
          <div className="container">
            <div>
            <div className="row mt-5">
              <div className="col-6">
                <div className="d-flex">
                  <input className="form-control me-2" type="search" />
                  <button className="btn btn-outline-success">
                    Search
                  </button>
                </div>
              </div>
              <div className="col-4">
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button"
                  id="dropdownButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Category
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownButton1">
                    <li>
                      <a className="dropdown-item" href="#">
                        All
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Front End
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Back End
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Data
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        DevOps
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-3">
                <h5>Number of Results: (22)</h5>
              </div>
              <p>
                1 to 5 of 22 items:
              </p>
              {books.map(book => (
                <SearchBook book={book} key={book.id} />
              ))}
            </div>
            </div>
          </div>
        </div>
      )
}