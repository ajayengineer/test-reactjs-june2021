import React from 'react';
import {Header, Footer, Content} from './components/ComponentsMixing';
import {BrowserRouter as Router} from 'react-router-dom';
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { anotherName, addWish } from './actions/myaction';
import ParentComponent from './ParentComponent';

function App(props) {

  const mywish = props.mywish.map(item=>{
    return <h2 key={Math.random()}>{item}</h2>
  })
  console.log(props)
  return (
      <React.Fragment>
          <Router>
              <Header />
              <ParentComponent />
              <h1>{props.myname}</h1>
              <h3>{mywish}</h3>
              <button onClick={()=>{props.changeName()}}>Change Name</button>
              <button onClick={()=>{props.addWish()}}>Change Wishes</button>
                <Content />
                
              <Footer />
          </Router>
      </React.Fragment>

  );
}

const mapStateToProps = (state)=>{
  return {
    myname:state.name,
    mywish:state.wish
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    changeName:()=>{ dispatch(anotherName()) },
    addWish:()=>{ dispatch(addWish()) }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
