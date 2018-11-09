import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
	main: {
		width: 'auto',
		display: 'block',
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto'
		}
	},
	paper: {
		marginTop: theme.spacing.unit * 8,
		display: 'flex',
		flexDirection: 'column',
		alingItems: 'center',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
			.spacing.unit * 3}px`
	},
	avatar: {
		margin: theme.spacing.unit,
		backgroundColor: theme.palette.secundary.main
	},
	form: {
		width: '100%',
		marginTop: theme.spacing.unit * 3
	}
});
function SingIn(props) {
	const { classes } = props;
	return (
		<main className={classes.main}>
			<CssBaseline />
			<Paper className={classes.paper}>
				<Avatar className={classes.Avatar}>
					<LockIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Entrar
				</Typography>
				<form className={classes.form}>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="email">E-mail</InputLabel>
						<Input id="email" name="email" autoComplete="email" autoFocus />
					</FormControl>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="password">Senha</InputLabel>
						<Input
							name="password"
							type="password"
							id="password"
							autoComplete="current-password"
						/>
					</FormControl>
					<FormControlLabel
						control={<Checkbox value="remember" color="#6CB6C9" />}
						label="Lembre-me"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="#6CB6C9"
						className={classes.submit}
					>
						Entrar
					</Button>
				</form>
			</Paper>
		</main>
	);
}

SingIn.PropTypes = {
	classes: PropTypes.object.isRequired
};
export default withStyles(styleMedia)(SingIn);
