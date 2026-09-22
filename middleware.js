import { NextResponse } from 'next/server';

export function middleware(request) {
  // Protege a rota administrativa exigindo token de sessão seguro
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const sessionToken = request.cookies.get('admin_secure_session');
    
    if (!sessionToken) {
      // Redireciona invasores de volta para a página inicial
      return NextResponse.redirect(new URL('/', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
