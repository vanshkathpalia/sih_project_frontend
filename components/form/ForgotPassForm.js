import React from "react";
import { SyncOutlined } from "@ant-design/icons";
const ForgotPasswordForm = ({
  handleSubmit,
  email,
  setemail,
  newPassword,
  setNewPassword,
  secret,
  setsecret,
  loading,
  page,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="form-group my-2">
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
            className="form-control"
            id="exampleInputmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group my-2">
          <input
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="New Password"
          />
        </div>

        <>
          <div className="form-group my-2">
            <select
              className="form-control"
              aria-label="Default select example"
            >
              <option>Pick a questions</option>
              <option>Where you born?</option>
              <option>What is your nick name?</option>
              <option>What is your favorite color?</option>
            </select>
          </div>
          <div className="form-group my-2">
            <input
              value={secret}
              onChange={(e) => setsecret(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Write your answer"
            />
          </div>
        </>

        <div className="text-center">
          <button
            disabled={!email || !newPassword || !secret || loading}
            type="submit"
            className="btn btn-primary col-12 my-2 "
          >
            {loading ? <SyncOutlined spin className="py-1" /> : "Submit"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
