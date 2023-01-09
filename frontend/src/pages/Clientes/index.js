import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { api } from "../../api/api";
import { ClientCard } from "../../components/ClientCard";
import { Link } from "react-router-dom";
import { Loading } from "../../components/Loading";

export function Clients() {
  const [clients, setClients] = useState();
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    telephone: "",
    address: "",
    cpf: "",
  });

  useEffect(() => {
    async function getClients() {
      try {
        const response = await api.get("client/all-clients");
        setClients(response.data.allClients);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getClients();
  }, [clients]);

  function handleChange(event) {
    event.preventDefault();
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await api.post("/client/create-client", form);
    } catch (error) {
      console.log(error);
    }
  }

  return loading ? (
    <Loading />
  ) : (
    <>
      <Header />
      <div className="flex flex-wrap justify-center mt-5">
        <h1 className="font-bold text-2xl">Cadastrar cliente</h1>
      </div>
      <div className="flex justify-center mb-10">
        <form className="w-96">
          <div className="relative z-0 mb-2">
            <input
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={form.name}
              type="text"
              name="name"
              id="input-name"
              onChange={handleChange}
            />
            <label
              htmlFor="input-name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nome completo
            </label>
          </div>
          <div className="relative z-0 mb-2">
            <input
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              type="email"
              value={form.email}
              id="input-email"
              name="email"
              onChange={handleChange}
            />
            <label
              htmlFor="input-email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>
          <div className="relative z-0 mb-2">
            <input
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              type="tel"
              value={form.telephone}
              id="input-telephone"
              name="telephone"
              onChange={handleChange}
            />
            <label
              htmlFor="input-telephone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Telefone (12345678)
            </label>
          </div>
          <div className="relative z-0 mb-2">
            <input
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              type="text"
              value={form.address}
              id="input-address"
              name="address"
              onChange={handleChange}
            />
            <label
              htmlFor="input-address"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Endereço
            </label>
          </div>
          <div className="relative z-0 mb-2">
            <input
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              type="number"
              value={form.cpf}
              id="input-cpf"
              name="cpf"
              onChange={handleChange}
            />
            <label
              htmlFor="input-cpf"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              CPF (12345678910)
            </label>
          </div>
          <div className="flex justify-center w-30 mt-5">
            <button
              type="submit"
              onClick={handleSubmit}
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-400 dark:focus:ring-green-800"
            >
              Registrar cliente
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-wrap justify-center">
        <h2 className="font-bold text-2xl mb-2">Lista de clientes</h2>
      </div>
      <div className="flex flex-wrap justify-center">
        {clients.map((currentClient) => {
          return (
            <div
              className="border-2 shadow-lg m-2 pt-3"
              key={currentClient._id}
            >
              <ClientCard currentClient={currentClient} />
              <Link
                className="flex justify-center pt-2 pb-4"
                to={`/client/details/${currentClient._id}`}
              >
                <button className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-400 focus:outline-none">
                  Detalhes do cliente
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
