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

  useEffect(() => {
    loadUsers();
    console.log(`Users State ${users}`);
  }, [])

  function loadUsers() {
    API.fetchUsers()
      .then(users => {
        console.log(users);
        setUsers(users)
      })
      .catch(err => console.log(err));
  }

  const handleInputChange = event => {
    setSearch(event.target.value)
    const filteredUsers = users.filter(user =>
      user.firstName.includes(search) || user.lastName.includes(search));
    setUsers(filteredUsers);
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
            <TableHead />
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
