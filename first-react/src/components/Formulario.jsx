import {useState,useEffect }  from "react"
import Error from './Error'



const Formulario = ({pacientes,setPacientes, paciente, setPaciente}) => {
 
  const [nombre,setNombre] = useState('')
  const [servicios,setServicios] = useState('')
  const [email,setEmail] = useState('')
   const [fecha,setFecha] = useState('')
  const [realizar,setRealizar] = useState('')
  const [error, setError] = useState (false)
  
  useEffect(()=>{
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setServicios(paciente.servicios);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setRealizar(paciente.realizar);
    }
  
  },[paciente])
  
  
  
  
  const generarId = ()=> {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)
    return fecha + random
  }
  
  
  
    
  
  const handleSubmit = (e)=>{
   e.preventDefault();

   if([nombre,servicios,email,fecha,realizar].includes('')){
    ;
    setError(true)
    return
   }


setError(false)

const objetoPaciente = {
  nombre,
  servicios,
  email,
  fecha,
  realizar,
  


}

   if (paciente.id){
      //Editando el Registro
      objetoPaciente.id = paciente.id
      
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )
      setPacientes(pacientesActualizados)
      setPaciente({})
    }else {
    //Nuevo Registro
    objetoPaciente.id =  generarId(),
    setPacientes([...pacientes, objetoPaciente])
   }


 //reiniciar el fotm
 setNombre ('')
 setServicios  ('')
 setEmail ('')
 setFecha ('')
 setRealizar  ('')



  }

 
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl  text-center">Seguimiento Pacientes</h2>
      <p className=" text-lg mt-5 text-center mb-10">
        Añade Pacientes y {'' }
        <span className="text-indigo-600 font-bold">Administralos </span>
      </p>
      <form 
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 ">
      {error && <Error> <h1>Pero no se si deba decirlo</h1> <p> Todos los campos son obligatorios</p> </Error>}

        <div className="mb-5">
          
          <label htmlFor="nombre"  className="block text-grey-700 uppercase font-bold">Nombre del Paciente</label>
          <input 
          id="nombre" 
          type="text" 
          className="border-2 w-full p-2 mt-2  placeholder-grey-400 rounded-md" 
          placeholder="Nombre del Paciente"
          value={nombre}
          onChange={(e)=>setNombre(e.target.value)}
          />

        </div>


        <div className="mb-5">
          <label htmlFor="servicio"  className="block text-grey-700 uppercase font-bold">Servicios</label>
          <input id="servicio" type="text" className="border-2 w-full p-2 mt-2  placeholder-grey-400 rounded-md" placeholder="Servicio"
                    value={servicios}
          onChange={(e)=>setServicios(e.target.value)}/>

        </div>
        
       


        <div className="mb-5">
          <label htmlFor="email"  className="block text-grey-700 uppercase font-bold">Email</label>
          <input id="email" type="email" className="border-2 w-full p-2 mt-2  placeholder-grey-400 rounded-md" placeholder="Ingrese Email"
                    value={email}
          onChange={(e)=>setEmail(e.target.value)}/>

        </div>

        <div className="mb-5">
          <label htmlFor="cirugia"  className="block text-grey-700 uppercase font-bold">Fecha de Cirugia</label>
          <input id="cirugia" type="date" className="border-2 w-full p-2 mt-2  placeholder-grey-400 rounded-md" 
                    value={fecha}
          onChange={(e)=>setFecha(e.target.value)}/>

        </div>

        <div className="mb-5">
          <label htmlFor="sintomas"  className="block text-grey-700 uppercase font-bold">Cirugia a Reazliar</label>
          <textarea name="" id="sintomas"  className="border-2 w-full p-2 mt-2  placeholder-grey-400 rounded-md" placeholder="Tipo de Cirugia"
                    value={realizar}
          onChange={(e)=>setRealizar(e.target.value)}/>

        </div>
        
          <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold first-letter hover:bg-indigo-700 cursor-pointer transition-all" 
          value={paciente.id ? 'Editar Paciente': 'Agregar paciente' } />



      </form>
    
    
    
    
    
    
      </div>
  )
}

export default Formulario