export const Component = () => {
  return (
    // Q: How do I know all the props that this component takes?
    // A: cmd-click @ div --> go to declaration file --> React.DetailedHTMLProps
    <div
      // Q: How do I figure out what type aria-posinset expects?
      // A: hover over the prop to see the type
      // simple eg
      aria-posinset={1} // <-- hover to see type is number | undefined from React.AriaAttributes
      // complex eg
      // Q: How do I figure out what type onChange expects?
      onChange={(e) => {}} // <-- hover to see type is React.FormEventHandler<HTMLDivElement> | undefined
      // ^ cmd-click to see what it expects to receive

      // Q: How do I get autocomplete with JSX?
      // A: ctrl-space brings expected props on this OBJ
    />
  );
};

// Inspecting complex types (if you're reading this you are in the bad ending GOOD LUCK)
// 1. Declare the type you want to inspect
// 2. cmd + click @ FormEventHandler to see what it expects to receive
type Example = React.FormEventHandler<HTMLDivElement> | undefined;
