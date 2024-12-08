import dynamic from 'next/dynamic';

const Header = dynamic(() => import('./Customer'), {
  ssr: true, 
  loading: () => <div>Loading...</div>,
});
const AdminHeader = dynamic(() => import('./AdminWeb'), {
  ssr: true, 
  loading: () => <div>Loading...</div>,
});

export { Header, AdminHeader };
