import { useForm } from 'react-hook-form'
import { useTasks } from '../context/TaskContext';

function NewPubPage() {

  const {register, handleSubmit} = useForm();
  const {createTask} = useTasks()
  console.log(createTask )

  const onSubmit = handleSubmit((data) => {
    createTask(data);
  })
  
  return (
    <main> 
      <div className="flex h-[calc(100vh-100px)] items-center justify-center">
        <div>
          <h1 className='flex items-center justify-center text-2xl font-bold my-6'> Nueva publicacion</h1>
          <form onSubmit={onSubmit}>

            <input type="text" placeholder="Titulo" 
              {...register("curso", {required: true})}
              className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
              autoFocus
            />

            <textarea rows='5' placeholder='Descripcion'
              {...register("mensaje", {required: true})}
              className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'

            ></textarea>


            <button>Guardar</button>
          </form>

        </div>
      </div>
    </main>
  )
}

export default NewPubPage