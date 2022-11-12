import type { DefaultUser, Session } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    id: string;
    user?: DefaultUser & {
      stripeCustomerId: string;
      subscriptionStatus: string;
      accountSetup: boolean;
    };
  }
}
