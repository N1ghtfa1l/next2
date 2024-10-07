import { create } from 'zustand';

interface StoreState {
    message: string;
    setMessage: (newMessage: string) => void;
}

const useStore = create<StoreState>((set) => ({
    message: '', 
    setMessage: (newMessage) => set(() => ({ message: newMessage })),
}));

export default useStore;
