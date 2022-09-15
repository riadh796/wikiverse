import React from "react";

export const SinglePage=({singlePage,setSinglePage})=>{
    return(<>
    <h1>{singlePage.title}</h1>
    <h3>title:{singlePage.title}</h3>
    <h3>author:{singlePage.author.name}</h3>
    <h3>Published at: {singlePage.createdAt}</h3>
    <h3>Tag:{singlePage.tags.map((tag,idx)=>(<p key={idx}>{tag.name}</p>))}</h3>
    <button onClick={() => setSinglePage(false)}>lets back to wikilist</button>


   
    
    </>)
} 