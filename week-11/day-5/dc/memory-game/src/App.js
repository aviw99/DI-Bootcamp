import Header from "./components/Header";
import Card from "./components/Card";
import {useState} from "react";

function App() {
    const [score, setScore] = useState(0);
    const [lastScore, setLastScore] = useState(0);

    const handleScoreChange = (newScore) => {
        setScore(newScore);
    }

    const handleGameEnd = (score_on_game_end) => {
        setLastScore(score_on_game_end);
    }

  return (
    <div>

        <Header score={score} lastScore={lastScore} />


        <Card onScoreChange={handleScoreChange} onGameEnd={handleGameEnd}/>

    </div>
  );
}

export default App;
