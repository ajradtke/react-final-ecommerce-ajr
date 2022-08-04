import React, {useContext} from "react";
import CartContext from "./CartContext";
import {Link} from 'react-router-dom';

const CheckoutForm = () => {

    const {items} = useContext(CartContext);
    const {setItems} = useContext(CartContext);

  const submitForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const inputObject = Object.fromEntries(formData);
    

    console.log(inputObject);
  };

  return (
    <div className="App">
      <form onSubmit={submitForm}>

        <div>
          <input id="nameField" name="fullName" placeholder="Full Name" />
        </div>

        <div>
          <input id="emailField"  name="email" placeholder="email" />
        </div>

        <div>
          <input id="passwordField" name="password" placeholder="password" />
        </div>

        <div>
          <input id="phoneField" name="phone" placeholder="phone" />
        </div>

        <br />

        <Link to='/products'><button type="submit" onClick={() => {
            setItems([]);
        }}>Submit</button></Link>
      </form>
    </div>
  );
}

export default CheckoutForm;