import Icon404 from "../Component/Icon404";

export default function PageNotFound() {
    return (
        <div style={{
            backgroundColor: "#f8f8ff",
        }}>
            <div style={{
                position: "relative",
                textAlign: "center",
            }}>
                <Icon404/>
                <h1>Ooops page not found <a href='/'>Back to HOME</a></h1>
            </div>
        </div>

    )
}