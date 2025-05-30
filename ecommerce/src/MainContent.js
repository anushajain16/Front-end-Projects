import products from './image/products.png'
import './MainContent.css'
import products1 from './image/products1.png'
const MainContent = () => {
  return (
    <div className="new-item">
        <div className="item-img">
            <img className='image' src={products1} alt="latest" width="50%" height="100%" />
        </div>
        <div className="item-content">
            <div className="item-heading">
                <p>Just Dropped</p>
            </div>
            <div className="item-desc">
                <p>Hybrid Blush</p>
                <p className='item-para'>a cream and powder in one,for instantly flushed color with a soft matte</p>
            </div>
            <button className="item-btn">
                Shop Now
            </button>
        </div>
    </div>
  )
}

export default MainContent
