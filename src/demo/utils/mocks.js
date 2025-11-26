import Default from './demos/default.vue?raw';
import WithLabels from './demos/withLabels.vue?raw';
import WithTwoButtons from './demos/withTwoButtons.vue?raw';
import WithCustomColors from './demos/withCustomColors.vue?raw';
import WithMultipleLabels from './demos/withMultipleLabels.vue?raw';
import WithHorizontal from './demos/withHorizontal.vue?raw';
import WithHorizontalAndLabels from './demos/withHorizontalAndLabels.vue?raw';
import WithHorizontalAndTwoButtons from './demos/withHorizontalAndTwoButtons.vue?raw';

const labels = [
  {
    id: 1,
    name: "Vue.js",
    color: "#4FC08D",
  },
  {
    id: 2,
    name: "JavaScript",
    color: "#F0DB4F",
  },
  {
    id: 3,
    name: "HTML",
    color: "#E34F26",
  },
  {
    id: 4,
    name: "CSS",
    color: "#1572B6",
  },
  {
    id: 5,
    name: "Git - GitHub",
    color: "#F05032",
  },
  {
    id: 6,
    name: "Bootstrap",
    color: "#7952B3",
  },
  {
    id: 7,
    name: "React",
    color: "#61DBFB",
  },
  {
    id: 8,
    name: "Angular",
    color: "#DD1B16",
  },
  {
    id: 9,
    name: "Sass",
    color: "#CC6699",
  },
  {
    id: 10,
    name: "TypeScript",
    color: "#007ACC",
  },
  {
    id: 11,
    name: "Node.js",
    color: "#339933",
  },
  {
    id: 12,
    name: "Express.js",
    color: "#000000",
  },
  {
    id: 13,
    name: "jQuery",
    color: "#0769AD",
  },
  {
    id: 14,
    name: "PHP",
    color: "#777BB4",
  },
  {
    id: 15,
    name: "Laravel",
    color: "#FF2D20",
  },
  {
    id: 16,
    name: "Python",
    color: "#3776AB",
  },
  {
    id: 17,
    name: "Django",
    color: "#092E20",
  },
  {
    id: 18,
    name: "Ruby",
    color: "#CC342D",
  },
  {
    id: 19,
    name: "Ruby on Rails",
    color: "#CC0000",
  },
  {
    id: 20,
    name: "GraphQL",
    color: "#E10098",
  },
  {
    id: 21,
    name: "RESTful API",
    color: "#008080",
  },
  {
    id: 22,
    name: "OAuth",
    color: "#444444",
  },
  {
    id: 23,
    name: "JSON",
    color: "#000000",
  },
  {
    id: 24,
    name: "XML",
    color: "#FF6600",
  },
  {
    id: 25,
    name: "MongoDB",
    color: "#47A248",
  },
  {
    id: 26,
    name: "MySQL",
    color: "#4479A1",
  },
  {
    id: 27,
    name: "PostgreSQL",
    color: "#336791",
  },
  {
    id: 28,
    name: "Firebase",
    color: "#FFCA28",
  },
  {
    id: 29,
    name: "Amazon Web Services",
    color: "#FF9900",
  },
  {
    id: 30,
    name: "Google Cloud Platform",
    color: "#4285F4",
  },
];

export const demos = [
  {
    id: 1,
    title: "Default",
    description: "Displays a basic card with a title, image, description, and a primary action button.",
    propsData: {
      configCard: {
        title: "Create Vue.js",
        description:
          "Vue.js (commonly known as Vue; pronounced /vjuː/, like 'view') is an open-source JavaScript framework for building user interfaces and single-page applications.",
        alt: "Card Image",
        image: "https://res.cloudinary.com/dcdfhi8qz/image/upload/v1763701508/jarnmxxvmhbisvpzzfwu.webp",
        primaryButtonText: "View more",
      },
    },
    html: Default,
  },
  {
    id: 2,
    title: "With labels",
    description: "Includes label chips below the card content to represent tags or categories.",
    propsData: {
      configCard: {
        title: "Write JavaScript",
        description:
          "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.",
        primaryButtonText: "See more",
        alt: "Card Image",
        image: "https://res.cloudinary.com/dcdfhi8qz/image/upload/v1763701538/kua2i5ayhbne1dmmexfd.webp",
        labels: labels,
      },
    },
    html: WithLabels,
  },
  {
    id: 3,
    title: "With two buttons",
    description: "Adds a secondary action button alongside the primary button for more interactions.",
    propsData: {
      configCard: {
        title: "Design Web",
        description:
          "Web design encompasses many different skills and disciplines in the production and maintenance of websites.",
        primaryButtonText: "View code",
        secondaryButtonText: "View blog",
        image: "https://res.cloudinary.com/dcdfhi8qz/image/upload/v1763701589/ydwpp78ukjqu22zammi9.webp",
        alt: "Card Image",
        labels: labels,
      },
    },
    html: WithTwoButtons,
  },
  {
    id: 4,
    title: "With custom colors",
    description: "Showcases how the card can be customized with different background and button colors.",
    propsData: {
      configCard: {
        title: "Write Vue.js",
        description:
          "Vue.js (commonly known as Vue; pronounced /vjuː/, like 'view') is an open-source JavaScript framework for building user interfaces and single-page applications.",
        primaryButtonText: "View code",
        secondaryButtonText: "View blog",
        image: "https://res.cloudinary.com/dcdfhi8qz/image/upload/v1763701619/a8jqdthoa8psda0yd9aw.webp",
        alt: "Card Image",
        labels: labels,
        backgroundColor: "#46627f",
        color: "#ffffff",
        backgroundButtonColor: "#062131",
        colorButton: "#ffffff",
        backgroundButtonSecondaryColor: "#0eb096",
        colorButtonSecondary: "#000000",
      },
    },
    html: WithCustomColors,
  },
  {
    id: 5,
    title: "With multiple labels (default 3) with limitLabels",
    description: "Demonstrates how the card handles many labels with a configurable label limit.",
    propsData: {
      configCard: {
        title: "Write JavaScript",
        description:
          "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.",
        primaryButtonText: "See more",
        alt: "Card Image",
        image: "https://res.cloudinary.com/dcdfhi8qz/image/upload/v1744231813/samples/cup-on-a-table.jpg",
        labels: labels,
        limitLabels: 10,
      },
    },
    html: WithMultipleLabels,
  },
  {
    id: 6,
    title: "Horizontal layout",
    description: "Displays the card in a horizontal layout with image on the left side.",
    propsData: {
      configCard: {
        title: "The Creative Routine Before Start Coding",
        description:
          "A personal routine I use that helps me generate new ideas and start coding more creatively.",
        primaryButtonText: "Read more",
        alt: "Card Image",
        image: "https://res.cloudinary.com/dcdfhi8qz/image/upload/v1763701508/jarnmxxvmhbisvpzzfwu.webp",
      },
      isHorizontal: true,
    },
    html: WithHorizontal,
  },
  {
    id: 7,
    title: "Horizontal with labels",
    description: "Combines the horizontal layout with label chips for categorization.",
    propsData: {
      configCard: {
        title: "The Creative Routine Before Start Coding",
        description:
          "A personal routine I use that helps me generate new ideas and start coding more creatively.",
        primaryButtonText: "Read more",
        alt: "Card Image",
        image: "https://res.cloudinary.com/dcdfhi8qz/image/upload/v1763701508/jarnmxxvmhbisvpzzfwu.webp",
        labels: labels,
      },
      isHorizontal: true,
    },
    html: WithHorizontalAndLabels,
  },
  {
    id: 8,
    title: "Horizontal with two buttons",
    description: "Horizontal layout with primary and secondary action buttons stacked horizontally.",
    propsData: {
      configCard: {
        title: "The Creative Routine Before Start Coding",
        description:
          "A personal routine I use that helps me generate new ideas and start coding more creatively.",
        primaryButtonText: "Read more",
        secondaryButtonText: "Save",
        alt: "Card Image",
        image: "https://res.cloudinary.com/dcdfhi8qz/image/upload/v1763701508/jarnmxxvmhbisvpzzfwu.webp",
      },
      isHorizontal: true,
    },
    html: WithHorizontalAndTwoButtons,
  },
];
