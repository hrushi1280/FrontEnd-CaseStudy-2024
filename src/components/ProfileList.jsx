import React, { useState, useEffect } from "react";

function ProfileList() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/profiles")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        if (!response.headers.get("content-type").includes("application/json")) {
          throw new Error("Invalid content-type, expected application/json");
        }
        return response.json();
      })
      .then((data) => {
        setProfiles(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (profiles.length === 0) return <div>No profiles available</div>;

  return (
    <div>
      <h2>Profile List</h2>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            <h3>{profile.name}</h3>
            <p>{profile.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileList;
