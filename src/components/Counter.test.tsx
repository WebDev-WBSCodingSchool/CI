import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  describe('Initial Rendering', () => {
    it('renders with default initial value of 0', () => {
      render(<Counter />);
      expect(screen.getByRole('heading', { name: /counter component/i })).toBeInTheDocument();
      expect(screen.getByText('0')).toBeInTheDocument();
    });

    it('renders with custom initial value', () => {
      render(<Counter initialValue={5} />);
      expect(screen.getByText('5')).toBeInTheDocument();
    });

    it('renders all buttons', () => {
      render(<Counter />);
      expect(screen.getByRole('button', { name: '-' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /reset/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument();
    });
  });
});
