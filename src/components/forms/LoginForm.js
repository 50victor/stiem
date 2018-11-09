import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator';
import Errors from './Errors';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
	state = {
		data: {
			email: '',
			password: ''
		},
		loading: false,
		errors: {}
	};
	onChange = e =>
		this.setState({
			data: { ...this.state.data, [e.target.name]: e.target.value }
		});
	onSubmit = () => {
		const errors = this.validate(this.state.data);
		this.setState({ errors });
		if (Object.keys(this.state.errors).length === 0) {
			this.props.submit(this.state.data);
		}
	};
	validate = data => {
		const errors = {};
		if (!this.state.data.password) errors.password = "Can't be blank";
		if (!Validator.isEmail(this.state.data.email))
			errors.email = 'Invalid email';
		return errors;
	};
	render() {
		return (
			<Form onSubmit={this.onSubmit}>
				<Form.Field error={!!this.state.errors.email}>
					<label htmlFor="email">User</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="example@example.com"
						value={this.state.data.email}
						onChange={this.onChange}
					/>
					{this.state.errors.email && <Errors text={this.state.errors.email} />}
				</Form.Field>
				<Form.Field error={!!this.state.errors.password}>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						name="password"
						placeholder="make it safe"
						value={this.state.data.password}
						onChange={this.onChange}
					/>
					{this.state.errors.password && (
						<Errors text={this.state.errors.password} />
					)}
				</Form.Field>
				<Button primary>Login</Button>
			</Form>
		);
	}
}
LoginForm.propTypes = {
	submit: PropTypes.func.isRequired
};
export default LoginForm;
