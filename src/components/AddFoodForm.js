// AddFoodForm.js
import React, { useState } from 'react';
import { Input, Button, Divider } from 'antd';

function AddFoodForm({ onAddFood }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings
    };
    onAddFood(newFood);
    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };
  const lableStyle ={fontSize:'20px', textAlign:'left' ,fontWeight:'bold',padding:'4px'};
  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '60vw', margin: '0 auto' }}>
        <Divider className='App-header' style={{fontSize:'32px', fontWeight:'bold'}}>Add Food Entry</Divider>
        <label style={lableStyle} >Name</label>
        <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} style={{ marginBottom: '10px' }} />
        <label style={lableStyle}>Image</label>
        <Input placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} style={{ marginBottom: '10px' }} />
        <label style={lableStyle}>Calories</label>
        <Input placeholder="Calories" value={calories} onChange={(e) => setCalories(e.target.value)} style={{ marginBottom: '10px' }} />
        <label style={lableStyle}>Servings</label>
        <Input placeholder="Servings" value={servings} onChange={(e) => setServings(e.target.value)} style={{ marginBottom: '10px' }} />
        <Button type="primary" htmlType="submit" style={{ width: '100%',height:'40px',  fontSize:'20px',fontWeight:'bolder'}}>Create</Button>
    </form>
  );
}

export default AddFoodForm;