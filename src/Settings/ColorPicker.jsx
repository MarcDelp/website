import React from 'react';
import { ColorPicker as MUIColorPicker } from 'material-ui-color';

export default function ColorPicker({ color, updateColor, label }) {
  return (
    <>
      <span>{ label }</span>
      <MUIColorPicker
        deferred
        disableAlpha
        hideTextfield
        value={ color }
        onChange={ updateColor }
      />
    </>
  )
}
