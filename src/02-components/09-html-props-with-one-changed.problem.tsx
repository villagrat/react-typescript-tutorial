import { ComponentProps } from 'react';
import { Equal, Expect } from '../helpers/type-utils';

// Sol 1 - use the TS helper Omit to remove the native onChange props from ComponentProps<"input"> & override onChange prop with intersection
// const Input = (props: Omit<ComponentProps<"input">, "onChange"> & { onChange: (value: string) => void }) => {...}
// Sol 2 - same as Sol 1 but extract into type for cleaner syntax
/*
type InputProps = Omit<ComponentProps<"input">, "onChange"> & { onChange: (value: string) => void };
const Input = (props: InputProps) => {...}
*/
// Sol 3 - similar to Sol 1 but using interface syntax
/*
interface InputProps extends Omit<ComponentProps<"input">, "onChange"> {
  onChange: (value: string) => void;
}
*/
// Sol 4 (tradeoff between reusability and code readability for new TS devs) - create an override prop type helper
/*
  // type helper to override props
  type OverrideProps<T, TOverridden> = Omit<T, keyof TOverridden> & TOverridden;

  // custom implementation for our use case
  type InputProps = OverrideProps<ComponentProps<"input">, { onChange: (value: string) => void; }>;  
  
  const Input = (props: InputProps) => {...}
*/

type InputProps = Omit<ComponentProps<'input'>, 'onChange'> & {
  onChange: (value: string) => void;
};

export const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
    ></input>
  );
};

const Parent = () => {
  return (
    <Input
      onChange={(e) => {
        console.log(e);

        type test = Expect<Equal<typeof e, string>>;
      }}
    ></Input>
  );
};
