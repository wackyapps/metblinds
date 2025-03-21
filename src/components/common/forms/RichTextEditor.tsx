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
    <div className="jodit-editor-wrapper">
      <JoditEditor
        //   ref={editorRef}
        value={value}
        config={{
          readonly: false,
          placeholder: "Enter Blog Content...",
          minHeight: 700,
          toolbarAdaptive: false,
          buttons: [
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
            "indent",
            "outdent",
            "|",
            "undo",
            "redo",
            "|",
            "hr",
            "eraser",
            "copyformat",
            "|",
            "fullsize",
            "print",
            "about",
            "selectall",
            "cut",
            "copy",
            "paste",
            "search",
            "replace",
            "|",
            "symbol",
            "lineHeight",
          ],
          iframe: false, // Use div instead of iframe for better styling integration
          useSearch: true,
          spellcheck: true,
          language: "en",
          toolbarSticky: true,
          showCharsCounter: true,
          showWordsCounter: true,
          showXPathInStatusbar: false,
        }}
        className="jodit-tailwind bg-transparent"
        onBlur={(newContent) => onChange(newContent)}
        onChange={(newContent) => {}}
      />
    </div>
  );
};

export default RichTextEditor;
