export async function getTodo() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Fetched todos:", data); // Log the fetched data
    return data; // Return the todos array
  } catch (error) {
    console.error("Error fetching todos:", error.message);
    return []; // Return an empty array in case of an error
  }
}
