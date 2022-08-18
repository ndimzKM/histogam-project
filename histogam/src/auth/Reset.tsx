import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage/ErrorRegister";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";


export interface IResetPasswordPageProps {}

export const ResetPassword: React.FunctionComponent<IResetPasswordPageProps> = (props) => {
  const [verifying, setVerifying] = React.useState(false);
  const [verified, setVerified] = React.useState(false);
  const [changing, setChanging] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [old, setOld] = React.useState('');
  const [confirm, setConfirm] = React.useState('');
  const [error, setError] = React.useState('');

  const navigate = useNavigate();
  const auth = getAuth();

  useEffect (() => {
    if (verified) {
        navigate('/login');
    }
    } , [verified]);
    useEffect (() => {
        if (changing) {
            navigate('/login');
        }
        } , [changing]);
    const verify = () => {
        setVerifying(true);
        sendPasswordResetEmail(auth, old).then(() => {
            setVerifying(false);
            setVerified(true);
        }).catch(error => {
            setVerifying(false);
            setError(error.message);
        }
        );
    }

  return (
    verifying ? (   <div className="font-bold text-center text-5xl">Verifying...</div> ) : (
    verified ? (   <div className="font-bold text-center text-5xl">Verified</div> ) : (
    changing ? (   <div className="font-bold text-center text-5xl">Changing...</div> ) : (
    <div className="flex w-full h-screen bg-blue-100 ">
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold text-center">Reset Password</h1>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="flex flex-col items-center justify-center h-screen">
                    <input
                        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                        type="password"
                        placeholder="Old Password"
                        value={old}

                        onChange={(e) => setOld(e.target.value)}
                    />
                    <input
                        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                        type="password"
                        placeholder="New Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />  
                    <input

                        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                        type="password"
                        placeholder="Confirm Password"
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                    />

                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                        onClick={() => verify()}
                    >
                        Verify
                    </button>
                    <ErrorMessage error={error} />
                </div>
            </div>
        </div>
    </div>
    )
    )
    )  
        
    );

}