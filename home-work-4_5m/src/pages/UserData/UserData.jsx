import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { updateUser } from "../../store/CreateReducer";

const UserData = () => {
  const [userData, setUserData] = useState({
    name: "",
    surName: "",
    age: 0,
  });

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(userData));
    navigate("/DataPerson");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="ваше имя"
        />
        <input
          onChange={handleChange}
          type="text"
          name="surName"
          placeholder="фамилия"
        />
        <input
          onChange={handleChange}
          type="number"
          name="age"
          placeholder="сколько вам лет"
        />
        <button>send</button>
      </form>
    </div>
  );
};

export default UserData;
