import React from 'react';
import { Link } from 'react-router-dom'

function Nav(props) {
    function handleClick(){
        if (props.openMenu) {
            props.setOpenMenu(false)
        } else {
            props.setOpenMenu(true)
        }
    }
    return (
			<div className='nav-wrapper'>
				<div className='horizontal-wrapper'>
					<div className='header-wrapper'>
						<span className='name-span'>Kurt Shields</span>
						<span className='title-span'>Software Engineer</span>
					</div>
					<div className='hb-wrapper' onClick={handleClick}>
						<div
							className={
								!props.openMenu ? 'hb-line hb-top' : 'hb-line hb-top-change'
							}></div>
						<div
							className={
								!props.openMenu
									? 'hb-line hb-middle'
									: 'hb-line hb-middle-change'
							}></div>
						<div
							className={
								!props.openMenu
									? 'hb-line hb-bottom'
									: 'hb-line hb-bottom-change'
							}></div>
					</div>
				</div>
				<nav className={props.openMenu ? 'menu show-menu' : 'menu closed-menu'}>
					<ul className='link-list'>
						<Link to='/about'>
							<li
								className={
									props.openMenu
										? 'navlink link-one'
										: 'navlink hidden-nav-link-one'
								}
								onClick={handleClick}>
								About Me
							</li>
						</Link>
						<Link to='/projects'>
							<li
								className={
									props.openMenu
										? 'navlink link-two'
										: 'navlink hidden-nav-link-two'
								}
								onClick={handleClick}>
								Projects
							</li>
						</Link>
						<Link to='/contact'>
							<li
								className={
									props.openMenu
										? 'navlink link-three'
										: 'navlink hidden-nav-link-three'
								}
								onClick={handleClick}>
								Contacts
							</li>
						</Link>
						<a href='https://docs.google.com/document/d/1iY7mssUNmZMcF04_ohwP5wRmclty29W2N0QQZcIz2rc/edit?usp=sharing'>
							<li
								className={
									props.openMenu
										? 'navlink link-four'
										: 'navlink hidden-nav-link-four'
								}
								onClick={handleClick}>
								Resume
							</li>
						</a>
					</ul>
				</nav>
			</div>
		);
}

export default Nav;