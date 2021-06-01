import React from 'react'
import { List, message, Avatar, Spin } from 'antd';


const SingleSourcedArticlesList = ({urlToImage, title, description, publishedAt}) => {
    
    return (

       <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "800px", marginTop: '10px', backgroundColor: "grey"}}>
           <div>
               <img src={urlToImage} alt=""  style={{width: "100px", height: "100px"}}/>
           </div>
           <div style={{display: "flex", flexDirection: "column"}}>
               <h1>{title}</h1>
                <p>{description}</p>
                <h3>{publishedAt}</h3>
           </div>
       </div>
    )
}

export default SingleSourcedArticlesList
