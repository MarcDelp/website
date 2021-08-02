import React, { useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import StyleCreator from './StyleCreator';

export default function StyleSelector() {
  const [ style, setStyle ] = useState('dark');

  const handleStyleChange = (event) => {
    setStyle(event.target.value);
  };

  return (
    <>
      <RadioGroup
        value={ style }
        onChange={ handleStyleChange }
      >
        <FormControlLabel
          value='light'
          control={<Radio color='primary' />}
          label='Thème clair'
        />
        <FormControlLabel
          value='dark'
          control={<Radio color='primary' />}
          label='Thème sombre'
        />
        <FormControlLabel
          value='custom'
          control={<Radio color='primary' />}
          label='Thème manuel'
        />
      </RadioGroup>

      {
        style === 'custom' && <StyleCreator/>
      }
    </>
  )
}
