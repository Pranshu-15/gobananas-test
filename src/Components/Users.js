import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import { useNavigate } from 'react-router-dom';

const Users = () => {
    const [user,setUser] = useState([]);
    const [error,setError] = useState("");
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get("https://jsonplaceholder.typicode.com/users");
                if(response.status !== 200){
                    throw new Error ("Failed to fetch data");
                }
                const data = response.data;
                setUser(data);
            }
            catch(error){
                setError(error.message);
            }
        };
        fetchData();
    },[]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
      }
    
      const filteredData = user.filter((userData) =>
        Object.values(userData).some((value) =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      const goToHome = () => {
          navigate('/')
      }
    if(error){
        return <div>Error: {error}</div>;
    }
    if(!user){
        return <div>Loading...</div>;
    }
  return (
    <div>
         <input
        type="text"
        className='search-field'
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
         <Sheet variant="soft" sx={{ pt: 1, borderRadius: 'sm' }}>
      <Table
        stripe="odd"
        hoverRow
        sx={{ captionSide: 'top', '& tbody': { bgcolor: 'background.surface' } }}
      >
        <caption>Users</caption>
        <thead>
          <tr>
            <th style={{ width: '15%' }}>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((userData) => (
            <tr key={userData.id}>
              <td>{userData.name}</td>
              <td>{userData.username}</td>
              <td>{userData.email}</td>
              <td>{userData.address.city}</td>
              <td>{userData.phone}</td>
              <td>{userData.website}</td>
              <td>{userData.company.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Sheet>
       <button onClick={goToHome}>Back to Home</button>
    </div>
  )
}

export default Users