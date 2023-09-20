import Profile from "../assets/profile.svg";

export const Header = () => {
  return (
    <div className="w-full mx-auto pt-[1rem] flex flex-row items-center justify-around sm:space-x-[7rem] lg:space-x-[11rem]">
      <p className="font-main text-white font-bold text-3xl">YourGit</p>
      <img src={Profile} alt="Profile" />
    </div>
  );
};
