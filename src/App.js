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
  const [search, setSeach] = useState('');
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


  return (
    <Containter>
      <Row>
        <Col size="md-8">
          <Title />
        </Col>
      </Row>
      <Row>
        <Col size="md-8">
          <SearchFrom />
        </Col>
      </Row>
      <Row>
        <Col size="md-8">
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
