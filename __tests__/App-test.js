/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: Goal renderer must be required after react-native.
import renderer from 'react-Goal-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});
