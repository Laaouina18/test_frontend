import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ResponsiveDataTable from './components/Table'; 
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <ResponsiveDataTable />
      </div>
    </QueryClientProvider>
  );
};

export default App;
