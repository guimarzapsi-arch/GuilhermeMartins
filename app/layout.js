import './globals.css'

export const metadata = {
  title: 'Guilherme Martins | Psicólogo Clínico',
  description: 'Psicólogo e psicanalista clínico. Atendimento especializado em ansiedade, depressão e desenvolvimento emocional.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
