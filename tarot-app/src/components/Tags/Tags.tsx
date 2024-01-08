import { useParams } from "react-router-dom";
import "./Tags.css";
import React, { useEffect, useState } from "react";
import { Tag } from "../Tag/Tag";

type TagsProps = {
  cardTags: string | undefined;
};
export function Tags(props: TagsProps) {
  if (props.cardTags !== undefined) {
   const tags = props.cardTags.split(",");
   return (
     <div className="tags">
       {tags?.map((e, id) => (
         <Tag tag={e} id={id} />
       ))}
     </div>
   );
 }
  
}
