import  React from 'react';
import PropTypes from 'prop-types'

const UserItem = ({ user: { avatar_url, login, html_url }}) => {
		return (
			<div className="">
				<div className="card text-center">
					<img src={ avatar_url } alt="avatar"/>
					<h3>{ login }</h3>
					<a href={ html_url } className="btn btn-dark btn-sm">More</a>
				</div>
			</div>
		)
}

UserItem.propTypes = {
	user: PropTypes.object.isRequired
}

export default UserItem;