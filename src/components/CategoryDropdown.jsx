import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import '../css/CategoryDropdown.css';

const CategoryDropdown = () => {
    const [categories, setCategories] = useState([]);
    const { data, loading, error } = useFetch('/data/fakeBooks.json');
    const navigate = useNavigate();

    useEffect(() => {
        if (data) {
            // Extraer las categorías únicas y capitalizar la primera letra
            const uniqueCategories = [...new Set(
                data.map(book =>
                    book.category.charAt(0).toUpperCase() + book.category.slice(1).toLowerCase()
                )
            )];
            // Ordenarlas alfabéticamente
            const sortedCategories = uniqueCategories.sort((a, b) => a.localeCompare(b));
            setCategories(sortedCategories.map(name => ({ name })));
        }
    }, [data]);

    if (loading) return <p>Cargando categorías...</p>;
    if (error) return <p>Error al cargar categorías: {error}</p>;
    if (!categories.length) return <p>No hay categorías disponibles.</p>;

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
