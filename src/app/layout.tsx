// app/layout.tsx
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <header>
          {/* Navigation Component */}
        </header>
        <main>{children}</main>
        <footer>
          {/* Footer Component */}
        </footer>
      </body>
    </html>
  )
}
