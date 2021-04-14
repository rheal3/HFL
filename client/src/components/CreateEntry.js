import React, { Fragment, useState } from 'react';

const CreateEntry = () => {
    const [date, setDate] = useState();
    const [entry, setEntry] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const user_id = 1;
            const body = {date, entry, user_id};
            const response = await fetch("http://localhost:5000/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            setEntry("");
            window.location = "/";
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <Fragment>
            <h1 style={{textAlign: "center"}}>HFL Entry</h1>
            <form style={{textAlign: "center"}}>
                <input type="date" value={date} onChange={e => setDate(e.target.value)}/>
                <input type="text" value={entry} onChange={e => setEntry(e.target.value)}/>
                <button onClick={onSubmit}>Add</button>
            </form>
        </Fragment>
    )
}

export default CreateEntry;