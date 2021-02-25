import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string = localStorage.getItem('city') || '';

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCity(state: string, action: PayloadAction<string>) {
      return state = action.payload;
    }
  },
});

export const { setCity } = citySlice.actions;
export default citySlice.reducer;
export const setLocalStorage = (city: string) => {
  localStorage.setItem('city', city);
}