'use client';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { TSnackBar } from './types';
import { snackbarStyles } from './snackbarStyles';


const SnackBar = ({ id, type, title, subtitle, action }: TSnackBar): React.ReactElement => {
  const { border, icon, color } = snackbarStyles[type ?? 'info'];

  return (
    <div className={clsx('snackbar pb-2', `snackbar-${id}`)}>
      <div
        className={clsx(
          ' bg-white dark:bg-mainDark border border-slate-300 dark:border-slate-600 p-4 shadow-drop-2 transition-opacity flex z-30  justify-center items-center rounded-lg',
        )}
        role="alert"
      >
        <div className=' flex justify-center items-center p-2 rounded-lg mr-1 bg-gray-100' style={{backgroundColor: color}}>
          {icon}
        </div>

        <div className='ml-2'>
          <p className="text-base text-black font-lexend dark:text-white font-medium leading-4 m-0">{title}</p>
          {subtitle && <span className="text-sm text-gray-500 font-normal font-lexend leading-4 dark:text-white">{subtitle}</span>}
        </div>
      </div>
    </div>
  );
};

interface SnackbarResult {
  snackbarList: JSX.Element[]
  showSnackbar: (options: Omit<TSnackBar, 'id'>, duration?: number | null) => void
}

const useSnackbar = (): SnackbarResult => {
  const [snackbarList, setSnackbarList] = useState<TSnackBar[]>([]);

  useEffect(() => {
    snackbarList.forEach((snackbar) => {
      if (snackbar.duration !== null && snackbar.duration !== 0) {
        const id = snackbar.id;
        const timer = setTimeout(() => {
          closeSnackbar(id);
        }, snackbar.duration);
        return () => {
          clearTimeout(timer);
        };
      }
    });
  }, [snackbarList]);

  const showSnackbar = (options: Omit<TSnackBar, 'id'>, duration: number | null = 4000): void => {
    const id = Date.now().toString();
    const newSnackbar = { ...options, id, duration };
    setSnackbarList((prevList) => [...prevList, newSnackbar]);
  };

  const closeSnackbar = (id: string): void => {
    setSnackbarList((prevList) => prevList.filter((snackbar) => snackbar.id !== id));
  };

  return {
    snackbarList: snackbarList.map((snackbar) => (
      <SnackBar
        key={snackbar.id}
        id={snackbar.id}
        type={snackbar.type}
        title={snackbar.title}
        subtitle={snackbar.subtitle}
        action={snackbar.action}
      />
    )),
    showSnackbar,
  };
};

export { SnackBar, useSnackbar };
