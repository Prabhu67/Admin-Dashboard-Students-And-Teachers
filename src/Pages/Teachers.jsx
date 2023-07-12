import axios from "axios";
import React, { useEffect } from "react";
import Footer from "../Components/Footer";

const Teachers = ({
  inactive,
  toggleoff,
  teacherData,
  setTeacherData,
  teacherHandleSelected,
}) => {
  const getTeacherData = async () => {
    try {
      const resp = await axios.get(
        "https://63fca9d9677c41587310eaca.mockapi.io/teachers"
      );

      setTeacherData(resp.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const resp = await axios.delete(
        `https://63fca9d9677c41587310eaca.mockapi.io/teachers/${id}`
      );

      setTeacherData(teacherData.filter((row) => row.id !== id));
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  useEffect(() => {
    getTeacherData();
  });
  return (
    <div>
      <div
        className={`content ${inactive ? "inactive" : ""} ${
          toggleoff ? "toggleoff" : ""
        }`}
      >
        <div className="container">
          <h1>List of Teachers</h1>
          <p>
            At Elakkiya, we believe that our teaching staff is the key to
            providing high-quality educational services to our students. We are
            proud of our team of experienced educators and industry experts, who
            are passionate about their fields and dedicated to helping our
            students achieve their goals.Our selection process for instructors
            is rigorous and thorough, ensuring that we only hire the best and
            most qualified individuals. Our instructors have years of experience
            in their respective fields and are skilled at delivering engaging
            and effective instruction.
          </p>

          <div className="table-responsive">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Joining Date</th>
                  <th scope="col">PhoneNumber</th>
                  <th scope="col">Batch Assigned</th>
                  <th scope="col">Edit/Delete</th>
                </tr>
              </thead>
              <tbody>
                {teacherData.map((row) => (
                  <tr key={row.id}>
                    <th>{row.id}</th>
                    <td>{row.FirstName}</td>
                    <td>{row.LastName}</td>
                    <td>{row.JoiningDate}</td>
                    <td>{row.PhoneNumber}</td>
                    <td>{row.BatchAssigned}</td>
                    <td>
                      <button
                        className="btn btn-primary mx-1"
                        onClick={(e) => teacherHandleSelected(row.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={(e) => handleDelete(row.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Teachers;
