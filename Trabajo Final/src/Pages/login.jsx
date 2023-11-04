import logo from './logo.svg';
import './App.css';



function login() {
  return (
    <div>
    <div className="back">
        <form action="#">
            <h1>Iniciar Sesion</h1>
            <div className="contenedor">
                <input type="text" placeholder="Usuario/Mail" required/>
            </div>
            <div className="contenedor">
                <input type="text" placeholder="Contraseña" required/>
            </div>
            <h2>¿No tienes una cuenta?</h2>
            <button type="submit" className="btn">Ingresar</button>
        </form>
        
    </div>
</div>
  );
}

export default login;
