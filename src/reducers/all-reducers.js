import { combineReducers } from 'redux';
import ImageReducer from './image-url';
import { reducer as formReducer } from 'redux-form'

const allReducers = combineReducers({
	image: ImageReducer,
	form: formReducer
});

export default allReducers;