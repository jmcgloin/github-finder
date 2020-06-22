import  React, {Component} from 'react';

class Navbar extends Component {
	toggleMenu = (el) => {
		const menu = document.getElementById('menu');
		menu.classList.contains('hidden') ? menu.classList.remove("hidden") : menu.classList.add("hidden");
	}
	render() {
		return (
			<nav className="flex items-center justify-between flex-wrap bg-red-500 p-6">
				<div className="flex items-center flex-shrink-0 text-white lg:ml-32">
					<span className="font-semibold text-6xl tracking-tight">GitFinder</span>
				</div>
				<div className="block lg:hidden" id="hamburger" onClick={ this.toggleMenu } >
					<button className="flex items-center px-3 py-2 border rounded text-pink-200 border-pink-400 hover:text-white hover:border-white">
						<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
					</button>
				</div>
				<div className="w-full block lg:flex lg:w-1/3 lg:show hidden lg:justify-end lg:mr-32" id="menu" >
					<div className="text-3xl">
						<a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-pink-200 hover:text-white mr-4">
							Docs
						</a>
						<a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-pink-200 hover:text-white mr-4">
							Examples
						</a>
						<a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-pink-200 hover:text-white">
							Blog
						</a>
					</div>
				</div>
			</nav>
		)
	}
}

export default Navbar;