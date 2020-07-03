import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

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
        
        expect(getByPlaceholderText(/Enter/).textContent).toBe("")
        fireEvent.submit(getByPlaceholderText(/Enter/), {target: {value: "1"}})
        fireEvent.keyDown(getByPlaceholderText(/Enter/), {key: "Enter", code: "Enter"});
        expect(window.alert).toHaveBeenCalledWith("Please enter a 5 digit zipcode.");
    });
});


