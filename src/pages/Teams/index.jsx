import TeamMember from "@/pages/Teams/TeamMember";
import SkewButton from "@/components/SkewButton";
import teamMembersData from "./teamsdata.json";

function Teams() {
  const teamMembers = teamMembersData.map((member) => (
    <TeamMember key={member.name} member={member} />
  ));

  return (
    <div className="bg-zinc-800 min-h-screen">
      <div className="flex-grow container mx-auto pr-20 pl-20 space-x-30 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 grid grid-rows-auto">
          {teamMembers}
        </div>
        <SkewButton text="SEE ALL" link="/all-members" />
      </div>
    </div>
  );
}

export default Teams;
