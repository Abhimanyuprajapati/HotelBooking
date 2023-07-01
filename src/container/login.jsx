import { Container } from "@mui/material"
import { signInWithPopup } from "@firebase/auth";
import { auth,provider } from "../firebase"
import { useNavigate } from "react-router-dom";


export const Login = () => {
    const navigate=useNavigate
    const onloginclick=()=>{
        // console.log("login button clicked")
        signInWithPopup(auth,provider)
        .then((result)=>{
            console.log("result",result);
            navigate("/home");
        })
        .catch((error)=>{
            console.log(error);
        });
    }
  return (
    <>
     <Container maxWidth="sm" sx={{mt:40}}>
        <button onClick={onloginclick}>
        Sign up with Google
        </button>
       
      </Container>
    </>
    
  )
}
