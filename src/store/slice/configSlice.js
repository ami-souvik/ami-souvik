import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  theme: {
    mode: matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
};

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = {...state.theme, ...action.payload};
    },
  }
});

export const { setTheme } = configSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.folio.value)`
export const selectconfig = (state) => state.config;

export const configReducer = configSlice.reducer;
