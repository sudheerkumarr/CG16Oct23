const Card = (props) => {
    return (
        <div>
            <div key="{props.customer.id}" className="card mb-3" style={{ width: "18rem" }}>
                <img src={props.customer.avatar} className="card-img-top" alt="{props.customer.first_name}" />
                <div className="card-body">
                    <h5 className="card-title">{props.customer.first_name}</h5>
                    <p className="card-text">{props.customer.email}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;