import { useParams } from "react-router-dom";
import "./Tag.css";
import React, { useEffect, useState } from "react";

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

type TagProps = {
  tag: string;
  id: number;
};
export function Tag(TagProps: TagProps) {
  let backgroundColor: string;
  let myId = (TagProps.id+1) % 4;
  if (myId % 4 === 0) {
    backgroundColor = "#FFCC99"
  } else if (myId % 3 === 0) {
    backgroundColor = "#CCCCFF"
  } else if (myId % 2 === 0) {
    backgroundColor = "#CCFFCC"
  } else {
    backgroundColor = "#99CCFF";
  }
  return (
    <span className="tag" style={{backgroundColor}}>
      {TagProps.tag}
    </span>
  );
}
