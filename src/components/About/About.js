import React from "react";

function About() {
  return (
    <div className="conatainer">
      <br />
      <div className="container shadow rounded border">
        <br />
        <h1>Cars Application</h1>
        <div className="conatiner-md text-align-center">
          <br />
          <p>
            This application is a full PERN application with a POSTgres backend
            server and react frontend. API routes are handled by express, with
            middleware and the styling of the frontend page is made using
            Bootstrap.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
