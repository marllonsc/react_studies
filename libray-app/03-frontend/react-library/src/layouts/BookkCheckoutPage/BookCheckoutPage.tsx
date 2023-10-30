import { useState } from "react";
import BookModel from "../../models/BookModels";

export const BookCheckoutPage = () => {

    const [book, setBook] = useState<BookModel>();
    const [isLoadingBook, setIsLoadingBook ] = useState(true);

    return(
        <div>
            <h3>Hi World!</h3>

        </div>
    );
}