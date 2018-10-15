import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { ipcRenderer } from 'electron';
const rootElement = document.querySelector(document.currentScript.getAttribute('data-container'));

 class App extends React.Component {
   constructor() {
     super();
     this.state = {
       repoInfo: '',
       log:''
     };
     this.gitLog = this.gitLog.bind(this);
     this.gitInit = this.gitInit.bind(this);
     this.gitClone = this.gitClone.bind(this);
     this.gitBranch = this.gitBranch.bind(this);
     this.gitDiff = this.gitDiff.bind(this);
     this.gitDiffSummary = this.gitDiffSummary.bind(this);
  }

   gitLog() {
     const log = ipcRenderer.sendSync('git-log');
     console.log(log);
     this.setState({log:log.toString()});
   }

   gitClone() {
    const log = ipcRenderer.sendSync('git-clone');
    console.log(log);
  }

   gitBranch() {
    const branch = ipcRenderer.sendSync('git-branch');
    console.log(branch);
  }

  gitDiff() {
    const diff = ipcRenderer.sendSync('git-diff');
    console.log(diff.toString());
  }

  gitDiffSummary() {
    const diff = ipcRenderer.sendSync('git-diff-summary');
    console.log(diff);
  }

  gitInit() {
    const repoInfo = ipcRenderer.sendSync('git-init');
    this.setState({ repoInfo: repoInfo.repo.toString(), log:repoInfo.log.toString() });
  }

   render() {
     return (
       <div>
       <input type="button" value="GET LOG" onClick={this.gitLog} />
       <input type="button" value="INITIALIZE REPO" onClick={this.gitInit} />
       <input type="button" value="CLONE" onClick={this.gitClone} />
       <input type="button" value="BRANCH" onClick={this.gitBranch} />
       <input type="button" value="DIFF" onClick={this.gitDiff} />
       <input type="button" value="DIFF SUMMARY" onClick={this.gitDiffSummary} />
     </div>
     );
   }
 }


 ReactDOM.render( <App />,rootElement);
=======
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createMemoryHistory } from 'history';
import routes from './routes';
import configureStore from './store';

const syncHistoryWithStore = (store, history) => {
  const { routing } = store.getState();
  if (routing && routing.location) {
    history.replace(routing.location);
  }
};

const initialState = {};
const routerHistory = createMemoryHistory();
const store = configureStore(initialState, routerHistory);
syncHistoryWithStore(store, routerHistory);

const rootElement = document.querySelector(document.currentScript.getAttribute('data-container'));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={routerHistory}>{routes}</ConnectedRouter>
  </Provider>,
  rootElement,
);
>>>>>>> 2fff0c364ae7d0273f5a6322a1be7fbac234e69b
