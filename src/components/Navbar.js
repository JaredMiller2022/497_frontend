import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Navbar.css';

function Navbar(props) {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton()
	}, []);

	window.addEventListener('resize', showButton);

	return (
		<div>
			<nav className="navbar">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
						CollegeCoaching <i className="navbar-logo-icon fas fa-graduation-cap"/>
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
					</div>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className='nav-item'>
							<Link to='/' className='nav-links' onClick={closeMobileMenu}>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/services' className='nav-links' onClick={closeMobileMenu}>
								Services
							</Link>
						</li>
						{props.authedUser !== -1 ?
							<>
								<li className='nav-item'>
									<Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
										Profile
									</Link>
								</li>
								<li className='nav-item'>
									<div className='nav-links' >
										<Button onClick={() => props.setAuthedUser(-1)}>Log Out</Button>
									</div>
								</li>
							</>
						:
							<>
								<li className='nav-item'>
									<Link to='/log-in' className='nav-links' onClick={closeMobileMenu}>
										Log In
									</Link>
								</li>
								<li className='nav-item'>
									<Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
										Sign Up!
									</Link>
								</li>
							</>
						}
					</ul>
					{props.authedUser == -1 && button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
				</div>
			</nav>
		</div>
	)
}

export default Navbar
