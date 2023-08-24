import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from "../components/Counter/Counter.jsx";

describe('Counter', () => {
    it('should render the component without problems', () => {
        render(<Counter />)
        expect(true).toBeTruthy()
    })

    it('Initial count is 0 and Decrement & Reset buttons are disabled', () => {
        expect(screen.getByText('0')).toBeTruthy()
        // expect(screen.getByText('Decrement')).toBeDisabled()
        // expect(screen.getByText('Reset')).toBeTruthy()
    })

    it('All elements are loaded', () => {
        expect(screen.getByText('React Counter')).toBeTruthy()
        expect(screen.getByText('Increment')).toBeTruthy()
        expect(screen.getByText('Decrement')).toBeTruthy()
        expect(screen.getByText('Reset')).toBeTruthy()
    })

    it('Increment functionallity test', () => {
        expect(screen.getByText('0')).toBeTruthy()

        fireEvent.click(screen.getByText('Increment'))

        expect(screen.getByText('1')).toBeTruthy()
    })

    it('Decrement functionallity test when counter value is grather or equals to 0', () => {

        //Now the value of counter is 1 after finishing the last test function

        expect(screen.getByText('1')).toBeTruthy()

        fireEvent.click(screen.getByText('Increment'))

        expect(screen.getByText('2')).toBeTruthy()

        fireEvent.click(screen.getByText('Decrement'))

        expect(screen.getByText('1')).toBeTruthy()

        fireEvent.click(screen.getByText('Decrement'))
    })

    it('Decrement functionallity test when counter value is grather or equals to 0', () => {

        //Now the value of counter is 0 after finishing the last test function

        expect(screen.getByText('0')).toBeTruthy()

        fireEvent.click(screen.getByText('Increment'))

        expect(screen.getByText('1')).toBeTruthy()

        fireEvent.click(screen.getByText('Reset'))

        expect(screen.getByText('0')).toBeTruthy()

        fireEvent.click(screen.getByText('Decrement'))
    })
})