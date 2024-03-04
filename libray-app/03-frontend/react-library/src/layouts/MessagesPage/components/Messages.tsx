import { useOktaAuth } from "@okta/okta-react";
import { useEffect, useState } from "react";
import MessageModel from "../../../models/MessageModel";
import { SpinnerLoading } from "../../Utils/SpinnerLoading";

export const MEssages = () => {

    const { authState } = useOktaAuth();
    const [isLoadingMessages, setIsLoadingMessages] = useState(true);
    const [httpError, setHttpError] = useState(null);

    const [messages, setMessages] = useState<MessageModel[]>([]);
    
    const [messagesPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const ip_linux_virtual = "http://192.168.49.2:30979/";
    const ip_linux = "http://192.168.0.101:8083/";
   //   const ip_linux = "http://192.168.0.101:8083/";

    useEffect(() => {
        const fetchUserMessages = async () => {

            if (authState && authState.isAuthenticated) {
                const url = `${ip_linux}api/histories/search/findBooksByUserEmail?userEmail=${authState.accessToken?.claims.sub}&page${currentPage - 1}&size=5`;

                const requestOptions = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };

                // need to continue the implementation
                const historyResponse = await fetch(url, requestOptions);

                if (!historyResponse.ok) {
                    throw new Error('Something went wrong!');
                }

                /*
                const historyResponseJson = await historyResponse.json();
                setHistories(historyResponseJson._embedded.histories);
                setTotalPages(historyResponseJson.page.totalPages);
                setIsLoadingHistory(false); */

            } else {
                //setIsLoadingHistory(false);
            }

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

    return(
        
    );
}