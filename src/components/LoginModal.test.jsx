import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginModal from './LoginModal';

// Mock the API utility
jest.mock('../utils/api', () => ({
  api: jest.fn(),
}));
import { api } from '../utils/api';

describe('LoginModal Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('does not render when open is false', () => {
    const { container } = render(<LoginModal open={false} onClose={() => {}} onLogin={() => {}} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders login form by default when open is true', () => {
    render(<LoginModal open={true} onClose={() => {}} onLogin={() => {}} />);
    expect(screen.getByText('Welcome back!')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Login to My Account/i })).toBeInTheDocument();
  });

  it('switches to signup form when signup tab is clicked', () => {
    render(<LoginModal open={true} onClose={() => {}} onLogin={() => {}} />);
    const signupTab = screen.getByRole('button', { name: /Sign Up Free/i });
    fireEvent.click(signupTab);
    
    expect(screen.getByText('Create your free account')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/e.g. Riya Sharma/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Create Account/i })).toBeInTheDocument();
  });

  it('handles login submission successfully', async () => {
    api.mockResolvedValueOnce({ token: 'test-token', name: 'Test User' });
    const mockOnLogin = jest.fn();
    const mockOnClose = jest.fn();

    render(<LoginModal open={true} onClose={mockOnClose} onLogin={mockOnLogin} />);
    
    // Fill form
    fireEvent.change(screen.getByPlaceholderText(/student@example.com/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Your password/i), { target: { value: 'password123' } });
    
    // Submit
    fireEvent.click(screen.getByRole('button', { name: /Login to My Account/i }));
    
    await waitFor(() => {
      expect(api).toHaveBeenCalledWith('/auth/student/login', {
        method: 'POST',
        body: { email: 'test@example.com', password: 'password123' },
      });
      expect(mockOnLogin).toHaveBeenCalledWith({ token: 'test-token', name: 'Test User' });
      expect(mockOnClose).toHaveBeenCalled();
    });
  });

  it('displays error message on login failure', async () => {
    api.mockRejectedValueOnce(new Error('Invalid credentials'));
    
    render(<LoginModal open={true} onClose={() => {}} onLogin={() => {}} />);
    
    // Fill form
    fireEvent.change(screen.getByPlaceholderText(/student@example.com/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Your password/i), { target: { value: 'wrongpassword' } });
    
    // Submit
    fireEvent.click(screen.getByRole('button', { name: /Login to My Account/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/Invalid credentials/i)).toBeInTheDocument();
    });
  });
});
