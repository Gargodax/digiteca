import { Link } from "react-router-dom";
const ErrorPage = (props) => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <img className="home-logo-image"
                src="../src/assets/images/errorPage.png"
                alt="Página no encontrada"
            />
            <h1>{props.message}</h1>
            <p>Lo sentimos, el elemento que buscas no existe.</p>
            <Link to="/" style={{ color: 'blue', textDecoration: 'underline' }}>Volver al inicio</Link>
        </div>
    );
}

export default ErrorPage;