import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

export default function Project() {
  const id1 = useParams();
  console.log('iddd1', id1)
  
  // const [feature, setFeature] = useState(JSON.parse(localStorage.getItem("features")));

  const [feature, setFeature] = useState([
    { projectsId: id1.id ,name:"Feature1",id:1 },
    ]);


  const [inputfeature, setInputFeature] = useState();

  const [isVisible, SetisVisible] = useState();

  const [updateFeature, SetupdateFeature] = useState();
  const navigate = useNavigate();


  useEffect(() => {
    localStorage.setItem("features", JSON.stringify(feature));
  }, [feature]);


  useEffect(() =>{
    const feature = JSON.parse(localStorage.getItem("features"))
    if(feature){
      setFeature([...feature]);
    }
  }, []);

  const addFeatures = () => {
    const feature = JSON.parse(localStorage.getItem("features"))

    const id= feature.length+1

    const name = inputfeature;
    const projectsId = id1.id;
    // const ids = feature.map((post) => {
    //   return post.id;
    // });
    // const id = Math.max.apply(null, ids) + 1;
    const post = { projectsId: projectsId, id: id, name: name };
    feature.push(post);
    setFeature([...feature]);
  };


  // const deleteFeature = (id) => {
  //   console.log("111", id);
  //   const data1 = feature.filter((feature) => {
  //     if (feature.id !== id) {
  //       return feature;
  //     }
  //   });
  //   setFeature(data1);
  // };


const deleteFeature = (id) => {
console.log("deleed");
console.log("first", id);
const data1 = feature.filter((feature1) => feature1.id !== id);
setFeature(data1);
const todo = JSON.parse(localStorage.getItem('todo'));
localStorage.setItem("todo", JSON.stringify( todo.filter((item)=>item.projectid!=id)));

};



  
  const editFeatute = (id, name) => {
    SetisVisible(id);
    SetupdateFeature(name);
  };


const updateFeature1 =(id, name) =>{
  const feature = JSON.parse(localStorage.getItem("features"))
  localStorage.setItem("features", JSON.stringify(feature))
  let posts=feature;
  posts.map((post) =>{
    if(post.id===id){
      post.name=name;
    }
  });
  setFeature(posts);
  SetisVisible('')
}

const titleNavigate = (projectsid, projectid) => {
  navigate(`/feature/${projectsid}/${projectid}`);
};


  return (
    <div>
      <center className="main-container">
        <div className="app">
      <div >
        <button onClick={() => navigate(-1)} className="backbtn"> Go back </button>
      </div>
      <h4>{id1.id.toUpperCase()}</h4>
      <hr/>
      {feature
        .filter((feature) => feature.projectsId === id1.id)
        .map((feature, index) => {
          console.log('fffffeture', feature)
          return (
            <div key={index}>
              {isVisible === feature.id ? (
                <div>
                  <input type="text" value={updateFeature}
                  onChange={(e) =>SetupdateFeature(e.target.value)}/>
                  <button  className="editbtn" onClick={() =>{updateFeature1(feature.id, updateFeature)}}>Update</button>
                </div>
              ) : (
                <div>
                  <p onClick={() => { titleNavigate(id1.id, feature.id)}} >
                    {feature.id} {feature.name}
                  </p>
                  <button
                   className="editbtn"
                
                    onClick={() => {
                      editFeatute(feature.id, feature.name);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="deletebtn"
                    onClick={() => {
                      deleteFeature(feature.id);
                    }}
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
          );
        })}

      <div>
        <br />
        <input type="text" onChange={(e) => setInputFeature(e.target.value)} />
        <button onClick={addFeatures} className="addbtn">+</button>
      </div><br/>
      </div>
      </center>
    </div>
  );
}
