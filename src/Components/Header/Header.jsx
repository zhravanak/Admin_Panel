import './Header.css';
import { useEffect, useRef, useState } from 'react';
import { MdOutlineLightMode } from 'react-icons/md';
import Button from '../Button/Button';
import { IoIosNotifications, IoMdArrowDropdown } from 'react-icons/io';
import { FaSearch, FaUser } from 'react-icons/fa';
import { IoExit, IoSettings } from 'react-icons/io5';
import profilePicture from '/src/assets/Profile.webp';

function Header() {
	const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
	const megaMenuRef = useRef(null);

	const handleMegaMenu = () => {
		setIsMegaMenuOpen(!isMegaMenuOpen);
	};

	const handleClickOutside = (event) => {
		const megaMenuButton = document.querySelector('.header__info');

		if (
			megaMenuRef.current &&
			!megaMenuRef.current.contains(event.target) &&
			megaMenuButton &&
			!megaMenuButton.contains(event.target)
		) {
			setIsMegaMenuOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, []);

	return (
		<div className='header'>
			<div className='header__info'>
				<div className='header__info--profile' onClick={handleMegaMenu}>
					<img src={profilePicture} alt='Profile Picture' className='header__info--profile--img' />
				</div>
				<div className='header__info--name' onClick={handleMegaMenu}>
					<p>
						{' '}
						زهرا ونکی
						<IoMdArrowDropdown className={`${isMegaMenuOpen ? 'active' : ''}`} />
					</p>
					<p> برنامه نویس فرانت اند</p>
				</div>
				<div className={`header__megaMenu ${isMegaMenuOpen ? 'header__megaMenu--active' : ''}`} ref={megaMenuRef}>
					<ul className='header__megaMenu--lists'>
						<li className='header__megaMenu--list'>
							<a href='#' className='header__megaMenu--link'>
								<div className='header__megaMenu--icon'>
									<FaUser />
								</div>
								<span className='header__megaMenu--text'>پروفایل</span>
							</a>
						</li>
						<li className='header__megaMenu--list'>
							<a href='#' className='header__megaMenu--link'>
								<div className='header__megaMenu--icon'>
									<IoSettings />
								</div>
								<span className='header__megaMenu--text'>تنظیمات</span>
							</a>
						</li>
						<li className='header__megaMenu--list'>
							<a href='#' className='header__megaMenu--link'>
								<div className='header__megaMenu--icon'>
									<IoExit />
								</div>
								<span className='header__megaMenu--text'>خروج</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='header__tools'>
				<div className='header__search--box'>
					<input className='header__search--box--input' type='text' placeholder='دنبال چیزی میگشتی ؟' />
					<Button label='جستجو' className='header__search--box--btn'>
						<FaSearch />
					</Button>
				</div>
				<div className='header__tools--btnBox'>
					<Button label=' ' className='header__tools--btn'>
						<IoIosNotifications className='header__tools--btn-icon' />
					</Button>
					<Button label=' ' className='header__tools--btn'>
						<MdOutlineLightMode className='header__tools--btn-icon' />
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Header;
