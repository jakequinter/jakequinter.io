import React from 'react';
import Image from 'next/image';

const Spinner = () => (
  <div className="flex justify-center mt-8">
    <Image src="/spinner.gif" alt="loading" height={30} width={30} />
  </div>
);

export default Spinner;
