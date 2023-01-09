import { useState } from "react";
import { Header } from "../../components/Header";
import axios from "axios";

export function RandomDog() {
  const [dog, setDog] = useState(
    "https://random.dog/b69af17b-1812-4e95-adba-0e6d1b6d5064.jpg"
  );

  function handleDog() {
    async function getRandomDog() {
      try {
        const response = await axios.get("https://random.dog/woof.json");
        setDog(response.data.url);
      } catch (error) {
        console.log(error);
      }
    }
    getRandomDog();
  }

  return (
    <>
      <Header />
      <div className="flex justify-center gap-5 p-10">
        <button
          className="text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-pink-600 dark:hover:bg-pink-400 focus:outline-none"
          onClick={handleDog}
        >
          Sortear cachorro
        </button>
      </div>
      <div className="px-8 pb-8 flex justify-center">
        {dog.endsWith("mp4") ? (
          <video className="w-96" autoPlay loop muted>
            <source src={dog} type="video/mp4" />
          </video>
        ) : (
          <img className="w-96" src={dog} alt="random dog" />
        )}
      </div>
    </>
  );
}
