import { LoginModal } from "./Login-modal";
import { Register } from "./Register-modal";

export function LandingPage(){
    return(
        <div className='landing-page'>
            <Register/>
            <LoginModal/>
        </div>
    )
}