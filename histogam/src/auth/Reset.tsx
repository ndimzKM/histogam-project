// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import ErrorMessage from "../components/ErrorMessage/ErrorRegister";
// import { confirmPasswordReset, getAuth, sendPasswordResetEmail, verifyPasswordResetCode } from "firebase/auth";
// import queryString from "query-string";


// export interface IResetPasswordPageProps {}


// export const ResetPassword: React.FunctionComponent<IResetPasswordPageProps> = (props) => {
//   const [verifying, setVerifying] = React.useState(false);
//   const [verified, setVerified] = React.useState(false);
//   const [changing, setChanging] = React.useState(false);
//   const [password, setPassword] = React.useState('');
//   const [old, setOld] = React.useState('');
//   const [oobCode, setOobCode] = React.useState('');
//   const [confirm, setConfirm] = React.useState('');
//   const [error, setError] = React.useState('');

//   const navigate = useNavigate();
//   const auth = getAuth();

//   useEffect( () => {

//     let stringParams = queryString.parse(window.location.search);

//     if (stringParams.oobCode) {
//       let oobCode = stringParams.oobCode as string;

//         if(oobCode) {
//           setVerifying(true);
          
//         }
//         else   {
//           setError('Invalid OobCode');
//           setVerified(false);
//           setVerifying(false);
//         }
//     }

//     else {
//         setError('Invalid OobCode');
//         setVerified(false);
//         setVerifying(false);
//     }
//   }, [])

//     const verifyPasswordResetLink = (__oobCode: string) => {
//         verifyPasswordResetCode(auth, __oobCode)
//         .then(() => {
            
//             setOobCode(oobCode);
//             setVerified(true);
//             setVerifying(false);
//         }).catch(error => {
//             setError(error.message);
//             setVerified(false);
//             setVerifying(false);
//         })
//     };

//     const PasswordResetRequest = () => {
//         if (password !== confirm) {
//             setError("Passwords do not match");
//             return;
//         } 
//         if (error !== "") {
//             setError("");
//             setChanging(false);

//             confirmPasswordReset(auth, oobCode, password)
//             .then(() => {
//                 navigate("/");
//             }
//             ).catch(error => {
//                 if (error.code.includes("auth/user-not-found")) {
//                     setError("User not found");
//                 } else {
//                     setError("Unable to reset password");
//                 }
//             }
//             );

//         }  
//     }   

//   return (
//     verifying ? (   <div className="font-bold text-center text-5xl">Verifying...</div> ) : (
//     verified ? (   <div className="font-bold text-center text-5xl">Verified</div> ) : (
//     changing ? (   <div className="font-bold text-center text-5xl">Changing...</div> ) : (
//     <div className="flex w-full h-screen bg-blue-100 ">
//         <div className="flex flex-col items-center justify-center h-screen">
//             <h1 className="text-3xl font-bold text-center">Reset Password</h1>
//             <div className="flex flex-col items-center justify-center h-screen">
//                 <div className="flex flex-col items-center justify-center h-screen">
//                     <input
//                         className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
//                         type="password"
//                         placeholder="Old Password"
//                         value={old}

//                         onChange={(e) => setOld(e.target.value)}
//                     />
//                     <input
//                         className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
//                         type="password"
//                         placeholder="New Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />  
//                     <input

//                         className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
//                         type="password"
//                         placeholder="Confirm Password"
//                         value={confirm}
//                         onChange={(e) => setConfirm(e.target.value)}
//                     />

//                     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" onClick={() => PasswordResetRequest()} >
//                         Reset Password
//                     </button>
//                     <ErrorMessage error={error} />
//                 </div>
//             </div>
//         </div>
//     </div>
//     )
//     )
//     )  
        
//     );
// }