import { NextRequest, NextResponse } from 'next/server';

import { api } from '~/lib/api';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  const redirectTo = request.cookies.get('redirectTo')?.value;

  const registerResponse = await api.post('/register', {
    code,
  });

  const { token } = registerResponse.data;

  const redirectURL = redirectTo
    ? new URL(redirectTo, request.url)
    : new URL('/', request.url);

  const cookieExpiresInSeconds = 60 * 60 * 24 * 30;
  const cookieExpirationDate = new Date(
    Date.now() + cookieExpiresInSeconds * 1000,
  ).toUTCString();

  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/; Expires=${cookieExpirationDate};`,
    },
  });
}
