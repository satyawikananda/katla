import { PropsWithChildren } from "react";

export default function Container(props: PropsWithChildren<{}>) {
  return (
    <div className="text-white text-center flex flex-col items-stretch overflow-y-hidden bg-orange-300">
      {props.children}
    </div>
  );
}
