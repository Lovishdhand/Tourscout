import { useAlbums } from "../hooks/useAlbums";
import { useUsers } from "../hooks/useUsers";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AsyncSelect from "react-select/async";
import Button from "../AdminComponents/Button";
import { usePhotos } from "../hooks/usePhotos";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

 import { SearchContext } from "../Pages/Search";
import {  useContext } from "react";

function SearchInput() {
 const { filters, setFilters } = useContext(SearchContext);;
//  console.log("sdd",filters);

  



  const { data: albums } = useAlbums();

  const { data: users } = useUsers({
    page: 1,
    limit: 10,
    search: "",
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
  const defaultOptions = () => {
    return albums?.albums?.map((u) => ({ value: u.id, label: u.title })) || [];
    // console.log(defaultOptions);
  };

  const loadOptions = async (inputValue) => {
    const { albums } = await fetchAlbums();
    // console.log(users);
    const options = albums?.map((u) => ({ value: u.id, label: u.title })) || [];
    // console.log(options);

    return [{ value: inputValue }, ...options];
  };
  return (
    <>
      <Formik
      
        initialValues={{
       search: filters.search,
    album_id: filters.album_id,
    user_id: filters.user_id,
        }}
    
        onSubmit={(values, { resetForm }) => {
          resetForm();
 setFilters({
    ...filters,
    search: values.search,
    album_id: values.album_id ? values.album_id.value : null,
    user_id: values.user_id ? values.user_id.value : null,
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
            <Button type={"submit"} text={"Search"} color="orange" />

            <ErrorMessage
              name="album_id"
              component="div"
              style={{ color: "red" }}
            />
          </Form>
        )}
      </Formik>
    
    </>
  );
}

export default SearchInput;
