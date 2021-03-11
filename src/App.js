import React, { useEffect, useState } from 'react';
import Containter from './components/Container';
import Row from './components/Row';
import Col from './components/Col';
import Title from './components/Title';
import SearchFrom from './components/SearchFrom';
import API from './utils/API';
import Table from './components/Table';
import TableHead from './components/TableHead';
import TableBody from './components/TableBody';
import TableRow from './components/TableRow';



function App() {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);

  let userIndex = 1;
  let firstNameClick = false;
  let lastNameClick = false;
  let sortedUsers;

  useEffect(() => {
    loadUsers();
  }, [])

  function loadUsers() {
    API.fetchUsers()
      .then(users => {
        setUsers(users)
      })
      .catch(err => console.log(err));
  }

  const handleInputChange = event => {
    setSearch(event.target.value)
    let filteredUsers = users.filter(user =>
      user.firstName.includes(search) || user.lastName.includes(search));
    setUsers(filteredUsers);
  }

  const sortFirstName = event => {
    event.preventDefault();
    // event.stopPropagation();
    console.log(event);
    console.log(`firstNameClick before ${firstNameClick}`);


    if (firstNameClick === false) {
      sortedUsers = [...users].sort((a, b) => (a.firstName > b.firstName ? 1 : -1));
      firstNameClick = true;
      setUsers(sortedUsers);
    }
    else {
      sortedUsers = [...users].sort((a, b) => (a.firstName > b.firstName ? -1 : 1));
      firstNameClick = false;
      setUsers(sortedUsers);
    }
    // Trying to get the above conditional to change the value of "firstNameClick" //
    console.log(`firstNameClick after ${firstNameClick}`);
  }

  const sortLastName = event => {
    event.preventDefault();
    // event.stopPropagation();
    console.log(event);

    if (lastNameClick === false) {
      let sortedUsers = [...users].sort((a, b) => (a.lastName > b.lastName ? 1 : -1));
      lastNameClick = true;
      setUsers(sortedUsers);
    }
    else {
      let sortedUsers = [...users].sort((a, b) => (a.lastName > b.lastName ? -1 : 1));
      lastNameClick = false;
      setUsers(sortedUsers);
    }
    // Trying to get the above conditional to change the value of "firstNameClick" //
    console.log(`firstNameClick ${lastNameClick}`);
  }


  return (
    <Containter>
      <Row>
        <Col size="12">
          <Title />
        </Col>
      </Row>
      <Row>
        <Col size="12">
          <SearchFrom
            handleInputChange={handleInputChange}
            value={search}
          />
        </Col>
      </Row>
      <Row>
        <Col size="12">
          <Table>
            <TableHead
              sortFirstName={sortFirstName}
              sortLastName={sortLastName}
            />
            <TableBody>
              {users.map(user =>
                <TableRow
                  userIndex={userIndex++}
                  picture={user.picture}
                  firstName={user.firstName}
                  lastName={user.lastName}
                  email={user.email}
                />
              )}
            </TableBody>
          </Table>
        </Col>
      </Row>
    </Containter>
  );
}

export default App;
