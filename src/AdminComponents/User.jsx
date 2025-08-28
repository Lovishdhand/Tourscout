function User({ data }) {
  // console.log(data.photo);
  return (
    <>
      <div style={{ backgroundColor: "purple", height: "70vh", width: "20vw" }}>
        <h1>{data.photo.caption}</h1>
        <img src={`http://localhost:3000${data.photo.url}`} alt={data.photo.title} width="150" />
<h3>Album: {data?.photo?.album.title}</h3>
<h4>Name: {data?.photo?.album.user.name ?? "N/A"}</h4>
<h4>Designation: {data?.photo?.album.user.designation ?? "N/A"}</h4>
<h4>Description: {data?.photo?.album.user.description ?? "N/A"}</h4>
<h4>Age: {data?.photo?.album.user.age ?? "N/A"}</h4>


      </div>
    </>
  );
}

export default User;
