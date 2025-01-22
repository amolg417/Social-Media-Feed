type PostDescriptonProps={
  description:string
}

const PostDescripton = ({description}:PostDescriptonProps) => {
  return (
    <div className="w-full">
        {
        description.split(/(#[A-Za-z0-9_-]+)/g).map((part, index) =>
          part.startsWith("#") ? (
            <span key={index} style={{ color: "blue", fontWeight: "bold" }}>
              {part}
            </span>
          ) : (
            part
          )
        )
      }
    </div>
  );
};

export default PostDescripton;
