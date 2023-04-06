import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';

const links = [
  {
    id: 1,
    name: 'stats',
    path: 'stats',
    icon: <IoBarChartSharp size={24} />,
  },
  {
    id: 2,
    name: 'users',
    path: 'users',
    icon: <ImProfile size={24} />,
  },
  {
    id: 3,
    name: 'regions',
    path: 'add-region',
    icon: <MdQueryStats size={24} />,
  },
  {
    id: 4,
    name: 'all products',
    path: 'all-products',
    icon: <MdQueryStats size={24} />,
  },
  {
    id: 5,
    name: 'add product',
    path: 'add-product',
    icon: <FaWpforms size={24} />,
  },
];

export default links;
