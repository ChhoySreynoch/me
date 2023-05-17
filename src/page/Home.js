import { useState } from "react";
import Card from "../component/Card";

// const { useState } = require("react");

// state in hook - useState
function Home(){
    // define state
    const [count, setCount] = useState(0)
    const [products] = useState(
      [
        {
            id: 1,
            title: "Apple Product - 1",
            thumbnail: "https://cdn.pixabay.com/photo/2016/10/11/09/26/office-1730939_640.jpg"
        },
        {
            id: 2,
            title: "Apple Product - 2",
            thumbnail: "https://cdn.pixabay.com/photo/2016/10/11/09/26/office-1730939_640.jpg"
        },
        {
          id: 3,
          title: "Apple Product - 3",
          thumbnail: "https://cdn.pixabay.com/photo/2016/10/11/09/26/office-1730939_640.jpg"
      },
      {
          id: 4,
          title: "Apple Product - 4",
          thumbnail: "https://cdn.pixabay.com/photo/2016/10/11/09/26/office-1730939_640.jpg"
      }
      ]
   )

   
    return(
        <>
          <h1>You clicked {count} times</h1>
          <button onClick={() => setCount(count + 1)}>Click Me</button>
         <hr/>

          {/* <img src={products[0].thumbnail} alt="" width={300} /> */}

          <section>
            <div className='row'>

              {
                products.map(product => (
                  <div className='col-12 col-sm-6 col-md-3'>
                    <Card title={product.title} thumnail={product.thumbnail}/>
                  </div>
                ))
              }

            </div>
          </section>
        </>
    )
}
export default Home;