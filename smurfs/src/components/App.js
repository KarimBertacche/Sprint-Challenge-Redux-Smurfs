import React, { Component } from 'react';
import { connect } from 'react-redux';

import Smurf from './Smurf';
import { fetchingSmurfs } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchingSmurfs();
  }
 
  render() {
    return (
      <div>
          <h1>SMURFS! 2.0 W/ Redux</h1>
        <section>
          {
            this.props.smurfs.map(smurf => {
              return  <Smurf 
                        key={smurf.id}
                        id={smurf.id}
                        name={smurf.name}
                        age={smurf.age}
                        height={smurf.height}
                      />
            })
          }
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { fetchingSmurfs })(App);
