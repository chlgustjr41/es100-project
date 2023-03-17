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

interface ThridScenarioProps {
  count: number;
  setCount(value: number): void;
  firstSelection: number;
  setFirstSelection(value: number): void;
  secondSelection: number;
  setSecondSelection(value: number): void;
}

const ThridScenario: React.FC<ThridScenarioProps> = (
  props: ThridScenarioProps
) => {
  const startingPoint = 49;

  const firstSelectionPoint = 55;
  const firstSelectionResponseLength = 2;
  const secondSelectionPoint = 73;
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
          in={
            (startingPoint <= count && count < 65) ||
            (77 <= count && count < 81)
          }
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
          in={65 <= count && count < 77}
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
      </Box>

      {/* Dilogue box */}
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
          {/* In bedroom 49-63 */}
          <Fade
            in={count === startingPoint}
            exit={false}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Typography variant="h3" sx={{ marginLeft: "10%" }}>
              * Arrives home *
            </Typography>
          </Fade>
          <Fade
            in={count === startingPoint + 1}
            exit={false}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Typography variant="h3" sx={{ marginLeft: "10%" }}>
              Okay, I'm back to my man cave!
            </Typography>
          </Fade>
          <Fade
            in={count === startingPoint + 2}
            exit={false}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Typography variant="h3" sx={{ marginLeft: "10%" }}>
              Hmmm, my Nintendo Switch should be somewhere in my backpack...
            </Typography>
          </Fade>
          <Fade
            in={count === startingPoint + 3}
            exit={false}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Typography variant="h3" sx={{ marginLeft: "10%" }}>
              Why is my bag full of trash?
            </Typography>
          </Fade>
          <Fade
            in={count === startingPoint + 4}
            exit={false}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Typography variant="h3" sx={{ marginLeft: "10%" }}>
              Ah, a lot of worksheets that I have done today in school.
            </Typography>
          </Fade>
          <Fade
            in={count === startingPoint + 5}
            exit={false}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Typography variant="h3" sx={{ marginLeft: "10%" }}>
              I should throw away all of these papers then.
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
                  Throw it away to the room trash can
                </Typography>
              </ToggleButton>
              {/* Option 2 */}
              <ToggleButton
                value="2"
                size="large"
                selected={firstSelection === 2}
              >
                <Typography variant="h6" fontWeight="bold" color="black">
                  Put it aside and throw it away later in the recycling bin
                  downstairs
                </Typography>
              </ToggleButton>
              {/* Option 3 */}
              <ToggleButton
                value="3"
                size="large"
                selected={firstSelection === 3}
              >
                <Typography variant="h6" fontWeight="bold" color="black">
                  Keep your school work just incase you want to study it again
                  later!
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
              I am too lazy to go downstairs and throw it away...
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
              I will just throw it away in the trashcan in my room.
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
              Hmm, most of them are papers...
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
              I'll just put it aside and throw it in the recycling bin
              downstairs
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
              I remember Ms. Freyer saying that these worksheets will be in the
              test...?
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
              I probably have to save this for later study...
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
              Found my Switch!
            </Typography>
          </Fade>
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
              Time to game until dinner!
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
              * 3 hours later... *
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
              * Text message arrives *
            </Typography>
          </Fade>
          <Fade
            in={
              count === firstSelectionPoint + firstSelectionResponseLength + 5
            }
            exit={false}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Typography variant="h3" sx={{ marginLeft: "10%" }}>
              Hmmm? Oh both my parents are coming back late...
            </Typography>
          </Fade>
          <Fade
            in={
              count === firstSelectionPoint + firstSelectionResponseLength + 6
            }
            exit={false}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Typography variant="h3" sx={{ marginLeft: "10%" }}>
              I guess I have to go look for something to eat for dinner...
            </Typography>
          </Fade>
          <Fade
            in={
              count === firstSelectionPoint + firstSelectionResponseLength + 7
            }
            exit={false}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Typography variant="h3" sx={{ marginLeft: "10%" }}>
              * Goes downstairs to the kitchen *
            </Typography>
          </Fade>

          {/* In kitchen 65-76 */}
          <Fade
            in={
              count === firstSelectionPoint + firstSelectionResponseLength + 8
            }
            exit={false}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Typography variant="h3" sx={{ marginLeft: "10%" }}>
              * Looking for something to eat *
            </Typography>
          </Fade>
          <Fade
            in={
              count === firstSelectionPoint + firstSelectionResponseLength + 9
            }
            exit={false}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Typography variant="h3" sx={{ marginLeft: "10%" }}>
              Let's see...
            </Typography>
          </Fade>
          <Fade
            in={
              count === firstSelectionPoint + firstSelectionResponseLength + 10
            }
            exit={false}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Typography variant="h3" sx={{ marginLeft: "10%" }}>
              There are some left over pizza from yesterday...
            </Typography>
          </Fade>
          <Fade
            in={
              count === firstSelectionPoint + firstSelectionResponseLength + 11
            }
            exit={false}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Typography variant="h3" sx={{ marginLeft: "10%" }}>
              And a whole frozen pizza...
            </Typography>
          </Fade>
          <Fade
            in={
              count === firstSelectionPoint + firstSelectionResponseLength + 12
            }
            exit={false}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Typography variant="h3" sx={{ marginLeft: "10%" }}>
              ...
            </Typography>
          </Fade>
          <Fade
            in={
              count === firstSelectionPoint + firstSelectionResponseLength + 13
            }
            exit={false}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Typography variant="h3" sx={{ marginLeft: "10%" }}>
              Do we really have only pizzas?!
            </Typography>
          </Fade>
          <Fade
            in={
              count === firstSelectionPoint + firstSelectionResponseLength + 14
            }
            exit={false}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Typography variant="h3" sx={{ marginLeft: "10%" }}>
              Ugh, I guess I have no other choice than pizza...
            </Typography>
          </Fade>
          <Fade
            in={
              count === firstSelectionPoint + firstSelectionResponseLength + 15
            }
            exit={false}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Typography variant="h3" sx={{ marginLeft: "10%" }}>
              But I still need to choose which pizza to eat.
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
                  Oven cook the frozen pizza.
                </Typography>
              </ToggleButton>
              {/* Option 2 */}
              <ToggleButton
                value="2"
                size="large"
                selected={secondSelection === 2}
              >
                <Typography variant="h6" fontWeight="bold" color="black">
                  Microwave the left over pizza from yesterday.
                </Typography>
              </ToggleButton>
              {/* Option 3 */}
              <ToggleButton
                value="3"
                size="large"
                selected={secondSelection === 3}
              >
                <Typography variant="h6" fontWeight="bold" color="black">
                  Eat the left over pizza cold.
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
              I don't want to eat that old left over pizza...
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
              I guess I'll cook the frozen pizza through the oven.
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
              I'll eat the left over pizza since it's a pineapple pizza.
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
              I probably have to microwave it little.
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
              Ugh, I'm too lazy to do anything...
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
              I'll just eat the left over pizza cold.
            </Typography>
          </Fade>
          {/* Return to linear dilogue */}
          <Fade
            in={
              count === secondSelectionPoint + secondSelectionResponseLength + 1
            }
            exit={false}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Typography variant="h3" sx={{ marginLeft: "10%" }}>
              * Finishes eating and goes back upstairs *
            </Typography>
          </Fade>

          {/* Back in bedroom */}
          <Fade
            in={
              count === secondSelectionPoint + secondSelectionResponseLength + 2
            }
            exit={false}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Typography variant="h3" sx={{ marginLeft: "10%" }}>
              Well today was one of those typical days.
            </Typography>
          </Fade>
          <Fade
            in={
              count === secondSelectionPoint + secondSelectionResponseLength + 3
            }
            exit={false}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Typography variant="h3" sx={{ marginLeft: "10%" }}>
              I'll probably live like this rest of my life and no one can stop
              me!
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
    </>
  );
};

export default ThridScenario;
