import { useAlbums } from "../hooks/useAlbums";
import { useUsers } from "../hooks/useUsers";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AsyncSelect from "react-select/async";
import Button from "../AdminComponents/Button";
import { usePhotos } from "../hooks/usePhotos";
import { useState,useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Pagination from "../AdminComponents/Pagination";

function SearchInput() {
const [searchParams, setSearchParams] = useSearchParams();
const searchFilter = {
  page: Number(searchParams.get("page")) || 1,
  limit: Number(searchParams.get("limit")) || 10,
  search: searchParams.get("search") || "",
  album_id: searchParams.get("album_id") || null,
  user_id: searchParams.get("user_id") || null,
};

  const [totalPages, setTotalPages] = useState(0);

  const { data: photos, isLoading, isError } = usePhotos(searchFilter);
  const validationSchema = Yup.object({});
//   console.log("Dv",photos?.pagination?.totalPages);

// setTotalPages(photos.totalPages);
  const defaultUserOptions = () => {
    return users?.users?.map((u) => ({ value: u.id, label: u.name })) || [];
    // console.log(defaultOptions);
  };

  useEffect(() => {
    console.log("deee",photos);
    if (photos?.pagination?.totalPages) {
      setTotalPages(photos.pagination.totalPages);
      console.log(totalPages);
    }
  }, [photos]);
  const loadUserOptions = async (inputValue) => {
    const { users } = await fetchUsers(1, 10, inputValue);
    // console.log(users);
    const options = users?.map((u) => ({ value: u.id, label: u.name })) || [];
    console.log(options);

    return [{ value: inputValue }, ...options];
  };
  const { data: albums } = useAlbums();

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
  return (
    <>
    
      <Formik
       initialValues={{
    search: searchParams.get("search") || "",
    album_id: searchParams.get("album_id") || null,
    user_id: searchParams.get("user_id") || null,
  }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          // alert(values.album_id.value);
          // setSearch({...searchFilter,search:values.search,album_id:values.album_id.value,user_id:values.user_id.value})
           const newParams = {
      page: "1", // reset page on new search
      limit: "2", // you can also read from a default or state
      search: values.search,
      album_id: values.album_id?.value || "",
      user_id: values.user_id?.value || "",
    };

    // Update the URL params
    setSearchParams(newParams);
          // alert(searchFilter.albumId);
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
              loadOptions={loadOptions}
              defaultOptions={defaultOptions()}
              placeholder="Search Albums..."
              onChange={(selectedOption) =>
                setFieldValue("album_id", selectedOption)
              }
              value={values.album_id}
              styles={{ container: (base) => ({ ...base, width: "" }) }}
            />

            <AsyncSelect
              name="user_id"
              loadOptions={loadUserOptions}
              defaultOptions={defaultUserOptions()}
              placeholder="Search Users..."
              onChange={(selectedOption) =>
                setFieldValue("user_id", selectedOption)
              }
              value={values.user_id}
              styles={{ container: (base) => ({ ...base, width: "" }) }}
            />
            <Button text={"Search"} color="orange" />

            <ErrorMessage
              name="album_id"
              component="div"
              style={{ color: "red" }}
            />
          
          </Form>
        )}
      </Formik>
<Pagination totalPages={totalPages }/>
      
    </>
  );
}

export default SearchInput;
