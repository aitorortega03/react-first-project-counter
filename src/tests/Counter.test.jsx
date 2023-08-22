import { describe, it, expect } from "vitest";
import { render } from '@testing-library/react';
import Counter from "../components/Counter/Counter.jsx";

describe('Counter', () => {
    it('should work', () => {
        render(<Counter />)
        expect(true).toBeTruthy()
    })
})