import React, { useState } from "react";
import axios from "axios"; 

function AddSession() {
  const initialValues = {
    title: "",
    description: "",
    time: "",
    price: "",
  };

  const [addValues, setAddValues] = useState(initialValues);
  const [fileData, setFileData] = useState();
  const [success, setSuccess] = useState(false);
  

  function onChange(e) {
    setAddValues({ ...addValues, [e.target.name]: e.target.value });
    console.log(addValues)
  }

  function onSubmit(e) {
    e.preventDefault();

    axios.post("https://localhost:1337/api:products", {
      title: addValues.title,
      description: addValues.description,
      time: addValues.time,
      price: addValues.price,

    }).then((res) => {

      console.log(res.data)

      const data = new FormData();

      data.append("files", fileData)
      data.append("ref", "product")
      data.append("refId", res.data.id)
      data.append("field", "img")

      axios.post("http://localhost:1337/api/product", data)
        .then((image) => console.log(image))
        .catch((error) => console.log(error))

    }).catch((err) => {
      console.log(err)

    })
    setSuccess(true)
    
  }

  function onChangeImg(e) {
    setFileData(e.target.files[0])
  }

  return (
    <>
      {/* som admin ska man kunna lägga till sessions, som
        hamnar på sessions sidan. Bara Malin ska kunna göra det här.*/}
      <div className="min-h-screen flex items-center justify-center py-10 px-6 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <h1 className="justify-center font-bold text-3xl">
            Add new sessions/products
          </h1>
          <form method="post" className="mt-8 space-y-6" onSubmit={onSubmit}>
            <div>
              <label for="titel" className="sr-only">
              Title
              </label>
              <input
                id="titel"
                value={addValues.name}
                onChange={onChange}
                name="titel"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name"
              />
            </div>

            <div>
              <label for="description" className="sr-only">
                Description
              </label>
              <input
                id="description"
                value={addValues.description}
                onChange={onChange}
                name="description"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Description"
              />
            </div>

            <div>
              <label for="time" className="sr-only">
                Time
              </label>
              <input
                id="time"
                value={addValues.time}
                onChange={onChange}
                name="time"
                type="number"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Time"
              />
            </div>

            <div>
              <label for="price" className="sr-only">
                Price
              </label>
              <input
                id="price"
                value={addValues.price}
                onChange={onChange}
                name="price"
                type="number"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Price"
              />
            </div>

            <input type="file" name="file" id="" onChange={onChangeImg} />

            <button
              type="submit"
              class="group relative w-full flex justify-center border border-transparent text-gray-800 px-4 py-3 bg-gray-300 rounded hover:bg-gray-800 hover:text-white transition duration-200 mt-12"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Add session
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddSession;
