const ErrorPage = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Página no encontrada</h1>
            <p>Lo sentimos, la página que estás buscando no existe.</p>
            <a href="/" style={{ color: 'blue', textDecoration: 'underline' }}>Volver al inicio</a>
        </div>
    );
}

export default ErrorPage;