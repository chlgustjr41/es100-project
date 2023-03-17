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

import BurningSun from "../component/image/background/Burning_Sun.jpg";

interface BadEndingProps {
  count: number;
  setCount(value: number): void;
}

const BadEnding: React.FC<BadEndingProps> = (props: BadEndingProps) => {
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
            src={BurningSun}
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
                Matter of fact, the Earth was be able to stop him later on in
                the future.
              </Typography>
              <Typography
                variant="h3"
                sx={{ marginLeft: "10%", marginTop: "1.5%" }}
              >
                With his wasteful life style, the hole of the Earth's ozone
                layer got bigger and bigger which exposed the Earth to direct
                Sun light.
              </Typography>
              <Typography
                variant="h3"
                sx={{ marginLeft: "10%", marginTop: "1.5%" }}
              >
                The UV light from the Sun slowly killed the Earth.
              </Typography>
              <Typography
                variant="h3"
                sx={{ marginLeft: "10%", marginTop: "1.5%" }}
              >
                Jacob might have asked "What's an ozone layer?!" but it is
                already too late for him to ask.
              </Typography>
              <Typography
                variant="h3"
                sx={{ marginLeft: "10%", marginTop: "1.5%" }}
              >
                There is no going back when the ozone layer is already
                completely destroyed...
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

export default BadEnding;
