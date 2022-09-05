const baseUrl = "https://63108e8e36e6a2a04ef150ba.mockapi.io/todos";

const getTodos = async () => {
  try {
    let data = await (await fetch(baseUrl)).json();
    return data;
  } catch (er) {
    console.log(er?.message);
  }
};

const deleteTodos = async (id) => {
  try {
    let data = await (
      await fetch(baseUrl + `/${id}`, {
        method: "DELETE",
      })
    ).json();
    return data;
  } catch (er) {
    console.log(er?.message);
  }
};

const addTodos = async (payload) => {
  try {
    let data = await (
      await fetch(baseUrl, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(payload),
      })
    ).json();
    return data;
  } catch (er) {
    console.log(er?.message);
  }
};

const updateTodo = async (payload, id) => {
  try {
    let data = await (
      await fetch(baseUrl + `/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(payload),
      })
    ).json();
    return data;
  } catch (er) {
    console.log(er?.message);
  }
};

export { getTodos, deleteTodos, addTodos, updateTodo };
