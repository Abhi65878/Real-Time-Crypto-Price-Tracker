import { createSlice } from '@reduxjs/toolkit';
import { generateMockData, simulateUpdate } from './mockData';

const initialState = {
  assets: generateMockData(),
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateCryptoData(state) {
      state.assets = state.assets.map(asset => simulateUpdate(asset));
    },
  },
});

export const { updateCryptoData } = cryptoSlice.actions;
export default cryptoSlice.reducer;