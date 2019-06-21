import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import SmurfsForm from './SmurfsForm';
import Smurf from './Smurf';
import { fetchingSmurfs, addSmurf, deleteSmurf, updateSmurf  } from '../actions';
import backgroundImg from '../smurfsBackground.jpg';

const StylesApp = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundImg});
  background-position: cover;
  background-size: cover;

  header {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    background: red;
    border-bottom-right-radius: 30px;
    overflow: hidden;
  }
`;

class App extends Component {
  state = {
    name: '',
    age: '',
    height: '',
  }

  componentDidMount() {
    this.props.fetchingSmurfs();
  }

  inputChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  addSmurfHandler = () => {
    this.props.addSmurf({
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    });

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  updateSmurfHandler = () => {
    this.props.updateSmurf()
  }

  deleteSmurfHandler = (id) => {
    this.props.deleteSmurf(id) 
  }
 
  render() {
    return (
      <StylesApp>
        <header>
          <SmurfsForm 
            name={this.state.name}
            age={this.state.age}
            height={this.state.height}
            inputChangeHandler={this.inputChangeHandler}
            addSmurfHandler={this.addSmurfHandler}
          />
        </header>
        <section>
          {
            this.props.smurfs.map(smurf => {
              return  <Smurf 
                        key={smurf.id}
                        id={smurf.id}
                        name={smurf.name}
                        age={smurf.age}
                        height={smurf.height}
                        updateSmurfHandler={this.updateSmurfHandler}
                        deleteSmurfHandler={this.deleteSmurfHandler}
                      />
            })
          }
        </section>
      </StylesApp>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { fetchingSmurfs, addSmurf, deleteSmurf, updateSmurf })(App);
