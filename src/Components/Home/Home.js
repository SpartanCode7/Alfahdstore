import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

import axios from 'axios'

function Home() {
    const [post, setPosts] = useState([])
    const [cats, setCats] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((response) => {
            setPosts(response.data)
        })

        axios.get('https://fakestoreapi.com/products/categories').then((response) => {
            setCats(response.data)
        })
    })

  return (
    <div className="home">
         <div className="banner">
          <div className="container">
              <div className="box">
                  <h1>Transform Your Furniture<br />with The <b>New Covers</b></h1>
                  <button>GET 50% OFF NOW</button>
              </div>
          </div>
      </div>
      <div className="categories">
          <div className="container">
              <div className="categories__inner">
                    {cats.map((cat) => {
                      return (
                          <div className="box">
                              console.log(cat)
                              {/* <Link to="/bedding"><h1>{cat}</h1></Link> */}
                          </div>
                      );
                   })}
              </div>
          </div>
      </div>
      <div className="deal__of__the__day">
          <div className="container">
              <div className="deal__of__the__day__inner">
                  <div className="box">
                      <img src="https://alfahdstore.com/wp-content/uploads/2022/07/AFSC0472-sofa-cover-min-300x300.jpg06/sofa-cover.svg" alt='Offer-Product' />
                  </div>
                  <div className="box">
                      <h2>Deal of the day</h2>
                      <p>Plain Cotton Jersey Fitted Sofa Cover In Grey Color</p>
                      <button>BUY NOW</button>
                  </div>
              </div>
          </div>
      </div>
      <div className="best__selling">
          <span>Bring identity home</span>
          <h2>Best Selling Product</h2>
          <div className="container">
              <div className="best__selling__inner">
                   {post.map((posts) => {
                      return (
                          <div className="box">
                              <img src={posts.image} alt="" />
                              <h5>{posts.title}</h5>
                              <h6>₨ {posts.rating.rate} – ₨ {posts.rating.count}</h6>
                          </div>
                      );
                   })}
              </div>
          </div>
      </div>
      <div className="reason__to__buy">
          <div className="container">
              <div className="reason__to__buy__inner">
                  <div className="box">
                      <h6>FREE SHIPPING</h6>
                      <p>On all orders over Rs. 1999/-</p>
                  </div>
                  <div className="box">
                      <h6>FREE SHIPPING</h6>
                      <p>On all orders over Rs. 1999/-</p>
                  </div>
                  <div className="box">
                      <h6>FREE SHIPPING</h6>
                      <p>On all orders over Rs. 1999/-</p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Home