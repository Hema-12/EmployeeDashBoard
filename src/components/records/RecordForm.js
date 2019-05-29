import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import DatePick from "../common/DatePicker"

const RecordForm = ({
  record,
  depts,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{record.id ? "Edit" : "Add"} record</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="name"
        label="Employee Name"
        value={record.name}
        onChange={onChange}
        error={errors.name}
      />
      <TextInput
        name="manager"
        label="Manager"
        value={record.manager}
        onChange={onChange}
        error={errors.manager}
      />

      <DatePick 
        name = "doj"
        label="Date of Joining"
        value={record.doj}
        onChange={onChange} 
        className="form-control"
        error={errors.dob}
      />

      <SelectInput
        name="deptId"
        label="Dept"
        value={record.deptId || ""}
        defaultOption="Select Department"
        options={depts.map(dept => ({
          value: dept.id,
          text: dept.name
        }))}
        onChange={onChange}
        error={errors.dept}
      />

      <TextInput
        name="phno"
        label="Phone Number"
        value={record.phno}
        onChange={onChange}
        error={errors.phno}
      />

      <DatePick 
        name = "dob"
        label="Date of Birth"
        value={record.dob}
        onChange={onChange} 
        className="form-control"
        error={errors.dob}
      />

      <TextInput
        name="salary"
        label="Salary"
        value={record.salary}
        onChange={onChange}
        error={errors.salary}
      />

      <TextInput
        name="nationality"
        label="Nationality"
        value={record.nationality}
        onChange={onChange}
        error={errors.nationality}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

RecordForm.propTypes = {
  depts: PropTypes.array.isRequired,
  record: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default RecordForm;
