import PropTypes from 'prop-types'
function Student(props) {
return (
<div className="student">
    <p>Name:{props.name}</p>
    <p>Age:{props.age}</p>
    <p>Student:{props.isStudent ? "yes" :"no"}</p>
</div>

);
}
// for debugging in clg
Student.propTypes={
    name:PropTypes.string,
    age:PropTypes.number,
    isStudent:PropTypes.bool,
}
// default values
Student.defaultProps={
    name:"guest",
    age:0,
    isStudent:false,
}
export default Student