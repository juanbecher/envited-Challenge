import Layout from "../components/Layout";
import { Box, Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import Image from "next/image";
import Router from "next/router";


const HeadingTextContainer = styled.div`
  margin: 0 27px;
  margin-top: 94px;
  text-align: center;
`;

const SloganContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 16px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 36px 0; 
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`
const GradientText = styled.h2`
  font-size: 36px;
  font-weight: 700;
  background-clip: text;
	background: linear-gradient(90deg, #8456EC 24.2%, #E87BF8 120.46%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
  margin: 0;
`;

export default function Home() {
  return (
    <Layout>
      <HeadingTextContainer>
        <SloganContainer>
          <Typography variant="h4" sx={{ color: "#240D57" }} fontWeight={700}>
            Imagine if
          </Typography>
          <GradientText>Snapchat</GradientText>
          <Typography variant="h4" fontWeight={700}>had events.</Typography>
        </SloganContainer>
        <div>
          <Typography fontSize='16px' color='#4F4F4F'>
            Easily host and share events with your friends across any social
            media.
          </Typography>
        </div>
      </HeadingTextContainer>
      <ImageContainer>
      <Image width='165px' height="292px" src='/Landing page image.svg'/>
      </ImageContainer>
      <Box display={'flex'} justifyContent={'center'}>
      <Button variant="contained" onClick={() => Router.push('/create')}>Create my event</Button>
      </Box>
      
    </Layout>
  );
}
