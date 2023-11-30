import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await fetch('http://localhost:8081/api/Tutorials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, imageUrl, description }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Publicación exitosa:', data);
      
        setTitle('');
        setImageUrl('');
        setDescription('');
      } else {
        console.error('Fallo en la publicación');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error.message);
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    const url = e.target.value;
    setImageUrl(url);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleTitleChange}
        />

        <label>URL de la imagen:</label>
        <input
          type="text"
          name="imageUrl"
          value={imageUrl}
          onChange={handleImageUrlChange}
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={handleDescriptionChange}
        />

        <button type="submit">Publicar</button>
      </form>

      <Link to={'/publicacion'}>ver blogs</Link>
    </div>
  );
};

export default Blog;
