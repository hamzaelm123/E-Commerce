import './App.css';
import {useState} from 'react';
import Header from './Components/Header';
import Connexion from './Components/Connexion';
import Profil from './Components/Profil';
import Product from './Components/Product';
function App() {
  const [products,setProducts]=useState([
    {
      id:1,name:'PS4',price:500,categorie:'Gaming',image:'PS4.png',comments:[]
    },
    {
      id:2,name:'PS5',price:550,categorie:'Gaming',image:'PS5.png',comments:[]
    },
    {
      id:3,name:'God Of War',price:70,categorie:'Gaming',image:'GOW.png',comments:[]
    },
    {
      id:4,name:'Red Dead Redemption II',price:70,categorie:'Gaming',image:'RDR2.png',comments:[]
    },
    {
      id:5,name:'Grand Theft Auto VI',price:80,categorie:'Gaming',image:'GTA6.png',comments:[]
    },
    {
      id:6,name:'Spiderman 2',price:500,categorie:'Gaming',image:'SP2.png',comments:[]
    },
    {
      id:7,name:'SAMSUNG S24',price:1000,categorie:'Smartphone',image:'S24.png',comments:[]
    },
    {
      id:8,name:'T-Shirt',price:20,categorie:'Clothes',image:'t-shirt.png',comments:[]
    },
    {
      id:9,name:'AirJordan',price:400,categorie:'Clothes',image:'jordan.png',comments:[]
    },
    {
      id:10,name:'ASUS ROG STRIX 15',price:2000,categorie:'Electronics',image:'laptop.png',comments:[]
    },
    {
      id:11,name:'Atomic Habits',price:15,categorie:'Book',image:'atomic.png',comments:[]
    },
    {
      id:12,name:'Auto Entrepreneur',price:100000000000000,categorie:'Entrepreneur',image:'fototeta.jpg',comments:[]
    }
  ])
  const [users,setUsers]=useState([{id:1,fullName:'Elmazroua Hamza',password:'hamza',cart:[],historique:[]},{id:2,fullName:'Itashi',password:'hamza',cart:[],historique:[]}])
  const [show,setShow]=useState('Products');
  const [cat,setCat]=useState('');
  const [search,setSearch]=useState('')
  const [user,setUser]=useState({})
  const [userName,setUserName]=useState('')
  const [msg,setMsg]=useState('')
  const [product,setProduct]=useState({})
  
  const onConnexion=(name,pass)=>{
    let test=false;
    users.map((element)=>{
      if(element.fullName===name&&element.password===pass){
        setUser({...element})
        setUserName(name)
        test=true
        setMsg('')
        
      }
    })
    if(test===false){
      setMsg('Name or password is incorrect')
      setUserName('')
    }
  }
  
  const onClickedHeader=(show,cat,search)=>{
    setShow(show);
    setCat(cat)
    setSearch(search)
  }

  const ShowMore=(element)=>{
    setProduct(products.filter((e)=>e.id===element))
    setShow('Detail')
  }

const showComments=(id)=>{
  let comm=products.filter((e)=>e.id===id)
  return comm[0].comments.map((e)=>{
    return <div>
      <h4>{e.user}</h4>
      <p>{e.comment}</p>
    </div>
  })
}

  const handleComm=(comm,id)=>{
      setProducts(products.map((elements)=>{
        if(elements.id===id){
          console.log(elements)
          return {...elements,comments:[...elements.comments,{user:userName,comment:comm}]}
          
        }
        return elements
      }))
  }

  const ShowProducts=()=>{
    return products.map((element,index)=><div className='d-flex-column flex-wrap col-sm-12 col-md-5 col-lg-3 justify-content-center m-2 px-2 py-3 border border-warning col-xl-2' key={index}>
    <img className='img rounded col-sm-6 col-md-8 col-lg-10' src={element.image} alt=''></img>
    <h3>{element.name}</h3>
    <h4>{element.price}$</h4>
    <h4>Categorie: {element.categorie}</h4>
    <button type='button'  onClick={()=>AddToCart(element)} className='btn btn-primary'>Add To Cart</button>
    <button type='button' onClick={()=>ShowMore(element.id)} className='btn btn-outline-secondary'>Show more</button>
   
</div>)
  }

  const AddToCart=(item)=>{
    let test=false
    users.map((e)=>{
      if(e.id===user.id){
        e.cart.map((element)=>{
          if(element.name===item.name){
            test=true}
        })
      }
    })
    if(test===false){
      setUsers(users.map((element)=>{
      if(element.id===user.id){
        return {...element,cart:[...element.cart,{id:item.id,name:item.name,price:item.price,categorie:item.categorie,image:item.image,quantite:1}]}
      }
      return element
    }))
    }
    
  }

  const ShowCtaegorie=(f)=>{
    let updated=products.filter((element)=>element.categorie===f)
    return updated.length>0? updated.map((element,index)=><div className='d-flex-column flex-wrap col-sm-12 col-md-5 col-lg-3 justify-content-center m-2 px-2 py-3 border border-warning col-xl-2' key={index}>
    <img className='img rounded col-sm-6 col-md-8 col-lg-10' src={element.image} alt=''></img>
    <h3>{element.name}</h3>
    <h4>{element.price}$</h4>
    <h4>Categorie: {element.categorie}</h4>
    <button type='button'  onClick={()=>AddToCart(element)} className='btn btn-primary'>Add To Cart</button>
   
</div>)
    :<h3 className='text-centre'>This Categorie has no product yet</h3>
  }

  const ShowSearch=(f)=>{
    let updated=products.filter((element)=>element.name===f)
    return updated.length>0? updated.map((element,index)=><div className='d-flex-column flex-wrap col-sm-12 col-md-5 col-lg-3 justify-content-center m-2 px-2 py-3 border border-warning col-xl-2' key={index}>
    <img className='img rounded col-sm-6 col-md-8 col-lg-10' src={element.image} alt=''></img>
    <h3>{element.name}</h3>
    <h4>{element.price}$</h4>
    <h4>Categorie: {element.categorie}</h4>
    <button type='button'  onClick={()=>AddToCart(element)} className='btn btn-primary'>Add To Cart</button>
   
</div>)
    :<h3 className='text-center'>The product that you re looking for not found</h3>
  }

  const ShowCart=()=>{
    return users.map((e)=>{
      if(e.id===user.id){ 
        return e.cart.length>0?<div className='cart'>
        {e.cart.map((element,index)=><><div key={index} className='cartItems'>
          <img className='citem' src={element.image} alt=''></img>
          <div className='cartItem'>
            <h5>{element.name}</h5>
            <button type='button' onClick={()=>AddQTE(element.id)}>+</button>
            <h6>{element.quantite}</h6>
            <button type='button' onClick={()=>SubQTE(element.id)}>-</button>
            <p>{element.price*element.quantite}$</p>
            <button type='button' onClick={()=>deleteCartItem(element.id)}>X</button>
          </div>
        </div>
         
        </>)}
        <h4>TOTAL : {ShowTotal()}$</h4><br></br>
        <button className='btn btn-primary' onClick={()=>pay()}>Pay</button>
    </div>
    :<h1 className='text-center'>No product in your cart items</h1>
      }
    })
    }
  
  const pay=()=>{
    setUsers(users.map((e)=>{
      if(e.id===user.id){
        return {...e,cart:[],historique:[...e.historique,e.cart]}
      }
      return e
    }))
    setShow('Products')
  }
  const AddQTE=(id)=>{
    setUsers(users.map((element)=>{
      if(element.id===user.id){
        return {...element,cart:element.cart.map((e)=>{
          if(e.id===id){
            return {...e,quantite:e.quantite+1}
          }
          return e
        })}
      }
      return element
    }))
  }
  const SubQTE=(id)=>{
    setUsers(users.map((element)=>{
      if(element.id===user.id){
        return {...element,cart:element.cart.map((e)=>{
          if(e.id===id&&e.quantite>=2){
            return {...e,quantite:e.quantite-1}
          }
          return e
        })}
      }
      return element
    }))
  }
  const deleteCartItem=(id)=>{
    setUsers(users.map((element)=>{
      if(element.id===user.id){
        return {...element,cart:element.cart.filter((e)=> e.id!==id)}
      }
      return element
    }))
  }
  const ShowTotal=()=>{
    let total=users.map((e)=>{
      if(e.id===user.id){
        return e.cart.reduce(function(prev,curr){return prev+=curr.price*curr.quantite},0)}
      }
      )
    return total
  }

  const deconnexion=()=>{
    setUserName('')
    setUser({})
    setShow('Products')
  }
    
  return (
      <div className="App">
      {userName===''?<Connexion Connexion={onConnexion} Msg={msg}/>
      :<><Header clicked={onClickedHeader}/>
        <section className='d-flex flex-wrap col-12 flex-sm-column flex-md-row container'>
          {show==='Products'?ShowProducts()
          :show==='Categorie'?ShowCtaegorie(cat)
          :show==='search'&&search!==''?ShowSearch(search)
          :show==='Panier'?ShowCart()
          :show==='Profil'?<Profil out={deconnexion} user={users[user.id-1]} />
          :show==='Detail'?<Product item={product} s={showComments} Comments={handleComm}/>
          :''
          
        }
      </section>
      </>
}
    </div>
  );
}

export default App;