import React from 'react';

function TableRow({ userIndex, picture, firstName, lastName, email }) {
    return (
        <tr key={userIndex}>
            <th scope="row">{userIndex}</th>
            <td><img src={picture} alt="User Thumbnail" /></td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>
        </tr>
    )
}

export default TableRow;