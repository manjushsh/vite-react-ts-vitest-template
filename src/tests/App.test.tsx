import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'

describe('App component', () => {
  it('renders Vite and React logos with correct links', () => {
    render(<App />)
    
    const viteLogo = screen.getByRole('img', { name: /Vite logo/i });
    const reactLogo = screen.getByAltText('React logo')

    expect(viteLogo).toBeInTheDocument()
    expect(reactLogo).toBeInTheDocument()

    expect(viteLogo.closest('a')).toHaveAttribute('href', 'https://vitejs.dev')
    expect(reactLogo.closest('a')).toHaveAttribute('href', 'https://react.dev')
  })

  it('renders the initial count correctly', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /count is 0/i })
    expect(button).toBeInTheDocument()
  })

  it('increments count when button is clicked', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /count is 0/i })
    fireEvent.click(button)
    expect(button).toHaveTextContent('count is 1')
  })

  it('renders text content correctly', () => {
    render(<App />)
    
    const title = screen.getByText('Vite \+ React')
    const editText = screen.getByText((content, _) => content.includes('Edit') && content.includes('save to test HMR'))
    const docsText = screen.getByText('Click on the Vite and React logos to learn more')
    
    expect(title).toBeInTheDocument()
    expect(editText).toBeInTheDocument()
    expect(docsText).toBeInTheDocument()
  })
})
