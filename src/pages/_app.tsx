import '../../styles/globals.css';
import type { AppProps } from 'next/app';

import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';
import AuthProvider from 'src/hooks/auth/context/AuthProvider';

const queryClient = new QueryClient({});
const MyApp = ({
  Component,
  pageProps: { initUserInfo, ...pageProps },
}: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider initUserInfo={initUserInfo}>
        <Toaster />
        <Component {...pageProps} />
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
