import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function User() {
  //   const [users, setUsers] = useState([
  //     {
  //       Name: "karthi",
  //       Email: "karthi@gmail.com",
  //       Age: 25,
  //     },
  //     {
  //       Name: "kanan",
  //       Email: "kanan@gmail.com",
  //       Age: 28,
  //     },
  //     {
  //       Name: "kamal",
  //       Email: "kamal@gmail.com",
  //       Age: 22,
  //     },
  //   ]);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://project-name-backend-crud-axios.onrender.com/users")
      .then((res) => setUsers(res.data));
  }, [users]);

  const deleteUser = (id) => {
    axios
      .delete(
        "https://project-name-backend-crud-axios.onrender.com/deleteUser/" + id
      )
      .then(() => {
        // console.log("deleted successfully");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-primary">
      <div className="w-50 bg-white rounded shadow p-3 text-center table-striped table-responsive">
        <div className="d-flex justify-content-start">
          <Link className=" btn btn-success mb-2" to={"/create"}>
            Create+
          </Link>
        </div>
        <table className="table table-striped shadow rounded">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((value, index) => (
              <tr key={index}>
                <td>{value.Name}</td>
                <td>{value.Email}</td>
                <td>{value.Age}</td>
                <td>
                  <div className="d-flex justify-content-center">
                    <Link
                      className=" btn btn-success  ms-3"
                      to={`/getUser/${value._id}`}
                    >
                      Read
                    </Link>
                    <Link
                      className=" btn btn-primary  ms-3"
                      to={`/update/${value._id}`}
                    >
                      Update
                    </Link>
                    <button
                      className="btn  btn-sm btn-danger ms-3"
                      onClick={() => deleteUser(value._id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;
