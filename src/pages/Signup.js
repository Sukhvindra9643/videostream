import React, { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  const auth = getAuth();
const Signup = ()=>{
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const handleSubmit = ()=>{
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage)
  });
  }

  return (
    <div>
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=> setEmail(e.target.value)}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e)=> setPassword(e.target.value)}/>
  </div>
  <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
    </div>
    )
}

export default Signup;
