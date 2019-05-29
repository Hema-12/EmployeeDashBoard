import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const recordList = ({ records, onDeleteClick }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Employee Id</th>
        <th>Employee Name</th>
        <th>Manager</th>
        <th>Date of Joining</th>
        <th>Department</th>
        <th>Phone Number</th>
        <th>Date of Birth</th>
        <th>Salary</th>
        <th>Nationality</th>
        <th>Delete</th>
        <th>Edit</th>
      </tr>
    </thead>
    <tbody>
      {records.map(record => {
        return (
          <tr key={record.id}>
            <td>{record.id}</td>
            <td>{record.name}</td>
            <td>{record.manager}</td>
            <td>{record.doj}</td>
            <td>{record.deptName}</td>
            <td>{record.phno}</td>
            <td>{record.dob}</td>
            <td>{record.salary}</td>
            <td>{record.nationality}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteClick(record)}
              >
                Delete
              </button>
            </td>
            <td>
            <button
                className="btn btn-outline-danger">
                <Link to={"/record/" + record.slug}>Edit</Link>
            </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

recordList.propTypes = {
  records: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default recordList;
