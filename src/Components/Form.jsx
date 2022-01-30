import React from "react";
import './../css/form.css';

const Form = (props) => {
  return (
    <form className="form" onSubmit={props.getData}>
      <input className="form__input" type="text" name="city" placeholder="Another location" />
      <button className="form__btn" type="submit">
        <img className="form__img" width='22px' 
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Search_Icon.svg"
          alt="find"
        />
      </button>
    </form>
  );
};

export default Form;
