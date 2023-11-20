export default function Header(props){
    const onClick=(show,cat,search,user)=>{
        props.clicked(show,cat,search,user)
    }
    return <nav className="navbar navbar-expand-lg navbar-light bg-warning">
    <a className="navbar-brand" href="#">E-Commerce Web Site</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#" onClick={()=>{onClick('Products','','')}}>Product <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
        <select className="nav-link form-select" onClick={(e)=>{onClick('Categorie',e.target.value,'')}}>
          <option value='Products'>Choose Categorie</option>
          <option value='Gaming'>Gaming</option>
          <option value='Clothes'>Clothes</option>
          <option value='Smartphone'>SmartPhone</option>
          <option value='Electronics'>Electronics</option>
          <option value='Book'>Books</option>
          <option value='Entrepreneur'>Entrepreneur</option>
        </select>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <button type="button" className="btn btn-outline-danger" onClick={()=>onClick('Profil','','',)}>Profil</button>
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{onClick('search','',e.target.value)}}></input>
        <button className="btn btn-outline-danger my-2 my-sm-0" onClick={()=>onClick('Panier','','')} type="button">Panier</button>
      </form>
    </div>
  </nav>
}

