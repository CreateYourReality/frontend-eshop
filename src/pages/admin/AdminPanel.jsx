import { useContext, useEffect, useState } from "react";
import { dataContext } from "../../context/Context";
import Footer from "../../components/Footer/Footer";
import "./AdminPanel.css"
import star from "../../assets/img/Star.png";


const AdminPanel = () => {
    const {data,setData} = useContext(dataContext)
    const defaultImage = `../src/assets/FakeShop/images/default.png`
    let generatedID = data.products.length <= 40 ? 40 : data.products.length; //hardcoden? oder einmalig am anfang length speichern.

    const defaultFields = [
        "new article",
        1,
        1,
        2.5,
        "no description",
        "no category",
        "no brand"
]
    const [changeInput, setChangeInput] = useState(-1)

    const [changeImage, setChangeImage] = useState(defaultImage)
    const [changeTitle, setChangeTitle] = useState(defaultFields[0])
    const [changeStock, setChangeStock] = useState(defaultFields[1])
    const [changePrice, setChangePrice] = useState(defaultFields[2])
    const [changeRating, setChangeRating] = useState(defaultFields[3])
    const [changeDescription, setChangeDescription] = useState(defaultFields[4])
    const [changeCategory, setChangeCategory] = useState(defaultFields[5])
    const [changeBrand, setChangeBrand] = useState(defaultFields[6])

    const [toggleBtn,setBtnToggle] = useState(false)

    const newProductLayout = { 
			"id": generatedID,
			"title": changeTitle,
			"description": changeDescription,
			"price": changePrice,
			"rating": changeRating,
			"stock": changeStock,
			"brand": changeBrand,
			"category": changeCategory,
			"image": defaultImage
        }

    const resetFields = () => {
        setChangeInput(-1)
        setChangeTitle(defaultFields[0])
        setChangeStock(defaultFields[1])
        setChangePrice(defaultFields[2])
        setChangeRating(defaultFields[3])
        setChangeDescription(defaultFields[4])
        setChangeBrand(defaultFields[5])
        setChangeCategory(defaultFields[6])
        setChangeImage(defaultImage)
    }

    const setCurrentProduct = (changeID) => {
        setChangeImage(data.products[changeID].image)
        setChangeTitle(data.products[changeID].title);
        setChangeStock(data.products[changeID].stock);
        setChangePrice(data.products[changeID].price);
        setChangeCategory(data.products[changeID].category);
        setChangeBrand(data.products[changeID].brand);
        setChangeDescription(data.products[changeID].description);
        setChangeRating(data.products[changeID].rating);
    }

    const handleChange = (event) => {
        const changeID = Number(event.target.value); 
        if(changeID != -1){         
            setChangeInput(changeID);
            setCurrentProduct(changeID)
            setBtnToggle(true)
        }else{
            setChangeInput(changeID)
            setBtnToggle(false)
            resetFields();
        }
    }

    const handleChangeTitle = (event) => {
        event.preventDefault();
        setChangeTitle(event.target.value);
    }
    const handleChangePrice = (event) => {
        event.preventDefault();
        setChangePrice(event.target.value);
    }
    const handleChangeRating = (event) => {
        event.preventDefault();
        setChangeRating(event.target.value);
    }
    const handleChangeStock = (event) => {
        event.preventDefault();
        setChangeStock(event.target.value);
    }
    const handleChangeDescription = (event) => {
        event.preventDefault();
        setChangeDescription(event.target.value);
    }
    const handleChangeCategory = (event) => {
        event.preventDefault();
        setChangeCategory(event.target.value);
    }
    const handleChangeBrand = (event) => {
        event.preventDefault();
        setChangeBrand(event.target.value);
    }

    const handleDeleteButton = (event) => {
        event.preventDefault()
        const changeID = changeInput
        if(changeID != -1){
            let response = confirm("Delete product id "+changeID+"?");
            if(response){
                const products = [...data.products];
                products.splice(changeID, 1);
                const newData = {products}                
                    if(changeID+1 <= products.length && changeID-1 >= 0){
                        setCurrentProduct(changeID -1)
                        setChangeInput(changeID -1)
                    }else if(changeID-1 >= 0){
                        setCurrentProduct(changeID-1)
                        setChangeInput(changeID-1)
                    }else if(changeID-1 == -1){
                        setCurrentProduct(products[0].id-1)
                    }
                setData(newData);
            }
        }
    }

    const changeFields = (event) => {
        event.preventDefault()
        const changeID = changeInput 
        if(changeID != -1){
            data.products[changeID].title = changeTitle;
            data.products[changeID].price = changePrice;
            data.products[changeID].stock = changeStock;
            data.products[changeID].category = changeCategory;
            data.products[changeID].brand = changeBrand;
            data.products[changeID].rating = changeRating;
            data.products[changeID].description = changeDescription;
            setChangeInput(changeID)  
            alert(`Product "${changeTitle}" updated`)
        }
    }

    const addNewProduct = (event) => {
        event.preventDefault()
        const products =[...data.products];
        products.push(newProductLayout);
        const newData = {products}
        setData(newData);
        generatedID++;
        alert(`Product "${newProductLayout.title}" created`)
    }

    useEffect(() => {
    },[data,changeInput])

    return (
    <>
        <main className="adminSection">
            <form>
            <h2>ADMIN PANEL</h2>
            <h2>CREATE, UPDATE OR DELETE PRODUCT</h2>
                <article className="createProduct">
                        <select value={changeInput} onChange={handleChange} name="" id="chooseProduct">
                            <option value={-1} key={-1}>CREATE NEW PRODUCT</option>
                            {[...data.products].map((product,index) => {
                                return <option value={index} key={index}>{product.title}</option>
                            })}
                        </select>
                            <>
                                    <div>
                                        <img className="productImg" src={changeImage} alt="productimg" />
                                        <div className="rangeDiv">
                                            <h3>{changeStock} STOCK:</h3>
                                            <input onChange={handleChangeStock} value={changeStock} min={1} max={1000} step={1} type="range" />
                                            <h3>{changeRating}<img className='star' src={star} alt='Star' />RATING:</h3>
                                            <input onChange={handleChangeRating} value={changeRating} min={0.1} max={5.0} step={0.1} type="range" />    
                                        </div>
                                    </div>
                                    <h3>{changeInput==-1?`CREATE ARTICLE NUMBER ${generatedID}` : `ARTICLE ID ${changeInput}`}</h3>
                                    <div>
                                        <h3>TITLE:</h3>
                                        <input onChange={handleChangeTitle} value={changeTitle} type="text" />
                                    </div>
                                    <div>
                                        <h3>PRICE:</h3>
                                        <input onChange={handleChangePrice} value={changePrice} type="number" />
                                    </div>
                                    <div>
                                        <h3>CATEGORY:</h3>
                                        <input onChange={handleChangeCategory} value={changeCategory} type="text" />
                                    </div>
                                    <div>
                                        <h3>BRAND:</h3>
                                        <input onChange={handleChangeBrand} value={changeBrand} type="text" />
                                    </div>
                                    <h3>DESCRIPTION:</h3>
                                    <textarea onChange={handleChangeDescription} value={changeDescription}/>
                            </>
                            <div className="adminBtnDiv">
                                <button  className={toggleBtn?"":"disabled"} id="adminDelete" onClick={handleDeleteButton}>DELETE</button>
                                <button  className={toggleBtn?"":"disabled"} id="adminChange" onClick={changeFields}>CHANGE</button>
                                <button className={toggleBtn?"disabled":""} id="adminNew" onClick={addNewProduct}>ADD NEW</button>
                            </div>
                </article>
            </form>
        </section>
        <Footer/>
    </>
      );
}
 
export default AdminPanel;