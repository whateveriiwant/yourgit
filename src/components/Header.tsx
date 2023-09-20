import Profile from "../assets/profile.svg";

export const Header = () => {
  return (
    <div className="px-[14.5rem] pt-[1rem] flex flex-row items-center justify-between">
      <p className="font-main text-white font-bold text-2xl">YourGit</p>
      <img src={Profile} alt="Profile" />
    </div>
  );
};
