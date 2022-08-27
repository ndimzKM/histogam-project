import React from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

import ErrorRegister from '../components/ErrorMessage/ErrorRegister';


export interface IRegisterPageProps {}

const Register: React.FunctionComponent<IRegisterPageProps> = (props) => {

    const [registering, setRegistering] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordConfirm, setPasswordConfirm] = React.useState('');
    const [error, setError] = React.useState('');

    const auth = getAuth();
    const navigate = useNavigate();
    const signUpWithEmailAndPassword = () => {

        if (password !== passwordConfirm) 
        {
            setError('Passwords do not match');
         }        
        if(error !== '') setError ('');
        setRegistering(true);

        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result);
            navigate('/home');
        })
        .catch(error => 
            {  
            console.log(error)
        
            if(error.code.includes('auth /weak-password'))
             {
                setError('Password is too weak');
            }
            else if(error.code.includes('auth /email-already-in-use'))
             {
                setError('Email is already in use');
             }
            else 
            {
                setError('Unable to register please try again');
            }   

        });
    };
    
    

        const signInWithGoogle = async () => {
            setRegistering(true);
        
            signInWithPopup(auth, new GoogleAuthProvider()).then(response => {
              console.log(response.user.uid)
              navigate('/home');
            }).catch(error => {
              console.log(error);
              setRegistering(false);
            });
          }
          const ForgotPassword = () => {
            navigate("/forgot");
          }
        
        

    return (
        <main className="register">
             <div className="flex h-screen bg-[url('https://i0.wp.com/cornishbirdblog.com/wp-content/uploads/2018/09/2018-09-05-31-1844887230-1536173987584.png?fit=750%2C453&ssl=1')] bg-cover bg-no-repeat">
          <div className="w-full flex items-center justify-center  h-screen ">
        <div className=' w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100'>
            <h1 className='text-5xl font-semibold text-center'>Register</h1>
            <p className='font-medium text-lg text-center text-gray-500 mt-4'>please sign up to get started.</p>
            <div className='mt-8'>
                <div className='flex flex-col'>
                    <label className='text-lg font-medium'>Email</label>
                    <input 
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='flex flex-col mt-4'>
                    <label className='text-lg font-medium'>Password</label>
                    <input 
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' autoComplete='new-password'
                        placeholder="Enter your password"
                        type="password" value={password}  onChange={event =>  setPassword   (event.target.value)} /> 
                </div>

                <div className='flex flex-col mt-4'>
                    <label className='text-lg font-medium'>ConfirmPassword</label>
                    <input 
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' autoComplete='new-password'
                        placeholder="confirm password"
                        type="password" value={passwordConfirm}  onChange={event =>  setPasswordConfirm(event.target.value)} /> 
                </div>
                <div className='mt-8 flex justify-between items-center'>
                    <div>
                        <input  type="checkbox" id='remember'/>
                        <label className='ml-2 font-medium text-base' >Remember for 30 days</label>
                    </div>
                    <button  onClick={() => ForgotPassword() }  className='font-medium text-base text-violet-500'>Forgot password</button>
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button onClick={() => signUpWithEmailAndPassword() } className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'>Sign up</button>
                    <button onClick={() => signInWithGoogle()} disabled={registering} className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4  rounded-xl text-gray-700 font-semibold text-lg border-2 border-gray-100 ">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z" fill="#EA4335"/>
                                <path d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z" fill="#34A853"/>
                                <path d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z" fill="#4A90E2"/>
                                <path d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z" fill="#FBBC05"/>
                            </svg>
                            Sign in with Google
                    </button>
                    <small>
                        <p className='m-1 text-center'>Already have an account? <Link to="/">Login</Link></p>
                    </small>

                    <ErrorRegister error={error}/>

                </div>
               
            </div>
            
        </div>
        </div>
        </div>
        </main>
        
    );
}


export default Register;
