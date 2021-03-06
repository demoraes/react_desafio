import React, { InputHTMLAttributes } from 'react';
import { SvgIconProps } from '@material-ui/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<SvgIconProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
  <Container>
    {Icon && <Icon fontSizeAdjust={20} />}
    <input {...rest} />
  </Container>
);

export default Input;
