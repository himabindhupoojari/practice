
import React from 'react';

// Example theme object
const defaultTheme = {
  primaryColor: 'yellow',
  secondaryColor: 'green',
};

// Define the withTheme HOC
export const withTheme = (Component:React.ComponentType<any>) => {
  return function ThemedComponent(props: any) {
    // You can access the theme from context, a global store, or props
    const theme = defaultTheme; // For simplicity, using a default theme

    // Pass the theme as props to the wrapped component
    return <Component {...props} theme={theme} />;
  };
};

// Example function component that uses the theme
const MyComponent = ({ theme }: any) => {
  return (
    <div style={{ backgroundColor: theme.primaryColor, color: theme.secondaryColor }}>
      This is a themed component
    </div>
  );
};

// Wrap the component with the withTheme HOC
const ThemedMyComponent = withTheme(MyComponent);

export default ThemedMyComponent;

