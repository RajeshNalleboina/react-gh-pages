import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Maha Lakshmi</h1>
            <p>Creating a react app and deploying the project to github pages</p>
           <h5>Follow below steps</h5>
            <div className="Data">
            <ul>
                <li>Checking node version in local "node --version"</li>
                <li>Checking node version in local "npm --version"</li>
                <li>Creating the new repository in github as "react-gh-pages"</li>
                <li>create a react app "create-react-app react-gh-pages"</li>
                <li>"cd react-gh-pages"</li>
                <li>run "npm install gh-pages --save-dev" </li>
                <li>"Add home page key and deploy, deploy objects in package.json"</li>
                <li>run command to Initilize the git "git init"</li>
                <li>run "git remote add origin https://github.com/gitname/react-gh-pages.git "</li>
                <li>run "npm run deploy" </li>
                <li>run "git add." </li>
                <li>run "git commit -m ...........message......" </li>
                <li>run "git push origin master" </li>
                </ul>
            </div>

        </div>
    );
}

export default App;
