import React from 'react';
import { CarVendorsProvider } from './CarVendorsContext';  
import CarVendorsList from './CarVendorsList'; 

const App = () => {
    return (
        <CarVendorsProvider>
            <CarVendorsList />
        </CarVendorsProvider>
    );
};

export default App;
