import { products } from './Products';
import '../components/cart.css';




function Cart() {


    function handleclick(index){
    let newindex=products.map((p,ind)=>{ind!==index})
    console.log(newindex);
    
    }


    return (
    <div className='box-model'>
    {products && products.map((p,index)=>(
        <div key={index} className=''>    
        <div  className="card cardshadow" style={{width:"18rem"}}>
    <img src={p.img} className="card-img-top" alt="product"></img>
    <div className="card-body">
      <h5 className="card-title">{p.name}</h5>
      <p className="card-text ">{"Rs:"+p.price+" /."} </p>
      <button   className="btn btn-primary" id='cartbtn' style={{}}  onClick={()=>{handleclick(index)}}>{"Cart"}</button>
      <div id='addsub'>
      <button>-</button>   <button>1</button>  <button>+</button>
      </div>
    </div>
    </div>
    </div>
    
))}
  </div>

  )
    }


export default Cart