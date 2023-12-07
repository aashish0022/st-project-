import { useState } from "react";
export default function GoHiking ()
{
    const [name, setName]= useState (' ');
    const [email, setEmail]= useState (' ');
    const [address, setAddress]= useState (' ');
    const [query, setQuery]= useState (' ');
    const [btnclicked, setBtnClicked]= useState(false);
    return(
        <div className="row">
            <div className="col-md-6">
            <div className="form-group">
                <label for="name">Enter Name</label>
                <input type="text" onChange={e=>setName(e.target.value)} className="form-control" id="name"/>
                {/* <span className="bg-light text-dark">{name}</span> */}
            </div>

        <div className="form-group">
                <label for="email">Enter Email</label>
                <input type="email" onChange={e=>setEmail(e.target.value)} className="form-control" id="email"/>
                
            </div>

            <div className="form-group">
                <label for="address">Enter Address</label>
                <input type="text" onChange={e=>setAddress(e.target.value)} className="form-control" id="address"/>
                
            </div>

            <div className="form-group">
                <label for="query">Enter Query</label>
                <textarea onChange={e=>setQuery(e.target.value)} className="form-control" id="query"></textarea>
            </div>
            
            <div className="form-group">
                <button type="button" className="btn btn-primary" onClick={e=>setBtnClicked(!btnclicked)}>
                    Click to see changes
                </button>
            </div>
            </div>

            <div className="col-md-6">
                here you will see all textbox data when you click on button
                {btnclicked && (<div>
                    <h3> Name :- {name}</h3>
                    <h3> Email :- {email}</h3>
                    <h3> Address :- {address}</h3>
                    <h3> Query :- {query}</h3>
                </div>)}
            </div>
        </div>
    );
}