import TeamMember from "@/pages/Teams/TeamMember";
import SkewButton from "@/components/SkewButton";
import Heading from "@/components/Heading/index";
import teamMembersData from "./teamsdata.json";
import PageTransition from "@/components/PageTransition";

function Teams() {
  const teamMembers = teamMembersData.map((member) => (
    <TeamMember key={member.name} member={member} />
  ));

  return (
    <PageTransition>
      <div className="min-h-screen">
        <div className="flex justify-center items-center">
          <div className="flex-grow mx-auto pr-5 pl-5 space-x-30 py-8">
            <Heading
              text="MEET OUR TEAM"
              className="text-center absolute top-0 left-0 right-0 mb-24"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 grid-rows-auto mt-12">
              {teamMembers}
            </div>
            <SkewButton text="SEE ALL" link="/all-members" className="mt-16" />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default Teams;
