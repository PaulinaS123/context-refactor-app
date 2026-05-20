import { useContext } from "react";
import { UserContext } from "../UserContext";

function UserProfile() {
  const { user } = useContext(UserContext);

  return (
    <div className="profile-card">
      <h2>User Profile</h2>

      <p>
        <strong>Name:</strong> {user.name}
      </p>

      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <p>
        <strong>Theme:</strong> {user.themePreference}
      </p>
    </div>
  );
}

export default UserProfile;
