import { useState } from "react";
import { PostNewMessage } from "./components/PostNewMessage";
import { Messages } from "./components/Messages";

export const MessagePage = () => {

    const [messagesClick, setMessagesClick] = useState(false);
    const [httpError, setHttpError] = useState(null);


    return(
        <div className="container">
            <div className="mt-3 mb-2">
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button onClick={() => setMessagesClick(false)} className="nav-link active"
                        id="nav-send-message-tab" data-bs-toggle="tab" data-bs-target="#nav-send-message"
                        type="button" role="tab" aria-controls="nav-send-message" area-selected="true">
                            Submit Question
                        </button>
                        <button  onClick={() => setMessagesClick(true)}  className="nav-link"
                        id="nav-message-tab" data-bs-toggle="tab" data-bs-target="#nav-message"
                        type="button" role="tab" aria-controls="nav-message" area-selected="false">
                            Q/A Response/Pending
                        </button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-send-message" role="tabpanel"
                    area-labelledby="nav-send-message-tab">
                       <PostNewMessage></PostNewMessage>
                    </div>
                    <div className="tab-pane fade" id="nav-message" role="tabpanel"
                    area-labelledby="nav-message-tab">
                        {messagesClick? <Messages></Messages>: <></>}
                    </div>
                </div>
            </div>
        </div>
    );

}