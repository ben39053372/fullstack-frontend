import React from 'react';

const withAuth = (WrappedComponent: any) => {
  console.log('passing withAuth');
  return (props: any) => {
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
