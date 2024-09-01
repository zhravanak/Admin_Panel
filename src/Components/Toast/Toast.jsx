import React, { useState } from 'react';
import './Toast.css';
import { IoIosCloseCircle } from 'react-icons/io';

const Toast = ({ message }) => {
	if (!message) return null;

	const [toast, setToast] = useState(message);

	return (
		<>
			<div>
				<div className='toast'>
					<span>{toast}</span>
					<button onClick={() => setToast(null)} className='toast-close'>
						<IoIosCloseCircle />
					</button>
				</div>
			</div>
		</>
	);
};

export default Toast;
