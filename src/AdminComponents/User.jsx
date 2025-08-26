function User({ data }) {
  return (
    <>
      <div style={{ backgroundColor: "purple", height: "70vh", width: "20vw" }}>
        <h1>{data.photo.caption}</h1>
        <img src={data.photo.url} alt={data.photo.title} width="150" />
      </div>
    </>
  );
}

export default User;
