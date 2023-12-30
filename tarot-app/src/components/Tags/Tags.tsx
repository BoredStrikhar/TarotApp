import { useParams } from "react-router-dom";
import "./Tags.css";
import React, { useEffect, useState } from "react";
import { Tag } from "../Tag/Tag";

type SingleCard = {
  id: string;
  name: string;
  arcana: string;
  suit: string;
  yes_or_no: string;
  image_link: string;
  common_direct_meaning: string;
  common_direct_meaning_tags: string;
  common_inverted_meaning: string;
  common_inverted_meaning_tags: string;
  love_direct_meaning: string;
  love_direct_meaning_tags: string;
  love_inverted_meaning: string;
  love_inverted_meaning_tags: string;
  career_direct_meaning: string;
  career_direct_meaning_tags: string;
  career_inverted_meaning: string;
  career_inverted_meaning_tags: string;
  health_direct_meaning: string;
  health_direct_meaning_tags: string;
  health_inverted_meaning: string;
  health_inverted_meaning_tags: string;
};

type TagsProps = {
  card: SingleCard | undefined;
}
export function Tags(props: TagsProps) {
  const tags = props.card?.career_direct_meaning_tags.split(',')
  console.log(tags)
  return (
    <div className="tags">
      {tags?.map((e, id) => <Tag tag={e} id={id}/>)}
    </div>
  );
}
