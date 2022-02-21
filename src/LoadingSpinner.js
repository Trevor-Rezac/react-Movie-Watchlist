import React from 'react';
import loadingSpinner from './loading-buffering.gif';

export default function LoadingSpinner() {
  return (
    <div>
      <img src={ loadingSpinner } />
    </div>
  );
}
