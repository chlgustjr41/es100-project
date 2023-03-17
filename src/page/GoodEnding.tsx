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

import GreenEarth from "../component/image/background/Green_Earth.jpg";

interface GoodEndingProps {
  count: number;
  setCount(value: number): void;
}

const GoodEnding: React.FC<GoodEndingProps> = (props: GoodEndingProps) => {
  const startingPoint = 79;

  const { count, setCount } = props;

  const onContinueClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      {/* Background changer */}
      <Box
        bgcolor={es100Theme.palette.background.paper}
        borderRadius={5}
        width="70%"
        height="95%"
        marginTop="1.5%"
        display="flex"
        justifyContent="center"
      >
        <Fade
          in={startingPoint <= count && count < 80}
          exit={false}
          mountOnEnter
          unmountOnExit
          timeout={1000}
        >
          <Box
            component="img"
            src={GreenEarth}
            width="98%"
            height="96%"
            borderRadius={5}
            marginTop="1%"
          />
        </Fade>
      </Box>

      {/* Dilogue box */}
      <Box>
        <Box
          width="100%"
          height="100%"
          bgcolor={es100Theme.palette.primary.main}
          sx={{ bottom: 0, right: 0, position: "absolute", opacity: "85%" }}
          paddingTop="2%"
          paddingRight="5%"
        >
          {/* In bedroom 79- */}
          <Fade
            in={count === startingPoint}
            exit={false}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Box>
              <Typography
                variant="h3"
                sx={{ marginLeft: "10%", marginTop: "2%" }}
              >
                While Jacob had health issues due to his unhealthy diet and
                staying in his room most of the day,
              </Typography>
              <Typography
                variant="h3"
                sx={{ marginLeft: "10%", marginTop: "1.5%" }}
              >
                The Earth was able to recover its health!
              </Typography>
              <Typography
                variant="h3"
                sx={{ marginLeft: "10%", marginTop: "1.5%" }}
              >
                Jacob was able to experience all of the nice seasonal weathers
                (in his room).
              </Typography>
              <Typography
                variant="h3"
                sx={{ marginLeft: "10%", marginTop: "1.5%" }}
              >
                And his future kids was able to live a better life than Jacob
                himself!
              </Typography>
            </Box>
          </Fade>
        </Box>

        <Button
          variant="contained"
          sx={{ bottom: 0, right: 0, position: "absolute", margin: "1%" }}
          onClick={onContinueClick}
        >
          Continue
        </Button>
      </Box>
    </>
  );
};

export default GoodEnding;
