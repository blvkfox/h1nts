import { useEffect } from "react";
const MarkUp = () => {
  useEffect(() => {
    document.title = "H1nts | HTML";
  }, []);
  return (
    <div className="mt-24 max-w-2xl">
      <section>
        <h1 className="text-6xl font-medium mb-4">HTML</h1>
        <p className=" mb-8">
          <strong>HTML</strong> stands for{" "}
          <strong>(Hyper-text Markup Language)</strong>, and it's the content
          you find on the web page minus the styling and interactivity. For
          styling their is a language called <strong>CSS</strong> which stands
          for
          <strong> (Cascading Style Sheets)</strong> and for interactivity their
          is a language called JavaScript not to be confused with Java.
        </p>
        <p className="font-bold">An Example of a html document:</p>
        <div class="mockup-code  my-4">
          <pre data-prefix="1">
            <code>{"<!doctype html>"}</code>
          </pre>
          <pre data-prefix="2">
            <code>{"<html>"}</code>
          </pre>
          <pre data-prefix="3">
            <code className="ml-4">{"<head>"}</code>
          </pre>
          <pre data-prefix="4">
            <code className="ml-8">{"<title>Home Page</title>"}</code>
          </pre>

          <pre data-prefix="5">
            <code className="ml-4">{"</head>"}</code>
          </pre>
          <pre data-prefix="6">
            <code className="ml-4">{"<body>"}</code>
          </pre>
          <pre data-prefix="7">
            <code className="ml-8">{"<h1>Hello, World</h1>"}</code>
          </pre>
          <pre data-prefix="8">
            <code className="ml-4">{"</body>"}</code>
          </pre>
          <pre data-prefix="9">
            <code>{"</html>"}</code>
          </pre>
        </div>
        <p>
          * Every html document will follow this layout of a doctype, html,
          head, and body.
        </p>
      </section>
      <section className="mt-10">
        <h2 className="text-2xl font-medium mb-4">{"<doctype html>"}</h2>
        <p className=" mb-8">
          The <strong>{"<doctype html>"}</strong> is document type declaration,
          and it tells the browser what kind of document this is which this is
          an HTML5 document.
        </p>
        <section className="mt-10">
          <div class="mockup-code  my-4">
            <pre data-prefix="1">
              <code>{"<!doctype html>"}</code>
            </pre>
          </div>
        </section>
      </section>
      <section className="mt-10">
        <h2 className="text-2xl font-medium mb-4">HTML element vs Tag</h2>
        <p className=" mb-8">
          The difference between a tag, and an element is a tag consists of a
          opening, and closing angle bracket{" "}
          <span className="font-bold">{"<>"}</span> the element is what's
          written inside of the tag. For instance this is called a{" "}
          <span className="font-bold">{"<p>"}</span> paragraph opening tag, and
          this is a <span className="font-bold">{"</p>"}</span> paragraph
          closing tag. A paragraph element consists of both a{" "}
          <span className="font-bold">{"<p>"}</span> opening, and a closing{" "}
          <span className="font-bold">{"</p>"}</span> tag, so for example this
          is a{" "}
          <span className="font-bold">
            {"<p>"}Hello, World
            {"</p>"}
          </span>{" "}
          paragraph element.
        </p>
      </section>
      <section className="mt-10">
        <h2 className="text-2xl font-medium mb-4">{"<html>"} element</h2>
        <p className=" mb-8">
          The HTML element is the root of the document where all you content,
          and information about your webpage goes.
        </p>
        <div class="mockup-code  my-4">
          <pre data-prefix="1">
            <code>{"<!doctype html>"}</code>
          </pre>
          <pre data-prefix="2">
            <code>{"<html>"}</code>
          </pre>
          <pre data-prefix="3">
            <code>{"</html>"}</code>
          </pre>
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-2xl font-medium mb-4">{"<head>"} element</h2>
        <p className=" mb-8">
          The head element is where you store the information about the page
          such as the title, meta information, and scripts which doesn't show up
          on the page.
        </p>
        <div class="mockup-code  my-4">
          <pre data-prefix="1">
            <code>{"<!doctype html>"}</code>
          </pre>
          <pre data-prefix="2">
            <code>{"<html>"}</code>
          </pre>
          <pre data-prefix="3">
            <code className="ml-4">{"<head>"}</code>
          </pre>
          <pre data-prefix="4">
            <code className="ml-8">{"<title>Home Page</title>"}</code>
          </pre>
          <pre data-prefix="5">
            <code className="ml-4">{"</head>"}</code>
          </pre>
          <pre data-prefix="6">
            <code>{"</html>"}</code>
          </pre>
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-2xl font-medium mb-4">{"<body>"} element</h2>
        <p className=" mb-8">
          The body element consists of all the content that will displayed on
          the web page.
        </p>
        <div class="mockup-code  my-4">
          <pre data-prefix="1">
            <code>{"<!doctype html>"}</code>
          </pre>
          <pre data-prefix="2">
            <code>{"<html>"}</code>
          </pre>
          <pre data-prefix="3">
            <code className="ml-4">{"<head>"}</code>
          </pre>
          <pre data-prefix="4">
            <code className="ml-8">{"<title>Home Page</title>"}</code>
          </pre>

          <pre data-prefix="5">
            <code className="ml-4">{"</head>"}</code>
          </pre>
          <pre data-prefix="6">
            <code className="ml-4">{"<body>"}</code>
          </pre>
          <pre data-prefix="7">
            <code className="ml-8">{'<h1>I"ll show up on the page</h1>'}</code>
          </pre>
          <pre data-prefix="8">
            <code className="ml-8">{"<h1>Hello, World</h1>"}</code>
          </pre>
          <pre data-prefix="9">
            <code className="ml-4">{"</body>"}</code>
          </pre>
          <pre data-prefix="10">
            <code>{"</html>"}</code>
          </pre>
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-2xl font-medium mb-4">{"<!-- -->"} Commenting</h2>
        <p className=" mb-8">
          To make a comment in HTML you do{" "}
          <span className="font-bold">{"<!--"}</span> and everything inside will
          be commented, but make sure to close the comment with{" "}
          <span className="font-bold">{"-->"}</span>, or the rest of your code
          will be commented out.
          <div class="mockup-code  my-4">
            <pre data-prefix="1">
              <code>{"<!-- Hi, I'm a comment -->"}</code>
            </pre>
          </div>
        </p>
      </section>
      <section className="mt-10">
        <h2 className="text-4xl font-medium mb-8">Basic elements</h2>
        <h3 className="text-xl font-medium mb-4">Paragraph Element</h3>
        <div class="mockup-code  my-4">
          <pre data-prefix="1">
            <code>{"<p>Hello, world!</p>"}</code>
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-4">
          Heading Element {"<h1> - <h6>"}
        </h3>
        <div class="mockup-code  my-4">
          <pre data-prefix="1">
            <code>{"<h1>I'm a level 1 heading</h1>"}</code>
          </pre>
          <pre data-prefix="2">
            <code>{"<h2>I'm a level 2 heading</h2>"}</code>
          </pre>
          <pre data-prefix="3">
            <code>{"<h3>I'm a level 3 heading</h3>"}</code>
          </pre>
          <pre data-prefix="4">
            <code>{"<h4>I'm a level 4 heading</h4>"}</code>
          </pre>
          <pre data-prefix="5">
            <code>{"<h5>I'm a level 5 heading</h5>"}</code>
          </pre>
          <pre data-prefix="6">
            <code>{"<h6>I'm a level 6 heading</h6>"}</code>
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-4">{"<strong>"} Element</h3>
        <div class="mockup-code  my-4">
          <pre data-prefix="1">
            <code>{"<strong>I make text bolded</strong>"}</code>
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-4">{"<em>"} Element</h3>
        <div class="mockup-code  my-4">
          <pre data-prefix="1">
            <code>{"<em>I italicize text</em>"}</code>
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-4">{"<div>"} Element </h3>
        <div class="mockup-code  my-4">
          <pre data-prefix="1">
            <code>
              {"<div>I'm an element that is used as a container</div>"}
            </code>
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-4">{"<span>"} Element </h3>
        <div class="mockup-code  my-4">
          <pre data-prefix="1">
            <code>
              {"<span>I'm an inline element that is used as a container</span>"}
            </code>
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-4">{"<a>"} Element </h3>
        <div class="mockup-code  my-4">
          <pre data-prefix="1">
            <code>
              {
                '<a href="enter-link">I link to some website, or another page</a>'
              }
            </code>
          </pre>
        </div>
        <p>* href stands for hyper-text reference</p>
      </section>
      <section className="mt-10">
        <h2 className="text-4xl font-medium mb-8">HTML5 elements</h2>
        <h3 className="text-xl font-medium mb-4">{"<section>"} Element</h3>
        <div class="mockup-code  my-4">
          <pre data-prefix="1">
            <code>{"<section>I'm a section element</section>"}</code>
          </pre>
        </div>
        <p className=" mb-4">
          The section element is also a container like the div, but the section
          element has semantic meaning.
        </p>
        <h3 className="text-xl font-medium mb-4">{"<article>"} Element</h3>
        <div class="mockup-code  my-4">
          <pre data-prefix="1">
            <code>{"<article>I'm a article element</article>"}</code>
          </pre>
        </div>
        <p className=" mb-4">
          Use article instead of section when you can take the content out of
          the page, and it still make sense.
        </p>
      </section>
      <section className="mt-10">
        <h2 className="text-4xl font-medium mb-4">Attributes</h2>
        <p className="">
          Attributes are extra information about an html element, and some
          examples of html attributes are{" "}
          <span className="font-bold">href</span>,
          <span className="font-bold"> class</span>,
          <span className="font-bold"> id</span> etc.
        </p>
        <div class="mockup-code  my-4">
          <pre data-prefix="1">
            <code>{'<a href="http://www.google.com">To google page</a>'}</code>
          </pre>
          <pre data-prefix="2">
            <code>{'<h1 class="big-heading">I\'m a big heading.</h1>'}</code>
          </pre>
          <pre data-prefix="3">
            <code>{'<h1 id="big-heading">I\'m a big heading.</h1>'}</code>
          </pre>
        </div>
      </section>
    </div>
  );
};

export default MarkUp;
