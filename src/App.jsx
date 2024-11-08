import { useState } from "react";


function App() {
  const [jokData, setJokeData] = useState(null);

const [jokeText, setJokeText] = useState();


  const showJoke = async () => {
    const data = await fetch("https://icanhazdadjoke.com/", {
      method: "GET",
    }).then((data) => data.json());
    setJokeData(data);
 
  };
  useEffect(() => {
    //Mount
    showJoke();
  }, []);
  return (
    <div className='w-[700px] m-auto pt-[70px]'>
      <button onClick={
        showJoke()
      } className='text-gray-100 px-3 py-[0.2rem] rounded-md bg-[#ba5d2c] hover:bg-[#86380e]'>Random Dad Joke</button>
      <p className="pt-9">{jokData.joker}</p>
    </div>
  )
}

export default App
