import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';

import ColorPicker from './ColorPicker';

export default function StyleCreator() {
  const theme = useTheme();
  const [ primaryColor, setPrimary ] = useState(theme.palette.primary.main);
  const [ secondaryColor, setSecondary ] = useState(theme.palette.secondary.main);
  const [ backgroundColor, setBackground ] = useState(theme.palette.background.default);

  const updatePrimary = (color) => {
    const newColor = `#${color.hex}`;
    setPrimary(newColor);
  };

  const updateSecondary = (color) => {
    const newColor = `#${color.hex}`;
    setSecondary(newColor);
  };

  const updateBackground = (color) => {
    const newColor = `#${color.hex}`;
    setBackground(newColor);
  };

  return (
    <>
      <ColorPicker
        label='Primary color'
        color={ primaryColor }
        updateColor={ updatePrimary }
      />
      <ColorPicker
        label='Secondary color'
        color={ secondaryColor }
        updateColor={ updateSecondary }
      />
      <ColorPicker
        label='Background color'
        color={ backgroundColor }
        updateColor={ updateBackground }
      />
    </>
  )
}
