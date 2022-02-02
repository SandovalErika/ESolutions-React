import useFetch from "./useFetch";

const Main = () => {
  const [data] = useFetch("http://localhost:5000/users");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.username}</p>;
        })}
    </>
  );
};

export default Main;

// const Main = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((response) => response.json())
//       .then((json) => setData(json));
//   }, []);

//   return (
//     <>
//       {data &&
//         data.map((item) => {
//           return <p key={item.id}>{item.title}</p>;
//         })}
//     </>
//   );
// };
