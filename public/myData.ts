export interface Project {
    title: string;
    img_path: string;
    url: string;
    description: string;
}

export const projects: Project[] = [
    {
      title: "Cryptobase",
      img_path: "/images/cryptobase.png",
      url: "https://github.com/aksh4t-w/cryptobase",
      description:
        "A crypto news/charting app built using React for frontend and NodeJS, Express, SQL and PassportJS for backend",
    },
    {
      title: "Invoking AWS Lambda with gRPC",
      img_path: "/images/cloud2.png",
      url: "https://github.com/aksh4t-w/CS441-HW2",
      description:
        "This project uses gRPC clients to invoke an AWS Lambda function which performs operations on a log file.",
    },
    {
      title: "Amazon Clone",
      img_path: "/images/amazon.png",
      url: "https://clone-ebfe1.web.app/",
      description:
        "Amazon web clone made using React with Firebase as backend for authentication and data storage. Uses stripe API to implement payment gateway.",
    },
    // {
    //   title: "Netflix Clone",
    //   img_path: "/images/netflix.png",
    //   url: "https://netflix-clone-b5d54.web.app/",
    //   description:
    //     "A Netflix clone built using React. TMDb API is used for fetching Movie/TV details.",
    // },
    {
      title: "Whatsapp Clone",
      img_path: "/images/whatsapp.png",
      url: "https://whatsapp-mern-256ce.web.app/",
      description:
        "Whatsapp web clone made using MongoDB, Express, NodeJS and React.",
    },
    {
      title: "Research Paper in ML",
      img_path: "/images/paper.png",
      url: "http://sersc.org/journals/index.php/IJAST/article/view/28156",
      description: "Human Activity recognition using Deep Learning Models.",
    },
  ];
  
  export interface Skill {
    name: string;
    img_path: string;
  }

  export const skills: Skill[] = [
    {
      name: "NodeJS",
      img_path: "/icons/node.png",
    },
    {
      name: "ReactJS",
      img_path: "/icons/react.png",
    },
    {
      name: "HTML5",
      img_path: "/icons/html.png",
    },
    {
      name: "CSS3",
      img_path: "/icons/css.png",
    },
    {
      name: "Tailwind",
      img_path: "/icons/tailwind.png",
    },
    {
      name: "JS",
      img_path: "/icons/js.png",
    },
    {
      name: "TS",
      img_path: "/icons/ts.png",
    },
    {
      name: "Python",
      img_path: "/icons/python.png",
    },
    {
      name: "Git",
      img_path: "/icons/git.png",
    },
    {
      name: "MySQL",
      img_path: "/icons/mysql.png",
    },
    {
      name: "MongoDB",
      img_path: "/icons/mongo.png",
    },
    {
      name: "AWS",
      img_path: "/icons/aws.png",
    },
    {
      name: "Scala",
      img_path: "/icons/scala.png",
    },
    {
      name: "Java",
      img_path: "/icons/java.png",
    },


  ];
  