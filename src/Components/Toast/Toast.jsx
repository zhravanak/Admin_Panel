import React, { useState } from 'react';
import './Toast.css';

const Toast = ({ message }) => {
	if (!message) return null;

	const [toast, setToast] = useState(message);

	return (
		<>
			<div>
				<div className='toast'>
					<span>{toast}</span>
					<button onClick={() => setToast(null)} className='toast-close'>
						X
					</button>
				</div>
			</div>
		</>
	);
};

export default Toast;
