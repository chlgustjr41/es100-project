import react, { useEffect, useState } from "react";
import { es100Theme } from "../theme/theme";
import {
  Box,
  Button,
  Fade,
  Slide,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import OzoneDepletion from "../component/image/background/Ozone_Depletion.jpg";
import OzoneHole from "../component/image/background/Ozone_Hole.jpg";

const InfoPage: React.FC = () => {
  return (
    <>
      <Box
        bgcolor={es100Theme.palette.background.default}
        width="100%"
        height="auto"
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
                Why Climate Change?
              </Typography>
              <Box
                height="auto"
                display="flex"
                justifyContent="space-evenly"
                marginTop="1%"
                border={1}
              >
                <Box
                  width="45%"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  border={1}
                >
                  <Box marginBottom="2%" width="100%">
                    <Typography variant="h5" align="center">
                      What is climate change?
                    </Typography>
                    <Typography variant="h6" marginTop="1.5%">
                      While Earth's climate always changes, we are talking about
                      the change in the average climate each year and Earth's
                      climate is getting warmer and warmer.
                    </Typography>
                    <Typography variant="h6" marginTop="1.5%">
                      There are several reasons that causes climate change but
                      one of the most serious problem is the ozone layer
                      depletion.
                    </Typography>
                    <Typography variant="h6" marginTop="1.5%">
                      One of the roles of the ozone layer is to act as a sun
                      block. As the ozone layer is depleting that creates a huge
                      hole, the Earth is more exposed to direct sun lights.
                    </Typography>
                  </Box>
                  <Box component="img" src={OzoneHole} width="100%" />
                </Box>

                <Box
                  width="45%"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Box component="img" src={OzoneDepletion} width="100%" />
                  <Box marginTop="2%" width="100%">
                    <Typography variant="h5" align="center">
                      What can we do to heal our ozone layer?
                    </Typography>
                    <Typography variant="h6" marginTop="1.5%">
                      One of the main causes of ozone layer depletion is due to
                      human activities. The chemical produced while driving and
                      air conditioning destroys the ozone layer.
                    </Typography>
                    <Typography variant="h6" marginTop="1.5%">
                      To reduce producing this chemical, people has to sacrifice
                      their technological benefits and comforts to help the
                      Earth heal its ozone layer.
                    </Typography>
                    <Typography variant="h6" marginTop="1.5%">
                      While it is a hard to adjust your life style to live
                      green, it is important that you slowly pracice living
                      green step by step.
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box display="flex" justifyContent="flex-end" marginTop="2%">
                <Button variant="contained" href="/">
                  Back to Main
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Box>
    </>
  );
};

export default InfoPage;
