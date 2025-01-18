const PostDescripton = () => {
  return (
    <div className="w-full">
        {
        "#hello world #123 #_hidden_ #good-day".split(/(#[A-Za-z0-9_-]+)/g).map((part, index) =>
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
