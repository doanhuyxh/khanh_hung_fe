import dynamic from 'next/dynamic';

const Header = dynamic(() => import('./Customer'), {
  ssr: true, 
  loading: () => <div>Loading...</div>,
});


import AdminHeader from './AdminWeb';

export { Header, AdminHeader };
