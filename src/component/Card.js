

function Card({title, thumnail}){
    return(
        <div class="card">
          <img src={thumnail} class="card-img-top " alt="product"/>
          <div class="card-body">
             <p class="card-text">{title}</p>
          </div>
       </div>
    )
}
export default Card;