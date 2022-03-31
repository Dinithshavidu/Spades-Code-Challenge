import React, {useState} from 'react';
// import Router from 'next/router';

// import {useNavigate} from 'react-router-dom';


 

const Login = () => {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  // const navigate = useNavigate();

  function handleSubmit(e) {
    // e.preventDefault();
    //  axios
    // .get(`http://localhost:4000/auth/${email}/${password}`)
    // .then(res => {
    //   if(res.data.isAuth){
    //       console.log("Authenticated");
    //       // eslint-disable-next-line no-restricted-globals
    //       history.push("/");   
    //   }
    //   else {
    //     console.log("Not Authenticated");
    //      history.push("/login");
    //   }
    //  }); 
     
     
     if((email === "dinith@gmail.com") && (password === "1234")) {
       console.log("Logged");
      alert("Login Successfull");
      window.location.href = "www.goole.com";
     }else {
      console.log("Failed");
      alert("Login Failed");
     }
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Login</p>
      <input
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" value="Submit" />
      <p></p>
    </form>
   
  );
};

export default Login;