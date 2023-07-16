import React from 'react';

// Sol 1
interface Props {
  className: string;
}
// export const Button = (props: Props) => {...}
// Sol 2 - same as Sol 1 but type syntax
// Sol 3 - inline definition ~ (props: { className: string }) => {...}
/* Sol 4 - similar to Sol 3 but destructure props you'll use

export const Button = ({ className }: { className: string }) => {
  return <button className={className}></button>;
}

*/

export const Button = (props: Props) => {
  return <button className={props.className}></button>;
};

const Parent = () => {
  return (
    <>
      {/* @ts-expect-error */}
      <Button></Button>

      <Button className="my-class"></Button>
    </>
  );
};
