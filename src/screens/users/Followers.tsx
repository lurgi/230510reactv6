import { useOutletContext } from "react-router-dom";

interface IOutletContext {
  nameOfMyUser: string;
}

function Followers() {
  const { nameOfMyUser } = useOutletContext<IOutletContext>();
  return <h1>{nameOfMyUser}의 followers</h1>;
}
export default Followers;
