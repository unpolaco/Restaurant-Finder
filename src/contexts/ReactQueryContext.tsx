import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export const newQueryClient = new QueryClient();

interface ReactQueryContextProps {
  children: ReactNode;
  queryClient?: QueryClient;
}

export const ReactQueryContext: React.FC<ReactQueryContextProps> = ({
  children,
  queryClient = newQueryClient,
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
