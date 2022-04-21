import { useEffect, useState } from "react";

const App = () => {
    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState(null);

    const handleClick = (value) => {
        setUserChoice(value);
        generateComputerChoice();
    };

    const choices = ["rock", "paper", "scissors"];
    const generateComputerChoice = () => {
        const randomChoice =
            choices[Math.floor(Math.random() * choices.length)];
        setComputerChoice(randomChoice);
    };

    useEffect(() => {
        checkResult();
    }, [userChoice, computerChoice]);

    const checkResult = () => {
        switch (userChoice + computerChoice) {
            case "scissorspaper":
            case "rockscissors":
            case "paperrock":
                setResult("You win!");
                break;
            case "paperscissors":
            case "scissorsrock":
            case "rockpaper":
                setResult("You lose!");
                break;
            case "paperpaper":
            case "rockrock":
            case "scissorsscissors":
                setResult("It's a draw!");
                break;
        }
    };

    return (
        <div className="App">
            <h1>User Choice is: {userChoice}</h1>
            <h1>Computer Choice is:{computerChoice} </h1>
            <h1>Result: {result}</h1>
            {choices.map((choice, index) => (
                <button key={index} onClick={() => handleClick(choice)}>
                    {choice}
                </button>
            ))}
        </div>
    );
};

export default App;
