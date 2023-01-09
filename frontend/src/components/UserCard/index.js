export function UserCard({ currentUser }) {
  return (
    <div className="rounded px-8 pb-8 flex justify-center w-96 border-2 m-2 shadow-lg">
      <div className="rounded flex-col">
        <div className="flex justify-center">
          <img
            src={currentUser.picture.large}
            alt="user avatar"
            className="rounded-full"
          />
        </div>
        <div className="px-6">
          <div className="text-xl mb-2">
            <p>
              <span className="font-bold"> Nome: </span>
              {currentUser.name.first} {currentUser.name.last}
            </p>
            <p>
              <span className="font-bold"> Email: </span>
              {currentUser.email}
            </p>
            <p>
              <span className="font-bold"> Username: </span>
              {currentUser.login.username}
            </p>
            <p>
              <span className="font-bold"> Idade: </span>
              {currentUser.dob.age}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
