import React, { useState, useEffect } from 'react';

 

import './UserManagement.css';

 

const UserManagement = () => {

  const [users, setUsers] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [search, setSearch] = useState('');

  const [currentPage, setCurrentPage] = useState(1);

  const [usersPerPage] = useState(5);

  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);

  const [newUser, setNewUser] = useState({

    firstName: '',

    lastName: '',

    phoneNumber: '',

    email: '',

    role: 'User',

    disabled: false,

  });

 

  useEffect(() => {

    setTimeout(() => {

      const sampleUsers = [

        { id: 1, firstName: 'Tanmay', lastName: 'Yadav', phoneNumber: '123-456-7890', email: 'Tanmay@example.com', role: 'User', disabled: false },

        { id: 2, firstName: 'Keshav', lastName: 'Das', phoneNumber: '987-654-3210', email: 'Keshav@example.com', role: 'Admin', disabled: true },

        { id: 3, firstName: 'Nirbhay', lastName: 'Kumar', phoneNumber: '987-654-3210', email: 'Nirbhay@example.com', role: 'Security', disabled: false },

        { id: 4, firstName: 'Rakshit', lastName: 'Diwan', phoneNumber: '901-529-1563', email: 'Rakshit@example.com', role: 'Admin', disabled: true },

        // Add more users here

      ];

      setUsers(sampleUsers);

      setIsLoading(false);

    }, 1000);

  }, []);

 

  const filteredUsers = users.filter((user) =>

    user.firstName.toLowerCase().includes(search.toLowerCase()) ||

    user.lastName.toLowerCase().includes(search.toLowerCase()) ||

    user.email.toLowerCase().includes(search.toLowerCase())

  );

 

  const indexOfLastUser = currentPage * usersPerPage;

  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

 

  const nextPage = () => {

    setCurrentPage(currentPage + 1);

  };

 

  const previousPage = () => {

    setCurrentPage(currentPage - 1);

  };

 

  const openAddUserModal = () => {

    setIsAddUserModalOpen(true);

  };

 

  const closeAddUserModal = () => {

    setIsAddUserModalOpen(false);

  };

 

  const handleAddUser = () => {

    const newUserWithId = { ...newUser, id: users.length + 1 };

    setUsers([...users, newUserWithId]);

    closeAddUserModal();

    setNewUser({

      firstName: '',

      lastName: '',

      phoneNumber: '',

      email: '',

      role: 'User',

      disabled: false,

    });

  };

 

  const viewUser = (user) => {

    console.log('View User:', user);

    // Implement your view user functionality here

  };

 

  const editUser = (user) => {

    console.log('Edit User:', user);

  };

 

  const deleteUser = (userId) => {

    const confirmed = window.confirm('Are you sure you want to delete this user?');

    if (confirmed) {

      const updatedUsers = users.filter((user) => user.id !== userId);

      setUsers(updatedUsers);

    } else {

      console.log('User canceled deletion.');

    }

  };

 

  return (

    <div className="user-management-container">

      <h1>User Management</h1>

      <button className="add-user-button" onClick={openAddUserModal}>

        Add New User

      </button>

      <input

        type="text"

        className="search-input"

        placeholder="Search user"

        value={search}

        onChange={(e) => setSearch(e.target.value)}

      />

      {isAddUserModalOpen && (

        <div className="add-user-modal">

          <h2>Add New User</h2>

          <form>

            <input

              type="text"

              placeholder="First Name"

              value={newUser.firstName}

              onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}

            />

            <input

              type="text"

              placeholder="Last Name"

              value={newUser.lastName}

              onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}

            />

            <input

              type="text"

              placeholder="Phone Number"

              value={newUser.phoneNumber}

              onChange={(e) => setNewUser({ ...newUser, phoneNumber: e.target.value })}

            />

            <input

              type="text"

              placeholder="Email"

              value={newUser.email}

              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}

            />

            <select

              value={newUser.role}

              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}

            >

              <option value="User">User</option>

              <option value="Admin">Admin</option>

              <option value="Security">Security</option>

            </select>

            <label>

              Disabled:

              <input

                type="checkbox"

                checked={newUser.disabled}

                onChange={(e) => setNewUser({ ...newUser, disabled: e.target.checked })}

              />

            </label>

            <button onClick={handleAddUser}>Add User</button>

            <button onClick={closeAddUserModal}>Cancel</button>

          </form>

        </div>

      )}

      <table className="user-table">

        <thead>

          <tr>

            <th>FIRST NAME</th>

            <th>LAST NAME</th>

            <th>PHONE NUMBER</th>

            <th>EMAIL</th>

            <th>ROLE</th>

            <th>DISABLED</th>

            <th>ACTION</th>

          </tr>

        </thead>

        <tbody>

          {currentUsers.map((user) => (

            <tr key={user.id}>

              <td>{user.firstName}</td>

              <td>{user.lastName}</td>

              <td>{user.phoneNumber}</td>

              <td>{user.email}</td>

              <td>{user.role}</td>

              <td>{user.disabled ? 'Yes' : 'No'}</td>

              <td>

                <button className="action-button" onClick={() => viewUser(user)}>

                  View

                </button>

                <button className="action-button" onClick={() => editUser(user)}>

                  Edit

                </button>

                <button className="action-button" onClick={() => deleteUser(user.id)}>

                  Delete

                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

      <button className="page-button" onClick={previousPage} disabled={currentPage === 1}>

        Previous Page

      </button>

      <button className="page-button" onClick={nextPage} disabled={currentUsers.length < usersPerPage}>

        Next Page

      </button>

    </div>

  );

};

 

export default UserManagement;
