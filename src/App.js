import React from 'react';
import createform from './img/CreatePostForm.png'
import createform2 from './img/CreatePostForm2.png'
import listposts from './img/ListPosts.png'
import filterpostsall from './img/FilterPosts.png'
import filterposts2 from './img/FilterPosts2.png'
import deletepost from './img/DeletePost.png'
import edit from './img/Edit.png'
import editform from './img/EditForm.png'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from "./components/navigation";
import Create from "./create/create";
import List from "./list/list";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
  <div className="appcontainer">
      <Router>
        <Navigation />
        <div>
          <Switch>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/list">
              <List />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  </div>
  );
}

function Home() {
  return (
  <div className="contentcontainer">
  <h2>Home</h2>
  <p>Please complete the following tasks. The tasks can be completed with the existing routes. There are a handful of css classes in App.css to assist with formatting.</p>
  <ol><li>On the "Create Posts" screen, create a new simple form to allow a user to enter a Post.<br/>
    A post consists of two fields, a Title and a Body. <br/>
    There should be a "Create" button and on clicking this, the user will be alerted (using window.alert()) with the Post they have created.<br/>
    <span><img src={createform} alt="Create Form"/></span>
  </li>
  <li>On the "Create Posts" screen, <br/>
    Update the "Create" button, such that the posts should be listed as on the screen, beneath the Create New Posts, box.<br/>
    <span><img src={createform2} alt="Create Form 2"/></span>
  </li>
  <li>On the "List Posts" screen, <br/>
    The same posts should be listed as on the screen.<br/>
    For the purposes of this test, you don't need to reuse the component/function created in the previous step. Copy/Paste is fine.<br/>
    <span><img src={listposts} alt="List Posts"/></span>
  </li>
  <li>On the "List Posts" screen, <br/>
    Add a filter, to either show 2 or All posts. On clicking this, the button, the number of posts should be updated.<br/>
    (This can be written inline, but consider that this component may be refactored into a reusable component in the future.<br/>
    The filter state should be preserved, if you were to navigate around the app)<br/>
    
    <br/>
    Not filtered (filtered to All):<br/><img src={filterpostsall} alt="Filter Posts All"/><br/>

    Filtered to two:<br/><img src={filterposts2} alt="Filter Posts"/>
  </li>
  <li>On the "Create Posts" screen, <br/>
    Add a "Delete" button to a post, which deletes the post from the list.<br/>
    <span><img src={deletepost} alt="Delete Post"/></span>
  </li>
  <li>On the "Create Posts" screen, <br/>
    Add a "Edit" button to a post, which allows the user to edit the post.<br/>
    <span><img src={edit} alt="Edit Post"/></span><br/>
    In the form, the title changes to "Edit Post" and button changes to "Update".<br/>
    On clicking update, the post is updated.<br/>
    <span><img src={editform} alt="Edit Post Form"/></span>
  </li>
  <li>Refactor the List Posts component, used in the Create/List page into a common shared component.
  </li>
  </ol>
  </div>
  );
}

export default App;
