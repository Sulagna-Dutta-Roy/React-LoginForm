import React, {useState} from 'react';
import './styles.css';

function App() {
  const [values, setValues] = useState ({
    firstName: "",
    lastName: "",
    email: "",
  });
  
  const [submitted,setSubmitted] = useState (false);
  const [valid, setValid] = useState(false);


  const handleFirstNameInputChange = (event) => {
    setValues({...values, firstName: event.target.value})
  }
  const handleLastNameInputChange = (event) => {
    setValues({...values, lastName: event.target.value})
  }
  const handleEmailInputChange = (event) => {
    setValues({...values, email: event.target.value})
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  }

  return (
    <div class ="form-container">
      <form class="register-form" onSubmit = {handleSubmit}>
      <h1>Login Form</h1>
        {submitted && valid ? <div className="success-message">Successfully Registered</div> : null}
        <input value = {values.firstName} id ="first-name" onChange = {handleFirstNameInputChange}
        className="form-field" placeholder="First Name" name="firstname"/><br/>
        {submitted && !values.firstName ? <span>Please enter a first name</span> : null}

        <input value = {values.lastName} id ="last-name" onChange = {handleLastNameInputChange}
        className="form-field" placeholder="Last Name" name="lastname"/><br/>
        {submitted && !values.lastName ? <span>Please enter a last name</span> : null }

        <input id ="password"
        className="form-field" type="password" placeholder="Password" name="password"/><br/>
        { submitted && !values.email ? <span>Please enter a email</span> :null}
        <input value = {values.email} id ="email" onChange = {handleEmailInputChange}
        className="form-field" placeholder="Email" name="Email"/><br/>

        <button class="form-field" type="submit">
          Register Now
        </button>
      </form>
    </div>
  );
}
export default App;