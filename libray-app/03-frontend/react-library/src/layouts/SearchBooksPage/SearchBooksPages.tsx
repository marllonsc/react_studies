import { useEffect, useState } from "react";
import BookModel from "../../models/BookModels";
import { forEachChild } from "typescript";
import { SpinnerLoading } from "../Utils/SpinnerLoading";

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
        <div></div>
      )
}