import { useOktaAuth } from "@okta/okta-react";
import { useEffect, useState } from "react";
import MessageModel from "../../../models/MessageModel";
import { SpinnerLoading } from "../../Utils/SpinnerLoading";
import { Pagination } from "../../Utils/Pagination";
import { AdminMessages } from "./AdminMessage";

export const AdminMessage = ()=> {

    const { authState } = useOktaAuth();

    const [isLoadingMessages, setIsLoadingMessages] = useState(true);
    const [httpError, setHttpError] = useState(null);


    const ip_linux_virtual = "http://192.168.49.2:30979/";
    const ip_linux = "http://192.168.0.101:8083/";
      //  const ip_linux = "http://192.168.0.101:8083/";
      
      
    const [messages, setMessages] = useState<MessageModel[]>([]);

    const [messagesPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    
    useEffect(() => {
        const fetchUserMessages = async () => {

            if (authState && authState.isAuthenticated) {
                const url = `${ip_linux}api/messages/search/findByClosed?closed=false&page${currentPage - 1}&size=${messagesPerPage}`;

                const requestOptions = {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${authState?.accessToken?.accessToken}`,
                        'Content-Type': 'application/json'
                    }
                };

                // need to continue the implementation
                const messagesResponse = await fetch(url, requestOptions);

                if (!messagesResponse.ok) {
                    throw new Error('Something went wrong!');
                }

                
                const messagesResponseJson = await messagesResponse.json();
                setMessages(messagesResponseJson._embedded.messages);
                setTotalPages(messagesResponseJson.page.totalPages);

            } 

            setIsLoadingMessages(false);

        }
        fetchUserMessages().catch((error: any) => {
            setIsLoadingMessages(false);
            setHttpError(error.message);
        })
        window.scrollTo(0,0);
    },[authState, currentPage]);

    if(isLoadingMessages){
        return(<SpinnerLoading></SpinnerLoading>)
    }

    if(httpError){
        return(
            <div className="container m-5">
                <p>{httpError}</p>
            </div>
        )
    }

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className="mt-3">
          {messages.length > 0 ? (
            <>
              <h5>Pending Q/A</h5>
              {messages.map((message, index) => (
                <AdminMessages message={message} key={message.id} />
              ))}
            </>
          ) : (
            <h5>No pending Q/A</h5>
          )}
          {totalPages > 1 && (
            <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
          )}
        </div>
      );
}