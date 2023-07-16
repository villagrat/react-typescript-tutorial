import React, { ComponentProps } from 'react';

// Sol 1
// import { ButtonHTMLAttributes } from "react";
// const Button = ({ className, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) => {...}
// Sol 2 - recommended
// use the ComponentProps type helper for a cleaner syntax
//                    ^ can pass in any native type in here to get TS autocomplete
// import { ComponentProps } from "react";
// const Button = ({ className, ...rest }: ComponentProps<"button">) => {...}

export const Button = ({ className, ...rest }: ComponentProps<'button'>) => {
  return (
    <button {...rest} className={`default-classname ${className}`}></button>
  );
};

const Parent = () => {
  return <Button onClick={() => {}} type="button"></Button>;
};
