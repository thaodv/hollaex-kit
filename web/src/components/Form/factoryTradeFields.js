import React from 'react';
import { Field } from 'redux-form';

import InputField from './TradeFormFields/InputField';
import ChoiceSelector from './TradeFormFields/ChoiceSelector';
import TabSelector from './TradeFormFields/TabSelector';

const renderFields = ([key, values], index) => {
	const props = {
		...values
	};

	switch (values.type) {
		case 'select':
			props.component = ChoiceSelector;
			break;
		case 'tab':
			props.component = TabSelector;
			break;
		default:
			props.component = InputField;
			break;
	}

	return <Field {...props} key={index} />;
};

export default renderFields;
