import reactPic from './assets/react.svg';

function Card(){

    return (
        <div className="card">
            <img className='card-image' src="https://th.bing.com/th/id/OIP.bEn75BLK8c-35upszZ70dAHaFP?rs=1&pid=ImgDetMain" alt=""/>
            <img src={reactPic} alt="" />
            <h2 className='card-title'>Antony</h2>
            <p className='card-text'>I am a fullStack developer learning react</p>
        </div>
    )
}

export default Card