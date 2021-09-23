import { useEffect } from "react";

const Javascript = () => {
  useEffect(() => {
    document.title = "h1nts | Javascript";
  }, []);
  return (
    <div className="mt-24 max-w-2xl">
      <section>
        <h1 className="text-6xl font-medium mb-4">Javascript</h1>
        <p className="mb-8">
          Javascript is a programming language that is utilized to make your
          page interactive.
        </p>
        <div class="mockup-code my-4">
          <pre data-prefix="1">
            <code>{'console.log("Hello, world!");'}</code>
          </pre>
        </div>
      </section>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <section className="mt-10">
          <h2 className="text-2xl font-medium mb-4">Javascript Types</h2>
          <ul>
            <li>Number</li>
            <li>String</li>
            <li>Boolean</li>
            <li>Undefined</li>
            <li>Null</li>
            <li>Symbol</li>
            <li>Object</li>
          </ul>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-medium mb-4">Comparisons </h2>
          <ul>
            <li>{"!=="}</li>
            <li>{"==="}</li>
            <li>{">="}</li>
            <li>{"<="}</li>
            <li>{">"}</li>
            <li>{"<"}</li>
          </ul>
        </section>
      </div>
      <section className="mt-10">
        <h2 className="text-2xl font-medium mb-4">Variables</h2>
        <p className="mb-8">
          There are three types of variables in Javascript const, let, and var.
          The const variable is constant meaning it can't be changed once it's
          been declared. The let and var are able to have their variables
          changed once declared.
        </p>
        <div class="mockup-code my-4">
          <pre data-prefix="1">
            <code>{'const birthday = "November 29 1993";'}</code>
          </pre>
          <pre data-prefix="2">
            <code>{'let firstName = "John";'}</code>
          </pre>
          <pre data-prefix="3">
            <code>{'var lastName = "Doe";'}</code>
          </pre>
        </div>
      </section>
    </div>
  );
};

export default Javascript;
