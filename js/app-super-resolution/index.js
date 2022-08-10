// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { registerRootComponent } from 'expo';
import App from './screens/NavigStack'

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

