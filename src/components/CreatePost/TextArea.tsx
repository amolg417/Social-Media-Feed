
type TextAreaProps={
    postDescription:string,
    handlePostDescription:(value:string)=>void
}

const TextArea = ({postDescription,handlePostDescription}:TextAreaProps) => {
  return (
    <div className="w-full relative">
    <div
      className="w-full text-sm py-[5%] px-[2%] rounded-md absolute top-0 left-0 h-fit outline-none z-[0] pointer-events-none"
      style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
    >
      {postDescription.split(/(#[A-Za-z0-9_-]+)/g).map((part, index) =>
        part.startsWith("#") ? (
          <span key={index} style={{ color: "blue", fontWeight: "bold" }}>
            {part}
          </span>
        ) : (
          part
        )
      )}
    </div>

    <textarea
      name="description"
      id="description"
      className="w-full text-sm py-[5%] px-[2%] rounded-md resize-none outline-none bg-transparent text-transparent caret-black z-[1]"
      placeholder="What’s on your mind?"
      rows={11}
      value={postDescription}
      onChange={(e) => handlePostDescription(e.target.value)}
      style={{
        position: "relative",
      }}
    ></textarea>
  </div>
  )
}

export default TextArea
