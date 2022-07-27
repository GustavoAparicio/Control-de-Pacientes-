

const Paciente = ({paciente,setPaciente,eliminarPaciente}) => {
 
 
 const {nombre, servicios, email, fecha, realizar, id } = paciente
 
 const handleEliminar = () => {
 const respuesta = confirm('Deseas Eliminar este paciente')
  if (respuesta) {
    eliminarPaciente(id)
  }

}
 
  return (
    <div className='mx-5 my-10Ju bg-white shadow-md px-5 py-10 rounded-xl  '>
    <p className='font-bold mb-3 text-grey-700 uppercase'>Nombre: {' '}
      <span className='font-normal normal-case'>{nombre}</span>
    </p>
    <p className='font-bold mb-3 text-grey-700 uppercase'>Servicio: {' '}
      <span className='font-normal normal-case'>{servicios}</span>
    </p>
    <p className='font-bold mb-3 text-grey-700 uppercase'>Email: {' '}
      <span className='font-normal normal-case'>{email}</span>
    </p>
    <p className='font-bold mb-3 text-grey-700 uppercase'>Fecha de Ciguria: {' '}
      <span className='font-normal normal-case'>{fecha}</span>
    </p>
    <p className='font-bold mb-3 text-grey-700 uppercase'>Cirugia a Realizar: {' '}
      <span className='font-normal normal-case'>{realizar}</span>
    </p>
    <div className="flex justify-between mt-10  ">
      <button type="button"
      className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg uppercase"
      onClick={()=> setPaciente(paciente)}
      >Editar</button>
      <button type="button"
      className="py-2 px-10 bg-red-700  hover:bg-red-900 text-white font-bold rounded-lg uppercase"
      onClick={handleEliminar}
      >Eliminar</button>
    </div>
</div>
  )
}

export default Paciente