import { useState } from 'react';

const useFilter = () => {
  const [showFilterU, setShowFilterU] = useState(false);
  const [filterValueU, setFilterValueU] = useState('');

  const handleFilterU = () => {
    setShowFilterU(true);
  }

  const handleCancelU = () => {
    setShowFilterU(false);
    setFilterValueU('');
  }

  const [showFilterB, setShowFilterB] = useState(false);
  const [filterValueB, setFilterValueB] = useState('');

  const handleFilterB = () => {
    setShowFilterB(true);
  }

  const handleCancelB = () => {
    setShowFilterB(false);
    setFilterValueB('');
  }

  return { showFilterU, filterValueU, handleFilterU, handleCancelU, setFilterValueU,
    showFilterB, filterValueB, handleFilterB, handleCancelB, setFilterValueB
  };
};

export default useFilter;