import GameCard from "./game-card";

const games = [
  {
    title: "Elden Ring",
    description:
      "An action RPG set in a vast open world filled with challenging enemies, epic battles, and stunning environments.",
    genre: "RPG",
    coverImage:
      "https://th.bing.com/th/id/OIP.5K8vN75_vQXqXT4l6OR_3AHaEK?rs=1&pid=ImgDetMain",
    tags: ["Fantasy", "Open World", "Action", "Adventure"],
    downloadSize: "45GB",
    rating: 4.8,
    downloadLink: "#",
  },
  {
    title: "Call of Duty: Modern Warfare II",
    description:
      "A high-octane FPS with a gripping campaign and competitive multiplayer modes.",
    genre: "FPS",
    coverImage:
      "https://th.bing.com/th/id/OIP.5K8vN75_vQXqXT4l6OR_3AHaEK?rs=1&pid=ImgDetMain",
    tags: ["Shooter", "Multiplayer", "Action"],
    downloadSize: "120GB",
    rating: 4.5,
    downloadLink: "#",
  },
  {
    title: "The Legend of Zelda: Breath of the Wild",
    description:
      "An open-world action-adventure game where you explore the vast kingdom of Hyrule and solve ancient puzzles.",
    genre: "Adventure",
    coverImage:
      "https://th.bing.com/th/id/OIP.5K8vN75_vQXqXT4l6OR_3AHaEK?rs=1&pid=ImgDetMain",
    tags: ["Adventure", "Fantasy", "Open World"],
    downloadSize: "14.4GB",
    rating: 4.9,
    downloadLink: "#",
  },
  {
    title: "Among Us",
    description:
      "A party game of teamwork and betrayal as you work together to complete tasks or sabotage the mission.",
    genre: "Party",
    coverImage:
      "https://th.bing.com/th/id/OIP.5K8vN75_vQXqXT4l6OR_3AHaEK?rs=1&pid=ImgDetMain",
    tags: ["Multiplayer", "Social Deduction", "Casual"],
    downloadSize: "0.5GB",
    rating: 4.3,
    downloadLink: "#",
  },
  {
    title: "Minecraft",
    description:
      "A sandbox game that lets you build, explore, and survive in a blocky, procedurally generated world.",
    genre: "Sandbox",
    coverImage:
      "https://th.bing.com/th/id/OIP.5K8vN75_vQXqXT4l6OR_3AHaEK?rs=1&pid=ImgDetMain",
    tags: ["Creative", "Survival", "Multiplayer"],
    downloadSize: "1GB",
    rating: 4.7,
    downloadLink: "#",
  },
  {
    title: "Hollow Knight",
    description:
      "A challenging and beautifully hand-drawn action platformer set in a mysterious underground world.",
    genre: "Action",
    coverImage:
      "https://th.bing.com/th/id/OIP.5K8vN75_vQXqXT4l6OR_3AHaEK?rs=1&pid=ImgDetMain",
    tags: ["Metroidvania", "Indie", "Exploration"],
    downloadSize: "9GB",
    rating: 4.8,
    downloadLink: "#",
  },
  {
    title: "Fortnite",
    description:
      "A battle royale game where you fight to be the last one standing while building structures to gain an edge.",
    genre: "Battle Royale",
    coverImage:
      "https://th.bing.com/th/id/OIP.5K8vN75_vQXqXT4l6OR_3AHaEK?rs=1&pid=ImgDetMain",
    tags: ["Shooter", "Multiplayer", "Building"],
    downloadSize: "30GB",
    rating: 4.6,
    downloadLink: "#",
  },
];

const Hero = () => {
  return (
    <section className="grid grid-cols-2 gap-4">
      {games.map((game, index) => {
        return <GameCard key={index} {...game} size={"icon"} />;
      })}
    </section>
  );
};

export default Hero;
