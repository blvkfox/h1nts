import { useEffect } from "react";
const Styles = () => {
  useEffect(() => {
    document.title = "H1nts | CSS";
  }, []);
  return (
    <div className="mt-24">
      <section>
        <h1 className="text-6xl font-medium mb-4">CSS</h1>
        <p className="max-w-2xl mb-8">
          <strong>CSS</strong> stands for{" "}
          <strong>(Cascading Style Sheet)</strong>, and this is the tool we use
          to style our web pages to our liking using selectors, properties and
          values.
        </p>
        <div class="mockup-code max-w-2xl my-4">
          <pre data-prefix="1">
            <code>selector {"{"}</code>
          </pre>
          <pre data-prefix="2">
            <code className="ml-4">property: value;</code>
          </pre>
          <pre data-prefix="3">
            <code>{"}"}</code>
          </pre>
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-2xl font-medium mb-4">Element Selector</h2>
        <p className="max-w-2xl mb-8">
          The element selector utilizes the name between the{" "}
          <span className="font-bold">{"<>"}</span> brackets.
        </p>
        <div class="mockup-code max-w-2xl my-4">
          <pre data-prefix="1">
            <code>a {"{"}</code>
          </pre>
          <pre data-prefix="2">
            <code className="ml-4">property: value;</code>
          </pre>
          <pre data-prefix="3">
            <code>{"}"}</code>
          </pre>
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-2xl font-medium mb-4">Class Selector</h2>
        <p className="max-w-2xl mb-8">
          The class selector utilizes the class attribute you attached to the
          html element, and a class selector in css will always start with a
          period.
        </p>
        <div class="mockup-code max-w-2xl my-4">
          <pre data-prefix="1">
            <code>.class-name {"{"}</code>
          </pre>
          <pre data-prefix="2">
            <code className="ml-4">property: value;</code>
          </pre>
          <pre data-prefix="3">
            <code>{"}"}</code>
          </pre>
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-2xl font-medium mb-4">ID Selector</h2>
        <p className="max-w-2xl mb-8">
          The id selector utilizes the id attribute you attached to the html
          element, and a id selector in css will always start with a{" "}
          <span className="font-bold">#</span>.
        </p>
        <div class="mockup-code max-w-2xl my-4">
          <pre data-prefix="1">
            <code>#id-name {"{"}</code>
          </pre>
          <pre data-prefix="2">
            <code className="ml-4">property: value;</code>
          </pre>
          <pre data-prefix="3">
            <code>{"}"}</code>
          </pre>
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-2xl font-medium mb-4">Properties and Values</h2>
        <p className="max-w-2xl mb-8">
          Every element has a list of properties which can be changed, and some
          examples of properties are font-size, color, and background the value
          portion is the value you chose for the property.
        </p>
        <div class="mockup-code max-w-2xl my-4">
          <pre data-prefix="1">
            <code>a {"{"}</code>
          </pre>
          <pre data-prefix="2">
            <code className="ml-4">color: blue;</code>
          </pre>
          <pre data-prefix="3">
            <code>{"}"}</code>
          </pre>
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-2xl font-medium mb-4">Specificity</h2>
        <p className="max-w-2xl mb-8">
          When using element, class, and id selectors it important to remember
          specificity which translates into importance of the styles. For
          instance the element selector is least specific, so a class selector
          will overwrite it, and a id selector will overwrite a element and
          class selector. This scales up as you attach more selectors.
        </p>
      </section>
      <section className="mt-10">
        <h2 className="text-2xl font-medium mb-4">Properties</h2>
        <p className="max-w-2xl mb-8">
          Attached you'll find a list of properties from the mozilla network.
        </p>
        <div className="max-w-2xl mb-8 flex">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference"
            className="flex bg-black text-white py-2 px-3"
            target="_blank"
            rel="noreferrer"
          >
            CSS Property reference <i class="ml-2 gg-arrow-right pt-6"></i>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Styles;
