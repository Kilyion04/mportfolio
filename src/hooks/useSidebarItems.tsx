
import { useMemo } from 'react';
import { Home, Code, Server, User, Mail, BarChart3, Users, Settings, Zap, Database } from 'lucide-react';
import { SidebarItem } from '@/components/layout/ContextualSidebar';
import { useAuth } from '@/contexts/AuthContext';

export const useSidebarItems = (pathname: string): SidebarItem[] => {
  const { isAuthenticated } = useAuth();

  return useMemo(() => {
    const items: SidebarItem[] = [];

    switch (pathname) {
      case '/':
        items.push(
          { id: 'overview', label: 'Vue d\'ensemble', icon: Home, active: true },
          { id: 'projects', label: 'Projets récents', icon: Code, badge: '12' },
          { id: 'servers', label: 'Statut serveurs', icon: Server, badge: '2' },
          { id: 'contact', label: 'Contact rapide', icon: Mail }
        );
        break;

      case '/projets':
        items.push(
          { id: 'all', label: 'Tous les projets', icon: Code, active: true },
          { id: 'web', label: 'Applications Web', icon: Zap, badge: '8' },
          { id: 'ai', label: 'Intelligence Artificielle', icon: BarChart3, badge: '3' },
          { id: 'games', label: 'Jeux & Serveurs', icon: Server, badge: '4' }
        );
        break;

      case '/serveurs-minecraft':
        items.push(
          { id: 'status', label: 'Statut global', icon: Server, active: true },
          { id: 'players', label: 'Joueurs connectés', icon: Users, badge: '12' },
          { id: 'performance', label: 'Performances', icon: BarChart3 },
          { id: 'settings', label: 'Configuration', icon: Settings }
        );
        break;

      case '/profil':
        items.push(
          { id: 'info', label: 'Informations', icon: User, active: true },
          { id: 'experience', label: 'Expérience', icon: BarChart3 },
          { id: 'projects', label: 'Projets', icon: Code, badge: '15' },
          { id: 'contact', label: 'Contact', icon: Mail }
        );
        break;

      case '/dashboard':
        if (isAuthenticated) {
          items.push(
            { id: 'overview', label: 'Vue d\'ensemble', icon: Home, active: true },
            { id: 'ai-foot', label: 'IA Football', icon: BarChart3, badge: 'Live' },
            { id: 'minecraft', label: 'Serveurs MC', icon: Server, badge: '2' },
            { id: 'database', label: 'Base de données', icon: Database },
            { id: 'settings', label: 'Paramètres', icon: Settings }
          );
        }
        break;

      default:
        // Pas de sidebar pour les autres pages
        break;
    }

    return items;
  }, [pathname, isAuthenticated]);
};
