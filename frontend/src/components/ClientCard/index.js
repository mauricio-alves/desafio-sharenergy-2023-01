export function ClientCard({ currentClient }) {
  return (
    <div className="rounded flex justify-center w-96">
      <div className="rounded flex-col">
        <div className="text-xl">
          <p>
            <span className="font-bold"> Nome: </span>
            {currentClient.name}
          </p>
          <p>
            <span className="font-bold"> Email: </span>
            {currentClient.email}
          </p>
          <p>
            <span className="font-bold"> Telefone: </span>
            {currentClient.telephone}
          </p>
          <p>
            <span className="font-bold"> Endereço: </span>
            {currentClient.address}
          </p>
          <p>
            <span className="font-bold"> CPF: </span>
            {currentClient.cpf}
          </p>
        </div>
      </div>
    </div>
  );
}
