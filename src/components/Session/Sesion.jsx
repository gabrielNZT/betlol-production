import "./style.css";

const Session = ({ children, style }) => {
    return (
        <div style={style} className="results_header">
            <h1> {children} </h1>
        </div>
    )
}

export default Session;