import { useContext, useState } from "react";
import { dataContext } from "../../context/Context";
import {Link, useNavigate} from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./AdminPanel.css"

const AdminPanel = () => {
    const {data,setData} = useContext(dataContext)
    const [titleInput, setTitleInput] = useState("")
    const [descriptionInput, setDescriptionInput] = useState("")
    const [priceInput, setPriceInput] = useState("")
    const [ratingInput, setRatingInput] = useState("")
    const [stockInput, setStockInput] = useState("")
    const [categoryInput, setCategoryInput] = useState("")
    const [brandInput, setBrandInput] = useState("")
    const [deleteInput, setDeleteInput] = useState("")

    let generatedID = data.products.length;
    const imgPath = `../src/assets/FakeShop/images/${generatedID}.png`

    const newProductLayout = { 
			"id": generatedID,
			"title": titleInput,
			"description": descriptionInput,
			"price": priceInput,
			"rating": priceInput,
			"stock": stockInput,
			"brand": brandInput,
			"category": categoryInput,
			"image": imgPath
        }

    const handleTitle = (event) => {
        event.preventDefault();
        setTitleInput(event.target.text)
    }

    const handleDescription = (event) => {
        event.preventDefault();
        setDescriptionInput(event.target.text)
    }

    const handlePrice = (event) => {
        event.preventDefault();
        setPriceInput(event.target.text)
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
        setCategoryInput(event.target.text)
    }

    const handleBrand = (event) => {
        event.preventDefault();
        setBrandInput(event.target.text)
    }

    const handleDelete = (event) => {
        event.preventDefault();
        setDeleteInput(event.target.value);
    }

    const handleDeleteButton = (event) => {
        event.preventDefault();
        console.log(deleteInput);
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


    return (
    <>
        <section className="adminSection">
            <form >
                <label htmlFor="title">Title: 
                    <input name="title" type="text" onChange={handleTitle} />
                </label>
                <label htmlFor="description">Description: 
                    <input name="description" type="text" onChange={handleDescription} />
                </label>
                <label htmlFor=""> Price: 
                    <input type="text" onChange={handlePrice} />
                </label>
                <label htmlFor=""> Rating: {ratingInput}
                    <input type="range" max={5.0} min={0.0} step={0.1} onChange={handleRating} />
                </label>
                <label htmlFor=""> Stock: {stockInput}
                    <input type="range" max={1000.0} min={0} step={1} onChange={handleStock} />
                </label>
                <label htmlFor=""> brand: 
                    <input type="text" onChange={handleBrand} />
                </label>
                <label htmlFor=""> category: 
                    <input type="text" onChange={handleCategory} />
                </label>
              
                <button onClick={addNewProduct}>ADD NEW PRODUCT</button>

                <hr />

                <label htmlFor="">DELETE
                    <select onChange={handleDelete} name="" id="">
                        {[...data.products].map((product,index) => {
                          return <option key={index}>{product.title}</option>
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