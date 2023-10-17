import { useEffect, useState } from "react";
import BookModel from "../../models/BookModels";
import { forEachChild } from "typescript";
import { SpinnerLoading } from "../Utils/SpinnerLoading";
import { SearchBook } from "./components/SeachBook";
import { Pagination } from "../Utils/Pagination";

export const SearchBooksPages = () => {

    const [books, setBooks] = useState<BookModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage,setBooksPerPage] = useState(5);
    const [totalAmountOfBooks,setTotalAmountOfBooks] = useState(0);
    const [totalPages,setTotalPages] = useState(0);
    const [search, setSearch] = useState('');
    const [searchUrl, setSearchUrl] = useState('');


    useEffect(() => {
        const fetchBooks = async () => {
            const baseUrl: string = "http://192.168.49.2:30291/api/books";
  
            let url: string = '';

            if(searchUrl === ''){
              url = `${baseUrl}?page=${currentPage -1}&size=${booksPerPage}`;
            }else{
              url = baseUrl + searchUrl;
            }
  
            const response = await fetch(url);
  
            if(!response.ok){
              throw new Error('Something went wrong!');
            }
  
            const responseJson = await response.json();
  
            const reponseData = responseJson._embedded.books;

            setTotalAmountOfBooks(responseJson.page.totalElements);
            setTotalPages(responseJson.page.totalPages);
  
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
        window.scrollTo(0,0);
      },[currentPage,searchUrl]);
  
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

      const searchHandleChange = () => {
        if(search === ''){
          setSearchUrl('');
        } else {
          setSearchUrl(`/search/findByTitleContaining?title=${search}&page=$0&size=${booksPerPage}`);
        }
      }

      const indexOfLastBook: number = currentPage * booksPerPage;
      const indexOfFirstBook: number = indexOfLastBook - booksPerPage;
      const lastItem = booksPerPage * currentPage <= totalAmountOfBooks ?
       booksPerPage * currentPage : totalAmountOfBooks;

       const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

      return (
        <div>
          <div className="container">
            <div>
            <div className="row mt-5">
              <div className="col-6">
                <div className="d-flex">
                  <input className="form-control me-2" type="search" onChange={e => setSearch(e.target.value)}/>
                  <button className="btn btn-outline-success" onClick={() => searchHandleChange()}>
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
                <h5>Number of Results: ({totalAmountOfBooks})</h5>
              </div>
              <p>
                {totalAmountOfBooks + 1} to {lastItem} of {totalAmountOfBooks} items:
              </p>
              {books.map(book => (
                <SearchBook book={book} key={book.id} />
              ))}
              {totalPages > 1 &&
              <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} /> }
            </div>
            </div>
          </div>
        </div>
      )
}