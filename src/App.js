import React from 'react';
import './style.css';

import { KeyboardShortcut } from './lib';
import { A, B, C } from './components';
import { AppContext } from './contexts';

export default function App() {
  const { setComponentColor } = React.useContext(AppContext);

  const keyboardShortcuts = [
    {
      combo: 'shift a',
      callback: () => setComponentColor((p) => ({ ...p, A: 'blue' })),
    },
    {
      combo: 'shift b',
      callback: () => setComponentColor((p) => ({ ...p, B: 'blue' })),
    },
    {
      combo: 'shift c',
      callback: () => setComponentColor((p) => ({ ...p, C: 'blue' })),
    },
    {
      combo: 'cmd a',
      callback: () => setComponentColor((p) => ({ ...p, A: 'red' })),
    },
    {
      combo: 'cmd b',
      callback: () => setComponentColor((p) => ({ ...p, B: 'red' })),
    },
    {
      combo: 'cmd c',
      callback: () => setComponentColor((p) => ({ ...p, C: 'red' })),
    },
  ];

  return (
    <main>
      <A />
      <B />
      <C />
      {keyboardShortcuts.map((ks) => (
        <KeyboardShortcut key={ks.combo} {...ks} />
      ))}
    </main>
  );
}
