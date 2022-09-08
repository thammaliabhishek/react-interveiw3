import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UseE from './Hooks/UseE';
import UseR from './Hooks/UseR';
import UseSt from './Hooks/UseS';
import UseM from './Hooks/UseM';


function App() {
  return (
    <>
    <div className="App">
    <h1>15. Difference between Axios and fetch.</h1>
      <p><h4>Axios:</h4>Axios is a Javascript library used to make HTTP requests from node.js or XMLHttpRequests from the browser and it supports the Promise API that is native to JS ES6. It can be used intercept HTTP requests and responses and enables client-side protection against XSRF. It also has the ability to cancel requests.</p>
      <p><h4>Fetch:</h4>The Fetch API provides a fetch() method defined on the window object. It also provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline (requests and responses). The fetch method has one mandatory argument- the URL of the resource to be fetched. This method returns a Promise that can be used to retrieve the response of the request. </p>
       <h1>17. What is UseState Hook ?(Implementation)</h1>
       <p>The React useState Hook allows us to track state in a function component.State generally refers to data or properties that need to be tracking in an application.Basically it takes two arguments one is initial value and second one is the function</p>
          <UseSt/>

          <h1>18. What is useEffect Hook ?(Implementation)</h1>
          <p>useEffect :It allows us to implement all of the lifecycle hooks from within a single function API. // this will run when the component mounts and anytime the stateful data changes</p>
          <UseE/>

          <h1>19. What is UseReducer Hook ?(Implementation)</h1>
          <p>It does very similiar to setState, It's a different way to manage state using Redux Pattern. Instead of updating the state directly, we dispatch actions, that go to a reducer function, and this function figure out, how to compute the next state.</p>

          <UseR/>

          <h1>19. What is UseMemo Hook</h1>
          <p>The React useMemo Hook returns a memoized value.Think of memoization as caching a value so that it does not need to be recalculated.The useMemo Hook only runs when one of its dependencies update.This can improve performance. The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function. You can learn more about useCallback in the useCallback chapter.</p>
          <UseM/>
    </div>
    </>
  );
}

export default App;
