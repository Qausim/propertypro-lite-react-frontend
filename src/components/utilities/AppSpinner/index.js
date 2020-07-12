import React from 'react';
import { Flex, Spinner } from '@chakra-ui/core';
import { connect } from 'react-redux';


const AppSpinner = ({ isLoading, size, color }) => {
  const spinnerSize = size ? size : 'xl'
  const spinnerColor = color ? color : 'blue.500';
  return isLoading ? (
    <Flex
      bg='rgba(74, 85, 104, 0.5)'
      width='100vw'
      height='100vh'
      className='app-spinner pos-fixed js-center align-center'
    >
      <Spinner
        speed='0.6s'
        thickness='3px'
        size={spinnerSize}
        color={spinnerColor}
      />
    </Flex>
  ) : '';
}

const mapStateToProps = ({ appState: { isLoading } }, ownProps) => ({
  isLoading,
  ...ownProps
});
 
export default connect(mapStateToProps)(AppSpinner);