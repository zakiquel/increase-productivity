import React, { Suspense } from 'react';

import { AppRouter } from './providers/router'

import { MainLayout } from "@/shared/layouts";
import { Footer } from "@/widgets/Footer";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from '@/widgets/Sidebar';

function App() {
  return (
    <div className='app'>
      <Suspense fallback="Loading...">
        <MainLayout
          header={<Navbar />}
          sidebar={<Sidebar />}
          content={<AppRouter />}
          footer={<Footer />}
        />
      </Suspense>
    </div>
  );
}

export default App;