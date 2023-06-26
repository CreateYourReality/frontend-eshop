import { useContext, useEffect, useState } from "react";
import { dataContext } from "../../context/Context";
import {Link, useNavigate} from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./AdminPanel.css"

const AdminPanel = () => {
    const {data,setData} = useContext(dataContext)
    const [titleInput, setTitleInput] = useState("")
    const [descriptionInput, setDescriptionInput] = useState("")
    const [priceInput, setPriceInput] = useState("")
    const [ratingInput, setRatingInput] = useState(2.5)
    const [stockInput, setStockInput] = useState(1)
    const [categoryInput, setCategoryInput] = useState("")
    const [brandInput, setBrandInput] = useState("")

    const [changeInput, setChangeInput] = useState("")
    const [changeTitle, setChangeTitle] = useState("")
    const [changePrice, setChangePrice] = useState("")
    const [changeRating, setChangeRating] = useState("")
    const [changeDescription, setChangeDescription] = useState("")
    const [changeImage, setChangeImage] = useState("")

    let generatedID = data.products.length <= 40 ? 40 : data.products.length; //hardcoden? oder einmalig am anfang length speichern.
    const imgPath = `../src/assets/FakeShop/images/default.png`

    const newProductLayout = { 
			"id": generatedID,
			"title": titleInput,
			"description": descriptionInput,
			"price": priceInput,
			"rating": ratingInput,
			"stock": stockInput,
			"brand": brandInput,
			"category": categoryInput,
			"image": imgPath
        }

    const handleTitle = (event) => {
        event.preventDefault();
        setTitleInput(event.target.value)
    }

    const handleDescription = (event) => {
        event.preventDefault();
        setDescriptionInput(event.target.value)
    }

    const handlePrice = (event) => {
        event.preventDefault();
        setPriceInput(event.target.value)
    }

    const handleRating = (event) => {
        event.preventDefault();
        setRatingInput(event.target.value)
    }

    const handleStock = (event) => {
        event.preventDefault();
        setStockInput(event.target.value)
    }

    const handleCategory = (event) => {
        event.preventDefault();
        setCategoryInput(event.target.value)
    }

    const handleBrand = (event) => {
        event.preventDefault();
        setBrandInput(event.target.value)
    }

    const handleChange = (event) => {
        event.preventDefault();     
        const changeID = event.target.value;                           
        setChangeInput(changeID);
        setChangeTitle(data.products[changeID].title);
        setChangePrice(data.products[changeID].price);
        setChangeDescription(data.products[changeID].description);
        setChangeRating(data.products[changeID].rating);
    }

    const handleChangeTitle = (event) => {
        event.preventDefault();
        setChangeImage(data.products[changeInput].image)
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
    const handleChangeDescription = (event) => {
        event.preventDefault();
        setChangeDescription(event.target.value);
    }

    const handleDeleteButton = (event) => {
        event.preventDefault();
        if(changeInput != ""){
            let response = confirm("Willst du wirklich das Produkt löschen?");
            if(response){
                const products = [...data.products];
                products.splice(changeInput, 1);
                const newData = {products}
                setData(newData);
            }  
        }
    }

    const changeFields = (event) => {
        event.preventDefault();
        if(changeInput != ""){
            data.products[changeInput].title = changeTitle;
            data.products[changeInput].price = changePrice;
            data.products[changeInput].rating = changeRating;
            data.products[changeInput].description = changeDescription;
        }
    }

    const addNewProduct = (event) => {
        event.preventDefault();
        const products =[...data.products];
        products.push(newProductLayout);
        const newData = {products}
        setData(newData);
        generatedID++;

     //   let response = confirm("Neues Produkt wurde erstellt. Auf Home zurückkehren?");
     //   response? useNavigate("./home") : null;
    }

    useEffect(() => {

    },[data,changeImage])

    return (
    <>
        <section className="adminSection">
            <form onSubmit={addNewProduct}>
            <h2>NEUES PRODUKT ERSTELLEN</h2>
                <article className="addProduct">    
                <label htmlFor="title">Title: 
                    <input required name="title" type="text" onChange={handleTitle} />
                </label>
                <label htmlFor="description">Description: 
                    <input required name="description" type="text" onChange={handleDescription} />
                </label>
                <label htmlFor=""> Price: 
                    <input required type="number" onChange={handlePrice} />
                </label>
                <label htmlFor=""> Rating: {ratingInput}
                    <input required type="range"  value={ratingInput} max={5.0} min={0.0} step={0.1} onChange={handleRating} />
                </label>
                <label htmlFor=""> Stock: {stockInput}
                    <input required type="range" value={stockInput} max={1000.0} min={1} step={1} onChange={handleStock} />
                </label>
                <label htmlFor=""> brand: 
                    <input required type="text" onChange={handleBrand} />
                </label>
                <label htmlFor=""> category: 
                    <input required type="text" onChange={handleCategory} />
                </label>
                <input type="submit" value="ADD NEW PRODUCT"/>
                </article>
                <article className="createProduct">
                    <h2>PRODUKT ÄNDERN ODER ENTFERNEN</h2>
                        <select onChange={handleChange} name="" id="">
                            <option key={-1}>NONE</option>
                            {[...data.products].map((product,index) => {
                                return <option value={index} key={index}>{product.title}</option>
                            })}
                        </select>
                            <>
                                {console.log(changeImage)}
                                <img src={changeImage} alt="" />
                                <h3>ARTIKEL ID {changeInput}</h3>
                                <label htmlFor=""> TITLE: 
                                    <input onChange={handleChangeTitle} value={changeTitle} type="text" />
                                </label>
                                <label htmlFor="">PRICE: 
                                    <input onChange={handleChangePrice} value={changePrice} type="text" />
                                </label>
                                <label htmlFor="">RATING: 
                                    <input onChange={handleChangeRating} value={changeRating} min={0.1} max={5.0} step={0.1} type="range" />
                                    {changeRating}
                                </label>
                                <label htmlFor="">DESCRIPTION:
                                    <textarea onChange={handleChangeDescription} value={changeDescription}/>
                                </label>

                            
                                {data.products[0].category}
                                {data.products[0].brand}
                                {data.products[0].stock}
                                
                            </>
                        
                            <div>
                                <button onClick={handleDeleteButton}>DELETE</button>
                                <button onClick={changeFields}>CHANGE</button>
                            </div>
                </article>
            </form>
        </section>
        <Footer/>
    </>
      );
}
 
export default AdminPanel;