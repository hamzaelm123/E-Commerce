export default function Profil(props){
    return(<div className="container ">
        <h1>{props.user.fullName}</h1><br></br>
        <h3>Votre historique</h3><br></br>
        {props.user.historique.length>0?props.user.historique.map((e)=>{return<table className=" table table-hover table-secondary my-5">
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Product Quantite</th>
                    <th>unit Price</th>
                </tr>
            </thead>
            <tbody>
                {e.map((el)=>{
                    return <tr>
                        <td>{el.name}</td>
                        <td>{el.quantite}</td>
                        <td>{el.price}</td>
                    </tr>
                })}
            </tbody>
            </table>
        }):<h5>You did not buy anything until this moment</h5>}
        <br></br><button className="btn btn-outline-dark" onClick={props.out}>Deconnexion</button>
    </div>

    )
}