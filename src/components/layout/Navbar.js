import  React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

const Navbar = ({ icon, title }) => {
		return (
			<nav>
				<FontAwesomeIcon icon={ icon } size="2x" /> { title }
			</nav>
		)
}

Navbar.defaultProps = {
	icon: faGithubAlt,
	title: "GitHub Finder"
}

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.object.isRequired
}

export default Navbar;