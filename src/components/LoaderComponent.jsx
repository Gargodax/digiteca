import { CircleLoader } from "react-spinners";

const LoaderComponent = () => {
    return (
        <div style={{ width: '100%', height: '85vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircleLoader
                color={"#5a6f8c"}
                size={100}
                speedMultiplier={0.5}
            />
        </div>
    )
}

export default LoaderComponent
