import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './sass/main.sass';

const TheLayout = React.lazy(() => import('./containers/TheLayout'));

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           the asdf
//         </p>
//       </header>
//     </div>
//   );
// }

export default App;
