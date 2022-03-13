import { FormRow, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const AddJob = () => {
  const {
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    statusOpetions,
    isEditing,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!jobLocation || !position || !company) {
      displayAlert();
      return;
    }
    console.log("create job");
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name} : ${value}`);
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit job" : "add job"}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          <FormRow
            type="text"
            name="jobLocation"
            labelText="job location"
            value={jobLocation}
            handleChange={handleJobInput}
          />
          <div className="btn-container">
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-block submit-btn"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
