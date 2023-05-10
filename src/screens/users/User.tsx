import { Link, Outlet, useOutletContext, useParams } from "react-router-dom";
import { users } from "../../db";

function User() {
  const { userId } = useParams();
  return (
    <div>
      <h1>user name is {users[+userId! - 1].name}</h1>
      <Link to="followers">See followers</Link>
      <Outlet
        context={{
          nameOfMyUser: users[+userId! - 1].name,
        }}
      />
    </div>
  );
}
export default User;
