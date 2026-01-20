"use client";

import "./auth-pages.css";

function ResetPasswordPage() {
  return (
    <div className="authPage">
      <div className="authCard">
        <h1 className="authTitle">Reset Password</h1>
        <p className="authSubtitle">Enter your new password</p>
        
        <form>
          <div className="authField">
            <input
              className="authInput"
              type="password"
              placeholder="New Password"
            />
          </div>
          
          <div className="authField">
            <input
              className="authInput"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          
          <button className="authButton" type="submit">
            Reset Password
          </button>
        </form>
        
        <div className="authBottomLinkWrap">
          <a className="authBottomLink" href="/signin">
            Back to Sign In
          </a>
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordPage;