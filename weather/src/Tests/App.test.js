import React from 'react';
import { render, cleanup, screen, fireEvent, waitFor } from '@testing-library/react';

import App from '../Components/App';

afterEach(() => {
    cleanup()
});

describe('App', () => {
    test('renders App component', () => {
        render(<App />)
    }); 

    test('search returns an error message', () => {
        const { getByPlaceholderText } = render(<App />);
        jest.spyOn(window, "alert").mockImplementation(() => {});
        
        expect(getByPlaceholderText(/Enter/i).textContent).toBe("")
        fireEvent.submit(getByPlaceholderText(/Enter/i), {target: {value: "1"}})
        fireEvent.keyDown(getByPlaceholderText(/Enter/i), {key: "Enter", code: "Enter"});
        expect(window.alert).toHaveBeenCalledWith("Please enter a 5 digit zipcode.");
    });

});


