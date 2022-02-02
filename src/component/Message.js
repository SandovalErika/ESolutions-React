import useFetch from "./useFetch";

const Message = () => {
  const [data] = useFetch("http://localhost:5000/messages");

  return (
    <>
      {data &&
        data.map((item) => {
          return (
            <li className="users" key={item.id}>
              {item.text}
            </li>
          );
        })}
    </>
  );
};

export default Message;
