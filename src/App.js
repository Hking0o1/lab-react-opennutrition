import  './App.css';
import { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from  'antd';
import foods from  './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
export default function App() {
	const [foodList, setFoodList] = useState(foods);
  const [showForm, setShowForm] = useState(true);

  const handleAddFood = (newFood) => {
    setFoodList([...foodList, newFood]);
  };
	const handleSearch = (searchTerm) => {
    const filteredFoods = foods.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFoodList(filteredFoods);
};
const handleDelete = (foodToDelete) => {
	setFoodList(foodList.filter(food => food !== foodToDelete));
};
return (
    <div className="App">
        <Search handleSearch={handleSearch} />
        <Button onClick={() => setShowForm(!showForm)} type="primary" style={{ width: '40%',height:'40px',  fontSize:'20px',fontWeight:'bolder'}}>
          {showForm ? <kbd>Hide Form</kbd> : <kbd>Add New Food</kbd>}
        </Button>
          {showForm && <AddFoodForm onAddFood={handleAddFood} />}
          <h1 className='App-header'>FOOD LIST</h1>
          <Row gutter={[16, 16]}>
            {foodList.map((food, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={6}>
                <FoodBox food={food} onDelete={() => handleDelete(food)}/>
              </Col>
            ))}
          </Row>
          {foodList.length === 0 && <p style={{fontSize:'40px',fontWeight:'bold',padding:'4px'}}>No items left. Add some food!</p>}
        </div>
      );
    }