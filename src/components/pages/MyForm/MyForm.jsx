import "./myForm.css";
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state)=>{
  return {users : state.users};
}

const mapDispatchToProps = ()=>({
  addNewUser : (userObj)=> dispatch(addUser(userObj))
})
function MyForm() {
  return (
    <div className="my-form">
      <h1>MyForm</h1>
    </div>
  );
};

export default connect(mapStateToProps,mapDispatchToProps)(MyForm);
