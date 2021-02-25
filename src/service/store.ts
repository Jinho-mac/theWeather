import { configureStore } from '@reduxjs/toolkit';
import citySlice from './citySlice';

export const store = configureStore({ reducer: citySlice });