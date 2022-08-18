import React from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage/ErrorRegister";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";


export interface IForgotPasswordPageProps {}

export const ForgotPassword: React.FunctionComponent<IForgotPasswordPageProps> = (props) => {

  const [changing, setChanging] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [old, setOld] = React.useState('');
  const [confirm, setConfirm] = React.useState('');
  const [error, setError] = React.useState('');

  const navigate = useNavigate();
  const auth = getAuth();

  const passwordChangeRequest = () => {
    if (password !== confirm) {
      setError("Passwords do not match");
    } else if (error !== "") {
      setError("");
    }
    setChanging(true);
    sendPasswordResetEmail(auth, password)
      .then(() => {
        navigate("/");
      })
      .catch(error => {
        if (error.code.includes("auth/user-not-found")) {
          setError("User not found");
        } else {
          setError("Unable to reset password");
        }
      });
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold text-center">Forgot Password</h1>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="flex flex-col items-center justify-center h-screen">
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
                    <input
                        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                        type="password"
                        placeholder="Old Password"
                        value={old}
                        onChange={(e) => setOld(e.target.value)}
                    />  
                    <ErrorMessage error={error} />
                    <div className="flex items-center justify-center mt-4">
                        <button

                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={passwordChangeRequest}
                            disabled={changing}
                        >
                            {changing ? "Changing..." : "Change Password"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );

}