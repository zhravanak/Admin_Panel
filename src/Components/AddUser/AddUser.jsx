import React from 'react';
import EditModal from '../EditModal/EditModal';
import Button from '../Button/Button';

function AddUser({ handleChange, handleAddUser, handleModalClose, formData, errors }) {
	const { name, age, userName, phone, email } = formData;

	return (
		<EditModal label='افزودن کاربر'>
			<form onSubmit={handleAddUser} method='POST' className='users__form'>
				<div className='users__group'>
					<label className='users__label'>نام:</label>
					<input
						className={`users__input ${errors.name ? 'error' : ''}`}
						type='text'
						name='name'
						value={name}
						onChange={handleChange}
					/>
					{errors.name && <span className='error-text'>{errors.name}</span>}
				</div>
				<div className='users__group'>
					<label className='users__label'>سن:</label>
					<input
						className={`users__input ${errors.age ? 'error' : ''}`}
						type='text'
						name='age'
						value={age}
						onChange={handleChange}
					/>
					{errors.age && <span className='error-text'>{errors.age}</span>}
				</div>
				<div className='users__group'>
					<label className='users__label'>نام کاربری:</label>
					<input
						className={`users__input ${errors.userName ? 'error' : ''}`}
						type='text'
						name='userName'
						value={userName}
						onChange={handleChange}
					/>
					{errors.userName && <span className='error-text'>{errors.userName}</span>}
				</div>
				<div className='users__group'>
					<label className='users__label'>تلفن:</label>
					<input
						className={`users__input ${errors.phone ? 'error' : ''}`}
						type='text'
						name='phone'
						value={phone}
						onChange={handleChange}
					/>
					{errors.phone && <span className='error-text'>{errors.phone}</span>}
				</div>
				<div className='users__group'>
					<label className='users__label'>ایمیل:</label>
					<input
						className={`users__input ${errors.email ? 'error' : ''}`}
						type='email'
						name='email'
						value={email}
						onChange={handleChange}
					/>
					{errors.email && <span className='error-text'>{errors.email}</span>}
				</div>
				<div className='users__group users__button'>
					<Button label='ذخیره' type='submit' className='users__button--submit' />
					<Button label='انصراف' onClick={handleModalClose} className='users__button--cancel' />
				</div>
			</form>
		</EditModal>
	);
}

export default AddUser;
