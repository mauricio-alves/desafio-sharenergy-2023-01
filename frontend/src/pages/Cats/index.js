import { Header } from "../../components/Header";
import { useState } from "react";

export function Cats() {
  const [cat, setCat] = useState();
  const codes = [
    "100",
    "101",
    "102",
    "103",
    "104",
    "105",
    "200",
    "300",
    "400",
    "500",
    "599",
    "600",
  ];

  function handleCat(event) {
    setCat(event.target.value);
  }

  return (
    <>
      <Header />
      <div className="flex justify-center p-10">
        <select className="border-4 p-2 rounded-xl" onClick={handleCat}>
          <option value="">Escolha um status code</option>
          {codes.map((currentElement) => {
            return <option value={currentElement}>{currentElement}</option>;
          })}
        </select>
      </div>
      <div className="px-8 pb-8 flex justify-center">
        {!cat ? (
          <img
            className="w-96"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b8d2b12-21e8-4931-8a6d-fb9ecdd60383/de8mwmx-4cd9b003-9a4e-43ae-83da-a72c6fd4e73f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzViOGQyYjEyLTIxZTgtNDkzMS04YTZkLWZiOWVjZGQ2MDM4M1wvZGU4bXdteC00Y2Q5YjAwMy05YTRlLTQzYWUtODNkYS1hNzJjNmZkNGU3M2YucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.j3MqwTo5SXQv4Gjch6frPjNMIBrJAgh_a2cfhX4zSvg"
            alt="gato aranha"
          />
        ) : (
          <img
            className="w-96"
            src={`https://http.cat/${cat}`}
            alt="http cat status code"
          />
        )}
      </div>
    </>
  );
}
