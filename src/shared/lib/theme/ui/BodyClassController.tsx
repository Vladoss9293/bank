import React, { useEffect } from 'react'
import { useAppSelector } from '../../../../app/providers/StoreProvider/config/redux';
import { selectCurrentTheme } from '../../../ui/ThemeButton/model';

export function BodyClassController() {
    const currentTheme = useAppSelector(selectCurrentTheme);

    useEffect(() => {
      document.body.classList.remove('light', 'dark');
      document.body.classList.add(currentTheme === 'dark' ? 'dark' : 'light');
    }, [currentTheme]);
    
  
    return null;
}
