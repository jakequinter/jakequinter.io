import React from 'react';
import Image from 'next/image';

const Spinner = () => (
  <div className="flex justify-center">
    <Image src="/spinner.gif" alt="loading" height={100} width={100} />
  </div>
);

export default Spinner;
