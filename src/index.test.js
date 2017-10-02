import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './components/App';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;
const mockStore = configureStore();
const store = mockStore({
  "image": null,
  "form": {
    "Hcard": {
      "registeredFields": {
        "firstname": {
          "name": "firstname",
          "type": "Field",
          "count": 1
        },
        "surname": {
          "name": "surname",
          "type": "Field",
          "count": 1
        },
        "email": {
          "name": "email",
          "type": "Field",
          "count": 1
        },
        "phone": {
          "name": "phone",
          "type": "Field",
          "count": 1
        },
        "house": {
          "name": "house",
          "type": "Field",
          "count": 1
        },
        "street": {
          "name": "street",
          "type": "Field",
          "count": 1
        },
        "suburb": {
          "name": "suburb",
          "type": "Field",
          "count": 1
        },
        "state": {
          "name": "state",
          "type": "Field",
          "count": 1
        },
        "postcode": {
          "name": "postcode",
          "type": "Field",
          "count": 1
        },
        "country": {
          "name": "country",
          "type": "Field",
          "count": 1
        }
      },
      "fields": {
        "firstname": {
          "visited": false,
          "touched": false
        },
        "surname": {
          "visited": false,
          "touched": false
        },
        "email": {
          "visited": false,
          "touched": false
        },
        "phone": {
          "visited": false,
          "touched": false
        },
        "house": {
          "visited": false,
          "touched": false
        },
        "street": {
          "visited": false,
          "touched": false
        },
        "suburb": {
          "visited": false,
          "touched": false
        },
        "state": {
          "visited": false,
          "touched": false
        },
        "postcode": {
          "visited": false,
          "touched": false
        },
        "country": {
          "visited": false,
          "touched": false
        }
      },
      "values": {
        "firstname": "",
        "surname": "",
        "email": "",
        "phone": "",
        "house": "",
        "street": "",
        "suburb": "",
        "state": "",
        "postcode": "",
        "country": ""
      },
      "anyTouched": false
    }
  }
});

describe('hCard App', () => {

  beforeEach(() => {
    wrapper = mount( 
      <Provider store = { store } >
        <App / >
      </Provider>
    );
  });

  it('WHEN created EXPECT to have these classNames', () => {
    expect(wrapper.find('form')).to.have.length(1);
    expect(wrapper.find('.hcard')).to.have.length(1);
    expect(wrapper.find('.left')).to.have.length(6);
    expect(wrapper.find('.uploader-button')).to.have.length(1);
    expect(wrapper.find('.h-card-preview-title')).to.have.length(1);
  });

  it('WHEN input changed EXPECT store dispatch the new values', () => {
    wrapper.find('input#firstname').simulate('change', { target: { value: 'Alireza' } });
    wrapper.find('input#surname').simulate('change', { target: { value: 'Dezfoolian' } });
    wrapper.find('input#email').simulate('change', { target: { value: 'dezfoolian@gmail.com' } });
    wrapper.find('input#phone').simulate('change', { target: { value: '0 406 340 642' } });
    wrapper.find('input#house').simulate('change', { target: { value: '49' } });
    wrapper.find('input#street').simulate('change', { target: { value: 'Sussex' } });
    wrapper.find('input#suburb').simulate('change', { target: { value: 'Sydney' } });
    wrapper.find('input#state').simulate('change', { target: { value: 'NSW' } });
    wrapper.find('input#postcode').simulate('change', { target: { value: '2000' } });
    wrapper.find('input#country').simulate('change', { target: { value: 'Australia' } });

    expect(store.getActions()).to.deep.equal(

      [{
          type: '@@redux-form/REGISTER_FIELD',
          meta: { form: 'Hcard' },
          payload: { name: 'firstname', type: 'Field' }
        },
        {
          type: '@@redux-form/REGISTER_FIELD',
          meta: { form: 'Hcard' },
          payload: { name: 'surname', type: 'Field' }
        },
        {
          type: '@@redux-form/REGISTER_FIELD',
          meta: { form: 'Hcard' },
          payload: { name: 'email', type: 'Field' }
        },
        {
          type: '@@redux-form/REGISTER_FIELD',
          meta: { form: 'Hcard' },
          payload: { name: 'phone', type: 'Field' }
        },
        {
          type: '@@redux-form/REGISTER_FIELD',
          meta: { form: 'Hcard' },
          payload: { name: 'house', type: 'Field' }
        },
        {
          type: '@@redux-form/REGISTER_FIELD',
          meta: { form: 'Hcard' },
          payload: { name: 'street', type: 'Field' }
        },
        {
          type: '@@redux-form/REGISTER_FIELD',
          meta: { form: 'Hcard' },
          payload: { name: 'suburb', type: 'Field' }
        },
        {
          type: '@@redux-form/REGISTER_FIELD',
          meta: { form: 'Hcard' },
          payload: { name: 'state', type: 'Field' }
        },
        {
          type: '@@redux-form/REGISTER_FIELD',
          meta: { form: 'Hcard' },
          payload: { name: 'postcode', type: 'Field' }
        },
        {
          type: '@@redux-form/REGISTER_FIELD',
          meta: { form: 'Hcard' },
          payload: { name: 'country', type: 'Field' }
        },
        {
          type: '@@redux-form/REGISTER_FIELD',
          meta: { form: 'Hcard' },
          payload: { name: 'firstname', type: 'Field' }
        },
        {
          type: '@@redux-form/REGISTER_FIELD',
          meta: { form: 'Hcard' },
          payload: { name: 'surname', type: 'Field' }
        },
        {
          type: '@@redux-form/REGISTER_FIELD',
          meta: { form: 'Hcard' },
          payload: { name: 'email', type: 'Field' }
        },
        {
          type: '@@redux-form/REGISTER_FIELD',
          meta: { form: 'Hcard' },
          payload: { name: 'phone', type: 'Field' }
        },
        {
          type: '@@redux-form/REGISTER_FIELD',
          meta: { form: 'Hcard' },
          payload: { name: 'house', type: 'Field' }
        },
        {
          type: '@@redux-form/REGISTER_FIELD',
          meta: { form: 'Hcard' },
          payload: { name: 'street', type: 'Field' }
        },
        {
          type: '@@redux-form/REGISTER_FIELD',
          meta: { form: 'Hcard' },
          payload: { name: 'suburb', type: 'Field' }
        },
        {
          type: '@@redux-form/REGISTER_FIELD',
          meta: { form: 'Hcard' },
          payload: { name: 'state', type: 'Field' }
        },
        {
          type: '@@redux-form/REGISTER_FIELD',
          meta: { form: 'Hcard' },
          payload: { name: 'postcode', type: 'Field' }
        },
        {
          type: '@@redux-form/REGISTER_FIELD',
          meta: { form: 'Hcard' },
          payload: { name: 'country', type: 'Field' }
        },
        {
          type: '@@redux-form/CHANGE',
          meta: {
            form: 'Hcard',
            field: 'firstname',
            touch: false,
            persistentSubmitErrors: false
          },
          payload: 'Alireza'
        },
        {
          type: '@@redux-form/CHANGE',
          meta: {
            form: 'Hcard',
            field: 'surname',
            touch: false,
            persistentSubmitErrors: false
          },
          payload: 'Dezfoolian'
        },
        {
          type: '@@redux-form/CHANGE',
          meta: {
            form: 'Hcard',
            field: 'email',
            touch: false,
            persistentSubmitErrors: false
          },
          payload: 'dezfoolian@gmail.com'
        },
        {
          type: '@@redux-form/CHANGE',
          meta: {
            form: 'Hcard',
            field: 'phone',
            touch: false,
            persistentSubmitErrors: false
          },
          payload: '0 406 340 642'
        },
        {
          type: '@@redux-form/CHANGE',
          meta: {
            form: 'Hcard',
            field: 'house',
            touch: false,
            persistentSubmitErrors: false
          },
          payload: '49'
        },
        {
          type: '@@redux-form/CHANGE',
          meta: {
            form: 'Hcard',
            field: 'street',
            touch: false,
            persistentSubmitErrors: false
          },
          payload: 'Sussex'
        },
        {
          type: '@@redux-form/CHANGE',
          meta: {
            form: 'Hcard',
            field: 'suburb',
            touch: false,
            persistentSubmitErrors: false
          },
          payload: 'Sydney'
        },
        {
          type: '@@redux-form/CHANGE',
          meta: {
            form: 'Hcard',
            field: 'state',
            touch: false,
            persistentSubmitErrors: false
          },
          payload: 'NSW'
        },
        {
          type: '@@redux-form/CHANGE',
          meta: {
            form: 'Hcard',
            field: 'postcode',
            touch: false,
            persistentSubmitErrors: false
          },
          payload: '2000'
        },
        {
          type: '@@redux-form/CHANGE',
          meta: {
            form: 'Hcard',
            field: 'country',
            touch: false,
            persistentSubmitErrors: false
          },
          payload: 'Australia'
        }
      ]
    )

  });

});
