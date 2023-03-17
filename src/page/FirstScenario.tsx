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

import Bedroom from "../component/image/background/Bedroom_Day.png";
import Livingroom from "../component/image/background/Livingroom_Day.png";
import Kitchen from "../component/image/background/Kitchen_Day.png";
import Hallway from "../component/image/background/Apartment_Exterior.png";

interface FirstScenarioProps {
  count: number;
  setCount(value: number): void;
  firstSelection: number;
  setFirstSelection(value: number): void;
  secondSelection: number;
  setSecondSelection(value: number): void;
}

const FirstScenario: React.FC<FirstScenarioProps> = (
  props: FirstScenarioProps
) => {
  const firstSelectionPoint = 10;
  const firstSelectionResponseLength = 2;
  const secondSelectionPoint = 17;
  const secondSelectionResponseLength = 2;

  // // starts at -1. Increaments by 1 every dialogue
  // const [count, setCount] = useState(-1);

  const {
    count,
    setCount,
    firstSelection,
    setFirstSelection,
    secondSelection,
    setSecondSelection,
  } = props;

  // Used for disabling continue button until option selection
  useEffect(() => {
    if (count === firstSelectionPoint) {
      setFirstSelection(0);
    }
    if (count === secondSelectionPoint) {
      setSecondSelection(0);
    }
  }, [count]);

  const onContinueClick = () => {
    setCount(count + 1);
  };

  const onFirstSelectionClick = (event: any, value: string) => {
    setFirstSelection(+value);
  };
  const onSecondSelectionClick = (event: any, value: string) => {
    setSecondSelection(+value);
  };

  return (
    <>
      {/* Background changer */}
      <Box
        bgcolor={es100Theme.palette.background.paper}
        borderRadius={5}
        width="95%"
        height="95%"
        marginTop="1.5%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Fade
          in={count < 2}
          exit={false}
          mountOnEnter
          unmountOnExit
          timeout={1000}
        >
          <Box
            component="img"
            src={Bedroom}
            width="98%"
            height="96%"
            borderRadius={5}
            marginLeft="1%"
          />
        </Fade>
        <Fade
          in={2 <= count && count < 6}
          exit={false}
          mountOnEnter
          unmountOnExit
          timeout={1000}
        >
          <Box
            component="img"
            src={Livingroom}
            width="98%"
            height="96%"
            borderRadius={5}
            marginLeft="1%"
          />
        </Fade>
        <Fade
          in={6 <= count && count < 14}
          exit={false}
          mountOnEnter
          unmountOnExit
          timeout={1000}
        >
          <Box
            component="img"
            src={Kitchen}
            width="98%"
            height="96%"
            borderRadius={5}
            marginLeft="1%"
          />
        </Fade>
        <Fade
          in={14 <= count && count < 20}
          exit={false}
          mountOnEnter
          unmountOnExit
          timeout={1000}
        >
          <Box
            component="img"
            src={Hallway}
            width="98%"
            height="96%"
            borderRadius={5}
            marginLeft="1%"
          />
        </Fade>
      </Box>

      {/* Dilogue box */}
      <Slide in={true} direction="up">
        <Box>
          <Box
            width="100%"
            height={
              count === firstSelectionPoint || count === secondSelectionPoint
                ? "40%"
                : "25%"
            }
            bgcolor={es100Theme.palette.primary.main}
            sx={{ bottom: 0, right: 0, position: "absolute", opacity: "85%" }}
            paddingTop="2%"
            paddingRight="5%"
          >
            {/* In bedroom 0-1 */}
            <Fade
              in={count === 0}
              exit={false}
              mountOnEnter
              unmountOnExit
              timeout={1000}
            >
              <Typography variant="h3" sx={{ marginLeft: "10%" }}>
                My name is Jacob and it's a nice morning in Raleigh, NC!
              </Typography>
            </Fade>
            <Fade
              in={count === 1}
              exit={false}
              mountOnEnter
              unmountOnExit
              timeout={1000}
            >
              <Typography variant="h3" sx={{ marginLeft: "10%" }}>
                Ah! I should get going or I will be late for school...
              </Typography>
            </Fade>

            {/* In livingroom 2-5 */}
            <Fade
              in={count === 2}
              exit={false}
              mountOnEnter
              unmountOnExit
              timeout={1000}
            >
              <Typography variant="h3" sx={{ marginLeft: "10%" }}>
                Good morning dad!
              </Typography>
            </Fade>
            <Fade
              in={count === 3}
              exit={false}
              mountOnEnter
              unmountOnExit
              timeout={1000}
            >
              <Typography variant="h3" sx={{ marginLeft: "10%" }}>
                Did mom already went to work?
              </Typography>
            </Fade>
            <Fade
              in={count === 4}
              exit={false}
              mountOnEnter
              unmountOnExit
              timeout={1000}
            >
              <Typography variant="h3" sx={{ marginLeft: "10%" }}>
                Dad: Good morning Jacob. Yeah, she just left 10 minutes ago.
                Anyways come eat.
              </Typography>
            </Fade>
            <Fade
              in={count === 5}
              exit={false}
              mountOnEnter
              unmountOnExit
              timeout={1000}
            >
              <Typography variant="h3" sx={{ marginLeft: "10%" }}>
                Okay.
              </Typography>
            </Fade>

            {/* In kitchen 6-12 */}
            <Fade
              in={count === 6}
              exit={false}
              mountOnEnter
              unmountOnExit
              timeout={1000}
            >
              <Typography variant="h3" sx={{ marginLeft: "10%" }}>
                * Eating breakfast *
              </Typography>
            </Fade>
            <Fade
              in={count === 7}
              exit={false}
              mountOnEnter
              unmountOnExit
              timeout={1000}
            >
              <Typography variant="h3" sx={{ marginLeft: "10%" }}>
                Thanks for the breakfast dad.
              </Typography>
            </Fade>
            <Fade
              in={count === 8}
              exit={false}
              mountOnEnter
              unmountOnExit
              timeout={1000}
            >
              <Typography variant="h3" sx={{ marginLeft: "10%" }}>
                Dad: No problem.
              </Typography>
            </Fade>
            <Fade
              in={count === 9}
              exit={false}
              mountOnEnter
              unmountOnExit
              timeout={1000}
            >
              <Typography variant="h3" sx={{ marginLeft: "10%" }}>
                Dad: Ah, you only have 30 minutes left until school. Do you want
                a ride?
              </Typography>
            </Fade>
            {/* First selection */}
            <Fade
              in={count === firstSelectionPoint}
              exit={false}
              mountOnEnter
              unmountOnExit
              timeout={1000}
            >
              <ToggleButtonGroup
                fullWidth
                sx={{
                  marginLeft: "5%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                exclusive
                value={firstSelection}
                onChange={onFirstSelectionClick}
              >
                {/* Option 1 */}
                <ToggleButton
                  value="1"
                  size="large"
                  selected={firstSelection === 1}
                >
                  <Typography variant="h6" fontWeight="bold" color="black">
                    Drive to school with dad (5 minutes)
                  </Typography>
                </ToggleButton>
                {/* Option 2 */}
                <ToggleButton
                  value="2"
                  size="large"
                  selected={firstSelection === 2}
                >
                  <Typography variant="h6" fontWeight="bold" color="black">
                    Use the electric scooter (10 minutes)
                  </Typography>
                </ToggleButton>
                {/* Option 3 */}
                <ToggleButton
                  value="3"
                  size="large"
                  selected={firstSelection === 3}
                >
                  <Typography variant="h6" fontWeight="bold" color="black">
                    Just walk (20 minutes)
                  </Typography>
                </ToggleButton>
              </ToggleButtonGroup>
            </Fade>
            {/* First selection response */}
            {/* Response 1 */}
            <Fade
              in={firstSelection === 1 && count === firstSelectionPoint + 1}
              exit={false}
              mountOnEnter
              unmountOnExit
              timeout={1000}
            >
              <Typography variant="h3" sx={{ marginLeft: "10%" }}>
                Oh really? Thanks dad!
              </Typography>
            </Fade>
            <Fade
              in={firstSelection === 1 && count === firstSelectionPoint + 2}
              exit={false}
              mountOnEnter
              unmountOnExit
              timeout={1000}
            >
              <Typography variant="h3" sx={{ marginLeft: "10%" }}>
                Dad: Okay, let me go change really quick.
              </Typography>
            </Fade>
            {/* Response 2 */}
            <Fade
              in={firstSelection === 2 && count === firstSelectionPoint + 1}
              exit={false}
              mountOnEnter
              unmountOnExit
              timeout={1000}
            >
              <Typography variant="h3" sx={{ marginLeft: "10%" }}>
                Nah, I'm going to use that electric scooter that we just bought!
              </Typography>
            </Fade>
            <Fade
              in={firstSelection === 2 && count === firstSelectionPoint + 2}
              exit={false}
              mountOnEnter
              unmountOnExit
              timeout={1000}
            >
              <Typography variant="h3" sx={{ marginLeft: "10%" }}>
                Dad: Ah, good idea. Becareful on the road though.
              </Typography>
            </Fade>
            {/* Response 3 */}
            <Fade
              in={firstSelection === 3 && count === firstSelectionPoint + 1}
              exit={false}
              mountOnEnter
              unmountOnExit
              timeout={1000}
            >
              <Typography variant="h3" sx={{ marginLeft: "10%" }}>
                I think I can just walk. I will be able to get to school before
                it starts.
              </Typography>
            </Fade>
            <Fade
              in={firstSelection === 3 && count === firstSelectionPoint + 2}
              exit={false}
              mountOnEnter
              unmountOnExit
              timeout={1000}
            >
              <Typography variant="h3" sx={{ marginLeft: "10%" }}>
                Dad: You better get moving then.
              </Typography>
            </Fade>
            {/* Return to linear dilogue */}
            <Fade
              in={
                count === firstSelectionPoint + firstSelectionResponseLength + 1
              }
              exit={false}
              mountOnEnter
              unmountOnExit
              timeout={1000}
            >
              <Typography variant="h3" sx={{ marginLeft: "10%" }}>
                * Gets ready for school *
              </Typography>
            </Fade>

            {/* In hallway */}
            <Fade
              in={
                count === firstSelectionPoint + firstSelectionResponseLength + 2
              }
              exit={false}
              mountOnEnter
              unmountOnExit
              timeout={1000}
            >
              <Typography variant="h3" sx={{ marginLeft: "10%" }}>
                Let's get going then!
              </Typography>
            </Fade>
            <Fade
              in={
                count === firstSelectionPoint + firstSelectionResponseLength + 3
              }
              exit={false}
              mountOnEnter
              unmountOnExit
              timeout={1000}
            >
              <Typography variant="h3" sx={{ marginLeft: "10%" }}>
                ...I feel like I forgot about something...
              </Typography>
            </Fade>
            <Fade
              in={
                count === firstSelectionPoint + firstSelectionResponseLength + 4
              }
              exit={false}
              mountOnEnter
              unmountOnExit
              timeout={1000}
            >
              <Typography variant="h3" sx={{ marginLeft: "10%" }}>
                Ah, right. I forgot my water bottle.
              </Typography>
            </Fade>
            {/* Second selection */}
            <Fade
              in={count === secondSelectionPoint}
              exit={false}
              mountOnEnter
              unmountOnExit
              timeout={1000}
            >
              <ToggleButtonGroup
                fullWidth
                sx={{
                  marginLeft: "5%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                exclusive
                value={secondSelection}
                onChange={onSecondSelectionClick}
              >
                {/* Option 1 */}
                <ToggleButton
                  value="1"
                  size="large"
                  selected={secondSelection === 1}
                >
                  <Typography variant="h6" fontWeight="bold" color="black">
                    Take my time and fill up my reusable water bottle.
                  </Typography>
                </ToggleButton>
                {/* Option 2 */}
                <ToggleButton
                  value="2"
                  size="large"
                  selected={secondSelection === 2}
                >
                  <Typography variant="h6" fontWeight="bold" color="black">
                    Quickly grab a cold desposible water bottle.
                  </Typography>
                </ToggleButton>
                {/* Option 3 */}
                <ToggleButton
                  value="3"
                  size="large"
                  selected={secondSelection === 3}
                >
                  <Typography variant="h6" fontWeight="bold" color="black">
                    Just drink from the fountain at school.
                  </Typography>
                </ToggleButton>
              </ToggleButtonGroup>
            </Fade>
            {/* Second selection Response */}
            {/* Response 1 */}
            <Fade
              in={secondSelection === 1 && count === secondSelectionPoint + 1}
              exit={false}
              mountOnEnter
              unmountOnExit
              timeout={1000}
            >
              <Typography variant="h3" sx={{ marginLeft: "10%" }}>
                I probably have enough time to fill up my water bottle.
              </Typography>
            </Fade>
            <Fade
              in={secondSelection === 1 && count === secondSelectionPoint + 2}
              exit={false}
              mountOnEnter
              unmountOnExit
              timeout={1000}
            >
              <Typography variant="h3" sx={{ marginLeft: "10%" }}>
                * Goes back home and fills up water bottle *
              </Typography>
            </Fade>
            {/* Response 2 */}
            <Fade
              in={secondSelection === 2 && count === secondSelectionPoint + 1}
              exit={false}
              mountOnEnter
              unmountOnExit
              timeout={1000}
            >
              <Typography variant="h3" sx={{ marginLeft: "10%" }}>
                I'll just quickly grab a disposable water bottle that a put in
                the fridge.
              </Typography>
            </Fade>
            <Fade
              in={secondSelection === 2 && count === secondSelectionPoint + 2}
              exit={false}
              mountOnEnter
              unmountOnExit
              timeout={1000}
            >
              <Typography variant="h3" sx={{ marginLeft: "10%" }}>
                * Goes back home and grabs a plastic water bottle from the
                fridge *
              </Typography>
            </Fade>
            {/* Response 3 */}
            <Fade
              in={secondSelection === 3 && count === secondSelectionPoint + 1}
              exit={false}
              mountOnEnter
              unmountOnExit
              timeout={1000}
            >
              <Typography variant="h3" sx={{ marginLeft: "10%" }}>
                Ugh, I'm running late. I'll just drink on school fountain.
              </Typography>
            </Fade>
            <Fade
              in={secondSelection === 3 && count === secondSelectionPoint + 2}
              exit={false}
              mountOnEnter
              unmountOnExit
              timeout={1000}
            >
              <Typography variant="h3" sx={{ marginLeft: "10%" }}>
                * Runs out for school *
              </Typography>
            </Fade>
          </Box>

          <Button
            variant="contained"
            sx={{ bottom: 0, right: 0, position: "absolute", margin: "1%" }}
            onClick={onContinueClick}
            disabled={firstSelection === 0 || secondSelection === 0}
          >
            Continue
          </Button>
        </Box>
      </Slide>
    </>
  );
};

export default FirstScenario;
