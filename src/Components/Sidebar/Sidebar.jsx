import React from 'react';
import './Sidebar.css';
import { FaComments, FaHome, FaShoppingBasket, FaShoppingCart, FaUsers } from 'react-icons/fa';
import { IoMdLogOut, IoMdPower } from 'react-icons/io';
import { MdDiscount } from 'react-icons/md';

function Sidebar() {
	return (
		<div className='sidebar'>
			<div className='sidebar__container'>
				<div className='sidebar__logo'>
					<div className='sidebar__logo--img'>
						<svg
							id='Layer_1'
							data-name='Layer 1'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 42.82 57.75'
						>
							<defs></defs>
							<path
								style={{ fill: '#fff', strokeWidth: '0px' }}
								d='M.49,42.22c.17.11.37.18.57.18l11.18-.02h3.56l10.79-.02c.27,0,.54-.11.73-.3s.3-.46.3-.73v-10.61c0-.18-.05-.36-.14-.51-.09-.16-.22-.29-.37-.38-.16-.09-.34-.14-.52-.14h-11.34v11.54h-2.54v-12.51s0-.04,0-.05V1.04c0-.27-.11-.54-.3-.73-.19-.19-.46-.3-.73-.3L1.07.04C.79.04.53.15.34.34.14.54.04.8.04,1.07v40.29c0,.17.04.34.12.49.08.15.2.28.34.37h0Z'
							/>
							<path
								style={{ fill: '#fff', strokeWidth: '0px' }}
								d='M42.82,42.22V1.03c0-.27-.11-.54-.3-.73C42.33.11,42.06,0,41.79,0h-25.51c-.26,0-.52.1-.71.28-.19.18-.31.43-.32.7,0,.02,0,.04,0,.05v10.61s0,.04,0,.05c0,.17.06.34.15.49.09.15.22.27.37.36.15.09.33.14.51.13h11.35V1.16h2.55v42.9c0,.18-.05.36-.14.52-.09.16-.22.29-.38.38-.15.09-.33.14-.51.14H1.03c-.27-.01-.53.1-.73.29-.19.19-.3.45-.31.73v10.6c0,.17.04.33.12.48.08.15.19.27.33.37.17.12.38.18.59.18h40.75c.2.01.4-.05.56-.16.17-.11.3-.27.38-.45.06-.13.09-.27.09-.42v-14.49Z'
							/>
						</svg>
					</div>

					<h1 className='sidebar__logo-title'>به داشبورد خوش آمدید !</h1>
				</div>
				<div className='sidebar__nav'>
					<ul className='sidebar__nav--list'>
						<a className='sidebar__nav--link' to='/panel/admin/dashboard'>
							<li className='sidebar__nav--item '>
								<FaHome className='sidebar__nav--icon' />
								<span className='sidebar__nav--text'>پیشخوان</span>
							</li>
						</a>
						<a className='sidebar__nav--link' to='/panel/admin/products'>
							<li className='sidebar__nav--item'>
								<FaShoppingBasket className='sidebar__nav--icon' />
								<span className='sidebar__nav--text'>محصولات</span>
							</li>
						</a>
						<a className='sidebar__nav--link' to='/panel/admin/comments'>
							<li className='sidebar__nav--item'>
								<FaComments className='sidebar__nav--icon' />
								<span className='sidebar__nav--text'>کامنت ها</span>
							</li>
						</a>
						<a className='sidebar__nav--link' to='/panel/admin/users'>
							<li className='sidebar__nav--item sidebar__nav--active'>
								<FaUsers className='sidebar__nav--icon' />
								<span className='sidebar__nav--text'>کاربران</span>
							</li>
						</a>
						<a className='sidebar__nav--link' to='/panel/admin/orders'>
							<li className='sidebar__nav--item'>
								<FaShoppingCart className='sidebar__nav--icon' />
								<span className='sidebar__nav--text'>سفارشات</span>
							</li>
						</a>
						<a className='sidebar__nav--link' to='/panel/admin/offers'>
							<li className='sidebar__nav--item'>
								<MdDiscount className='sidebar__nav--icon' />
								<span className='sidebar__nav--text'>تخفیفات</span>
							</li>
						</a>
					</ul>
				</div>
				<div className='sidebar__logout'>
					<a to='/logout' className='sidebar__logout--link'>
						<div className='sidebar__logout--btn'>
							<div className='sidebar__logout--icon'>
								<IoMdLogOut />
							</div>
							<h1 className='sidebar__logout--text'>بازگشت به سایت</h1>
						</div>
					</a>
					<a to='/logout' className='sidebar__logout--link'>
						<div className='sidebar__logout--btn'>
							<div className='sidebar__logout--icon'>
								<IoMdPower />
							</div>
							<h1 className='sidebar__logout--text'>خروج از حساب کاربری</h1>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
