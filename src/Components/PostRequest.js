import { useState } from "react";
import axios from 'axios';

const PostReuqest=()=>{

    const[userID,setUserID]=useState();
    const[title,setTitle]=useState();
    const[body,setBody]=useState();

    const manageUserID=e=>{
        setUserID(e.target.value);
    }

    const manageTitle=e=>{
        setTitle(e.target.value);
    }

    const manageBody=e=>{
        setBody(e.target.value);
    }

    async function submitForm(e){
        e.preventDefault();
        const data={userID:userID,title:title,body:body};
        const abc=await axios.post('https://jsonplaceholder.typicode.com/posts',data);
        console.log(data,abc);
    }


    return(
        <div>
            <div className="form">
                <p>User ID </p><input type="text" name="userID" value={userID} onChange={manageUserID}/><br/>
                <p>Body </p><input type="text" name="title" value={title} onChange={manageTitle}/><br/>
                <p>Title </p><input type="text" name="body" value={body} onChange={manageBody}/><br/>
                <button onClick={submitForm}>Submit</button>
            </div>
        </div>
    )
}

export default PostReuqest;