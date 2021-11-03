import React, { Component ,useState } from 'react';
import'./comment.css';
import {FaStar} from'react-icons/fa';



const Comment=()=>{

    const[rating,setRating]=useState(null);
    const[hover,setHover]=useState(null);

    return <div className='Comment' >
        

        {[...Array(5)].map((star,i)=>{
            const ratingValue = i + 1;
            

            return (
                <div>
                     <label>
                    <input type="radio"
                    name='rating'
                    value={ratingValue}
                    onClick={()=>setRating(ratingValue)}
                    
                    />
                      <FaStar className='star'
                       color={ ratingValue <=( hover || rating)  ? "#FFDC35":"#D0D0D0" }
                       size={40}
                       onMouseEnter={()=>setHover(ratingValue)}
                       onMouseLeave={()=>setHover(null)}    />
                </label>

                
                </div>
            )  }
              )}

          {/* <p>推薦指數:{rating}</p> */}
        
        
      
    </div>
}

export default Comment ;


// class Comment  extends React.Component {
//     render() { 
//         return <div>
//             <h1>Comment</h1>
//         </div>;
//     }
// }
 
// export default Comment ;