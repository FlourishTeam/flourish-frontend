import { useState } from 'react';

export const useLoading = () => {
  const [loading, setLoading] = useState(true);

  // what goes here?
  setLoading(false);

  return {
    loading,
  };
};
