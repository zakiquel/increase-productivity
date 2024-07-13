import { MainLayout } from '@repo/shared/layouts';
import React, { Suspense } from 'react';

import { AppRouter } from './providers/router';

import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

function App() {
  return (
    <div className="app">
      <Suspense fallback="Loading...">
        <MainLayout header={<Navbar />} sidebar={<Sidebar />}>
          <AppRouter />
        </MainLayout>
      </Suspense>
    </div>
  );
}

export default App;
