import { SubHeading } from "../heading/AppHeading";
import { Snippet } from "..";

interface CommandGroup {
  subheading: string;
  commands: string[];
}

const GridMap = ({ data }: { data: CommandGroup[] }) => {
  const dataConditions = data && data.length > 0;
  return (
    <div className="flex-1">
      {!dataConditions ? (
        <>
          <div className="text-red-400 text-4xl">No Data Found...</div>
        </>
      ) : (
        <>
          {data.map((commandGroup: CommandGroup, index: number) => (
            <div key={index}>
              <SubHeading text={commandGroup.subheading} />
              {commandGroup.commands.map((command, idx) => (
                <Snippet key={idx} command={command} />
              ))}
            </div>
          ))}
          <span className="text-3xl font-semibold text-white py-5">No more for now</span>
        </>
      )}
    </div>
  );
};

export default GridMap;
