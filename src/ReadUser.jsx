import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ReadUser() {
  //   const navigate = useNavigate();
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("https://project-name-backend-crud-axios.onrender.com/getUser/" + id)
      .then((res) => setData(res.data));
  }, [data]);
  //   console.log(data);
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="w-50 p-3 rounded shadow bg-light table-responsive ">
        <h3 className="text-center">Read User</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.Name}</td>
              <td>{data.Email}</td>
              <td>{data.Age}</td>
            </tr>
          </tbody>
        </table>
        <div>
          <Link to={"/"} className="btn btn-primary">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ReadUser;
