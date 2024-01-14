// import React, { useState } from "react"
// import ProductData from "./ProductData"
// import './styles.css'



// const Product = () => {
//   const [detail, setDetail] = useState([]);
//   const detailPage = (Product) => {
//     setDetail([{...Product}])
//   }
//   return (
//     <>
//     <div className="detail-container">
//       <div className="detail-content">
//         {
//           detail.map((y) =>
//           {
//             return(
//               <>
//               <div className="detail-info">
//                 <div className="img-box">
//                   <img src={y.url} alt={y.name}></img>
//                   <div className="product-detail">
//                     <h3> {y.name}</h3>
//                     <h4>{y.category}</h4>
//                     <p>{y.description}</p>
//                   </div>
//                 </div>
//               </div>
//               </>
//             )
//           }
//           )

//         }
//       </div>
//     </div>
//     <div className="container"> {
//       ProductData.map((curElm) =>
//       {
//         return (
//           <>
//           <div className="box">
//             <div className="content">
//               <div className="img-box">
//                 <img src = {curElm.url} alt={curElm.name}></img>
//                 <div className="detail">
//                   <div className="info">
//                     <h3> {curElm.name}</h3>
//                     <p>{curElm.category}</p>

//                   </div>
//                   <div className="button">
//                     <button onClick={()=>detailPage(curElm)}>View</button>
//                   </div>

//                 </div>

//               </div>

//             </div>

//           </div>
//           </>
//         )
//       }
//       )
//     }


//     </div>
//     </>
//   )
// }
// export default Product

// import React, { useState } from "react";
// import ProductData from "./ProductData";
// import './styles.css';

// const Product = () => {
//   const [detail, setDetail] = useState([]);
//   const [flaggedProducts, setFlaggedProducts] = useState([]);

//   const detailPage = (product) => {
//     setDetail([{...product, isFlagged: flaggedProducts.includes(product.id)}]);
//   };

//   const flagProduct = (productId) => {
//     console.log(`Product flagged: ${productId}`);
//     setFlaggedProducts([...flaggedProducts, productId]);
//   };

//   return (
//     <>
//       <div className="detail-container">
//         <div className="detail-content">
//           {detail.map((product) => (
//             <div key={product.id} className="detail-info">
//               <div className="img-box">
//                 <img src={product.url} alt={product.name}></img>
//                 <div className="product-detail">
//                   <h3>{product.name}</h3>
//                   <h4>{product.category}</h4>
//                   <p>{product.description}</p>
//                   {product.isFlagged && <p>Flagged</p>}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="container">
//         {ProductData.map((product) => (
//           <div key={product.id} className="box">
//             <div className="content">
//               <div className="img-box">
//                 <img src={product.url} alt={product.name}></img>
//                 <div className="detail">
//                   <div className="info">
//                     <h3>{product.name}</h3>
//                     <p>${product.price}</p>
//                   </div>
//                   <div className="buttons">
//                     <button onClick={() => detailPage(product)}>View</button>
//                     <button onClick={() => flagProduct(product.id)}>Flag</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Product;

import React, { useState } from "react";
import ProductData from "./ProductData";
import './styles.css';

const Product = () => {
  const [detail, setDetail] = useState([]);
  const [flaggedProducts, setFlaggedProducts] = useState([]);
  const [sortOption, setSortOption] = useState("name"); // Default sort by name
  const [sortOrder, setSortOrder] = useState("asc"); // Default sort in ascending order
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [flaggedFilter, setFlaggedFilter] = useState(false);

  const sortProducts = (a, b) => {
    const aValue = a[sortOption];
    const bValue = b[sortOption];

    if (sortOption === "price") {
      return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
    } else {
      return sortOrder === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
    }
  };

  const filteredProducts = ProductData
    .filter(product => (!categoryFilter || product.category === categoryFilter) &&
                       (!flaggedFilter || flaggedProducts.includes(product.id)))
    .sort(sortProducts);

  const detailPage = (product) => {
    setDetail([{...product, isFlagged: flaggedProducts.includes(product.id)}]);
  };

  const flagProduct = (productId) => {
    
    console.log(`Product flagged: ${productId}`);
    setFlaggedProducts([...flaggedProducts, productId]);
  };

  return (
    <>
      <div className="sorting-filtering">
        <label>
          Sort by:
          <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
        </label>

        <label>
          Order:
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>

        <label>
          Filter by Category:
          <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
            <option value="">All</option>
            <option value="gold">Gold</option>
            <option value="aptamer">Aptamer</option>
            
          </select>
        </label>

        <label>
          Filter by Flagged:
          <input
            type="checkbox"
            checked={flaggedFilter}
            onChange={() => setFlaggedFilter(!flaggedFilter)}
          />
        </label>
      </div>

<div className="detail-container">
        <div className="detail-content">
          {detail.map((product) => (
            <div key={product.id} className="detail-info">
              <div className="img-box">
                <img src={product.url} alt={product.name}></img>
                <div className="product-detail">
                  <h3>{product.name}</h3>
                  <h4>{product.category}</h4>
                  <p>{product.description}</p>
                  {product.isFlagged && <p>Flagged</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        {filteredProducts.map((product) => (
          <div key={product.id} className="box">
            <div className="content">
              <div className="img-box">
                <img src={product.url} alt={product.name}></img>
                <div className="detail">
                  <div className="info">
                    <h3>{product.name}</h3>
                    <p> ${product.price}</p>
                  </div>
                  <div className="buttons">
                    <button onClick={() => detailPage(product)}>View</button>
                    <button onClick={() => flagProduct(product.id)}>Flag</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      
    </>
  );
};

export default Product;
