import React from "react";
import Layout from "../component/Layout";
import {
  Box,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from "@mui/material";
// import {TableRows} from "@mui/icons-material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const Contect = () => {
  return (
    <Layout>
      <Box sx={{my: 10 , ml: 5, "& h": {fontWeight: "bold", mb: 2}}}>
        <Typography variant="h4">Contect My Resturent</Typography>
        <p >
          The first restaurant proprietor is believed to have been one A.
          Boulanger, a soup vendor, who opened his business in Paris in 1765.
          The sign above his door advertised restoratives, or restaurants,
          referring to the soups and broths available within. The institution
          took its name from that sign, and restaurant now denotes a public
          eating place in English, French, Dutch, Danish, Norwegian, Romanian,
          and many other languages, with some variations. For example, in
          Spanish and Portuguese the word becomes restaurante, in Italian it is
          ristorante, in Swedish restaurang, in Russian restoran, and in Polish
          restauracia.
        </p>
        <Box>
        <iframe
              style={{ border: '0', width: 'auto', height: '270px',marginTop:'5px' }}
              // style="border:0; width: 100%; height: 270px;"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
              frameborder="0"
              allowfullscreen
            ></iframe>
        </Box>
      </Box>
      <Box sx={{m:3,width:'600px', ml:5,"@media(max-width:600px)":{
        width:"300px"
      }}}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:"black",color:'white'}} align="center">Constect Detail</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{color: "red", pt: 1}} /> 1800-00-00
                  (Tollfree)
                </TableCell>
              
              </TableRow>
              <TableRow>
              <TableCell>
                  <MailOutlineIcon sx={{color: "skyblue", pt: 1}} /> ay25328@gmil.com
                  
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                  <LocalPhoneIcon sx={{color: "green", pt: 1}} /> 1234567890
                  
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contect;
