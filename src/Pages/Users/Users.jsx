import React from 'react';
import Button from '../../Components/Button/Button';
import './Users.css';
import EditModal from '../../Components/EditModal/EditModal';
import { FaUserPlus } from 'react-icons/fa';
import Toast from '../../Components/Toast/Toast';
import AddUser from '../../Components/AddUser/AddUser';

function Users() {
	const [modalState, setModalState] = React.useState({ edit: false, addUser: false });
	const [selectedUserID, setSelectedUserID] = React.useState(null);
	const [name, setName] = React.useState('');
	const [userName, setUserName] = React.useState('');
	const [age, setAge] = React.useState('');
	const [phone, setPhone] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [isShowToast, setIsShowToast] = React.useState({
		edit: false,
		addUser: false,
	});

	const [errors, setErrors] = React.useState({});

	const [users, setUsers] = React.useState([
		{
			id: 1,
			name: 'علی رضایی',
			age: 25,
			email: 'ali@example.com',
			phone: '+98 912 345 6789',
			userName: 'Ali',
		},
		{
			id: 2,
			name: 'سارا ندیمی',
			age: 30,
			email: 'sara@example.com',
			phone: '+98 912 234 5678',
			userName: 'Sara',
		},
		{
			id: 3,
			name: 'رضا کبیری',
			age: 28,
			email: 'reza@example.com',
			phone: '+98 912 987 6543',
			userName: 'Reza',
		},
		{
			id: 4,
			name: 'مینا معظمی',
			age: 22,
			email: 'mina@example.com',
			phone: '+98 912 456 7890',
			userName: 'Mina',
		},
		{
			id: 5,
			name: 'حسن خدامی',
			age: 35,
			email: 'hasan@example.com',
			phone: '+98 912 543 2109',
			userName: 'Hasan',
		},
		{
			id: 6,
			name: 'زهرا اله یاری',
			age: 27,
			email: 'zahra@example.com',
			phone: '+98 912 654 3210',
			userName: 'Zahra',
		},
		{
			id: 7,
			name: 'نیما دادور',
			age: 31,
			email: 'nima@example.com',
			phone: '+98 912 765 4321',
			userName: 'Nima',
		},
		{
			id: 8,
			name: 'لیلا ربیعی',
			age: 26,
			email: 'leila@example.com',
			phone: '+98 912 876 5432',
			userName: 'Leila',
		},
		{
			id: 9,
			name: 'محمد محمدی',
			age: 40,
			email: 'mohammad@example.com',
			phone: '+98 912 987 1234',
			userName: 'Mohammad',
		},
		{
			id: 10,
			name: 'مریم طباطبایی',
			age: 29,
			email: 'maryam@example.com',
			phone: '+98 912 321 0987',
			userName: 'Maryam',
		},
	]);

	const validateForm = () => {
		const newErrors = {};

		if (!name) newErrors.name = 'نام را وارد کنید';
		if (!userName) newErrors.userName = 'نام کاربری را وارد کنید';
		if (!age || isNaN(age) || age <= 0) newErrors.age = 'سن را به صورت عدد صحیح وارد کنید';
		if (!phone || !/^\+?\d{10,15}$/.test(phone)) newErrors.phone = 'شماره تلفن معتبر نیست';
		if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'ایمیل معتبر نیست';

		return newErrors;
	};

	const handleDelete = (id) => {
		const newUsers = users.filter((user) => user.id !== id);
		setUsers(newUsers);
	};

	const handleModalOpen = (type, id) => {
		if (id) {
			setSelectedUserID(id);
			setModalState((prevState) => ({ ...prevState, [type]: true }));
			document.getElementById('modals')?.classList.add('modal__active');

			const userInfo = users.find((user) => user.id === id);

			if (type === 'edit') {
				setName(userInfo.name);
				setUserName(userInfo.userName);
				setAge(userInfo.age);
				setPhone(userInfo.phone);
				setEmail(userInfo.email);
			}
		}
	};

	const handleModalClose = () => {
		setModalState({ edit: false, addUser: false });
		document.getElementById('modals')?.classList.remove('modal__active');
		setName('');
		setUserName('');
		setAge('');
		setPhone('');
		setEmail('');
		setErrors({});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const validationErrors = validateForm();
		if (Object.keys(validationErrors).length === 0) {
			const newUsers = users.map((user) => {
				if (user.id === selectedUserID) {
					return {
						...user,
						name,
						userName,
						age,
						phone,
						email,
					};
				}
				return user;
			});
			setUsers(newUsers);
			handleModalClose();
			setIsShowToast((prevState) => ({ ...prevState, edit: true }));
		} else {
			setErrors(validationErrors);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case 'firsname':
				setName(value);
				break;
			case 'username':
				setUserName(value);
				break;
			case 'age':
				setAge(value);
				break;
			case 'phone':
				setPhone(value);
				break;
			case 'email':
				setEmail(value);
				break;
			default:
				break;
		}
		setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
	};

	const handleAddUser = (e) => {
		e.preventDefault();
		console.log('add user', e);

		const validationErrors = validateForm();
		if (Object.keys(validationErrors).length === 0) {
			const newUser = {
				id: users.length + 1,
				name,
				userName,
				age,
				phone,
				email,
			};

			setUsers([...users, newUser]);
			handleModalClose();
			setIsShowToast((prevState) => ({ ...prevState, addUser: true }));
			setTimeout(() => {
				setIsShowToast((prevState) => ({ ...prevState, addUser: false }));
			}, 3000);
		} else {
			setErrors(validationErrors);
			return;
		}
	};

	return (
		<>
			<div className='users'>
				<h1 className='users__title'>کاربران</h1>
				<Button
					label='افزودن کاربر'
					className='users__button--addUser'
					onClick={() => handleModalOpen('addUser', users.length + 1)}
				>
					<FaUserPlus />
				</Button>
			</div>
			<div className='table'>
				<table className='table__container'>
					<thead className='table__header'>
						<tr>
							<th className='table__header--title users__data--firsname'>نام نام خانوادگی</th>
							<th className='table__header--title users__data--username'>نام کاربری</th>
							<th className='table__header--title users__data--age'>سن</th>
							<th className='table__header--title users__data--phone'>تلفن</th>
							<th className='table__header--title users__data--email'>ایمیل</th>
							<th className='table__header--title users__data--'></th>
						</tr>
					</thead>
					<tbody className='table__body'>
						{users.map((user) => (
							<tr key={user.id}>
								<td className='table__data users__data--firsname'>{user.name}</td>
								<td className='table__data users__data--username'>{user.userName}</td>
								<td className='table__data users__data--age'>{user.age}</td>
								<td className='table__data users__data--phone'>{user.phone}</td>
								<td className='table__data users__data--email'>{user.email}</td>
								<td className='table__data table__button'>
									<Button label='ویرایش' onClick={() => handleModalOpen('edit', user.id)} />
									<Button label='حذف' onClick={() => handleDelete(user.id)} />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			{modalState.edit && (
				<EditModal label='ویرایش کاربر'>
					<form onSubmit={handleSubmit} className='users__form' method='POST'>
						<div className='users__group'>
							<label className='users__label'>نام:</label>
							<input
								className={`users__input ${errors.name ? 'error' : ''}`}
								type='text'
								name='firsname'
								value={name}
								onChange={handleChange}
							/>
							{errors.name && <span className='error-text'>{errors.name}</span>}
						</div>
						<div className='users__group'>
							<label className='users__label'>سن :</label>
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
								name='username'
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
							<label className='users__label'>ایمیل :</label>
							<input
								className={`users__input ${errors.email ? 'error' : ''}`}
								type='text'
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
			)}
			{modalState.addUser && (
				<AddUser
					name={name}
					userName={userName}
					age={age}
					phone={phone}
					email={email}
					handleChange={handleChange}
					handleAddUser={handleAddUser}
					handleModalClose={handleModalClose}
					errors={errors}
				/>
			)}
			{isShowToast.addUser && <Toast message={'کاربر با موفقیت اضافه شد !'} />}
			{isShowToast.edit && <Toast message={'کاربر با موفقیت ویرایش شد !'} />}
		</>
	);
}

export default Users;
