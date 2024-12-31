import { useState } from "react"
import { useDispatch } from 'react-redux';
import { loginAction, registerAction } from '../redux/actions/auth';

const Auth = () => {
    const [signUp, setSignUp] = useState(true)
    const [authData, setAuthData] = useState({username: "", password: "", email: ""})
 const dispatch = useDispatch()

    const onChangeFunc = (e) => {
      
setAuthData({...authData,[e.target.name] : e.target.value})
    }
const authFunc = () => {
  if(signUp){
    dispatch(registerAction(authData));
  } else {
    dispatch(loginAction(authData));
  }
  
}
    console.log(authData, "auth data") 

  return (
    <div className='w-full h-screen bg-gray-50 flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 z-50 '>
      <div className='w-1/3 bg-gray-200 p-3'>
      <h1 className='text-2xl text-gray-500 font-bold'>{signUp ? "REGİSTER" : "LOGIN"}</h1>
      <div className='flex flex-col space-y-4  my-5'>
       {signUp && <input value={authData.username} name='username' onChange={onChangeFunc} type="text" placeholder='username' className='input-style' />}

        <input value={authData.email} name='email' onChange={onChangeFunc} type="text" placeholder='Email' className='input-style' />

        <input value={authData.password} name='password' onChange={onChangeFunc} type="text" placeholder='Password' className='input-style' />
      </div>
<div className='text-red-500 text-xs cursor-pointer mb-4'>
{
    signUp ? <span onClick={() => setSignUp(false)}>Daha önce giriş yaptınız mı?</span> : <span onClick={() => setSignUp(true)}>Kayıt olmak için tıklayınız?</span>
}
</div>

      <div onClick={authFunc} className='w-full p-2 text-center rounded-md text-white bg-gray-500 cursor-pointer hover:bg-gray-600 '>

         {signUp ?  "Kayıt Ol" : "Giriş Yap"}
        </div>

      </div>
    </div>
  );
}

export default Auth;
