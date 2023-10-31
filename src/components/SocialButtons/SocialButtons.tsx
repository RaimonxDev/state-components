import { FacebookIcon, GithubIcon, LinkedinIcon } from "../Icons/icons";
export const SocialButtons = () => {
  return (
    <>
      <div className="flex gap-4 items-center justify-center mt-6 ">
        <FacebookIcon className="text-[#3b5998]  w-12 h-12 hover:scale-110 transition-transform duration-75 hover:cursor-pointer hover:shadow-sm rounded-full" />

        <GithubIcon className=" text-gray-900 w-12 h-12 hover:scale-110 transition-transform duration-75 hover:cursor-pointer hover:shadow-sm rounded-full" />

        <LinkedinIcon className="text-[#0e76a8] w-12 h-12 hover:scale-110 transition-transform duration-75 hover:cursor-pointer hover:shadow-sm rounded-full" />
      </div>
    </>
  );
};
