import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar_style.scss'
import 'font-awesome/css/font-awesome.min.css';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			drawerOut: false,
			open: false
		};
	}

	onOpenModal = () => {
		this.setState({ open: true });
	};

	onCloseModal = () => {
		this.setState({
			open: false,
		});
	};

	showDrawer = () => {
		this.setState({
			drawerOut: true
		});

		try {
			document.getElementById('user-profile-main').style.zIndex = -1;
			document.getElementById('social-icons').style.zIndex = -1;
		} catch { }
	};

	hideDrawer = () => {
		this.setState({
			drawerOut: false
		});
		try {
			document.getElementById('user-profile-main').style.zIndex = 0;
			document.getElementById('social-icons').style.zIndex = 2000;
		} catch { }
	};

	componentDidMount() {
		document.addEventListener('scroll', e => {
			let elem = document.getElementById('navbar-container')
			if (window.pageYOffset > 38) {
				if (!elem.classList.contains('scrolled')) {
					elem.classList.add('scrolled')
				}
			} else {
				elem.classList.remove('scrolled')
			}
		})
	}

	componentDidUpdate() {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}

	render() {
		const { auth, signOut, assets } = this.props;
		const { open } = this.state;
		return (
			<div id="hamburger-container">
				<nav id='navbar-container' className="navbar">
					<div id="drawer-button" className="container">
						<span id="drawer-button-span" onClick={this.showDrawer}>
							<i className="fa fa-bars hamPosition" />
						</span>
					</div>

					<div
						id="black-background"
						className={this.state.drawerOut ? 'black-background-visible' : null}
						onClick={this.hideDrawer}
					/>

					<div id="drawer" className={this.state.drawerOut ? 'drawer-visible' : null}>
						<NavLink className="list_element" onClick={this.hideDrawer} exact to="/">
						<i class="fa fa-home"></i>
							<span className="elements">home</span>
                        </NavLink>
						<NavLink className="list_element" onClick={this.hideDrawer} to="/about">
						<i class="fa fa-calendar"></i>
							<span className="elements">EVENTS</span>
                        </NavLink>
						<NavLink className="list_element" onClick={this.hideDrawer} to="/team">
						<i class="fa fa-users"></i>
							<span className="elements">TEAM</span>
                        </NavLink>
						<NavLink className="list_element" onClick={this.hideDrawer} to="/timeline">
							<i class="fa fa-hourglass-half"></i>
							<span className="elements">TIMELINE</span>
                        </NavLink>
						<NavLink className="list_element" onClick={this.hideDrawer} to="/timeline">
						<i class="fa fa-info"></i>
						<span className="elements">BROCHURE</span>
                        </NavLink>
					</div>
				</nav>
			</div>
		);
	}
}
export default Navbar;