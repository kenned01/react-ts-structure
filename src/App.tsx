import { Switch, Route } from 'react-router-dom';
import { VIEWS } from './components/Routing/All';
import PrivateView from './components/Views/Controller/Private';
import PublicView from './components/Views/Controller/Public';

function App() {
  return (
    <>
      <Switch>
        {VIEWS.map( (view, i) => {

          var route = view.isProtected ?
                      <PrivateView view={view} /> :
                      <PublicView  view={view} />

          return (
            <Route
              exact
              path={view.path}
              key={i}
              render={() => route}
            />
          );

        })}
      </Switch>
    </>
  );
}

export default App;