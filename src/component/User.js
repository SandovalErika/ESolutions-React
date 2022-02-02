import useFetch from "./useFetch";

const User = () => {
  const [data] = useFetch("http://localhost:5000/users");

  return (
    <>
      {data &&
        data.map((item) => {
          return (
            <li className="users" key={item.id}>
              {item.username}
            </li>
          );
        })}
    </>
  );
};

export default User;
