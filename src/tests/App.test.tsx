import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe("App component test", () => {
    test("should have Vite + React text", () => {
        render(<App />);
        expect(screen.getByText(/Vite \+ React/i)).toBeDefined()
    })

    test("should have Vite and React logos", () => {
        render(<App />);
        const vitoLogo = screen.getByRole('img', { name: /Vite logo/i });
        expect(vitoLogo).toBeDefined();

        const reactLogo = screen.getByRole('img', { name: /React logo/i });
        expect(reactLogo).toBeDefined();
    })
})