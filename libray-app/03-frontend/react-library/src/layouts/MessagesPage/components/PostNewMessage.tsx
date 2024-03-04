import { useOktaAuth } from "@okta/okta-react";
import { useState } from "react";
import MessageModel from "../../../models/MessageModel";

export const PostNewMessage = () => {

    const { authState } = useOktaAuth();
    const [title, setTitle] = useState("");
    const [question, setQuestion] = useState("");
    const [displayWarning, setDisplayWarning] = useState(false);
    const [displaySuccess, setDisplaySuccess] = useState(false);

    const ip_linux_virtual = "http://192.168.49.2:30979/";
    const ip_linux = "http://192.168.0.101:8083/";
   //   const ip_linux = "http://192.168.0.101:8083/";


    async function submitNewQuestion(){
            const url = `${ip_linux}api/messages/secure/add/message`;

            if (authState && authState.isAuthenticated && title !== '' && question !== '') {

                const messageRequestModel: MessageModel = new MessageModel(title,question);

            const requestOptions = {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${authState?.accessToken?.accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(messageRequestModel)
            };

            const submitNewQuestionsResponse = await fetch(url, requestOptions);

            if (!submitNewQuestionsResponse.ok) {
                throw new Error('Something went wrong!');
            }

            setTitle('');
            setQuestion('');
            setDisplayWarning(false);
            setDisplaySuccess(true);

        } else {
            setDisplayWarning(true);
            setDisplaySuccess(false);
        }
    }

    return (
        <div className="card mt-3">
            {displaySuccess && 
                <div className="alert alert-success" role="alert">
                    Question added successfully
                </div>
            }
            <div className="card-header">
                Ask question to Luv 2 Read Admin
            </div>
            <div className="card-body">
                <form action="POST">
                    {displayWarning &&
                        <div className="alert alert-danger" role="alert">
                            All fields must be filled out
                        </div>
                    }
                    <div className="mb-3">
                        <label className="form-label">
                            Title
                        </label>
                        <input type="text" className="form-control" id="exampleFormControlInput1"
                            placeholder="Title" onChange={e => setTitle(e.target.value)} value={title}></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">
                           Question
                        </label>
                        <textarea className="form-control" id="exampleFormControlArea1" rows={3} onChange={e => setQuestion(e.target.value)} value={question}></textarea>
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary mt-3" onClick={submitNewQuestion}>
                            Submit Question
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
