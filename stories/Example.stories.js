import Image from "next/image";
import colors from "./assets/sample.jpg";

function ImageExample() {
  return (
    <div>
      <div
        style={{ position: "relative", height: 200, width: 300, margin: 20 }}
      >
        <Image
          fill
          src="/sample.jpg"
          alt=""
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <Image
        {...colors}
        alt=""
        style={{ maxWidth: 300, height: "auto", margin: 20 }}
      />
    </div>
  );
}

const Template = (args) => <ImageExample {...args} />;

export const ImageExample1 = Template.bind({});

const story = {
  title: "Example",
  component: ImageExample,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

export default story;
