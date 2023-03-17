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

import ClimateChange from "../component/image/background/Climate_Change.png";

interface NeutralEndingProps {
  count: number;
  setCount(value: number): void;
}

const NeutralEnding: React.FC<NeutralEndingProps> = (
  props: NeutralEndingProps
) => {
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
            src={ClimateChange}
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
                Yes, nobody was able to stop Jacob from the way how he lived.
              </Typography>
              <Typography
                variant="h3"
                sx={{ marginLeft: "10%", marginTop: "1.5%" }}
              >
                However, he started to feel the difference between every summer
                that it is slowly getting hotter and hotter.
              </Typography>
              <Typography
                variant="h3"
                sx={{ marginLeft: "10%", marginTop: "1.5%" }}
              >
                And he would not know that his daily life style has slowly
                caused the Earth to be hotter.
              </Typography>
              <Typography
                variant="h3"
                sx={{ marginLeft: "10%", marginTop: "1.5%" }}
              >
                But still he had no problem living through his life time.
              </Typography>
              <Typography
                variant="h3"
                sx={{ marginLeft: "10%", marginTop: "1.5%" }}
              >
                But...
              </Typography>
              <Typography
                variant="h3"
                sx={{ marginLeft: "10%", marginTop: "1.5%" }}
              >
                How about his kids...?
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

export default NeutralEnding;
