import GitHub from "../assets/github.svg";
import LinkedIn from "../assets/linkedin.svg";
import velog from "../assets/velog.svg";

export const Footer = () => {
  return (
    <div className="flex flex-col mx-auto w-full sm:px-8 lg:px-[10.5rem] pb-4 pt-4">
      <div className="w-full bg-border h-[1px]" />
      <div className="pt-4">
        <p className="text-border font-bold font-main text-3xl">YourGit</p>
        <p className="text-border font-light font-main text-lg">Made with ♥︎</p>
        <p className="text-border font-light font-main text-lg">
          By Seung-Jun Jeong
        </p>
        <span className="flex flex-row items-center pt-2">
          <a
            href="https://github.com/whateveriiwant/yourgit"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GitHub} alt="GitHub" />
          </a>
          <a
            className="ml-1"
            href="https://www.linkedin.com/in/seungjun-dev/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a
            className="ml-2"
            href="https://velog.io/@jsj9620"
            target="_blank"
            rel="noreferrer"
          >
            <img src={velog} alt="velog" />
          </a>
        </span>
      </div>
    </div>
  );
};
