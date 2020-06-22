import  React, {Component} from 'react';
import Navbar from './Navbar';

class Header extends Component {
	render() {
		return (
			<div className="flex flex-col fixed w-full">
				<Navbar />
			</div>
		)
	}
}

export default Header;