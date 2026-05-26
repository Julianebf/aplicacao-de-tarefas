import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { tasks, removeTask } = useContext(TaskContext);

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>Minhas Tarefas</h1>
      <Link to="/add-task" style={{ display: 'inline-block', marginBottom: '20px', padding: '10px', background: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>
        ➕ Adicionar Nova Tarefa
      </Link>

      {tasks.length === 0 ? (
        <p>Nenhuma tarefa cadastrada.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {tasks.map((task) => (
            <li key={task.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #ccc', alignItems: 'center' }}>
              <span>{task.title}</span>
              <button 
                onClick={() => removeTask(task.id)} 
                style={{ background: '#dc3545', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '3px' }}
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;