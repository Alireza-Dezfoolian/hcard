import React from 'react';
import './HcardBuilder.scss';
import Uploader from '../uploader/Uploader';
import { Field, reduxForm } from 'redux-form';

class HcardBuilder extends React.Component {

  createHCard(e) {
  	e.preventDefault();
  	alert('Great! your hCard is created!')
  }
  
  render() {
    return (
      <div className="hcard-builder">
      <h1>hCard Builder</h1>
	      <form>
			  <fieldset>
			    <legend>Personal details</legend>

			    <div className="left">
				    <label htmlFor="firstname">Given Name</label>
				    <Field maxLength="10" type="text" component="input" id="firstname" name="firstname"/>
			    </div>

			    <div className="right">
				    <label htmlFor="surname">Surname</label>
				    <Field maxLength="13" type="text" component="input" id="surname" name="surname"/>
			    </div>
			    <div className="left">
				    <label htmlFor="email">Email</label>
				    <Field maxLength="30" type="email" component="input" id="email" name="email"/>
				</div>
				<div className="right">
				    <label htmlFor="phone">Phone</label>
				    <Field maxLength="15" type="text" component="input" id="phone" name="phone"/>
			    </div>

			    <legend>Address</legend>
			    <div className="left">
				    <label htmlFor="house">House Name or #</label>
				    <Field maxLength="35" type="text" component="input" id="house" name="house"/>
				</div>
				<div className="right">
				 <label htmlFor="street">Street</label>
			    <Field maxLength="45" type="text" component="input" id="street" name="street"/>
				  
			    </div>
			    <div className="left">
			    	<label htmlFor="suburb">Suburb</label>
					<Field maxLength="18" type="text" component="input" id="suburb" name="suburb"/>
			    </div>
			    <div className="right">
			        <label htmlFor="state">State</label>
				    <Field maxLength="18" type="state" component="input" id="state" name="state"/>
			    </div>
			    
			    <div className="left">
				    <label htmlFor="postcode">PostCode</label>
				    <Field maxLength="10" type="text" component="input" id="postcode" name="postcode"/>
				</div>
			    <div className="right">
				    <label htmlFor="country">Country</label>
				    <Field maxLength="20" type="text" component="input" id="country" name="country"/>
			    </div>
			    <div className="left buttons">
				   	<Uploader />
			    </div>
			    <div className="right buttons">
			    	<button onClick={e => this.createHCard(e)} className="press-button blue">Create hCard</button>
			    </div>
			    
			  </fieldset>
		  </form>
      </div>
    )
  }
}

HcardBuilder = reduxForm({
  form: 'Hcard',
})(HcardBuilder)

export default HcardBuilder;
