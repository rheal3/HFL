import React, { Fragment, useEffect, useState } from 'react';

const ListEntries = () => {
    const [entries, setEntries] = useState([]);

    const getEntries = async () => {
        try {
            const response = await fetch("http://localhost:5000/entries/1");
            const jsonData = await response.json();

            setEntries(jsonData);

        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getEntries();
    }, []);

    return (
        <Fragment>
            {" "}
            <table class="table mt-5 text-center">
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Entry</th>
                    <th>Edit</th>
                </tr>
                </thead>
                <tbody>
                {" "}
                {entries.map(entry => (
                    <tr key={entry.id}>
                    <td>{entry.date}</td>
                    <td>{entry.entry}</td>
                    <td>edit
                        {/* <EditTodo entry={entry.entry} /> */}
                        {/* <button
                        className="btn btn-danger"
                        onClick={() => deleteTodo(todo.todo_id)}
                        >
                        Delete
                        </button> */}
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Fragment>
    );
}

export default ListEntries;