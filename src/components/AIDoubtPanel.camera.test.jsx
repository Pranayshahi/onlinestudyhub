import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// react-markdown and math plugins are ESM-only; mock them for Jest (CJS)
jest.mock('react-markdown', () => ({ __esModule: true, default: ({ children }) => <div>{children}</div> }));
jest.mock('remark-math', () => ({ __esModule: true, default: () => {} }));
jest.mock('rehype-katex', () => ({ __esModule: true, default: () => {} }));
jest.mock('katex/dist/katex.min.css', () => {});

import AIDoubtPanel from './AIDoubtPanel';

const mockStream = {
  getTracks: () => [{ stop: jest.fn() }],
};
const mockGetUserMedia = jest.fn();

beforeAll(() => {
  // jsdom doesn't implement scrollIntoView
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
  // jsdom doesn't implement HTMLMediaElement.play
  window.HTMLVideoElement.prototype.play = jest.fn().mockResolvedValue(undefined);
  Object.defineProperty(global.navigator, 'mediaDevices', {
    value: { getUserMedia: mockGetUserMedia },
    writable: true,
    configurable: true,
  });
});

beforeEach(() => {
  jest.clearAllMocks();
  mockGetUserMedia.mockResolvedValue(mockStream);
});

function renderPanel(open = true) {
  return render(
    <MemoryRouter>
      <AIDoubtPanel open={open} onClose={() => {}} />
    </MemoryRouter>
  );
}

describe('AIDoubtPanel — Camera feature', () => {
  it('renders a Camera button in the toolbar when open', () => {
    renderPanel();
    expect(screen.getByTitle('Snap a photo of your question')).toBeInTheDocument();
    expect(screen.getByText('Camera')).toBeInTheDocument();
  });

  it('opens the camera modal and calls getUserMedia on click', async () => {
    renderPanel();
    await act(async () => {
      fireEvent.click(screen.getByTitle('Snap a photo of your question'));
    });
    expect(mockGetUserMedia).toHaveBeenCalledWith(
      expect.objectContaining({ video: expect.objectContaining({ facingMode: 'environment' }) })
    );
    expect(screen.getByText('✕ Close')).toBeInTheDocument();
  });

  it('shows permission-denied error when getUserMedia throws NotAllowedError', async () => {
    const err = Object.assign(new Error('denied'), { name: 'NotAllowedError' });
    mockGetUserMedia.mockRejectedValueOnce(err);
    renderPanel();
    await act(async () => {
      fireEvent.click(screen.getByTitle('Snap a photo of your question'));
    });
    await waitFor(() =>
      expect(screen.getByText(/Camera permission denied/i)).toBeInTheDocument()
    );
  });

  it('shows no-camera error when getUserMedia throws NotFoundError', async () => {
    const err = Object.assign(new Error('no camera'), { name: 'NotFoundError' });
    mockGetUserMedia.mockRejectedValueOnce(err);
    renderPanel();
    await act(async () => {
      fireEvent.click(screen.getByTitle('Snap a photo of your question'));
    });
    await waitFor(() =>
      expect(screen.getByText(/No camera found/i)).toBeInTheDocument()
    );
  });

  it('closes the camera modal when the close button is clicked', async () => {
    renderPanel();
    await act(async () => {
      fireEvent.click(screen.getByTitle('Snap a photo of your question'));
    });
    expect(screen.getByText('✕ Close')).toBeInTheDocument();
    await act(async () => {
      fireEvent.click(screen.getByText('✕ Close'));
    });
    expect(screen.queryByText('✕ Close')).not.toBeInTheDocument();
  });

  it('does not show the panel as open when open is false', () => {
    const { container } = renderPanel(false);
    // Panel uses CSS class toggling — it's in DOM but not open
    const panel = container.querySelector('.ai-panel');
    expect(panel).not.toHaveClass('open');
  });
});
