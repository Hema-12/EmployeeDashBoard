import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadRecords, saveRecord } from "../../redux/actions/recordActions";
import { loadDepts } from "../../redux/actions/deptActions";
import PropTypes from "prop-types";
import RecordForm from "./RecordForm";
import { newRecord } from "../../../tools/mockData";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

export function ManageRecordPage({
  records,
  depts,
  loadDepts,
  loadRecords,
  saveRecord,
  history,
  ...props
}) {
  const [record, setRecord] = useState({ ...props.record });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (records.length === 0) {
      loadRecords().catch(error => {
        alert("Loading records failed" + error);
      });
    } else {
      setRecord({ ...props.record });
    }

    if (depts.length === 0) {
      loadDepts().catch(error => {
        alert("Loading depts failed" + error);
      });
    }
  }, [props.record]);

  function handleChange(event) {
    const { name, value } = event.target;
    setRecord(prevRecord => ({
      ...prevRecord,
      [name]: name === "deptId" ? parseInt(value, 10) : value
    }));
  }

  // function handledate(){
    
  // }

  function formIsValid() {
    const { name, deptId, nationality } = record;
    const errors = {};

    if (!name) errors.name = "name is required.";
    if (!deptId) errors.dept = "Dept is required";
    if (!nationality) errors.nationality = "nationality is required";

    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    saveRecord(record)
      .then(() => {
        toast.success("Record saved.");
        history.push("/");
      })
      .catch(error => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  return depts.length === 0 || records.length === 0 ? (
    <Spinner />
  ) : (
    <RecordForm
      record={record}
      errors={errors}
      depts={depts}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
      //handledate = {handledate}
    />
  );
}

ManageRecordPage.propTypes = {
  record: PropTypes.object.isRequired,
  depts: PropTypes.array.isRequired,
  records: PropTypes.array.isRequired,
  loadRecords: PropTypes.func.isRequired,
  loadDepts: PropTypes.func.isRequired,
  saveRecord: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export function getRecordBySlug(records, slug) {
  return records.find(record => record.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const record =
    slug && state.records.length > 0
      ? getRecordBySlug(state.records, slug)
      : newRecord;
  return {
    record,
    records: state.records,
    depts: state.depts
  };
}

const mapDispatchToProps = {
  loadRecords,
  loadDepts,
  saveRecord
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageRecordPage);
