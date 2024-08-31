import './Button.css';
import React from 'react';
import PropTypes from 'prop-types';

function Button({ onClick, label, className, disabled, children, type }) {
	return (
		<button className={`btn ${className}`} onClick={onClick} disabled={disabled} type={type}>
			{label}
			{children}
		</button>
	);
}

Button.propTypes = {
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func,
	type: PropTypes.string,
};

export default Button;
