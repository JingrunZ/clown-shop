import { Link } from 'react-router-dom'
import './directory.style.scss'

const DirectoryItem = ({categories}) =>{
    console.log(categories)
    return(
        <div className="directories-container">
            {categories.map((category) => (
            <div className="directory-container" key={category.id}>
              <img className='background-image' alt={category.id} src={category.imageUrl}></img>
              <div className="directory-body-container">
              <h2>{category.title}</h2>
              <Link className='shop-now-btn' to="/shop"><p>Shop Now</p></Link>
              </div>
            </div>
          ))}
        </div>
    )

}

export default DirectoryItem