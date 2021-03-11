import React from 'react';

function TableHead({ sortFirstName, sortLastName }) {
    return (
        < thead >
            <tr>
                <th scope="col">.</th>
                <th scope="col">Image</th>
                <th scope="col"><a href="#" onClick={sortFirstName}>First</a></th>
                <th scope="col" onClick={sortLastName}>Last</th>
                <th scope="col">Email</th>
            </tr>
        </ thead>
    )
}

export default TableHead;