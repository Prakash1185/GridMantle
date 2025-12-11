
const IntroductionContent = () => {
  return (
    <>
      <section className="space-y-2">
         <h2 className="text-xl font-semibold tracking-tight">About GridMantle</h2>
        <p className="text-muted-foreground  md:leading-7">
          GridMantle provides clean, reusable grid layouts and blocks that developrs can copy and use directly in thier projects.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold tracking-tight">Development</h2>
         <p className="text-muted-foreground  md:leading-7">
          This project is still growing and focus right now is on developing
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Simple, ready to use grid blocks</li>
          <li>Clean and responsive components</li>
          <li>Flexible layout with customization</li>
        </ul>
      </section>

      <section className="space-y-2">
      
        <p className="text-muted-foreground leading-7">
         Overall, GridMantle is a collection of grid layout blocks and components designed to help you buils modern grid based UI faster.
        </p>
      </section>

    </>
  );
};

export default IntroductionContent;