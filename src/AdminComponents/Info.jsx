  function Info({users,text}){
    console.log(users);
return(

    <>

    <div style={{height:"20vh",width:"20vw",backgroundColor:"white"}}>
<h1>{text} : {users}</h1>
    </div>
    </>
);


  }



  export default Info;