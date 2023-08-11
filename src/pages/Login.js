import React,{useState} from 'react'
import {  useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './Login.css'
import { auth } from '../firebase';
function Login() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className='formContainer'>
        <h1>
          <span className='heading1'>SOMO</span>
          <span className='heading2'>Chat</span>
        </h1>
      <div className="formWrapper">
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder='Enter Email' />
          <input type="password" placeholder='Enter Password' />
          <button>Sign in</button>
          {err &&<span>Something went wrong</span>}
        </form>
        <p>You don't have an account? 
          <button className='log'>
            <Link to="/register">
              Register
            </Link>
          </button>
          </p>
      </div>
    </div>
  )
}

export default Login