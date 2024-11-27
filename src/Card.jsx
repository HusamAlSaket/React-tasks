import ProfilePic from './assets/2.jpg'
function Card(props){
    return(
<div className="card">
<img src={ProfilePic} className='card-image' alt="Profile Picture" />
<h2 className='card-title'>Husam AlSaket</h2>
<p className='card-text'>im a computer engineer graduate and i love coding</p>
</div>
);

}

export default Card