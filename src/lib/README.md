### KeyboardShortcut

A React Component which takes a keyboard combo and callback as props, and runs that callback everytime that combo is pressed.

#### Props

**combo** - _string_ - eg: 'shift a'

**callback** - _function_ - eg: ()) => { ... }

#### Example

The following snippet will log _Hello World_ whenever shift+a is pressed.

```jsx
<KeyboardShortcut
  combo='shift a'
  callback={() => {
    console.log("Hello World!")
  }}
/>
```
