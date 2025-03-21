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
          // Image upload configuration
          uploader: {
            url: "https://itelc.org/metblind_api/editor/upload",
            format: "json",
            method: "POST",
            prepareData: function (formData: FormData) {
              return formData;
            },
            isSuccess: function (resp: any) {
              return resp && resp.success;
            },
            getMessage: function (resp: any) {
              return resp && resp.message;
            },
            process: function (resp: any) {
              return {
                files: resp.file ? [resp.file.url] : [],
                path: resp.file ? resp.file.url : "",
                baseurl: "",
                error: resp.success ? 0 : 1,
                message: resp.message || "",
              };
            },
            defaultHandlerSuccess: function (this: any, data: any) {
              if (data.files && data.files.length) {
                data.files.forEach((file: string) => {
                  this.selection.insertImage(file);
                });
              }
            },
            error: function (e: Error) {
              console.log(e.message);
            },
          },
        }}
        className="jodit-tailwind bg-transparent"
        onBlur={(newContent) => onChange(newContent)}
        onChange={(newContent) => {}}
      />
    </div>
  );
};

export default RichTextEditor;
