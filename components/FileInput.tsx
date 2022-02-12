import { useRef } from "react";

import { IconUpload } from "../data/icon";
import Button from "./Button";

interface FileInputProps {
  // TODO: Accept files other than text
  setter: (text: string) => void;
  accept?: string;
}

const FileInput: React.VFC<FileInputProps> = ({ setter, accept }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    inputRef.current?.click();
  };

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const result = e.target?.result;
        if (result && typeof result === "string") {
          setter(result);
        }
      };
      reader.readAsText(e.target.files[0]);
    }
    e.target.value = "";
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        onChange={onFileInputChange}
        hidden
        {...(accept ? { accept } : {})}
      />
      <Button icon={IconUpload} title="Load a file" onClick={onClick} />
    </>
  );
};

export default FileInput;
