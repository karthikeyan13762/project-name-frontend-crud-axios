import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateUser() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    Name: "",
    Email: "",
    Age: "",
  });
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("https://project-name-backend-crud-axios.onrender.com/getUser/" + id)
      .then((res) => setData(res.data));
  }, []);
  //   console.log(data);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put("http://127.0.0.1:3001/updateUser/" + id, data)
      .then((res) => {
        console.log(res);
        setData({
          Name: "",
          Email: "",
          Age: "",
        });
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="w-50 p-3 rounded shadow bg-light">
        <form onSubmit={submitHandler}>
          <h2>Update User</h2>
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="form-control"
              value={data.Name}
              onChange={(e) => setData({ ...data, Name: e.target.value })}
              required
              maxLength={22}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email"
              className="form-control"
              value={data.Email}
              onChange={(e) => setData({ ...data, Email: e.target.value })}
              required
              maxLength={22}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              id="age"
              placeholder="Enter your age"
              className="form-control"
              value={data.Age}
              onChange={(e) => setData({ ...data, Age: e.target.value })}
              required
              maxLength={2}
            />
          </div>
          <div className="mb-2">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
