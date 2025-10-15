import './globals.css'

export const metadata = {
  title: "Manav Patel — IT Portfolio",
  description: "Technical Support & IT Specialist portfolio"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
