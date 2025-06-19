import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <img className="home-logo-image"
                src="../src/assets/images/errorPage.png"
                alt="Página no encontrada"
            />
            <h1>Página no encontrada</h1>
            <p>Lo sentimos, la página que estás buscando no existe.</p>
            <Link to="/" style={{ color: 'blue', textDecoration: 'underline' }}>Volver al inicio</Link>
        </div>
    );
}

export default ErrorPage;