import { Container, Grid, Paper, Toolbar, Typography } from "@mui/material";
import Layout from "../components/common/Layout";
import UnstyledButtonCustom from "../components/svg/ButtonSvg";
import { ProfileImg } from "../utils/styles";


export default function About(props) {
  return (
    <Layout title="About" commercePublicKey={props.commercePublicKey}>

        <Container maxWidth='lg'>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6} >
            <Paper 
              elevation={3} 
              sx={{ 
                width: { sm: '300px', xs: '200px'},
                height: { sm: '300px', xs: '200px'},
                borderRadius: '50%',
                mx: 'auto',
                mt: 8 
              }}
              >
              <ProfileImg src='/images/home-1.jpg' 
                sx={{ 
                  width: { sm: '300px', xs: '200px'},
                  height: { sm: '300px', xs: '200px'},
                }} 
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={0}  
              sx={{ p: 4 }}
              >
              <Typography variant='h1'>
                Full Name
              </Typography>
              <UnstyledButtonCustom />
              <Typography variant='body1'>
                There are many variations of passages of Lorem Ipsum available, 
                but the majority have suffered alteration in some form, by injected humour, 
                or randomised words which do not look even slightly believable. 
                If you are going to use a passage of Lorem Ipsum, 
                you need to be sure there is not anything embarrassing hidden in the middle of text. 
                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, 
                making this the first true generator on the Internet. 
                It uses a dictionary of over 200 Latin words, 
                combined with a handful of model sentence structures, 
                to generate Lorem Ipsum which looks reasonable. 
                The generated Lorem Ipsum is therefore always free from repetition, injected humour, 
                or non-characteristic words etc.
              </Typography>


            </Paper>
          </Grid>
          
        </Grid>
      </Container>
    </Layout>
  )
}