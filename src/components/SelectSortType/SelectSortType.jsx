import { useState } from 'react';
import './SelectSortType.css'


// prob => setSortBy
const SelectSortType = (probs) => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <div className='selectSortType'>
            <p className='label'>Sort by: </p>
            <div  className='dd-wrapper'>
                <div onClick={() => setVisible((prev) => !prev)} className='dd-header'>
                    <div className='dd-header-title'>
                        <span>{probs.sortBy?probs.sortBy:"none"}</span>
                    </div>
                </div>
                <div onMouseLeave={() => setVisible(false)} className={visible?'dd-list visible':'dd-list'}>
                    {probs.mySortArray.map((listEle, i) => <div key={i} onClick={()=>{setVisible(false);probs.setSortBy(listEle)}} className='dd-list-item'>{listEle}</div>)}
                </div>
            </div>
            </div>
        </>
    )
}
 
export default SelectSortType;