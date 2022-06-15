import React from 'react';
import { keypress } from 'keypress.js';

export function KeyboardShortcut(props) {
  const { combo, callback } = props;

  React.useEffect(() => {
    const listener = new keypress.Listener();
    listener.simple_combo(combo, callback);

    return () => listener.reset();
  }, []);

  return null;
}
