import React from 'react';
import './App.scss';

export const App = () => {
  // Компонент Sum оголошуємо тут же
  const Sum = ({ a = 0, b = 0 }) => {
    const result = a + b;
    return (
      <p>
        Sum of {a} and {b} is {result}
      </p>
    );
  };

  return (
    <div>
      <Sum a={2} b={3} />
      <Sum a={-5} b={5} />
      <Sum a={10} />
      <Sum b={5} />
      <Sum />
    </div>
  );
};
