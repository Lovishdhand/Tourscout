

function Button({text,color,type}){

    return(
<>
 <button type={{type}} style={{backgroundColor:color,height:"25px",cursor:"pointer"}}>
{text}
    </button>
</>
    );

   
}

export default Button;