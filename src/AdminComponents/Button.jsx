

function Button({text,color}){

    return(
<>
 <button style={{backgroundColor:color,height:"25px",cursor:"pointer"}}>
{text}
    </button>
</>
    );

   
}

export default Button;