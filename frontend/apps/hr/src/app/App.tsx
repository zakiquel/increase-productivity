import { MainLayout } from '@repo/shared/layouts';
import React, { Suspense, useEffect } from 'react';

import { AppRouter } from './providers/router';

import { login } from '@/features/Authorization';
import { useAppDispatch } from '@/shared/lib';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      login({ email: 'viletyalov1212@gmail.com', password: 'passvdn1212' }),
    );
  }, [dispatch]);

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
