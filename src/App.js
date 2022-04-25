import React, { useState } from 'react'
import './App.css';
import Input from './components/Input';
import List from './components/List';
import TopNav from './components/TopNav';
import Footer from './components/Footer';


function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);
  const [itemId, setItemId] = useState(0);
  const [isDone] = useState(false);

  const handleChange = (event) => {
    setItem(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      itemId: Math.floor(Math.random() * 1000),
      title: item,
      isDone
    };
    const updatedItems = [newItem, ...items];

    setItem("");
    setItemId(0);
    setItems(updatedItems);

  };

  const toggleDone = (id) => {
    setItems(items.map(item => {
      if (item.itemId === id) {
        return {
          ...item,
          isDone: !item.isDone,
        };
      } else {
        return item;
      }
    }))
  }

  const handleDelete = (id) => {
    const filterDelete = items.filter(item => item.itemId !== id);
    setItems(filterDelete);
  };
  return (
    <div div className="app">
      <TopNav />

      <List
        items={items}
        isDone={isDone}
        toggleDone={toggleDone}
        handleDelete={handleDelete}
      />
      <Input
        item={item}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      <Footer />
    </div>
  );
}

export default App;
