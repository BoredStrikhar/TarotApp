create TABLE cards (
    id SERIAL PRIMARY KEY,
    name text,
    arcana text,
    suit_en text,
    name_en text,
    suit text,
    yes_or_no text,
    image_link text,
    common_direct_meaning text,
    common_direct_meaning_tags text,
    common_inverted_meaning text,
    common_inverted_meaning_tags text,
    love_direct_meaning text,
    love_direct_meaning_tags text,
    love_inverted_meaning text,
    love_inverted_meaning_tags text,
    career_direct_meaning text,
    career_direct_meaning_tags text,
    career_inverted_meaning text,
    career_inverted_meaning_tags text,
    health_direct_meaning text,
    health_direct_meaning_tags text,
    health_inverted_meaning text,
    health_inverted_meaning_tags text
);

ALTER TABLE cards ADD suit_en text;
ALTER TABLE cards ADD name_en text;