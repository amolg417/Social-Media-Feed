import { useState } from 'react';
import { HighlightWithinTextarea } from 'react-highlight-within-textarea'

const MyEditor = () => {
  const [value, setValue] = useState("X Y Z and then XYZ");
  const onChange = (value) => setValue(value);
  return (
    <HighlightWithinTextarea
      value={value}
      highlight={/#(\w+)/g}
      onChange= {onChange}
    />
  );
};

export default MyEditor;
