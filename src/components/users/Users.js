import  React, {Component} from 'react';

import UserItem from './UserItem'

const Users extends Component {
	render() {
		return (
			<React.Fragment>
				{ this.state.users.map(user => (
					<UserItem user={ user } />
				)) }
			</React.Fragment>
		)
	}
}

export default connect(({ users }) => ({ users }))(Users)