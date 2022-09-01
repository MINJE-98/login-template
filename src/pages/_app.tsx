import '../../styles/globals.css';
import type { AppProps } from 'next/app';

import { QueryClient, QueryClientProvider } from 'react-query';
import AuthProvider from 'src/hooks/auth/AuthProvider';

const queryClient = new QueryClient({});
const MyApp = ({
  Component,
  pageProps: { initUserInfo, ...pageProps },
}: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider initUserInfo={initUserInfo}>
        <Component {...pageProps} />
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
