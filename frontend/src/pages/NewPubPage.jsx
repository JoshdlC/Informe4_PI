import { useForm } from 'react-hook-form'
import { useTasks } from '../context/TaskContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { useCursos } from '../context/CursoContext';
import { useCatedraticos } from '../context/CatedraticoContext';
dayjs.extend(utc);

export function NewPubPage() {

  const {register, handleSubmit, setValue, formState:{errors}} = useForm();
  const {createTask, getTask, updateTask} = useTasks();
  const {user} = useAuth();
  const {getCursos, cursos} = useCursos();
  const { getCatedraticos, catedraticos} = useCatedraticos();
  const [ selectedOption, setSelectedOption ] = useState('curso');
  // console.log(user)
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
    getCatedraticos();
    getCursos();
    loadTask(); 
  }, []);

  const onSubmit = handleSubmit((data) => {
    const dataValid = {
        usuario: user._id,
        
        mensaje: data.mensaje,
        date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
        curso: selectedOption === 'curso' ? data.curso : data.catedratico // No necesitas concatenar aquí
    };
    console.log("usuario " + user);
    console.log(dataValid);
    console.log("Usuario id:")
    
    if (params.id) {
        updateTask(params.id, dataValid);
    } else {
        createTask(dataValid);
    }
    
    navigate('/tasks');
  });

  const cursosUnicos = Array.from(new Set(cursos.map(curso => curso.nombre)))
    .map(name => {
      return cursos.find(curso => curso.nombre === name);
  });

  const catedraticosUnicos = Array.from(new Set(catedraticos.map(catedratico => catedratico.nombre)))
    .map(name => {
      return catedraticos.find(catedratico => catedratico.nombre === name);
  });


  
  return (
    <main>  
      <div className="flex h-[calc(100vh-100px)] items-center justify-center">
        <div>
          <h1 className='flex items-center justify-center text-2xl font-bold my-6'> Nueva publicacion</h1>
          <div className="mb-4">
            <button
              type="button"
              onClick={() => setSelectedOption('curso')}
              className={`mr-2 px-4 py-2 rounded ${selectedOption === 'curso' ? 'bg-violet-600 text-white font-bold' : 'bg-violet-400'}`}
            >
              Cursos
            </button>
            <button
              type="button"
              onClick={() => setSelectedOption('catedratico')}
              className={`px-4 py-2 rounded ${selectedOption === 'catedratico' ? 'bg-violet-600 text-white font-bold' : 'bg-violet-400'}`}
            >
              Catedráticos
            </button>
          </div>
          <form onSubmit={onSubmit}>
            <input type="hidden" {...register("usuario")} value={user._id}/>
            {selectedOption === 'curso' && (
              <>
                <label htmlFor='curso'>Curso</label>
                <select
                  {...register("curso", { required: true })}
                  className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                >
                  {cursosUnicos.map(curso => (
                    <option key={curso._id} value={curso.value}>
                      {curso.nombre}
                    </option>
                  ))}
                </select>
                {errors.curso && (
                  <p className="text-red-500 text-xs">Por favor seleccione un curso.</p>
                )}
              </>
            )}

            {selectedOption === "catedratico" && (
              <>
                <label htmlFor="catedratico">Catedrático</label>
                <select
                    {...register("catedratico", {required: true})}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                >
                    {catedraticosUnicos.map(catedratico => (
                        <option key={catedratico._id} value={`${catedratico.nombre} ${catedratico.apellido}`}>
                            {catedratico.nombre} {catedratico.apellido}
                        </option>
                    ))}
                </select>
                {errors.catedratico && (
                  <p className="text-red-500 text-xs">Por favor seleccione un catedráctico.</p>
                )}
              </>
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
            

            <button className='bg-violet-600 hover:bg-violet-700 active:bg-violet-800 rounded-md px-4 py-2'>Guardar</button>
          </form>

        </div>
      </div>
    </main>
  )
}

export default NewPubPage