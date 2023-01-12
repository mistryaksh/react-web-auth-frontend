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
               const data = await axios.post("https://13.234.21.54:8080/", userCredentials);
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
               <div style={{ width: "40%", borderRadius: "5px", padding: "20px", background: "#d0d0d0" }}>
                    <div>
                         <label htmlFor="email">Email :</label>
                         <input
                              type="email"
                              placeholder="Enter your email address"
                              style={{ width: "100%" }}
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                         />
                    </div>
                    <div className="mt-10">
                         <label htmlFor="password">Password :</label>
                         <input
                              type="password"
                              placeholder="Enter your password"
                              style={{ width: "100%" }}
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                         />
                    </div>
                    <div className="mt-10">
                         {error && <p className="error">{error}</p>}
                         {success && <p className="success">{success}</p>}
                    </div>
                    <div className="mt-10">
                         <button type="submit" onClick={sendingLoginRequest}>
                              Submit
                         </button>
                    </div>
               </div>
          </div>
     );
}

export default App;
