import React from "react";
import Layout from "../component/Layout";
import {Box, Typography} from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my:15,
        textAlign:"center",
        p:2,
        "&h4":{
          fontWeight:'bold',
          my:2,
          fontSize:"2rem",
          

        },
        
        "& p" :{
          textAlign:"justify"
        },
        "@media (max-width:600px)": {
          mt:0,
          "& h4":{
            fontSize:"1.5"
          }
        }

      }}>
        <Typography variant="h4">Welcome To My Resturent</Typography>
        
        <p>
          Despite this, many restaurants struggle to write an effective
          description for their website. Doing so requires a mix of skills not
          every restaurant has — writing, design and a keen understanding of
          digital user behavior — but there are tools in place to make the job
          easier. For example, if you build your website with BentoBox,
          full-service designers can help create your website on a template that
          is proven to be user-friendly. That takes care of the design and user
          behavior hurdles.
        </p>
        <br />
        <p>
          To help overcome the writing hurdle, we've created the resource below.
          In addition to defining best practices, we have curated 20 examples of
          effective restaurant descriptions and analyzed why they work. If you
          don't know where to start or feel stuck, scroll through these examples
          and see if they spark new ideas. BentoBox WEBINAR
        </p>
      </Box>
    </Layout>
  );
};

export default About;
