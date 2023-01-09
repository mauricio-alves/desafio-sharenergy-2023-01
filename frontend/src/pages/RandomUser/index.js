import axios from "axios";
import { useState, useEffect } from "react";
import { UserCard } from "../../components/UserCard";
import { SearchBar } from "../../components/SearchBar";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";

export function RandomUser() {
  const navigate = useNavigate();
  const [catalog, setCatalog] = useState();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getUserCatalog() {
      try {
        const response = await axios.get(
          `https://randomuser.me/api/?page=${page}&results=10&seed=abc`
        );
        setCatalog(response.data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getUserCatalog();
  }, [page, search]);

  function handlePage(event) {
    setPage(event.target.value);
    navigate("/random-user");
  }

  function handleSortAlphabetic() {
    setCatalog(
      [...catalog].sort((a, b) => a.name.first.localeCompare(b.name.first))
    );
  }

  function handleSortByAge() {
    setCatalog([...catalog].sort((a, b) => a.dob.age - b.dob.age));
  }

  return loading ? (
    <Loading />
  ) : (
    <>
      <Header />
      <div>
        <div>
          <SearchBar search={search} setSearch={setSearch} />
          <div>
            <span className="mr-2">Ordenar por:</span>
            <button
              className="text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none"
              onClick={handleSortAlphabetic}
            >
              Nome
            </button>
            <button
              className="text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none"
              onClick={handleSortByAge}
            >
              Idade
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {catalog
          .filter((currentUser) => {
            return (
              currentUser.name.first
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              currentUser.email.toLowerCase().includes(search.toLowerCase()) ||
              currentUser.login.username
                .toLowerCase()
                .includes(search.toLowerCase())
            );
          })
          .map((currentUser) => {
            return (
              <div key={currentUser.id.value}>
                <UserCard currentUser={currentUser} />
              </div>
            );
          })}
      </div>
      <div className="p-5 flex justify-center">
        <ul
          className="flex bg-sky-600 text-cyan-50 p-2  rounded-xl"
          onClick={handlePage}
        >
          <li
            className="hover:bg-white hover:text-sky-600 px-2 py-0 cursor-pointer"
            value="1"
          >
            1
          </li>
          <li
            className="hover:bg-white hover:text-sky-600 px-2 py-0 cursor-pointer"
            value="2"
          >
            2
          </li>
          <li
            className="hover:bg-white hover:text-sky-600 px-2 py-0 cursor-pointer"
            value="3"
          >
            3
          </li>
          <li
            className="hover:bg-white hover:text-sky-600 px-2 py-0 cursor-pointer"
            value="4"
          >
            4
          </li>
          <li
            className="hover:bg-white hover:text-sky-600 px-2 py-0 cursor-pointer"
            value="5"
          >
            5
          </li>
        </ul>
      </div>
    </>
  );
}
