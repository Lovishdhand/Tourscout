import '../Corousel.css'; 
import { GrNext } from "react-icons/gr";
import { MdOutlineNavigateBefore } from "react-icons/md";

function Corousel(){
    return(
       <div style={{backgroundColor:"green",height:"60vh",marginTop:"-20px",width:"88vw"}}>
        <h1>Corousel</h1>


      {/* Previous Button */}
      <div
        style={{
          position: "absolute",
          left: "70px",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "red",
          padding: "10px",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      >
        <MdOutlineNavigateBefore size={60} color="white" />
      </div>

      {/* Next Button */}
      <div
        style={{
          position: "absolute",
          right: "70px",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "red",
          padding: "10px",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      >
        <GrNext size={60} color="white" />
      </div>

       </div>
    );
}


export default Corousel;