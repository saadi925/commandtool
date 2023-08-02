import { useState } from "react";
interface SnippetProps {
  command: string;
}
const Snippet = ({ command }: SnippetProps) => {
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  const copyToClipboard = () => {
    const el = document.createElement("textarea");
    el.value = command;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopiedToClipboard(true);
    setTimeout(() => {
      setCopiedToClipboard(false);
    }, 2000);
  };

  const handleCopyClick = () => {
    copyToClipboard();
  };

  return (
    <div className="bg-black relative max-w-3xl ">
      {/* Copy Button */}
      <div
        className="absolute right-0 cursor-pointer mx-4 bg-base-300 transition-all hover:bg-slate-500 hover:text-black  m-2"
        onClick={handleCopyClick}
      >
        Copy
      </div>

      {/* Code Snippet */}
      <pre className={`min-h-[30px] w-full`}>{command}</pre>

      {/* Copied Message */}
      {copiedToClipboard && (
        <div className="text-green-400 absolute right-0 flex bottom-0 mr-12 mb-4 ">
          Copied <img src="check-mark.png" width={45} alt="checked" />
        </div>
      )}
    </div>
  );
};

export default Snippet;
