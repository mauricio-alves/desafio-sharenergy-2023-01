import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { AuthContext } from "../../contexts/authContext";

export function Login() {
  const navigate = useNavigate();
  const { setLoggedInUser } = useContext(AuthContext);
  const logado =
    localStorage.getItem("loggedInUser") ||
    sessionStorage.getItem("loggedInUser");
  const [checked, setChecked] = useState(false);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  function handleChange(event) {
    event.preventDefault();
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await api.post("/user/login", form);
      setLoggedInUser({ ...response.data });
      if (checked) {
        localStorage.setItem("loggedInUser", JSON.stringify(response.data));
      } else {
        sessionStorage.setItem("loggedInUser", JSON.stringify(response.data));
      }
      navigate("/random-user");
    } catch (error) {
      console.log(error);
    }
  }

  return logado ? (
    navigate("/random-user")
  ) : (
    <>
      <div className="flex flex-wrap justify-center mt-60">
        <h1 className="font-bold text-2xl">Realizar login</h1>
      </div>
      <div className="flex justify-center mt-5">
        <form className="w-80 p-5 bg-sky-200 rounded-xl">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="username"
              id="username"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={handleChange}
              required
            />
            <label
              htmlFor="username"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Username
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="password"
              name="password"
              id="password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={handleChange}
              required
            />
            <label
              htmlFor="password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Senha
            </label>
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-black-300"
            >
              Lembrar-me
            </label>
          </div>
          <div className="flex justify-center mt-5">
            <button
              type="submit"
              onClick={handleSubmit}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-24"
            >
              Acessar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
