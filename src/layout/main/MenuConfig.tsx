import { paths } from 'routes';
import { Iconify } from 'components/Iconify';

const ICON_SIZE = {
  width: 22,
  height: 22,
};

export const menuConfig = [
  {
    title: 'Swap',
    path: paths.swap,
    icon: "eva:home-fill",
  },
  {
    title: 'Pools',
    path: paths.pools,
    icon: <Iconify icon="ic:round-grain" {...ICON_SIZE} />,
  },
  {
    title: 'Pages',
    path: '/pages',
    icon: <Iconify icon="eva:file-fill" {...ICON_SIZE} />,
    children: [
      {
        subheader: 'Other',
        items: [
          { title: 'About us', path: paths.about },
          { title: 'Contact us', path: paths.contact },
          { title: 'FAQs', path: paths.faqs },
          { title: 'Coming Soon', path: paths.comingSoon },
        ],
      },
    ],
  },
];
