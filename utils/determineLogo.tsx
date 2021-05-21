import { BsPersonCheck, BsBuilding } from 'react-icons/bs';
import { GiPartyPopper } from 'react-icons/gi';
import { VscVmActive } from 'react-icons/vsc';
import { IoSchoolOutline } from 'react-icons/io5';

export default entry => {
  if (entry === 'career')
    return <BsBuilding className="text-gray-600" size={20} />;
  else if (entry === 'dev')
    return <VscVmActive className="text-gray-600" size={20} />;
  else if (entry === 'school')
    return <IoSchoolOutline className="text-gray-600" size={20} />;
  else return <BsPersonCheck className="text-gray-600" size={20} />;
};
