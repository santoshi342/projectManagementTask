# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


/// Projects
import React, { useState, useEffect } from "react";

export default function Projects() {
  const data = [
    { id: "1", title: "Project1" },
    { id: "2", title: "Project2" },
  ];
  const [proremove, setProremove] = useState(data);
  const [input, setInput] = useState();
  const [id, Setid] = useState(2);
  const[isVisible,SetisVisible]=useState(false)

  const handleInput = (e) => {
    e.preventDefault();
    console.log(input);
  };

  const add = (e) => {
    e.preventDefault();
    const name = input;
    const ids = proremove.map((post) => {
      return post.id;
    });
    const id = Math.max.apply(null, ids) + 1;
    const post = { id: id, title: name };
    let posts = proremove.concat(post);
    setProremove(posts);
  };

  const remove = (id) => {
    const newproremove = proremove.filter((item) => item.id !== id);
    setProremove(newproremove);
  };


  const editproject=(id,title, e)=>{
    e.preventDefault();
    console.log("edited",id)
    SetisVisible(id)
    
    }




  return (
    <div>
      <form className="form">
        <center>
          <h4>Project</h4>
        </center>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {proremove.map((item, index) => {
              return (
                <tr key="index">
                    {isVisible===item.id ?
                    <div>
                    <input type="text" /><br/>
                    </div>:
             <div>
                  <td> {item.id}</td>
                  <td> {item.title}</td>
                  </div>
                  }
                  <button onClick={()=>{editproject(item.id,item.title)}}>Edit</button>
                  <button onClick={() => remove(item.id)}>Remove</button>
                    
                </tr>
              );
            })}
          </tbody>
        </table>{" "}
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Project Name"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={add} type="submit">
          Add Project
        </button><br/><br/>
      </form>
     
    </div>
  );
}


