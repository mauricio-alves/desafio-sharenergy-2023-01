import { useEffect } from "react";
import { api } from "../../api/api";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ClientCard } from "../../components/ClientCard";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";

export function ClientDetails() {
  const [client, setClient] = useState();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function getClientDetails() {
      try {
        const response = await api.get(`/client/details/${id}`);
        setClient(response.data.client);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getClientDetails();
  }, [id]);

  async function handleDelete() {
    try {
      await api.delete(`client/delete/${id}`);
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
      <div className="flex justify-center m-10">
        <div>
          <div className="flex flex-wrap justify-center mb-5">
            <h1 className="font-bold text-2xl">Detalhes do cliente</h1>
          </div>
          <ClientCard currentClient={client} />
          <div className="flex justify-center mt-5">
            <Link className="mr-10" to={`/client/edit/${id}`}>
              <button className="text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-400 focus:outline-none">
                Editar cliente
              </button>
            </Link>
            <button
              className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-400 focus:outline-none"
              onClick={handleDelete}
            >
              Deletar cliente
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
