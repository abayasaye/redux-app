import "./myForm.css";
import React, { useState } from "react";
import { connect } from "react-redux";
import { addUser } from "../../../store/actions/user-action";

const mapStateToProps = (state) => {
  return { users: state.users };
};

const mapDispatchToProps = (dispatch) => ({
  addNewUser: (userObj) => dispatch(addUser(userObj)),
});

function MyForm(props) {
  const [user, setUser] = useState({});
  const changeInput = (e) => {user[e.target.name] = e.target.value};

  return (
    <div className="my-form">
      <h1>MyForm</h1>
      <label htmlFor="">first-name</label>
      <input defaultValue={user.fName} onChange={changeInput} name="fName" type="text" /><br />
      <label htmlFor="">last-name</label>
      <input defaultValue={user.lName} onChange={changeInput} name="lName" type="text" /><br />
      <label htmlFor="">age</label>
      <input defaultValue={user.age} onChange={changeInput} name="age" type="number" /><br />
      <label htmlFor="">email</label>
      <input defaultValue={user.email} onChange={changeInput} name="email" type="email" /><br />
      <button onClick={() => props.addNewUser(user)}>CLICK</button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MyForm);
