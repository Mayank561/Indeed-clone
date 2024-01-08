import React from 'react'
import Header from '../component/Header';
import {Box, Button, Typography, styled} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { routePath } from '../routes/route';

const Component = styled(Box)({
    marginTop: 70,
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    margin: '0, 110px',
    '& > div':{
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        '& > p':{
            fontSize: 56,
            lineHeight: 1.25,
            letterSpacing: -1 
        },
        '& > button':{
            width: 220,
            height: 60,
            background: 'rgb(37,87,167)',
            TextTransform: 'none',
            fontSize: 16,
            fontWeight: 700,
            marginTop: 48
        }
    }
})

const Home = () => {
    const navigate = useNavigate();
    const animationimage = "https://images.ctfassets.net/pdf29us7flmy/5r34jiS1YfJuoRzqp3XH6y/6fba6547e16cd0ad08ae28dad306015d/Screen_Shot_2023-01-11_at_9.21.31_AM.png?w=720&q=100&fm=avif";
  return (
   <div>
    <Header />
    <Component>
        <Box>
            <Typography>Let's make your next great hire. Fast. </Typography>
            <Button variant='contained' onClick={()=> navigate(routePath.create)}>Post a job</Button>
        </Box>
        <Box>
            <img src={animationimage} alt="home" style={{width: 600}}/>
        </Box>
    </Component>
   </div>
  )
}

export default Home