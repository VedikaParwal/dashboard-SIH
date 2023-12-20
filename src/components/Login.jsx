import React from 'react'

const Login = () => {
  return (
    <div className="formbx">
      <h2>Welcome to OMMAS</h2>
      <div className="form">
        <div className="form-content">
          <div className="form-box">
            <label>Full Name</label>
            <input type="text" name="" placeholder="Jhon" />
          </div>
          <div className="form-box">
            <label>Email</label>
            <input type="text" name="" placeholder="email.com" />
          </div>
          <div className="form-box">
            <label>Password</label>
            <input type="password" name="" placeholder="••••••••" />
          </div>
          <div className="form-box" style={{ marginTop: '30px' }}>
            <input type="submit" name="submit" value="Submit" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login