import './Content.css'
const Content = ({ h6Title, pDesc }) => {
    return (
        <>
            <div className="Content">
                <h6>{h6Title}</h6>
                <p>
                    {pDesc}
                </p>
            </div>
        </>
    )
}

export default Content