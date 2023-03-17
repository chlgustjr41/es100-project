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

import Classroom from "../component/image/background/Classroom_Day.png";
import Cafeteria from "../component/image/background/Cafeteria_Day.png";
import Street from "../component/image/background/Street_Spring_Day.png";

interface SecondScenarioProps {
  count: number;
  setCount(value: number): void;
  firstSelection: number;
  setFirstSelection(value: number): void;
  secondSelection: number;
  setSecondSelection(value: number): void;
}

const SecondScenario: React.FC<SecondScenarioProps> = (
  props: SecondScenarioProps
) => {
  const startingPoint = 20;

  const firstSelectionPoint = 26;
  const firstSelectionResponseLength = 3;
  const secondSelectionPoint = 35;
  const secondSelectionResponseLength = 3;

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
          in={(20 <= count && count < 30) || (43 <= count && count < 45)}
          exit={false}
          mountOnEnter
          unmountOnExit
          timeout={1000}
        >
          <Box
            component="img"
            src={Classroom}
            width="98%"
            height="96%"
            borderRadius={5}
            marginLeft="1%"
          />
        </Fade>
        <Fade
          in={30 <= count && count < 43}
          exit={false}
          mountOnEnter
          unmountOnExit
          timeout={1000}
        >
          <Box
            component="img"
            src={Cafeteria}
            width="98%"
            height="96%"
            borderRadius={5}
            marginLeft="1%"
          />
        </Fade>
        <Fade
          in={45 <= count && count < 49}
          exit={false}
          mountOnEnter
          unmountOnExit
          timeout={1000}
        >
          <Box
            component="img"
            src={Street}
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
          {/* In classroom 20-30 */}
          <Fade
            in={count === startingPoint}
            exit={false}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Typography variant="h3" sx={{ marginLeft: "10%" }}>
              Just made in time!
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
              Hmmm what's my first class...?
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
              Oh, it's math.
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
              ...Wait, I don't think I brought my calculator...
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
              I guess I am solving the math problems by hand...
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
              Hmmm, I might need some papers for it then.
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
                  Get new A4 papers. (able to write clean)
                </Typography>
              </ToggleButton>
              {/* Option 2 */}
              <ToggleButton
                value="2"
                size="large"
                selected={firstSelection === 2}
              >
                <Typography variant="h6" fontWeight="bold" color="black">
                  Get recycling papers and use the empty space. (messy to write
                  on)
                </Typography>
              </ToggleButton>
              {/* Option 3 */}
              <ToggleButton
                value="3"
                size="large"
                selected={firstSelection === 3}
              >
                <Typography variant="h6" fontWeight="bold" color="black">
                  Believe in yourself and just do mental math. (Good luck)
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
              Ah! I always love the smell of new papers for some reason.
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
              Oh, only 3 questions to solve for today? That's easy.
            </Typography>
          </Fade>
          <Fade
            in={firstSelection === 1 && count === firstSelectionPoint + 3}
            exit={false}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Typography variant="h3" sx={{ marginLeft: "10%" }}>
              Well, I ended up leaving most of the spaces blank. Hmmm, I'm still
              going to throw away the paper I guess since it's already used.
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
              Ugh, these recycled papers have not much space to write. Well,
              what's worse that it can happen.
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
              Okay I finished calculating and just have to write my answer
              down...
            </Typography>
          </Fade>
          <Fade
            in={firstSelection === 2 && count === firstSelectionPoint + 3}
            exit={false}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Typography variant="h3" sx={{ marginLeft: "10%" }}>
              Wait where did I write my work... Ugh, I can't find my answer in
              this messy paper!
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
              I'm probably fine without any paper. What's worse that it can
              happen.
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
              Teacher: We will have a surprise quiz on the calculus chapter!
              Good luck!
            </Typography>
          </Fade>
          <Fade
            in={firstSelection === 3 && count === firstSelectionPoint + 3}
            exit={false}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Typography variant="h3" sx={{ marginLeft: "10%" }}>
              ...I'm screwed
            </Typography>
          </Fade>

          {/* In cafeteria 30-41 */}
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
              * Later in lunch *
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
              Finally lunch time!!!
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
              Let's see... What do we have for lunch today...
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
              Yeah! They are serving hawain pizza! My favorite! (Don't judge me)
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
              I should line up to get some food.
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
                  Grab as much as I can since it is my favorite.
                </Typography>
              </ToggleButton>
              {/* Option 2 */}
              <ToggleButton
                value="2"
                size="large"
                selected={secondSelection === 2}
              >
                <Typography variant="h6" fontWeight="bold" color="black">
                  Grab just enough for yourself.
                </Typography>
              </ToggleButton>
              {/* Option 3 */}
              <ToggleButton
                value="3"
                size="large"
                selected={secondSelection === 3}
              >
                <Typography variant="h6" fontWeight="bold" color="black">
                  Just grab more snacks and deserts.
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
              I'll grab as much pizza I can get!
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
              * Eating lunch *
            </Typography>
          </Fade>
          <Fade
            in={secondSelection === 1 && count === secondSelectionPoint + 3}
            exit={false}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Typography variant="h3" sx={{ marginLeft: "10%" }}>
              Hmmm, I probably grabbed too much food. I can just throw it away.
            </Typography>
          </Fade>
          {/* Respons
          {/* Response 2 */}
          <Fade
            in={secondSelection === 2 && count === secondSelectionPoint + 1}
            exit={false}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Typography variant="h3" sx={{ marginLeft: "10%" }}>
              Ugh, I should control myself not to overeat though.
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
              I'll just get couple slices
            </Typography>
          </Fade>
          <Fade
            in={secondSelection === 2 && count === secondSelectionPoint + 3}
            exit={false}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Typography variant="h3" sx={{ marginLeft: "10%" }}>
              * Eating lunch *
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
              Ugh, I think I ate too much breakfast this morning...My dad cooks
              so well...
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
              I'll probably grab a whole bunch of snacks or deserts at least.
            </Typography>
          </Fade>
          <Fade
            in={secondSelection === 3 && count === secondSelectionPoint + 3}
            exit={false}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Typography variant="h3" sx={{ marginLeft: "10%" }}>
              * Eating some snacks *
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
              * School bell rings *
            </Typography>
          </Fade>
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
              Lunch time is already over?!
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
              Time to go to class again...
            </Typography>
          </Fade>
          <Fade
            in={
              count === secondSelectionPoint + secondSelectionResponseLength + 4
            }
            exit={false}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Typography variant="h3" sx={{ marginLeft: "10%" }}>
              Okay, only few hours left until school is done! Let's do this
            </Typography>
          </Fade>

          {/* Back in classroom 43-44 */}
          <Fade
            in={
              count === secondSelectionPoint + secondSelectionResponseLength + 5
            }
            exit={false}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Typography variant="h3" sx={{ marginLeft: "10%" }}>
              Zzz...
            </Typography>
          </Fade>
          <Fade
            in={
              count === secondSelectionPoint + secondSelectionResponseLength + 6
            }
            exit={false}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Typography variant="h3" sx={{ marginLeft: "10%" }}>
              * Ended up sleeping through the rest of the school *
            </Typography>
          </Fade>

          {/* On street 45-47 */}
          <Fade
            in={
              count === secondSelectionPoint + secondSelectionResponseLength + 7
            }
            exit={false}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Typography variant="h3" sx={{ marginLeft: "10%" }}>
              Finally I'm out of school!!!
            </Typography>
          </Fade>
          <Fade
            in={
              count === secondSelectionPoint + secondSelectionResponseLength + 8
            }
            exit={false}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Typography variant="h3" sx={{ marginLeft: "10%" }}>
              I can't believe I was stuck in school during this beautiful
              weather!
            </Typography>
          </Fade>
          <Fade
            in={
              count === secondSelectionPoint + secondSelectionResponseLength + 9
            }
            exit={false}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Typography variant="h3" sx={{ marginLeft: "10%" }}>
              Since school is over!
            </Typography>
          </Fade>
          <Fade
            in={
              count ===
              secondSelectionPoint + secondSelectionResponseLength + 10
            }
            exit={false}
            mountOnEnter
            unmountOnExit
            timeout={1000}
          >
            <Typography variant="h3" sx={{ marginLeft: "10%" }}>
              ...I'll probably go back home and finish up my game from last
              night.
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

export default SecondScenario;
