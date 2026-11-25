import React from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from './api/core/query';
import './index.css';
import MarkupTool from './templates/MarkupTool';

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<MarkupTool />} />),
  { basename: import.meta.env.BASE_URL },
);

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
