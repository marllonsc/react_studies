import { useOktaAuth } from "@okta/okta-react";
import { useEffect, useState } from "react";
import HistoryModel from "../../../models/HistoryModel";
import { SpinnerLoading } from "../../Utils/SpinnerLoading";
import { Link } from "react-router-dom";
import { Pagination } from "../../Utils/Pagination";

export const HistoryPage = () => {

    const ip_linux_virtual = "http://192.168.49.2:30979/";
    const ip_linux = "http://192.168.0.106:8083/";
   //   const ip_linux = "http://192.168.0.106:8083/";

    const { authState } = useOktaAuth();
    const [isLoadingHistory, setIsLoadingHistory] = useState(true);
    const [httpError, setHttpError] = useState(null);

    const [histories, setHistories] = useState<HistoryModel[]>([]);
    
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);


    useEffect(() => {
        const fetchUserHistory = async () => {

            if (authState && authState.isAuthenticated) {
                const url = `${ip_linux}api/histories/search/findBooksByUserEmail?userEmail=${authState.accessToken?.claims.sub}&page${currentPage - 1}&size=5`;

                const requestOptions = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };

                const historyResponse = await fetch(url, requestOptions);

                if (!historyResponse.ok) {
                    throw new Error('Something went wrong!');
                }

                const historyResponseJson = await historyResponse.json();
                setHistories(historyResponseJson._embedded.histories);
                setTotalPages(historyResponseJson.page.totalPages);
                setIsLoadingHistory(false);

            } else {
                setIsLoadingHistory(false);
            }

        }
        fetchUserHistory().catch((error: any) => {
            setIsLoadingHistory(false);
            setHttpError(error.message);
        })
    },[authState, currentPage]);

    if(isLoadingHistory){
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
        <div className="mt-2">

            {histories.length > 0 ?
            <>
            <h5>Recent History:</h5>

            {histories.map(history => (
                <div key={history.id}>
                    <div className="card mt-3 shadow p-3 mb-3 bg-dody rounded">
                        <div className="row g-0">
                            <div className="col-md-2">
                                <div className="d-none d-lg-block">
                                    {history.img ?
                                        <img src={history.img} width="123" height="196" alt="Book"></img>
                                        :
                                        <img src={require('./../../../Images/BooksImages/book-luv2code-1000.png')} width="123" height="196" alt="Default"></img>
                                    }
                                </div>
                                <div className="d-lg-none d-flex justify-content-center align-items-center">
                                    {history.img ?
                                        <img src={history.img} width="123" height="196" alt="Book"></img>
                                        :
                                        <img src={require('./../../../Images/BooksImages/book-luv2code-1000.png')} width="123" height="196" alt="Default"></img>
                                    }
                                </div>
                            </div>
                            <div className="col">
                                <div className="card-body">
                                    <h5 className="card-title">{history.author}</h5>
                                    <h4>{history.title}</h4>
                                    <p className="cart-text">{history.description}</p>
                                    <hr></hr>
                                    <p className="cart-text">{history.checkoutDate}</p>
                                    <p className="cart-text">{history.returnedDate}</p>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                    </div>
                </div>
            ))}
            
            </>    
            :
            <>
                <h3 className="mt-3">Currently no history</h3>
                <Link className="btn btn-primary" to='/search'>Search for new Book</Link>
            </>
            }
            {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate}></Pagination>}
        </div>

    );
        }
