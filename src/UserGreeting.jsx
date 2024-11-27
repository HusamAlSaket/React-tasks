import PropTypes from 'prop-types';
function UserGreeting(props) {
    const welcomeMessage= <h2>Welcome {props.username}</h2> 
    const loginPrompt =<h2>Please Login To Continue</h2>


return (props.isLoggedIn ? welcomeMessage 
    : loginPrompt )

}
UserGreeting.PropTypes={
    isLoggedIn:PropTypes.bool,
    welcomeMessage:PropTypes.string,
}
UserGreeting.defaultProps={
    isLoggedIn:false,
    username:"guest",
}
export default UserGreeting 
