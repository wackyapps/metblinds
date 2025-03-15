import dynamic from "next/dynamic";

const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});
type Props = {
  value: string;
  onChange: (value: string) => void;
};

const RichTextEditor = ({ value, onChange }: Props) => {
  return (
    <JoditEditor
      //   ref={editorRef}
      value={value}
      config={{
        readonly: false,
        placeholder: "Enter Blog Content...",
        minHeight: 700,
        toolbarAdaptive: false,
        buttons: [
          "source",
          "|",
          "bold",
          "italic",
          "underline",
          "strikethrough",
          "|",
          "ul",
          "ol",
          "|",
          "font",
          "fontsize",
          "brush",
          "paragraph",
          "|",
          "image",
          "table",
          "link",
          "|",
          "align",
          "|",
          "undo",
          "redo",
          "|",
          "hr",
          "eraser",
          "copyformat",
          "|",
          "fullsize",
          "|",
        ],
      }}
      className="bg-transparent"
      onBlur={(newContent) => onChange(newContent)}
      onChange={(newContent) => {}}
    />
  );
};

export default RichTextEditor;
