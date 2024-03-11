import { useOktaAuth } from "@okta/okta-react";
import { useState } from "react";
import { HomePage } from "../HomePage/HomePage";
import { AdminMessage } from "./components/AdminMessages";

export const ManageLibraryPage = () => {

    const { authState } = useOktaAuth();

    const[changeQuantityOfBooksClick, setChangeQuantityOfBooksClick ] = useState(false);
    const[messagesClick, setMessagesClick] = useState(false);

    function addBookClickFunction(){
        setChangeQuantityOfBooksClick(false);
        setMessagesClick(false);
    }

    function changeQuantityOfBooksClickFunction(){
        setChangeQuantityOfBooksClick(true);
        setMessagesClick(false);
    }

    function messagesClickFunction(){
        setChangeQuantityOfBooksClick(false);
        setMessagesClick(true);
    }

    if (authState?.accessToken?.claims.userType === undefined){
        return (<HomePage></HomePage>);
    }

    return(
        <div className="container">
            <div className="mt-5">
                <h3>Manage Library</h3>
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button  onClick={addBookClickFunction} className="nav-link active" id="nav-add-book-tab" data-bs-toggle="tab" data-bs-target="#nav-add-book" type="button" role="tab" aria-controls="nav-add-book" area-selected="false">
                            Add new Book
                        </button>
                        <button onClick={changeQuantityOfBooksClickFunction} className="nav-link" id="nav-quantity-tab" data-bs-toggle="tab" data-bs-target="#nav-quantity" type="button" role="tab" aria-controls="nav-quantity" area-selected="true">
                           Change Quantity
                        </button>
                        <button onClick={messagesClickFunction} className="nav-link" id="nav-messages-tab" data-bs-toggle="tab" data-bs-target="#nav-messages" type="button" role="tab" aria-controls="nav-messages" area-selected="true">
                           Messages
                        </button>
                    </div>

                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-add-book" role="tabpanel" area-labelledby="nav-add-book-tab">
                        add new book
                    </div>
                    <div className="tab-pane fade" id="nav-quantity" role="tabpanel" area-labelledby="nav-quantity-tab">
                       {changeQuantityOfBooksClick ? <>Change Quantity</> : <></>}
                    </div>
                    <div className="tab-pane fade" id="nav-messages" role="tabpanel" area-labelledby="nav-messages">
                        {messagesClick ? <AdminMessage></AdminMessage> : <></>}
                    </div>
                </div>
            </div>
        </div>
    );


}