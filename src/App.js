import axios from "axios";
import React, { useState } from "react";

function App() {
     const [email, setEmail] = useState("mistryaksh1998@gmail.com");
     const [password, setPassword] = useState("abc123");

     const [success, setSuccess] = useState("");
     const [error, setError] = useState("");

     const sendingLoginRequest = async () => {
          try {
               console.log("data", { email, password });
               const userCredentials = { email, password };
               const data = await axios.post("http://localhost:8080", userCredentials);
               setSuccess(data.data.message);
               setError("");
               return data.data;
          } catch (err) {
               if (err.response) {
                    setError(err.response.data.message);
                    setSuccess("");
               } else {
                    setError(err.message);
                    setSuccess("");
               }
          }
     };

     return (
          <div className="container">
               <div style={{ width: "40%", padding: 10, margin: "auto" }}>
                    <input
                         type="email"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         name="email"
                         placeholder="Enter email address"
                    />
                    <br />
                    <br />
                    <input
                         type="password"
                         value={password}
                         onChange={(e) => setPassword(e.target.value)}
                         name="password"
                         placeholder="Enter your password"
                    />
                    <br />
                    <br />
                    <p className="success">{success && success}</p>
                    <p className="error">{error && error}</p>
                    <button onClick={sendingLoginRequest} type="submit">
                         Login
                    </button>
               </div>
          </div>
     );
}

export default App;
