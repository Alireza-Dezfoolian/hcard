import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import './HcardPreview.scss';

const HcardPreview = props => {

	const data = props.cardData.form.Hcard;
	let name = null;

	(data.values && (data.values.firstname || data.values.surname)) ?
	  name = <h2 className="h-card-name">{data.values && data.values.firstname} {data.values && data.values.surname}</h2> :
	  name = <h2 className="h-card-name">... ...</h2>;

    return (
      <div className="h-card-preview">
         <p className="text">hcard preview</p>
         <section className="h-card">
	         <div className="h-card-preview-title">
	         {name}
	         <div className="image-frame">
	         	<img width="83" height="104" alt="hCard" src={props.cardData.image || "avator.png"}/>
	         </div>
	         </div>
	         <div className="inner-card">
	           <div className="section-holder">
			         <div className="email">email</div>
			         <p>{data.values && data.values.email}</p>
		         </div>
		         <div className="section-holder">
			         <div className="phone">phone</div>
			         <p>{data.values && data.values.phone}</p>
		         </div>
		         <div className="section-holder">
			         <div className="address">address</div>
			         <p>{data.values && data.values.house} {data.values && data.values.street}</p>
		         </div>
                 <div className="section-holder">
			         <div className="address"></div>
			         <p>{data.values && data.values.suburb} {data.values && data.values.state}</p>
		         </div>
		         <div className="section-holder">
			         <div className="postcode half">postcode</div>
			         <p className="half">{data.values && data.values.postcode}</p>
			         <div className="country half">country</div>
			         <p className="half">{data.values && data.values.country}</p>
		         </div>
		         
	        </div>
         </section>

      </div>
    )
}

HcardPreview.propTypes = {
  cardData: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
	return {
	   cardData: state
	};
}

export default connect(mapStateToProps)(HcardPreview);
