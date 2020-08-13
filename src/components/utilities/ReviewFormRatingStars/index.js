import React, { useState } from 'react';
import { Flex, Icon } from '@chakra-ui/core';

import './ReviewFormRatingStars.css';


const ReviewFormRatingStars = ({ my, mx }) => {
  const [rating, setRating] = useState(0);
  return (
    <Flex
      w='fit-content'
      className="text--capitalize review-form-rating-stars"
      {...{ my, mx }}
    >
      {
        (() => {
          const stars = [];
          for (let i = 0; i < 5; i++) {
            const value = i + 1;
            stars.push(
              <div
                key={i}
                style={{ marginLeft: i ? '.5em' : '0px' }}
                className={`star-wrapper${value <= rating ? ' mark' : '' }`}
              >
                <input
                  type='radio'
                  value={value}
                  name='rating-radio'
                  onChange={() => setRating(value)}
                  required
                />
                <Icon
                  zIndex={1}
                  size='32px'
                  name='star'
                  color='gray.400'
                  className='star'
                />
              </div>
            );
          }
          return stars;
        })()
      }
    </Flex>
  );
}

export default ReviewFormRatingStars;