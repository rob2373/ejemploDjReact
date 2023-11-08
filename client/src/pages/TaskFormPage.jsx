import {useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { createTask, deleteTask, updateTask, getTask } from '../api/task.api'
import {useNavigate, useParams} from 'react-router-dom'
import { toast } from "react-hot-toast"

export function TaskFormPage() {
  
  const {register, handleSubmit, formState:{ errors }, setValue }= useForm();

  const navigate = useNavigate();
  const params = useParams()
console.log(params)

  const onSubmit = handleSubmit(async data => {
    if (params.id){
      console.log("acutalizando");
      const update = await updateTask(params.id,data);
      toast.success('Tarea actualizada', {position:"bottom-right", style:{
        background:"black",
        color:"#FFF"
      }
    });

    }
    else{
    const respu = await createTask(data); 
    toast.success('Tarea creadan', {position:"bottom-right", style:{
      background:"black",
      color:"#FFF"
    }
  });
    }
    navigate("/tasks");
    });

  useEffect(() => {
    async function loadTaks(){
      if (params.id){
        const tarea = await getTask(params.id);
        setValue('title', tarea.data.title)
        setValue('description', tarea.data.description)
        setValue('numU', tarea.data.numU)
        setValue('numD', tarea.data.numD)

         };
    }
     
    loadTaks();

  }, []);
   
  return (
    <div className="container max-w-xl mx-auto bg-gray-500 m-3 p-3 rounded-md">

      <form onSubmit={onSubmit}>
        <h2 className='font-bold text-2xl'> Title </h2><br />
        <input type="text" placeholder="Title" 
        {...register("title", {required: true})} 
        className="bg-zinc-700 p-3 rounded-lg block w-full mb-2 "/>
        <br />
        {errors.title && <span> This fields is required </span>}
        <br />
        <h2 className='font-bold text-2xl'> Description </h2><br />
        <textarea rows="3" placeholder="Description"
        {...register("description", {required: true})}
        className="bg-zinc-700 p-3 rounded-lg block w-full mb-2 "></textarea>
        {errors.description && <span> This fields is required </span>}
        <br />
        <h2 className='font-bold text-2xl'> coloca un numero </h2><br />
        <input  type='number' placeholder="numU"
        {...register("numU", {required: true})}
        className="bg-zinc-700 p-3 rounded-lg block w-full mb-2 "/>
        {errors.description && <span> This fields is required </span>}
        <br />
        <h2 className='font-bold text-2xl'> coloca otro numero </h2><br />
        <input  type='number' placeholder="numD"
        {...register("numD", {required: true})}
        className="bg-zinc-700 p-3 rounded-lg block w-full mb-2 "/>
        {errors.description && <span> This fields is required </span>}
        <br />
        {/* <h2 className='font-bold text-2xl'> resultado</h2><br />
        <input  type='number' placeholder="resul"
        {...register("resul", {required: true})}
        className="bg-zinc-700 p-3 rounded-lg block w-full mb-2 "/>
        {errors.description && <span> This fields is required </span>}
        <br /> */}
        

        <button className='bg-emerald-500 p-3 rounded-lg block w-full mt-3 font-bold text-1xl'>Save</button>
      </form>
      <br />
      { params.id && (<button  onClick={() => {
        const accepted  = window.confirm('¿Estas seguro de eliminarlo?')
        if (accepted){
          navigate("/tasks")
           deleteTask(params.id);
           toast.de('Tarea creadan', {position:"bottom-right", style:{
            background:"black",
            color:"#FFF"
          }
          
        })
 

        }
      } } className='bg-rose-500 p-3 rounded-lg block w-full my-3 font-bold text-1xl'>
        Delete
      </button>)}
      </div>
   
  )
}

var num1 = getSelection('') 