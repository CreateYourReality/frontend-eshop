const CategorieContainer = ({text, setCategorie}) => {
    return ( 
        <div className="categorieContainer" onClick={() => setCategorie([[text],[],[]])}>
            <img src="" alt={`${text}-Logo`}/>
            <p>{text}</p>
        </div>
     );
}
 
export default CategorieContainer;