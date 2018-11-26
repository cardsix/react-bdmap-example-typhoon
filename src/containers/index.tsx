/**
 * App Root Component
 */
import React from 'react'
import { hot } from 'react-hot-loader'
import BDMapLoader from 'react-bdmap/BDMapLoader'
import Home from './Home'

export class App extends React.Component {
  public render() {
    return (
      <BDMapLoader apiKey="1XWjAMBIusA3EL4G61lXS0AliZd0l7bF" fallback={err => (err ? 'Failed to load' : 'loading...')}>
        <Home />
      </BDMapLoader>
    )
  }
}

export default hot(module)(App)
