import dynamic from 'next/dynamic';

export const ModalScroll = dynamic(() => import('./ModalScroll'), {
    loading: () => <p>Loading...</p>
});

export const ModalImage = dynamic(() => import('./ModalImage'), {
    loading: () => <p>Loading...</p>
});

export const ModalNotify = dynamic(() => import('./ModelNotify'), {
    loading: () => <p>Loading...</p>
});