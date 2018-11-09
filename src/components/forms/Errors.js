import React from 'react';
import PropTypes from 'prop-types';

const Errors = ({ text }) => <span>{text}</span>;
Errors.propTypes = {
	text: PropTypes.string.isRequired
};

export default Errors;
