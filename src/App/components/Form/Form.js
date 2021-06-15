import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  render() {
    return (
      <div>
        <form action="">
          <h3>Step 1: Join Us</h3>
          <div id='fields'>
            <div className='formInput'>
              <label htmlFor="name">Name: </label>
              <input type="text" id='name'/>
            </div>
            <div className='formInput'>
              <label htmlFor="age">Age: </label>
              <input type="text" id='age'/>
            </div>
            <div className='formInput'>
              <label htmlFor="experience">Location: </label>
              <input type="text" id='location'/>
            </div>
            <div className='formInput'>
              <input type="submit" id='submit'/>
            </div>
          </div>

        </form>
      </div>
    );
  }
}

export { Form }
