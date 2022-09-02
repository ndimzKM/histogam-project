import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import ErrorRegister from '../components/ErrorMessage/ErrorRegister';


export interface IForgotPasswordPageProps {}

export const ForgotPassword: React.FunctionComponent<IForgotPasswordPageProps> = (props) => {

  const [sending, setSending] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState('');

  const navigate = useNavigate();
  const auth = getAuth();

    const resetPasswordRequest = () => {
        if(error !== '') setError ('');
        setSending(true);
        sendPasswordResetEmail(auth, email).then(() => {
            setSending(false);
            setSent(true);
        })
        .catch(error => 
            {  
            console.log(error)
        
            if(error.code.includes('auth /invalid-email'))
             {
                setError('Invalid email');
            }
            else if(error.code.includes('auth /user-not-found'))
             {
                setError('User not found');
            }
            else 
            {
                setError('Unable to send password reset email');
            }   
    
        });
    }

    const backToLogin = () => {
        navigate("/");
      }
    

    return (
        <main className="forgot">
        <div className="flex h-screen bg-[url('https://i0.wp.com/cornishbirdblog.com/wp-content/uploads/2018/09/2018-09-05-31-1844887230-1536173987584.png?fit=750%2C453&ssl=1')] bg-cover bg-no-repeat">
     <div className="w-full flex items-center justify-center  h-screen ">
   <div className=' w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100'>
    {sent ?
    <div className="text-center">
            <h1 className="text-3xl font-bold mb-5">Password Reset Email Sent</h1>
            <p className="text-gray-500 mb-5">Check your email for a link to reset your password.</p>
            <button className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600" onClick={backToLogin}>Back to Login</button>
        </div>
        :
        <div>
            
       <h1 className='text-5xl font-semibold text-center'>Forgot Password</h1>
       <p className='font-medium text-lg text-center text-gray-500 mt-4'>please enter your email.</p>
       <div className='mt-8'>
           <div className='flex flex-col'>
               <input 
                   className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                   placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
           </div>

          
          
           <div className='mt-8 flex flex-col gap-y-4'>
              <button onClick={() => resetPasswordRequest() } className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'>{sending ? 'Sending...' : 'Send Reset Email'}</button>
              <button onClick={() => backToLogin() } className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 rounded-xl text-violet font-bold text-lg'> Back To Login</button>

               <ErrorRegister error={error}/>

           </div>
          
       </div>
       
   </div>
}
   </div>
   </div>

   </div>
   </main>
        
        // <div className="flex flex-col items-center justify-center h-screen">
        //     <div className="flex flex-col items-center justify-center h-screen">
        //         <div className="flex flex-col items-center justify-center h-screen">
        //             <div className="flex flex-col items-center justify-center h-screen">
        //             <h1 className="text-center text-3xl font-bold">Forgot Password</h1>

        //                 <label className="text-center mt-32 text-4xl font-bold">Please enter your email</label>
        //                 <input
        //                     className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        //                     type="email"
        //                     placeholder="Email"
        //                     value={email}
        //                     onChange={(e) => setEmail(e.target.value)}
        //                 />
        //                 <button
        //                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        //                     onClick={resetPasswordRequest}
        //                 >
        //                     {sending ? 'Sending...' : 'Send Reset Email'}
        //                 </button>
        //                 <ErrorMessage error={error} />
        //                 <div className="flex items-center justify-center mt-4">
        //                     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        //                         onClick={() => navigate('/login')}
        //                     >

        //                         Back to Login
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
    
          
     

}