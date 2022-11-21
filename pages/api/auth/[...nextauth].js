import NextAuth from 'next-auth/next';
import FacebookProvider from 'next-auth/providers/facebook';

export const authOption = {
  provider: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET
    })
  ]
};

export default NextAuth(authOption);
