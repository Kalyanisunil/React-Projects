import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export default function EditRecipe() {

  const { id } = useParams();
  
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [cooking_time, setCooking_time] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [content, setContent] = useState('');

    let navigate = useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:8080/recipes/public'+id).then(response=>{
            setTitle(response.data.title);
            setContent(response.data.content);
        })
    },[id]);
    function updateRecipe(){
        axios.post('http://localhost:8080/recipes/addRecipe'+id,{
            title: title,
            content: content
        }).then(response=>{
            alert(response.data.message)
        })
        navigate('/profile');
    }

  

  return (
    <>
      <Navbar />

      <div className="container my-5">
        <h2 className="fw-bold mb-4">Edit Recipe </h2>

        <form className="card p-4 shadow" onSubmit={updateRecipe}>
          <input
            type="text"
            className="form-control mb-3"
            value={title}
            name="title"
            onChange={(event)=>{setTitle(event.target.value)}}
          />

          <input
            type="text"
            className="form-control mb-3"
            value={image}
            name="image"
           onChange={(event)=>{setImage(event.target.value)}}
          />

          <textarea
            className="form-control mb-3"
            rows="4"
            value={ingredients}
            name="ingredients"
            onChange={(event)=>{setIngredients(event.target.value)}}
          />
           <textarea
            className="form-control mb-3"
            rows="4"
            value={steps}
            name="steps"
            onChange={(event)=>{setSteps(event.target.value)}}
          />
           <textarea
            className="form-control mb-3"
            rows="4"
            value={cooking_time}
            name="cooking_time"
            onChange={(event)=>{setCooking_time(event.target.value)}}
          />

            <textarea
            className="form-control mb-3"
            rows="4"
            value={difficulty}
            name="difficulty"
            onChange={(event)=>{setDifficulty(event.target.value)}}
          />

          <button className="btn btn-primary w-100">Save Changes</button>
        </form>
      </div>

      <Footer />
    </>
  );
}
