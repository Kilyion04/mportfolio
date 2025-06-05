
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, FileText, User, Server, Code, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'page' | 'project' | 'server' | 'profile';
  url: string;
  icon: React.ComponentType<any>;
  badges?: string[];
}

interface SearchResultsProps {
  query: string;
  results: SearchResult[];
}

export const SearchResults: React.FC<SearchResultsProps> = ({ query, results }) => {
  if (!query) {
    return (
      <div className="text-center py-12">
        <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600 dark:text-gray-400">
          Commencez à taper pour rechercher des pages, projets ou contenus...
        </p>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600 dark:text-gray-400">
          Aucun résultat trouvé pour "{query}"
        </p>
      </div>
    );
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'page': return 'Page';
      case 'project': return 'Projet';
      case 'server': return 'Serveur';
      case 'profile': return 'Profil';
      default: return 'Contenu';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'page': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'project': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'server': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
      case 'profile': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  return (
    <div className="space-y-4">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Résultats pour "{query}"
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          {results.length} résultat{results.length > 1 ? 's' : ''} trouvé{results.length > 1 ? 's' : ''}
        </p>
      </div>

      <div className="grid gap-4">
        {results.map((result) => {
          const IconComponent = result.icon;
          return (
            <Card key={result.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <Link 
                  to={result.url} 
                  className="block group"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                      <IconComponent className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">
                          {result.title}
                        </h3>
                        <Badge className={getTypeColor(result.type)} variant="secondary">
                          {getTypeLabel(result.type)}
                        </Badge>
                        {result.badges?.map((badge) => (
                          <Badge key={badge} variant="outline" className="text-xs">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {result.description}
                      </p>
                      
                      <div className="flex items-center gap-1 mt-2 text-xs text-gray-500 dark:text-gray-500">
                        <span>{result.url}</span>
                        <ExternalLink className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
