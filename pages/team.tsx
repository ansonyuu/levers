import UpdateForm from "../components/EmailForm";
import SEO from "../components/SEO";
import { profileSmall, profileLarge } from "../data/team";

const MemberCardCol = ({
  name,
  role,
  image,
  bio
}: {
  name: string;
  role: string;
  image: string;
  bio: JSX.Element[] | JSX.Element;
}) => (
  <div className="flex flex-col border border-white mr-8 pl-8 content-top border-l-green">
    <div className="w-full h-auto">
      <img
        alt={`Image of ${name}, for Speculative Technologies`}
        src={`/team/${image}`}
      />
    </div>
    <div>
      <p className="text-purple text-base mt-6">{role}</p>
      <h6 className="mt-2">{name}</h6>
      {bio}
    </div>
  </div>
);
const MemberCardRow = ({
  name,
  role,
  image,
  bio
}: {
  name: string;
  role: string;
  image: string;
  bio: JSX.Element[] | JSX.Element;
}) => (
  <div className="flex flex-col md:flex-row flex-row border border-white mr-8 pl-8 content-top border-l-green ">
    <div className="w-full h-auto mr-11">
      <img
        alt={`Image of ${name}, for Speculative Technologies`}
        src={`/team/${image}`}
      />
    </div>
    <div className="w-full text-purple text-base">
      <p className="text-purple text-base">{role}</p>
      <h6 className="mt-2">{name}</h6>
      <p className="text-[15px] mt-2">{bio}</p>
    </div>
  </div>
);

export default function Team({}: {}) {
  return (
    <>
      <SEO title="Team" />

      <div className="h-[40vh]">
        <h2 className="absolute md:w-full bottom-1.5 md:bottom-0 lg:ml-[-8px] text-left w-full text-white">
          Our Team
        </h2>
      </div>

      <div className="w-full">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-12 p-5 md:p-10 lg:p-20">
          <div className="lg:mr-16">
            <h4 className="lg:pt-0 hidden lg:flex">Team</h4>
            <p className="py-14 lg:py-6 font-semibold">
              Speculative Technologies brings together people from a range of
              disciplines in academia, tech, policy, and beyond. <br />
              <br /> Interested in joining our team? See Open Positions{" "}
              <a href="/get-involved">here</a>.
            </p>
          </div>
          {profileLarge.map((member) => (
            <MemberCardRow {...member} />
          ))}
        </div>

        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 p-5 md:p-10 lg:p-20 pt-0 pb-10">
            {profileSmall.slice(0, 10).map((member) => (
              <MemberCardCol {...member} />
            ))}
          </div>
        </div>
      </div>

      <UpdateForm />
    </>
  );
}
