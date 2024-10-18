import React, { createContext, useContext, useState } from 'react';

const CarVendorsContext = createContext();

export const CarVendorsProvider = ({ children }) => {
    const [vendors, setVendors] = useState([
        { id: 1, name: 'Toyota' },
        { id: 2, name: 'BMW' },
        { id: 3, name: 'Mercedes' },
    ]);

    return (
        <CarVendorsContext.Provider value={vendors}>
            {children}
        </CarVendorsContext.Provider>
    );
};
