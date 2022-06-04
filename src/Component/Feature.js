import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";

export default function Feature() {
  const id2 = useParams();
 
  const [todo, setToDo] = useState([
    { projectsid:id2.projectsid, projectid:id2.projectid, id: 1, name: "ToDo-one",  completed: false },
  ]);

  // const [todo, setToDo] = useState(JSON.parse(localStorage.getItem("todo")));

  const [inputToDo, setInputToDo] = useState();
  const [isVisible, SetisVisible] = useState();
  const [updateToDo , setUpdateToDo] = useState();

  const navigate = useNavigate();

  useEffect(() =>{
      localStorage.setItem("todo", JSON.stringify(todo));
      
  }, [todo])

  useEffect(() =>{
      const todo3 =JSON.parse(localStorage.getItem("todo"))
      if(todo3){
          setToDo([...todo3]);
      }
  }, []);

  const deleteToDo = (id) =>{
      const data1 = todo.filter((todo) =>{
          if(todo.id!==id){
              return todo;
          }
      })
      setToDo(data1);
  }


  const editToDo =(id, name)=>{
    SetisVisible(id);
    setUpdateToDo(name)

  }


  const addToDo =() =>{
      const todo = JSON.parse(localStorage.getItem("todo"))
      localStorage.setItem("todo", JSON.stringify(todo))
      const id= todo.length+1
      const name = inputToDo;
      const projectsid =id2.projectsid;
      const projectid = id2.projectid;
      const post ={projectsid:projectsid, projectid:projectid, id:id, name:name};
      todo.push(post);
      setToDo([...todo]);
}


const updateToDo1 = (id, name) =>{
    const todo = JSON.parse(localStorage.getItem("todo"))
    localStorage.setItem("todo", JSON.stringify(todo))
    let posts = todo;
    posts.map((post) =>{
        if(post.id===id){
            post.name=name

        }
    });
    setToDo(posts);
    SetisVisible('')
}

const completeToDo = (id) =>{
    console.log(id)
    todo.find((item) =>{
        if(item.id ==id){
            item.completed=!item.completed;
        }
        return (setToDo([...todo]))
    })
  }



  return(
      <div>
        <center className="main-container">
        <div className="app">
            <div>
        <button onClick={() => navigate(-1)} className="backbtn"> Go back </button>
      </div>

          <h4>{id2.projectid}</h4>
          <h4>ToDo List</h4>

          {todo.filter((todo) =>(todo.projectsid==id2.projectsid && todo.projectid ==id2.projectid))
          .map((todo, index) =>{

            return(
                <div key={index}>
                    
                    {isVisible === todo.id?(
                        <div>
                            <input type="text" value={updateToDo}
                            onChange={(e) => setUpdateToDo(e.target.value)}                    
                            />
                            <button onClick={()=>{updateToDo1(todo.id, updateToDo)}} className="editbtn">Update</button>
                        </div>
                    ):(

                  <div>
                      <p ></p>
                    <p>{todo.id}{" : "}{todo.name}</p>
                    <input type="checkbox" onChange={() => {completeToDo(todo.id) }} />
 

                    <button onClick={() =>{
                        editToDo(todo.id, todo.name)
                    }} className="editbtn">Edit</button>
                    <button onClick={() =>{
                        deleteToDo(todo.id)
                    }} className="deletebtn">Remove</button>
                  </div>  

                    )}
              </div>
              
              );

          })}
          <div><br/>
        
              <input type="text" onChange={(e) =>setInputToDo(e.target.value)}/>
              <button onClick ={addToDo} className="addbtn">+</button><br/><br/>
          </div>
          </div>
          </center>
      </div>


  )


}
