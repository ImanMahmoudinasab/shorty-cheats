import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Area } from "@/constants";

function Space(props: SpaceProps) {
  const { areas } = props;
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4 mx-4">
      {areas.map((area) => (
        <Card key={area.name}>
          <CardHeader>
            <CardTitle>{area.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              {area.commands.map((command) => (
                <li
                  key={command.name}
                  className="flex text-sm justify-between p-2 even:bg-gray-50/60 rounded-md hover:bg-blue-50 my-1"
                >
                  <div>{command.name}</div>
                  <div>
                    {command.shortcut.map((key, index) => (
                      <span>
                        <kbd
                          key={key}
                          className="px-1 py-0.5 text-xs text-gray-600 bg-gray-50 border border-gray-200 rounded-md dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"
                        >
                          {key}
                        </kbd>
                        <span className="text-gray-200">
                          {index !== command.shortcut.length - 1 && " + "}
                        </span>
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Space;

interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  areas: Area[];
}
