import React from "react";
import { useParams } from "react-router-dom";
function ShowPage() {
  const { id } = useParams();
  return (
    <div className="card" style={{ width: "18rem" }}>
      ShowPage
    </div>
  );
}

export default ShowPage;
