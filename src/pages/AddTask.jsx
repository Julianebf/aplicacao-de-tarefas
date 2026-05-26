import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { useNavigate, Link } from 'react-router-dom';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const { addTask } = useContext(TaskContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      id: Date.now().toString(),
      title: title
    };

    addTask(newTask);
    navigate('/');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>Adicionar Tarefa</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Digite o título da tarefa..." 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          style={{ flex: 1, padding: '10px', fontSize: '16px' }}
        />
        <button type="submit" style={{ padding: '10px 25px', background: '#28a745', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '5px' }}>
          Salvar
        </button>
      </form>
      <Link to="/" style={{ color: '#6c757d' }}>Voltar para a listagem</Link>
    </div>
  );
};

export default AddTask;