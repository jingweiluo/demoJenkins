import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';
import {render, fireEvent} from  '@testing-library/react';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe('Addition', () => {
  it('Knows 2 and 2 equal 4', () => {
    expect(2 + 2).toBe(4);
  });

  test('Knows 1 and 2 equal 3', () => {
    expect(1 + 2).toBe(3);
  });

  it('button work ?', () => {
    
  }); 
});




