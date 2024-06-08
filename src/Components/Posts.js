import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const postsPerPage = 10; 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (response.status !== 200) {
          throw new Error("Failed to fetch data");
        }
        const data = response.data;
        setPosts(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setPage(1); 
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  const filteredData = posts.filter((postData) =>
    Object.values(postData).some((value) =>
      String(value).toLowerCase().includes(search.toLowerCase())
    )
  );

  const goToHome = () => {
    navigate('/')
}
  const paginatedData = filteredData.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage
  );

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!posts.length) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <input
        type="text"
        className='search-field'
        placeholder="Search..."
        value={search}
        onChange={handleSearch}
      />
      <div className="flex flex-wrap gap-8">
        {paginatedData.map((postData) => (
          <Card variant="outlined" sx={{ width: 235 }} key={postData.id}>
            <CardContent>
              <Typography variant="h5" component="div">
                {postData.title}
              </Typography>
              <Typography variant="body2">{postData.body}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
      <Stack spacing={3} sx={{ mt: 2 }} className="page">
        <Pagination
          count={Math.ceil(filteredData.length / postsPerPage)}
          page={page}
          onChange={handleChange}
          
        />
      </Stack>
      <button onClick={goToHome}>Back to Home</button>
    </>
  );
};

export default Posts;
