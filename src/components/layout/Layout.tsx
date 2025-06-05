
import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { ContextualSidebar, SidebarItem } from './ContextualSidebar';
import { ScrollToTop } from './ScrollToTop';
import { ScrollToTopButton } from './ScrollToTopButton';
import { Footer } from './Footer';
import { LoginModal } from '@/components/auth/LoginModal';
import { useAuth } from '@/contexts/AuthContext';
import { useSidebarItems } from '@/hooks/useSidebarItems';

export const Layout: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const sidebarItems = useSidebarItems(location.pathname);

  const hasSidebar = sidebarItems.length > 0;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 w-full">
      <ScrollToTop />
      <Navbar onLoginClick={() => setIsLoginModalOpen(true)} />
      
      {/* Sidebar contextuelle */}
      {hasSidebar && (
        <ContextualSidebar items={sidebarItems} />
      )}
      
      {/* Main content wrapper */}
      <div className={`transition-all duration-300 ${hasSidebar ? 'ml-16' : ''}`}>
        {/* Main content */}
        <main className="pt-16">
          <div className="min-h-[calc(100vh-4rem)]">
            <Outlet />
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Scroll to top button */}
      <ScrollToTopButton />

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </div>
  );
};
