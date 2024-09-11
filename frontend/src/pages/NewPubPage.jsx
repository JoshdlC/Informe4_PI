import { useForm } from 'react-hook-form'
import { useTasks } from '../context/TaskContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

function NewPubPage() {

  const {register, handleSubmit, setValue} = useForm();
  const {createTask, getTask, updateTask} = useTasks()
  
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask(){
      if (params._id){
        const task = await getTask(params._id);
        setValue('curso', task.curso)
        setValue('mensaje', task.mensaje)
      }
    }
  }, [])

  const onSubmit = handleSubmit((data) => {
    if(params._id){
      console.log('editando')
      updateTask(params._id, data);
    } else {
      createTask(data);
      navigate('/tasks')
    }

  })
  
  return (
    <main>  
      <div className="flex h-[calc(100vh-100px)] items-center justify-center">
        <div>
          <h1 className='flex items-center justify-center text-2xl font-bold my-6'> Nueva publicacion</h1>
          <form onSubmit={onSubmit}>

            //! Falta el apartado de curso 
            <label htmlFor='curso'> Curso</label>
            <input type="text" placeholder="Titulo" 
              {...register("curso", {required: true})}

              className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
              autoFocus
            />

            <label htmlFor='mensaje'> Mensaje</label>

            <textarea rows='5' placeholder='Descripcion'
              {...register("mensaje", {required: true})}
              className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'

            ></textarea>

            <label htmlFor='date'> Fecha</label>
            <input type="date" 
              {...register("date", {required: true})}
              className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'/>

            <button>Guardar</button>
          </form>

        </div>
      </div>
    </main>
  )
}

export default NewPubPage