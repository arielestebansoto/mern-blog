import "./styles.css";

import { Sidebar } from "../../components/Sidebar";
import { SinglePost } from "../../components/SinglePost";

export const Single = () => {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}