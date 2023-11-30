
import React, { useState } from 'react';
import '../../src/index.css'


const BlogPublicado = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [blogData, setblogData] = useState(null);

  const handleBlog = async () => {
    try {
      // Hacer una solicitud GET al servidor para obtener el blog
      const response = await fetch(`http://localhost:8081/api/Tutorials?title=${title}&imageUrl=${imageUrl}&description=${description}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('blog obtenido con éxito:', data);
        setblogData(data); // Almacena los datos en el estado
      } else {
        console.error('Fallo al obtener el blog');
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

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <>
    
      <button type='button' onClick={handleBlog}>
        Ver blog
      </button>

      {blogData && (
        <div>
          <h2>Notas</h2>
          {blogData.map((item, index) => (
            <div key={index} className="card">
              <h3>{item.title}</h3>
              <img src={item.imageUrl} alt={item.title} />
              <p>{item.description}</p>
            
            </div>
          ))}
        </div>
      )}

    </>
  );
};

export default BlogPublicado;