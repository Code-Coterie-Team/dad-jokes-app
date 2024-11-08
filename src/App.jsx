import { useState, useEffect } from "react";


function App() {
  const [jokData, setJokeData] = useState(null);


  const showJoke = async () => {
    const data = await fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    }).then((data) => {
      console.log(data);
      return data.json();
    });
    setJokeData(data);

  };
  useEffect(() => {
    //Mount
    showJoke();
  }, []);
  return (
    <div className='flex justify-center pt-[70px]'>
      <div className="w-6/12">
        <button onClick={
          showJoke
        } className='text-gray-100 px-3 py-[0.2rem] rounded-md bg-[#ba5d2c] hover:bg-[#86380e]'>Random Dad Joke</button>
        <p className="pt-9">{jokData?.joke}</p>
      </div>

    </div>
  )
}

export default App
