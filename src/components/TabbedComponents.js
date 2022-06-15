import React from 'react';
import { AppContext } from '../contexts';

export function A() {
  const { componentsColor } = React.useContext(AppContext);
  return <section style={{ background: componentsColor.A }}>A</section>;
}

export function B() {
  const { componentsColor } = React.useContext(AppContext);
  return <section style={{ background: componentsColor.B }}>B</section>;
}

export function C() {
  const { componentsColor } = React.useContext(AppContext);
  return <section style={{ background: componentsColor.C }}>C</section>;
}
