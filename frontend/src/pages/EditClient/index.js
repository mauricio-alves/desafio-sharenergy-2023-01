import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../api/api";

export function EditClient() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    telephone: "",
    address: "",
    cpf: "",
  });

  useEffect(() => {
    async function getClientDetails() {
      try {
        const response = await api.get(`/client/details/${id}`);
        setForm(response.data.client);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getClientDetails();
  }, [id]);

  function handleChange(event) {
    event.preventDefault();
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await api.patch(`client/edit/${id}`, form);
      navigate("/clients");
    } catch (error) {
      console.log(error);
    }
  }

  return loading ? (
    <div>Carregando...</div>
  ) : (
    <>
      <Header />
      <div className="flex flex-wrap justify-center mt-5">
        <h1 className="font-bold text-2xl">Atualizar dados cadastrais</h1>
      </div>
      <div className="flex justify-center mt-5">
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
              Atualizar dados
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
