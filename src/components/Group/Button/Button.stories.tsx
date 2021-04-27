import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';

storiesOf('Button', module)
  .add('default',
    () => <Button text="Button" onPress={() => console.log("I am Button")} />
  )