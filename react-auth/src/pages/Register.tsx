import React from "react";
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState('');
  return (
    <form>
      <h1 className="h3 mb-3 fw-normal">Please register</h1>
      <input
        className="form-control"
        placeholder="Name"
        required
      />
      <input
        type="email"
        className="form-control"
        placeholder="name@example.com"
        required
      />
      <input
        type="password"
        className="form-control"
        id="floatingPassword"
        placeholder="Password"
        required
      />
      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Register;
