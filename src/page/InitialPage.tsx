import react from "react";
import { es100Theme } from "../theme/theme";
import { Box, Button, Fade, Grid, Typography } from "@mui/material";

import JacobChoi from "../component/image/profile/hchoi26_pfp.jpg";

const InitialPage: React.FC = () => {
  return (
    <>
      <Box
        bgcolor={es100Theme.palette.background.default}
        width="100%"
        height="100%"
      >
        <Fade in={true}>
          <Box display="flex" justifyContent="center">
            <Box
              bgcolor={es100Theme.palette.background.paper}
              borderRadius={5}
              width="70%"
              marginTop="1%"
              marginBottom="1%"
              padding="1.5%"
            >
              <Typography variant="h4" align="center">
                Welcome to the ES100 Project!
              </Typography>

              <Typography marginTop="3%" variant="h5" align="center">
                This project is a simple narrating game for the ES100 - 2022
                Summer 1 Session class with instructor Rachel Freyer!
              </Typography>
              <Typography marginTop="2%" variant="h5" align="center">
                The goal of this project is to make an entertaining game and
                raise the awareness of the climate change issue! The target
                audience is 8 to 15 old young students. The students will follow
                through a story and will be asked to choose the character's next
                action. These choices will affect the ending of the game
                depending how "green" the chosen actions were!
              </Typography>

              <Typography marginTop="2%" variant="h5" align="center">
                Please Enjoy!
              </Typography>

              <Grid
                container
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignContent="center"
                textAlign="center"
              >
                <Typography marginTop={5} marginBottom={2}>
                  Developed by
                </Typography>
                <Box
                  component="img"
                  src={JacobChoi}
                  width={80}
                  height={80}
                  style={{ borderRadius: "50%" }}
                  alignSelf="center"
                />
                <Typography marginTop={1} fontWeight="bold">
                  Jacob Choi
                </Typography>
                <Typography fontSize="small">hchoi26@ncsu.edu</Typography>
              </Grid>

              <Box display="flex" justifyContent="space-between">
                <Button variant="contained" size="large" href="/info">
                  Why Climate Change?
                </Button>

                <Button variant="contained" size="large" href="/game">
                  Continue
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Box>
    </>
  );
};

export default InitialPage;
