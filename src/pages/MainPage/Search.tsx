import SearchIcon from "../../assets/search.svg";

export const Search = () => {
  return (
    <div className="flex flex-col items-start justify-center">
      <p className="font-main text-white font-bold text-4xl mb-4">
        GitHub 정보를 한 눈에
      </p>
      <p className="font-main text-white text-2xl font-extralight mb-8">
        <p className="inline font-bold font-main">YourGit</p> 으로 원하는 유저의
        정보를 <br /> 빠르게 알아보세요.
      </p>
      <div className="flex flex-row items-center justify-center w-[20.75rem] h-[3rem] border border-border rounded-[10px]">
        <input
          className="bg-transparent outline-none w-[18rem] h-8 pl-2 mr-2 font-main text-base text-text"
          placeholder="유저의 닉네임을 입력하세요."
          maxLength={39}
        />
        <button className="w-6 h-6 bg-transparent">
          <img src={SearchIcon} alt="Search" />
        </button>
      </div>
    </div>
  );
};
