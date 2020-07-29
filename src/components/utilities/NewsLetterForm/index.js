import React from 'react';
import { Button, Input } from '@chakra-ui/core';


const NewsLetterForm = ({ inputBg }) => {
  const universalProps = {
    borderRadius: '0px', mb: 'var(--padding-sm)',
    color: 'white', w: '100%'
  };
  const inputProps = {
    ...universalProps, variant: 'filled', bg: inputBg
  };

  return (
    <>
      <Input placeholder='First name, last name' {...inputProps}/>
      <Input placeholder='Email' type='email' {...inputProps}/>
      <Button
        bg='var(--some-blue)'
        className='text--uppercase'
        {...universalProps}
      >
        subscribe
      </Button>
    </>
  );
}
 
export default NewsLetterForm;