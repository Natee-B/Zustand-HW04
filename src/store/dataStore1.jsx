import { create } from "zustand";
import {persist} from "zustand/middleware"

function dataStore1(set) {
  return {
    array: [{ id: Date.now(), name: "name1", lineThrough: false }],
    addArray: (newValue) =>
      set((state) => ({
        array: [...state.array, { id: Date.now(), name: newValue }],
      })),
      delArray: (id)=>
        set(state=>({
        array: state.array.filter(el=>el.id !== id)
      })),
      
      lineThrough: (id) => 
        set((state) => ({
          array: state.array.map(el =>
            el.id === id
              ? { ...el, isStrikethrough: !el.isStrikethrough }
              : el
          ),
        })),
  };
}

const useStore1 = create(persist(dataStore1, {
  name: "data-store",
  getStorage: () => localStorage, 
  partialize: (state) => ({
    array: state.array, 
  }),
}));
export default useStore1;
