import "./myForm.css";
import React, { useState } from "react";
import { connect } from "react-redux";
import { createUserAction } from "../../../store/actions/user-action";

const mapStateToProps = (state)=>{
  return {users : state.users};
}

const mapDispatchToProps = ()=>({
  addNewUser : (userObj)=> dispatch(createUserAction(userObj))
})
const changeInput = (e)=>{
  user[e.target.value] = e.target.value;
};

function MyForm(props) {
const [user , setUser] =useState()
  return (
    <div className="my-form">
      <h1>MyForm</h1>
      <label htmlFor="">first-name</label>
    <input name="fName" type="text" />
    <button onClick={changeInput}>CLICK</button>
    </div>
  );
};

export default connect(mapStateToProps,mapDispatchToProps)(MyForm);
