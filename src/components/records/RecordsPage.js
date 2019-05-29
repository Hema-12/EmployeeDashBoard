import React from "react";
import { connect } from "react-redux";
import * as recordActions from "../../redux/actions/recordActions";
import * as deptActions from "../../redux/actions/deptActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import RecordList from "./RecordList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

class RecordsPage extends React.Component {
  state = {
    redirectToAddrecordPage: false
  };

  componentDidMount() {
    const { records, depts, actions } = this.props;

    if (records.length === 0) {
      actions.loadRecords().catch(error => {
        alert("Loading records failed" + error);
      });
    }

    if (depts.length === 0) {
      actions.loadDepts().catch(error => {
        alert("Loading depts failed" + error);
      });
    }
  }

  handleDeleteRecord = async record => {
    toast.success("Record deleted");
    try {
      await this.props.actions.deleteRecord(record);
    } catch (error) {
      toast.error("Delete failed. " + error.message, { autoClose: false });
    }
  };

  render() {
    return (
      <>
        
        {this.state.redirectToAddRecordPage && <Redirect to="/record" />}
        <h3>Employee Records</h3>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <RecordList
              onDeleteClick={this.handleDeleteRecord}
              records={this.props.records}
            />

            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-record"
              onClick={() => this.setState({ redirectToAddRecordPage: true })}
            >
              Add Record
            </button>
          </>
        )}
      </>
    );
  }
}

RecordsPage.propTypes = {
  depts: PropTypes.array.isRequired,
  records: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    records:
      state.depts.length === 0
        ? []
        : state.records.map(record => {
            return {
              ...record,
              deptName: state.depts.find(a => a.id === record.deptId).name
            };
          }),
    depts: state.depts,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadRecords: bindActionCreators(recordActions.loadRecords, dispatch),
      loadDepts: bindActionCreators(deptActions.loadDepts, dispatch),
      deleteRecord: bindActionCreators(recordActions.deleteRecord, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecordsPage);
