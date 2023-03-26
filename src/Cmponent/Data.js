import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';


function Data() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/posts');
        const data = await response.data;
        setPosts(data.posts);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!posts) {
    return <div>Loading...</div>;
  } else {
    return (
      <>

        <Box sx={{ width: "auto", backgroundColor: 'white', justifyContent: 'center' }}>
          <Typography sx={{ width: "100%", fontSize: 25, justifyContent: "center", alignItems: "center" }} color="blue" gutterBottom>
            Card Detail
          </Typography>
          <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>

            {posts.map((item) => (

              <Card sx={{ width: '400px', height: '400px', margin: '30px 10px !important', backgroundColor: 'pink', borderRadius: '10px' }}>
                <CardContent>
                  
                  <Typography variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <br />
                  <Typography sx={{ mb: 1.4, color: 'white' }} > contact@delta4infotech.com
                    {item.body}
                  </Typography>
                  <Typography variant="subtitle1">
                    {item.tags}
                    <br />

                  </Typography>
                </CardContent>

              </Card>
            ))}
          </Stack>
        </Box>
      </>
    )
  }
}

export default Data
