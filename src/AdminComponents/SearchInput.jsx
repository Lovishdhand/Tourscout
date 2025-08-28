import { useAlbums } from "../hooks/useAlbums";
import { useUsers } from "../hooks/useUsers";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AsyncSelect from "react-select/async";
import Button from "../AdminComponents/Button";


function SearchInput(){

      const validationSchema = Yup.object({
        caption: Yup.string().required("Caption is required"),
        // user_id: Yup.number().required("User is required"),
        album_id: Yup.mixed()
          // .required("User is required") // ensures some value is selected
          .test(
            "is-number",
            "Invalid user selected",
            (value) => value && typeof value.value === "number"
          ),
        photo: Yup.mixed()
          .required("A photo is required")
          .test("fileType", "Only JPG/PNG allowed", (value) => {
            return value && ["image/jpeg", "image/png"].includes(value.type);
          })
          .test("fileSize", "File must be less than 2MB", (value) => {
            return value && value.size <= 2 * 1024 * 1024;
          }),
      });

        const defaultUserOptions = () => {
      return users?.users?.map((u) => ({ value: u.id, label: u.name })) || [];
      // console.log(defaultOptions);
    };
  
    const loadUserOptions = async (inputValue) => {
      const { users } = await fetchUsers(1, 10, inputValue);
      // console.log(users);
      const options = users?.map((u) => ({ value: u.id, label: u.name })) || [];
      console.log(options);
  
      return [{ value: inputValue }, ...options];
    };
      const { data: albums } = useAlbums(
  
  );

    const { data: users } = useUsers({
      page: 1,
      limit: 10,
      search: "",
    });
    const defaultOptions = () => {
      return albums?.albums?.map((u) => ({ value: u.id, label: u.title })) || [];
      // console.log(defaultOptions);
    };

    
    const loadOptions = async (inputValue) => {
      const { albums } = await fetchAlbums();
      // console.log(users);
      const options = albums?.map((u) => ({ value: u.id, label: u.title })) || [];
      console.log(options);
  
      return [{ value: inputValue }, ...options];
    };
return(
<>
   <Formik
            initialValues={{ caption: "", album_id: null, photo: null }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              console.log(values);

              mutate(formData, {
                onSuccess: () => {
                  resetForm();
                  navigate("/admin/photos");
                },
              });
            }}
          >
            {({ setFieldValue, values }) => (
              <Form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                  width: "15vw",
                  backgroundColor: "white",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                }}
              >
                <Field
                  name="search"
                  type="text"
                  // style={{ width: "20vw" }}
                  placeholder="Search"
                />
                <ErrorMessage
                  name="search"
                  component="div"
                  style={{ color: "red" }}
                />
            
               

                <AsyncSelect
                  name="album_id"
                 
                  loadOptions={loadUserOptions}
                  defaultOptions={defaultUserOptions()}
                  placeholder="Search Albums..."
                  onChange={(selectedOption) => 
                    setFieldValue("album_id", selectedOption)
                    
                  
                  
                  }


                  value={values.album_id}
                  styles={{ container: (base) => ({ ...base, width: "" }) }}
                />

   <AsyncSelect
                name="user_id"
               
                loadOptions={loadOptions}
                defaultOptions={defaultOptions()}
                placeholder="Search Users..."
                onChange={(selectedOption) => setFieldValue("user_id", selectedOption)
                
                
                }
                value={values.user_id}
                styles={{ container: (base) => ({ ...base, width: "" }) }}
              />
                <Button 
                  text={"Search"}
                  color="orange"
                />

                <ErrorMessage
                  name="album_id"
                  component="div"
                  style={{ color: "red" }}
                />
                {/* {isError && <div style={{ color: "red" }}>Error adding user</div>}
                {isSuccess && <div style={{ color: "green" }}>User added!</div>} */}
              </Form>
            )}
          </Formik>
</>

);
}


export default SearchInput;