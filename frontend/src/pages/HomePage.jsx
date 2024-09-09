import { useNavigate, Link } from "react-router-dom"



function HomePage() {
  return (
    <main className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-900">
      <header>
        <h1 className="text-center font-bold text-4xl">Foro de estudiantes de ingenieria</h1>
        <br></br>
        <div className='flex justify-center'>
          <p></p>
            <img 
                src = "./resources/fiusac.png"
                alt = "Logo de la Facultad de Ingenieria USAC"
                className="w-1/3 h-1/3"
            >
            </img>
            <img
              src="./resources/logo_SISTEMAS.png"
              alt = "Logo de la Escuela de Ciencias y Sistemas de FIUSAC"
              className="w-1/3 h-1/3"
            >
            </img>
          <br></br>
        </div>

        <br></br>
        <p className="flex justify-center items-center">
          Bienvenido a nuestra plataforma dedicada a un sitio de foros
        </p>
        <p className="flex justify-center items-center">  Dedicada a los estudiantes de ingenieria en USAC</p>
      </header>
      <section className="flex flex-col items-center my-4">
        <div className="flex gap-5 my-5">
          <Link to="/login">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Iniciar Sesion</button>
          </Link>
          <Link to= "/register">
            <button className="bg-violet-500 hover:bg-violet-600 text-white font-semibold py-2 px-4 rounded">Registrarse</button>
          </Link>
          
        </div>
      </section>

      <footer className="flex gap-6 flex-col">
        <div className="flex flex-col items-center">
            <h2 className="font-bold">Autores</h2>
            
            <p>Josué Samuel de la Cruz Medina - 202247844</p>
            <p>Daniel Estuardo Salvatierra Majacola - 202202768</p>
            <p></p>
        </div>
        
        
      </footer>
    </main>
    
  );
}

export default HomePage;