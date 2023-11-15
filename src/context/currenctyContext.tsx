import React, { createContext, useReducer, ReactNode } from 'react';

export type Currency = 'JPY' | 'CAD';

type CurrencyState = {
  currentCurrency: Currency
};

type CurrencyAction = {
  type: 'SET_CURRENCY'
  payload: Currency
};

const initialState: CurrencyState = {
  currentCurrency: 'CAD',
};

const CurrencyContext = createContext<{
  state: CurrencyState;
  dispatch: React.Dispatch<CurrencyAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

const currencyReducer = (state: CurrencyState, action: CurrencyAction) => {
  switch (action.type) {
    case 'SET_CURRENCY':
      return { ...state, currentCurrency: action.payload };
    default:
      return state;
  }
};

export const CurrencyContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(currencyReducer, initialState);

  return (
    <CurrencyContext.Provider value={{ state, dispatch }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContext;
