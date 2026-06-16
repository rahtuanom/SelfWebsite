'use client';

import React, { Children, cloneElement } from 'react';

export type DockItemData = {
  icon: React.ReactNode;
  label: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  isActive?: boolean;
};

export type DockProps = {
  items: DockItemData[];
  className?: string;
  distance?: number;
  panelHeight?: number;
  baseItemSize?: number;
  dockHeight?: number;
  magnification?: number;
  spring?: any;
};

type DockItemProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  baseItemSize: number;
  isActive?: boolean;
};

function DockItem({
  children,
  className = '',
  onClick,
  baseItemSize,
  isActive
}: DockItemProps) {
  return (
    <div
      onClick={onClick}
      style={{
        width: baseItemSize,
        height: baseItemSize
      }}
      className={`relative inline-flex items-center justify-center rounded-full
        bg-white dark:bg-[#120F17] 
        border-[2px] border-black/10 dark:border-neutral-700/50 
        shadow-[0px_4px_10px_rgba(0,0,0,0.05)] dark:shadow-md
        ${isActive ? 'border-black/50 dark:border-white/30 bg-gray-100 dark:bg-neutral-800' : ''}
        ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      {Children.map(children, child =>
        React.isValidElement(child)
          ? cloneElement(child as React.ReactElement<{ isActive?: boolean }>, { isActive })
          : child
      )}
    </div>
  );
}

// Disabling tooltips for mobile as per request (no hover interactions)
function DockLabel() {
  return null;
}

type DockIconProps = {
  className?: string;
  children: React.ReactNode;
  isActive?: boolean;
};

function DockIcon({ children, className = '', isActive }: DockIconProps) {
  return (
    <div className={`flex items-center justify-center ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-300'} ${className}`}>
      {children}
    </div>
  );
}

export default function Dock({
  items,
  className = '',
  panelHeight = 64,
  baseItemSize = 48
}: DockProps) {
  return (
    <div 
      className="mx-2 flex max-w-full items-center justify-center"
    >
      <div
        className={`${className} flex items-end w-fit gap-3 sm:gap-4 rounded-3xl 
          border-[2px] border-black/5 dark:border-neutral-700/50 
          bg-white/80 dark:bg-[#120F17]/80 backdrop-blur-md
          shadow-lg dark:shadow-2xl 
          pb-2 px-3 sm:px-4`}
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="Application dock"
      >
        {items.map((item, index) => (
          <DockItem
            key={index}
            onClick={item.onClick}
            className={item.className}
            baseItemSize={baseItemSize}
            isActive={item.isActive}
          >
            <DockIcon>{item.icon}</DockIcon>
            <DockLabel />
          </DockItem>
        ))}
      </div>
    </div>
  );
}
