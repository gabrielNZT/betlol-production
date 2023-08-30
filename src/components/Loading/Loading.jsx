import "./style.css";

const Loading = ({ loading }) => {
    return (
        <>
            {loading && (
                <div className="loading-spinner-overlay">
                    <div className="loading-spinner-container">
                        <div className="loading-spinner"></div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Loading;