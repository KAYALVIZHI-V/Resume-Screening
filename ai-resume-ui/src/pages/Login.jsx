import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../css/Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const { data } = await axios.post(
      "http://localhost:5000/api/auth/login",
      { email, password }
    );

    // Save token correctly
    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.role);

    alert("Login Successful 🎉");
    navigate("/dashboard");

  } catch (error) {
    alert(error.response?.data?.message || "Login Failed");
  }
};

   return (
     <div className="login-container">
      <div className="login-card">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
      <p>
  Don't have an account? <span onClick={() => navigate("/register")}>Register</span>
    </p>
    </div>
    </div>
  );
  

};

export default Login;