
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SidebarItem {
  id: string;
  label: string;
  icon: LucideIcon;
  onClick?: () => void;
  badge?: string | number;
  active?: boolean;
}

interface ContextualSidebarProps {
  items: SidebarItem[];
  className?: string;
}

export const ContextualSidebar: React.FC<ContextualSidebarProps> = ({ items, className }) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className={cn(
        "fixed left-0 top-16 h-[calc(100vh-4rem)] z-40 group",
        "w-16 hover:w-64 transition-all duration-300 ease-in-out",
        "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm",
        "border-r border-gray-200 dark:border-gray-700",
        "shadow-lg hover:shadow-xl",
        className
      )}
    >
      <div className="flex flex-col h-full py-4">
        <div className="flex-1 space-y-2">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.id}
                onClick={item.onClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "w-full flex items-center px-4 py-3 text-left",
                  "text-gray-600 dark:text-gray-300",
                  "hover:bg-gray-100 dark:hover:bg-gray-800",
                  "hover:text-primary-600 dark:hover:text-primary-400",
                  "transition-all duration-200 relative",
                  item.active && "bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400"
                )}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                
                {/* Label qui apparaît au hover */}
                <span className="ml-3 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {item.label}
                </span>

                {/* Badge */}
                {item.badge && (
                  <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300">
                      {item.badge}
                    </span>
                  </span>
                )}

                {/* Indicateur actif */}
                {item.active && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-primary-500 rounded-r-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Footer avec indicateur d'état */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
          <div className="px-4 flex items-center text-xs text-gray-500 dark:text-gray-400">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Système actif
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
