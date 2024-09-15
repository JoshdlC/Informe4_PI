import { useForm } from 'react-hook-form'
import { useTasks } from '../context/TaskContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

export function NewPubPage() {

  const {register, handleSubmit, setValue, formState:{errors}} = useForm();
  const {createTask, getTask, updateTask} = useTasks();
  
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id){
        const task = await getTask(params.id);
        console.log(task)
        setValue("curso", task.curso)
        setValue("mensaje", task.mensaje)
        setValue("date", dayjs.utc(task.date).format('YYYY-MM-DD'))
      }
    }
    loadTask(); 
  }, []);

  const onSubmit = handleSubmit((data) => {

    const dataValid = {
      ... data,      
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
    };

    // if(data.date) dataValid.date = dayjs().utc(data.date).format();
    console.log(dataValid)
    if(params.id){
      console.log('editando')
      updateTask(params.id, dataValid);
    } else {
      createTask(dataValid);
    }
    navigate('/tasks')      

  })
  
  return (
    <main>  
      <div className="flex h-[calc(100vh-100px)] items-center justify-center">
        <div>
          <h1 className='flex items-center justify-center text-2xl font-bold my-6'> Nueva publicacion</h1>
          <form onSubmit={onSubmit}>

            
            <label htmlFor='curso'> Curso</label>
            <input type="text" placeholder="Titulo" 
              {...register("curso", {required: true})}

              className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
              autoFocus
            />
            {errors.curso && (
              <p className="text-red-500 text-xs">Por favor ingrese un titulo.</p>
            )}


            <label htmlFor='mensaje'> Mensaje</label>

            <textarea rows='5' placeholder='Descripcion'
              {...register("mensaje", {required: true})}
              className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'

            ></textarea>
            {errors.mensaje && (
              <p className="text-red-500 text-xs">Por favor ingrese un mensaje.</p>
            )}

            <label htmlFor='date'> Fecha</label>
            <input type="date" 
              {...register("date", {required: true})}
              className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'/>
            {errors.date && (
              <p className="text-red-500 text-xs">Por favor ingrese una fecha.</p>
            )}
            

            <button>Guardar</button>
          </form>

        </div>
      </div>
    </main>
  )
}

export default NewPubPage