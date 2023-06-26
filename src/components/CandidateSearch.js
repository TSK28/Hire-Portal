import React, { useState } from "react";
import candidatesData from "./data.json";

function CandidateSearch() {
  const [location, setLocation] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [candidates, setCandidates] = useState([]);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    throttleSearch();
  };

  const handleJobRoleChange = (e) => {
    setJobRole(e.target.value);
    throttleSearch();
  };

  const throttleSearch = () => {
    clearTimeout(throttleSearch.timeout);

    throttleSearch.timeout = setTimeout(() => {
      const searchedCandidates = candidatesData.filter((candidate) => {
        const candidateLocation = candidate.location
          ? candidate.location.toLowerCase()
          : "";
        const candidateJobRole = candidate.job_role
          ? candidate.job_role.toLowerCase()
          : "";

        return (
          candidateLocation.includes(location.toLowerCase()) &&
          candidateJobRole.includes(jobRole.toLowerCase())
        );
      });

      setCandidates(searchedCandidates);
    }, 300);
  };

  return (
    <section id="csearch">
      <div>
        <h2>Candidate Search</h2>

        <div className="Candidate-Search-input">
          <label>Location:</label>
          <input
            type="text"
            className="Candidate-Search-input-val"
            value={location}
            onChange={handleLocationChange}
          />
        </div>

        <div className="Candidate-Search-input">
          <label>Job Role:</label>
          <input
            type="text"
            className="Candidate-Search-input-val"
            value={jobRole}
            onChange={handleJobRoleChange}
          />
        </div>

        <h3>Search Results</h3>
        {candidates.length === 0 ? (
          <p>No candidates found</p>
        ) : (
          <table className="candidate-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Location</th>
                <th>Job Role</th>
                <th>Skill</th>
                <th>Experience</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((candidate) => (
                <tr key={candidate.email}>
                  <td>{candidate.name}</td>
                  <td>{candidate.email}</td>
                  <td>{candidate.location}</td>
                  <td>{candidate.job_role}</td>
                  <td>{candidate.skills}</td>
                  <td>{candidate.experience}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}

export default CandidateSearch;
