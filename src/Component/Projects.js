import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";


const Projects = () => {

  const project = [
    { id: 1, name: "Project1" },
    { id: 2, name: "Project2" },
  ];


const [data, setData] = useState([...project]);

  // const [data, setData] = useState(JSON.parse(localStorage.getItem('projects')));

  const [inputProject, setInputProject] = useState();
  const [isVisible, SetisVisible] = useState();
  const navigate = useNavigate();
  const [updateProject, SetupdateProject] = useState();


  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("projects"));
    if (data) {
      setData([...data]);
    }
  }, []);


  const addProjects = () => {
    const name = inputProject;
    const ids = data.map((post) => {
      return post.id;
    });
  
    const id = Math.max.apply(null, ids) + 1;
    const post = { id: id, name: name };
    data.push(post);
    setData([...data]);
  };



const deleteProject = (id) => {
console.log("deleted",id);
const data1 = data.filter((project) => project.id !== id);
setData(data1);
const feature = JSON.parse(localStorage.getItem('features'));
localStorage.setItem("features", JSON.stringify( feature.filter((item)=>item.projectsId!=id)));
const todo =JSON.parse(localStorage.getItem('todo'));
console.log('tttt', todo)
localStorage.setItem("todo", JSON.stringify(todo.filter((item) =>item.projectid!=id)));
};



// single Item delete 
  //   const deleteProject = (id) => {
  //   const data1 = data.filter((project) => {
  //     if (project.id !== id) {
  //       return project;
  //     }
  //   });
  //   setData(data1);
  // };



  const editproject = (id, name) => {
    SetisVisible(id);
    SetupdateProject(name);
  };
  
  const handleUpdate = (e) => {
    SetupdateProject(e.target.value);
  };

  const updateproject1 = (id, name) => {
    let posts = [...data];
    var obj = {
      name: name,
      id: id,
    };
    posts.splice(id - 1, 1, obj);
    setData(posts);
    SetisVisible("");
  };


  const titleNavigate = (id) => {
    navigate(`/project/${id}`);
  };

 
  return (
    <div>
      <center className="main-container">
        <div className="app">
          <h3>PROJECTS</h3>
          <hr />

          {data.map((project, index) => {
            return (
              <div key={index}>
                {isVisible === project.id ? (
                  <div>
                    <input
                      type="text"
                      value={updateProject}
                      onChange={handleUpdate}
                    />
                    <button
                      className="editbtn"
                      onClick={() => {
                        updateproject1(project.id, updateProject);
                      }}
                    >
                      Update
                    </button>
                    <br />
                  </div>
                ) : (
                  <div>
                    <p onClick={() => { titleNavigate(project.id)}} >
                      {project.id} {project.name}
                    </p>
                    <button
                      className="editbtn"
                      onClick={() => {
                        editproject(project.id, project.name);
                      }}
                    >
                      Edit
                    </button>{" "}
                    <button
                      className="deletebtn"
                      onClick={() => {
                        deleteProject(project.id);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                )
                }
              </div>
            );
          })}
          <br />
          
            <div>
              <input
                type="text"
                onChange={(e) => setInputProject(e.target.value)}
              />
              <button onClick={addProjects} className="addbtn">
                {" "}
                +
              </button>
            </div>
          
          <br />
        </div>
      </center>
    </div>
  );
};

export default Projects;
