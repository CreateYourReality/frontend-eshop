import './CategorieContainer.css'
import categorieIcon1 from "../../../assets/img/icons/product.png"
import categorieIcon2 from "../../../assets/img/categorieIcon2.svg"
import categorieIcon3 from "../../../assets/img/categorieIcon4.svg"
import categorieIcon4 from "../../../assets/img/icons/plush.png"
import categorieIcon5 from "../../../assets/img/icons/book.png"
import categorieIcon6 from "../../../assets/img/icons/souverni.png"
import categorieIcon7 from "../../../assets/img/icons/items.png"
import categorieIcon8 from "../../../assets/img/icons/kitchen.png"
import categorieIcon9 from "../../../assets/img/icons/book.png"
import { useEffect, useState } from 'react'

const CategorieContainer = ({categorieText, setCategorieText, filter, text, setCategorie, i}) => {
    const categorieIcon = i===0?categorieIcon1:i===1?categorieIcon2:i===2?categorieIcon3:i===3?categorieIcon4:i===4?categorieIcon5:i===5?categorieIcon6:i===6?categorieIcon7:i===7?categorieIcon8:i===8?categorieIcon9:categorieIcon9

    const [check, setCheck] = useState(false)
    
    return ( 
        <div className={categorieText === text?"categorieContainer active":"categorieContainer"} onClick={() => categorieText === text?setCategorieText(''):setCategorieText(text)}>
            <div className="img-wrapper">
                <img className='resize' src={categorieIcon} alt={`${text}-Logo`}/>
            </div>
            <p>{text}</p>
        </div>
     );
}
 
export default CategorieContainer;