'use client';

import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions,
  AnimatePresence
} from 'framer-motion';
import React, { Children, cloneElement, useEffect, useMemo, useRef, useState } from 'react';

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
  spring?: SpringOptions;
};

type DockItemProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  mouseX: MotionValue<number>;
  spring: SpringOptions;
  distance: number;
  baseItemSize: number;
  magnification: number;
  isActive?: boolean;
};

function DockItem({
  children,
  className = '',
  onClick,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
  isActive
}: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isHovered = useMotionValue(0);

  // Disable magnification on touch devices for better mobile experience
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const mouseDistance = useTransform(mouseX, val => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize
    };
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(
    mouseDistance, 
    [-distance, 0, distance], 
    [baseItemSize, isTouch ? baseItemSize : magnification, baseItemSize]
  );
  const size = useSpring(targetSize, spring);

  return (
    <motion.div
      ref={ref}
      style={{
        width: size,
        height: size
      }}
      onHoverStart={() => !isTouch && isHovered.set(1)}
      onHoverEnd={() => !isTouch && isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center rounded-full transition-colors duration-300
        bg-white dark:bg-[#120F17] 
        border-[2px] border-black/10 dark:border-neutral-700/50 
        shadow-[0px_4px_10px_rgba(0,0,0,0.05)] dark:shadow-md
        hover:border-black/30 dark:hover:border-neutral-500
        ${isActive ? 'border-black/50 dark:border-white/30 bg-gray-100 dark:bg-neutral-800' : ''}
        ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      {Children.map(children, child =>
        React.isValidElement(child)
          ? cloneElement(child as React.ReactElement<{ isHovered?: MotionValue<number>; isActive?: boolean }>, { isHovered, isActive })
          : child
      )}
    </motion.div>
  );
}

type DockLabelProps = {
  className?: string;
  children: React.ReactNode;
  isHovered?: MotionValue<number>;
};

function DockLabel({ children, className = '', isHovered }: DockLabelProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isHovered) return;
    const unsubscribe = isHovered.on('change', latest => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className={`${className} absolute -top-8 left-1/2 w-fit whitespace-pre rounded-md border 
            border-black/10 dark:border-neutral-700 
            bg-white dark:bg-[#120F17] 
            px-3 py-1 text-xs font-medium 
            text-black dark:text-white 
            shadow-sm pointer-events-none`}
          role="tooltip"
          style={{ x: '-50%' }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

type DockIconProps = {
  className?: string;
  children: React.ReactNode;
  isHovered?: MotionValue<number>;
  isActive?: boolean;
};

function DockIcon({ children, className = '', isActive }: DockIconProps) {
  return (
    <div className={`flex items-center justify-center transition-colors duration-300 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-300'} ${className}`}>
      {children}
    </div>
  );
}

export default function Dock({
  items,
  className = '',
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  panelHeight = 64,
  dockHeight = 256,
  baseItemSize = 48
}: DockProps) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const maxHeight = useMemo(() => Math.max(dockHeight, magnification + magnification / 2 + 4), [magnification, dockHeight]);
  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, isTouch ? panelHeight : maxHeight]);
  const height = useSpring(heightRow, spring);

  return (
    <motion.div 
      style={{ height, scrollbarWidth: 'none' }} 
      className="mx-2 flex max-w-full items-center justify-center"
    >
      <motion.div
        onMouseMove={({ pageX }) => {
          if (!isTouch) {
            isHovered.set(1);
            mouseX.set(pageX);
          }
        }}
        onMouseLeave={() => {
          if (!isTouch) {
            isHovered.set(0);
            mouseX.set(Infinity);
          }
        }}
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
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
            isActive={item.isActive}
          >
            <DockIcon>{item.icon}</DockIcon>
            <DockLabel>{item.label}</DockLabel>
          </DockItem>
        ))}
      </motion.div>
    </motion.div>
  );
}
