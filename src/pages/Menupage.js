import React from "react";
import Layout from "../component/Layout";
import {menuList} from "../data/data";
import {Box, Card, CardActionArea, CardContent, CardMedia, Typography, } from "@mui/material";

const Menu = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          // background-color: darkslategray;
          bgcolor: 'darkslategray',
        }}
      >
        {menuList.map((menu) => (
          <Card sx={{ maxWidth: '387px', display: 'flex', m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: '700px',backgroundSize:'cover' ,backgroundRepeat:'no-repeat',backgroundPosition:'center',objectFit: 'fill',}}
                component={'img'}
                src={menu.Image}
                alt={menu.Name}
                
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={'div'}>
                  {menu.Name}
                </Typography>
                <Typography variant="body2">{menu.discription}</Typography>
                <br/>
                <Typography gutterBottom variant="h5" component="div">
                {menu.Price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
