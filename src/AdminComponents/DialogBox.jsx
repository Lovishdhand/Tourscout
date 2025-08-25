import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../AdminComponents/Button";
import AsyncSelect from "react-select/async";

function DialogBox({ message, dialogaction ,fields,select}) {
  return (
    <>
      <div style={{ backgroundColor: "green", height: "30vh", width: "20vw" }}>
        <h2>{message}</h2>
        {dialogaction == "Delete" && (
          <div>
            <button style={{ backgroundColor: "red" }}>Delete</button>
            <button style={{ backgroundColor: "orange" }}>Cancel</button>
          </div>
        )}

        {dialogaction == "Edit" && (
            <div>
                   <Formik
            
                
                        >
                          {() => (
                            <Form>
                             
                               <Field name="name" type="text"  />
{select && (
  <AsyncSelect
    name="user_id"
    

    placeholder="Search Users..."
 
   
    styles={{ container: (base) => ({ ...base, width: "20vw" }) }}
  />
)}

                              <Button text={ "Edit User"} color="orange" />



                           
                              {/* <ErrorMessage name="name" component="div" style={{color:"red"}} />
                               {isError && <div style={{ color: "red" }}>Error adding user</div>}
                          {isSuccess && <div style={{ color: "green" }}>User added!</div>} */}
                            </Form>
                          )}
                        </Formik>
            </div>
        )}
      </div>
    </>
  );
}

export default DialogBox;
