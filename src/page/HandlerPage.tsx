import react, { useEffect, useState } from "react";
import { es100Theme } from "../theme/theme";
import { Box, Slide } from "@mui/material";
import FirstScenario from "./FirstScenario";
import SecondScenario from "./SecondScenario";
import ThirdScenario from "./ThirdScenario";
import BadEnding from "./BadEnding";
import NeutralEnding from "./NeutralEnding";
import GoodEnding from "./GoodEnding";
import InfoPage from "./InfoPage";
import { useNavigate } from "react-router-dom";

const HandlerPage: React.FC = () => {
  const navigate = useNavigate();

  const [count, setCount] = useState(-1);

  // Scenario 1: Selected option
  const [scenario1FirstSelection, setScenario1FirstSelection] = useState(-1);
  const [scenario1SecondSelection, setScenario1SecondSelection] = useState(-1);
  // Scenario 1: Score based on selected option
  const [scenario1FirstSelectionScore, setScenario1FirstSelectionScore] =
    useState(-1);
  const [scenario1SecondSelectionScore, setScenario1SecondSelectionScore] =
    useState(-1);

  // Scenario 2: Selected option
  const [scenario2FirstSelection, setScenario2FirstSelection] = useState(-1);
  const [scenario2SecondSelection, setScenario2SecondSelection] = useState(-1);
  // Scenario 2: Score based on selected option
  const [scenario2FirstSelectionScore, setScenario2FirstSelectionScore] =
    useState(-1);
  const [scenario2SecondSelectionScore, setScenario2SecondSelectionScore] =
    useState(-1);

  // Scenario 3: Selected option
  const [scenario3FirstSelection, setScenario3FirstSelection] = useState(-1);
  const [scenario3SecondSelection, setScenario3SecondSelection] = useState(-1);
  // Scenario 3: Score based on selected option
  const [scenario3FirstSelectionScore, setScenario3FirstSelectionScore] =
    useState(-1);
  const [scenario3SecondSelectionScore, setScenario3SecondSelectionScore] =
    useState(-1);

  // Scoring scenario 1 first selection
  const scoreScenario1FirstSelection = (selection: number) => {
    setScenario1FirstSelection(selection);

    if (selection === 1) {
      setScenario1FirstSelectionScore(0); // drive
    } else if (selection === 2) {
      setScenario1FirstSelectionScore(1); // electric scooter
    } else if (selection === 3) {
      setScenario1FirstSelectionScore(2); // walk
    }
  };
  // Scoring scenario 1 second selection
  const scoreScenario1SecondSelection = (selection: number) => {
    setScenario1SecondSelection(selection);

    if (selection === 1) {
      setScenario1SecondSelectionScore(2); // fill up bottle
    } else if (selection === 2) {
      setScenario1SecondSelectionScore(0); // disposable bottle
    } else if (selection === 3) {
      setScenario1SecondSelectionScore(1); // school water fountain
    }
  };

  // Scoring scenario 2 first selection
  const scoreScenario2FirstSelection = (selection: number) => {
    setScenario2FirstSelection(selection);

    if (selection === 1) {
      setScenario2FirstSelectionScore(0); // Use new paper
    } else if (selection === 2) {
      setScenario2FirstSelectionScore(1); // Use recycled paper
    } else if (selection === 3) {
      setScenario2FirstSelectionScore(2); // Dont use paper at all
    }
  };
  // Scoring scenario 2 second selection
  const scoreScenario2SecondSelection = (selection: number) => {
    setScenario2SecondSelection(selection);

    if (selection === 1) {
      setScenario2SecondSelectionScore(0); // Waste food
    } else if (selection === 2) {
      setScenario2SecondSelectionScore(2); // Just enough food
    } else if (selection === 3) {
      setScenario2SecondSelectionScore(1); // Eat snacks and produce garbage
    }
  };

  // Scoring scenario 3 first selection
  const scoreScenario3FirstSelection = (selection: number) => {
    setScenario3FirstSelection(selection);

    if (selection === 1) {
      setScenario3FirstSelectionScore(0); // Throw paper to trash can
    } else if (selection === 2) {
      setScenario3FirstSelectionScore(1); // Throw paper to recycling bin
    } else if (selection === 3) {
      setScenario3FirstSelectionScore(2); // Just keep the paper
    }
  };
  // Scoring scenario 3 second selection
  const scoreScenario3SecondSelection = (selection: number) => {
    setScenario3SecondSelection(selection);

    if (selection === 1) {
      setScenario3SecondSelectionScore(0); // use oven
    } else if (selection === 2) {
      setScenario3SecondSelectionScore(1); // use microwave
    } else if (selection === 3) {
      setScenario3SecondSelectionScore(2); // use nothing
    }
  };

  const calculateScore = (): number => {
    console.log(
      "Score: ",
      scenario1FirstSelectionScore +
        scenario1SecondSelectionScore +
        scenario2FirstSelectionScore +
        scenario2SecondSelectionScore +
        scenario3FirstSelectionScore +
        scenario3SecondSelectionScore
    );
    return (
      scenario1FirstSelectionScore +
      scenario1SecondSelectionScore +
      scenario2FirstSelectionScore +
      scenario2SecondSelectionScore +
      scenario3FirstSelectionScore +
      scenario3SecondSelectionScore
    );
  };

  return (
    <>
      <Box
        width="100%"
        height="100%"
        bgcolor={es100Theme.palette.background.default}
        display="flex"
        justifyContent="center"
      >
        {/* Scenario 1 count 0-19 */}
        {count < 20 && (
          <FirstScenario
            count={count}
            setCount={setCount}
            firstSelection={scenario1FirstSelection}
            setFirstSelection={scoreScenario1FirstSelection}
            secondSelection={scenario1SecondSelection}
            setSecondSelection={scoreScenario1SecondSelection}
          />
        )}
        {/* Scenario 2 count 20-49 */}
        {20 <= count && count < 49 && (
          <SecondScenario
            count={count}
            setCount={setCount}
            firstSelection={scenario2FirstSelection}
            setFirstSelection={scoreScenario2FirstSelection}
            secondSelection={scenario2SecondSelection}
            setSecondSelection={scoreScenario2SecondSelection}
          />
        )}
        {/* Scenario 3 count 49-78 */}
        {49 <= count && count < 79 && (
          <ThirdScenario
            count={count}
            setCount={setCount}
            firstSelection={scenario3FirstSelection}
            setFirstSelection={scoreScenario3FirstSelection}
            secondSelection={scenario3SecondSelection}
            setSecondSelection={scoreScenario3SecondSelection}
          />
        )}

        {/* Ending routes count 79 */}
        {0 <= calculateScore() &&
          calculateScore() < 3 &&
          79 <= count &&
          count < 80 && <BadEnding count={count} setCount={setCount} />}
        {3 <= calculateScore() &&
          calculateScore() < 6 &&
          79 <= count &&
          count < 80 && <NeutralEnding count={count} setCount={setCount} />}
        {6 <= calculateScore() &&
          calculateScore() < 10 &&
          79 <= count &&
          count < 80 && <GoodEnding count={count} setCount={setCount} />}
      </Box>
      {80 <= count && count < 81 && navigate("/info")}
    </>
  );
};

export default HandlerPage;
