type Props = {
  MyObject: {
    icon: JSX.Element;
    name: string;
  }[];
};

const SubSideBarTitles = ({ MyObject }: Props) => {
  return (
    <div>
      {MyObject.map((element, index) => (
        <div
          key={index}
          className="flex items-center py-2 px-3 hover:bg-[#272727] rounded-lg cursor-pointer"
        >
          <div key={index} className="text-3xl">
            {element.icon}
          </div>
          <div key={index} className="ml-8">
            {element.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubSideBarTitles;
