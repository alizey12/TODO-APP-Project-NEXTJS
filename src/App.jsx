import { useState, useEffect } from "react";
import {getTodo} from "./utils/api";
// Utility function to fetch todos

function App() {
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTodo();
        setTodo(data); // Update state with fetched todos
      } catch (error) {
        console.error("Error in fetching todos:", error);
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="Main">
      <h1 className="bg-black text-white text-xlg font-bold text-center p-5 border">
        My To-Do App
      </h1>
      {todo.length > 0 ? (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Id</th>
                <th scope="col" className="px-6 py-3">Title</th>
                <th scope="col" className="px-6 py-3">Completed</th>
              </tr>
            </thead>
            <tbody>
              {todo.map((item) => (
                <tr
                  key={item.id}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.id}
                  </td>
                  <td className="px-6 py-4">{item.title}</td>
                  <td className="px-6 py-4">
                    {item.completed ? "Completed" : "Not Completed"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h2>No Todos Found</h2>
      )}
    </div>
  );
}

export default App;
