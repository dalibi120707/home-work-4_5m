import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const UserList = () => {
  const userName = useSelector((state) => state.name);
  const userSurName = useSelector((state) => state.surName);
  const userAge = useSelector((state) => state.age);

  return (
    <div>
      <div>
        <p>ваше мя: {userName}</p>
        <p>Фамилия: {userSurName}</p>
        <p>сколько вам лет: {userAge}</p>
      </div>
      <Link to={"/"}>
        <button>back</button>
      </Link>
    </div>
  );
};

export default UserList;
