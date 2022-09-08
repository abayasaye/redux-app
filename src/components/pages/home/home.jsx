import "./home.css";
import React from "react";
import { connect } from "react-redux";


const mapStateToProps = (state)=>{
  return {users : state.users}
}

const mapDispatchToProps = (dispatch)=>({
  addNewUser : ()=> dispatch(adduser(userObj)),
})
function Home() {
  return (
    <div className="home">
      <h1>home-component</h1>
    </div>
  );
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);
