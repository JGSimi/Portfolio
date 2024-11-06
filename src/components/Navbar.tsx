import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full py-4 px-4 z-[100]">
      <div className="max-w-6xl mx-auto flex justify-end">
        <ThemeToggle />
      </div>
    </nav>
  )
} 