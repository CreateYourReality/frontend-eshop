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
    const [deleteInput, setDeleteInput] = useState("")

    let generatedID = data.products.length <= 40 ? 40 : data.products.length; //hardcoden? oder einmalig am anfang length speichern.
    const imgPath = `../src/assets/FakeShop/images/${generatedID}.png`

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

    const handleDelete = (event) => {
        event.preventDefault();
        setDeleteInput(event.target.value);
    }

    const handleDeleteButton = (event) => {
        event.preventDefault();
        const products = [...data.products];
        console.log(deleteInput);
        products.splice(deleteInput, 1);
        const newData = {products}
        console.log(newData);
        setData(newData);
    }

    const addNewProduct = (event) => {
        event.preventDefault();
        const products =[...data.products];
        products.push(newProductLayout);
        const newData = {products}
        console.log(newData);
        setData(newData);
        generatedID++;

     //   let response = confirm("Neues Produkt wurde erstellt. Auf Home zurückkehren?");
     //   response? useNavigate("./home") : null;
    }

    useEffect(() => {

    },[data])


    return (
    <>
        <section className="adminSection">
            <form onSubmit={addNewProduct}>
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

                <hr />

                <label htmlFor="">DELETE
                    <select onChange={handleDelete} name="" id="">
                        <option key={-1}>NONE</option>

                        {[...data.products].map((product,index) => {
                          return <option value={index} key={index}>{product.title}</option>
                        })}
                    </select>

                        <button onClick={handleDeleteButton}>DELETE</button>
                </label>


            </form>
        </section>
        <Footer/>
    </>
      );
}
 
export default AdminPanel;