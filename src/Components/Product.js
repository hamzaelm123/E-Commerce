import Comments from './Comments'
export default function Product(props){
    return <div className='container d-flex-column flex-wrap col-sm-12 col-md-5 col-lg-3 justify-content-center m-2 px-2 py-3 col-xl-2'>
    <img className='img img-rounded col-sm-6 col-md-8 col-lg-10' src={props.item[0].image} alt=''></img>
    <h3>{props.item[0].name}</h3>
    <h4>{props.item[0].price}$</h4>
    <h4>Categorie: {props.item[0].categorie}</h4>
    <Comments Submit={props.Comments} id={props.item[0].id}/>
        {props.s(props.item[0].id)}
    </div>
}