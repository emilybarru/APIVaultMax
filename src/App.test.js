// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders APIVaultMax title', () => {
    render(<App />);
    const titleElement = screen.getByText(/APIVaultMax/i);
    expect(titleElement).toBeInTheDocument();
});
