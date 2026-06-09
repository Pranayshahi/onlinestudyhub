import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import { NotificationsProvider } from '../context/NotificationsContext';

// Helper to wrap component with Router and Providers
const renderWithProviders = (ui) => {
  return render(
    <BrowserRouter>
      <NotificationsProvider>
        {ui}
      </NotificationsProvider>
    </BrowserRouter>
  );
};

describe('Navbar Component', () => {
  it('renders the logo correctly', () => {
    renderWithProviders(<Navbar onOpenAI={() => {}} onOpenLogin={() => {}} />);
    expect(screen.getByText(/Online/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Study/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Hub/i)).toBeInTheDocument();
  });

  it('shows login button when no user is passed', () => {
    renderWithProviders(<Navbar onOpenAI={() => {}} onOpenLogin={() => {}} user={null} />);
    const loginBtn = screen.getByLabelText(/Login/i);
    expect(loginBtn).toBeInTheDocument();
  });

  it('shows user avatar when user is passed', () => {
    const mockUser = { name: 'Test User', email: 'test@example.com' };
    renderWithProviders(<Navbar onOpenAI={() => {}} onOpenLogin={() => {}} user={mockUser} />);
    
    // getInitials('Test User') -> 'TU'
    expect(screen.getByText('TU')).toBeInTheDocument();
  });

  it('triggers onOpenAI when AI Doubt button is clicked', () => {
    const mockOnOpenAI = jest.fn();
    renderWithProviders(<Navbar onOpenAI={mockOnOpenAI} onOpenLogin={() => {}} user={null} />);
    
    const aiBtn = screen.getByLabelText(/AI Doubt Help/i);
    fireEvent.click(aiBtn);
    
    expect(mockOnOpenAI).toHaveBeenCalledTimes(1);
  });

  it('toggles dark mode', () => {
    const mockOnToggleDark = jest.fn();
    renderWithProviders(<Navbar onOpenAI={() => {}} onOpenLogin={() => {}} onToggleDark={mockOnToggleDark} darkMode={false} />);
    
    const darkBtn = screen.getByLabelText(/Toggle dark mode/i);
    fireEvent.click(darkBtn);
    
    expect(mockOnToggleDark).toHaveBeenCalledTimes(1);
  });
});
