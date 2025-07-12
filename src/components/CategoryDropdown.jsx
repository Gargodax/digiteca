import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../css/CategoryDropdown.css';
import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../service/firebase.jsx";


const CategoryDropdown = () => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    // Traer categorias de Firebase
    useEffect(() => {
        // Conexión con la colección de Firebase
        const booksCollection = collection(dataBase, 'books');
        // Solicitud de los datos
        getDocs(booksCollection)
            .then((res) => {
                // Extraer las categorías únicas y capitalizar la primera letra
                const uniqueCategories = [...new Set(
                    res.docs.map(doc => doc.data().category.charAt(0).toUpperCase() + doc.data().category.slice(1).toLowerCase())
                )];
                // Ordenarlas alfabéticamente
                const sortedCategories = uniqueCategories.sort((a, b) => a.localeCompare(b));
                setCategories(sortedCategories.map(name => ({ name })));
            })
            .catch((error) =>
                console.error("Error fetching categories: ", error))

    }, [categories.length]);

    return (
        <div className="category-dropdown">
            <select id="category-select" className="category-select"
                onChange={(e) => {
                    const selectedCategory = e.target.value;
                    if (selectedCategory) {
                        navigate(`/category/${selectedCategory.toLowerCase()}`);
                    }
                }}
            >
                <option value="Todas las categorías">Todas las categorías</option>
                {categories.map((category, index) => (
                    <option key={index} value={category.name}>
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CategoryDropdown;
