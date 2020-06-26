import React, { useState } from 'react';
import { Flex, Box, Text } from 'rebass';
import { Headering, Line } from './template';

const Info = () => {
    const [db, setdb] = useState( DB );

    return (
        <Flex>

            <Box width={1/3}>
                <img src="img/profile2.jpg" alt="Jeri Motta" width="400px"></img>
            </Box>

            <Box ml={5} width={2/3}>
                <Headering prop={db[0].content} />
            </Box>
            
        </Flex>
    )
}

const DB = [
        { content: "HEY BABE."},
        { content: "I'm Jeri and if you've found this page, I think it's fate."},
        { content: "I am based in the beautiful desert and dry heat of Arizona and love to take frequent trips to Mesa where my family lives and where I grew up. You can find me roaming around the library with lots of DIY books under my arm or at home with my handsome husband and our little one. I am an avid movie watcher and can tell you what actor won an Academy Award when and the top movies of all time. I have my own top 250 movies list that I update frequently. I love to keep my house clean and tidy and I try to be minimalist in life as well as in business."},
        { content: "Boudoir photography is for every woman, at every stage of her life. When I was a young adult I struggled with an eating disorder that caused a vicious negative cycle. When I turned 21, I saw there was an empty place in boudoir photography that focused on the self love and the celebration of women, so after sitting on this idea for about 2 years, I pulled up a chair and took a seat and filled in the gap."},
        { content: "I serve women of all backgrounds, shapes and sizes. I serve seasoned women with evidence of a life well lived on their faces. I serve women who are about to get married, women who work full time, women who are stay at home moms, women who have overcome trauma, and women who never thought they could feel beautiful."},
        { content: "I want to capture your story of self love. Your experience with me will be intimate and sexy yet tasteful and classic. We will laugh a lot, you will feel gorgeous and powerful and I will jump around in excitement and be your number one cheerleader. Not only will the experience in the moment be one will you will cherish forever, you will also look back at your timeless photos time and time again as they remind you that you are perfectly you TODAY."},
        { content: "Follow along on my Instagram account: @jerimottaboudoir"},
        { content: "I'm ready when you are."}
]

export default Info;
