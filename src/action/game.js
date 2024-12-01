"use server";

import prisma from "@/lib/db"; // Ensure Prisma client is initialized correctly
import { revalidatePath } from "next/cache";

/**
 * Add a new game to the database
 * @param {Object} gameData - The game data to add
 * @param {string} gameData.title - Title of the game
 * @param {string} gameData.slug - Title of the game
 * @param {string} gameData.description - Description of the game
 * @param {string} gameData.genre - Genre of the game
 * @param {string} gameData.coverImage - URL of the cover image
 * @param {string[]} gameData.tags - Array of tag names
 * @param {string} gameData.downloadSize - Download size of the game
 * @param {number} gameData.rating - Rating of the game
 * @param {string} gameData.downloadLink - URL of the download link
 * @returns {Promise<Object>} Response with success status and message
 */
export const addGame = async ({
  title,
  slug,
  description,
  genre,
  coverImage,
  tags,
  downloadSize,
  rating,
  downloadLink,
}) => {
  try {
    // Find or create tags
    const tagRecords = await Promise.all(
      tags.map(async (tagName) => {
        return prisma.tags.upsert({
          where: { name: tagName },
          update: {},
          create: { name: tagName },
        });
      })
    );

    // Create the game entry
    const newGame = await prisma.game.create({
      data: {
        title,
        slug: slug.toLowerCase(0),
        description,
        genre,
        coverImage,
        downloadSize,
        rating,
        downloadLink,
        downloads: 0, // Default value for new games
        views: 0, // Default value for new games
        tags: {
          connect: tagRecords.map((tag) => ({ id: tag.id })), // Link tags to the game
        },
      },
    });

    // Revalidate relevant paths
    ["/", "/all-games", "/top-games", "/dashboard"].forEach(path => revalidatePath(path));

    return {
      message: "Game added to the store successfully.",
      type: "success",
      success: true,
      game: newGame,
    };
  } catch (error) {
    console.error("Error adding game:", error);
    return {
      message: error.message,
      type: "error",
      success: false,
    };
  }
};

/**
 * Fetch all games from the database
 * @returns {Promise<Object>} List of all games or error message
 */
export const getAllGames = async () => {
  try {
    // Fetch all games with associated tags
    const games = await prisma.game.findMany({
      include: {
        tags: true, // Include tags associated with each game
      },
    });

    return {
      message: "Games retrieved successfully.",
      type: "success",
      success: true,
      data: games,
    };
  } catch (error) {
    console.error("Error fetching all games:", error);
    return {
      message: error.message,
      type: "error",
      success: false,
    };
  }
};

export const getTopGames = async () => {
  try {
    // Fetch all games with associated tags
    const games = await prisma.game.findMany({
      include: {
        tags: true, // Include tags associated with each game
      },
      orderBy: {
        rating: "desc", // Order by downloads in descending order
      },
      take: 10, // Limit to 5 games
    });

    return {
      message: "Games retrieved successfully.",
      type: "success",
      success: true,
      data: games,
    };
  } catch (error) {
    console.error("Error fetching all games:", error);
    return {
      message: error.message,
      type: "error",
      success: false,
    };
  }
};



// [
//   {
//     title: "Elden Ring",
//     slug: "elden-ring",
//     description:
//       "An action RPG set in a vast open world filled with challenging enemies, epic battles, and stunning environments.",
//     genre: "RPG",
//     coverImage:
//       "https://th.bing.com/th/id/OIP.5K8vN75_vQXqXT4l6OR_3AHaEK?rs=1&pid=ImgDetMain",
//     tags: ["Fantasy", "Open World", "Action", "Adventure"],
//     downloadSize: "45GB",
//     rating: 4.8,
//     downloadLink: "#",
//   },
//   {
//     title: "Call of Duty: Modern Warfare II",
//     slug: "call-of-duty",
//     description:
//       "A high-octane FPS with a gripping campaign and competitive multiplayer modes.",
//     genre: "FPS",
//     coverImage:
//       "https://th.bing.com/th/id/OIP.11f-IXouGQc1gd_AC8QdQQHaEK?rs=1&pid=ImgDetMain",
//     tags: ["Shooter", "Multiplayer", "Action"],
//     downloadSize: "120GB",
//     rating: 4.5,
//     downloadLink: "#",
//   },
//   {
//     title: "The Legend of Zelda: Breath of the Wild",
//     slug: "the-legend-of-zelda",
//     description:
//       "An open-world action-adventure game where you explore the vast kingdom of Hyrule and solve ancient puzzles.",
//     genre: "Adventure",
//     coverImage:
//       "https://th.bing.com/th/id/OIP._wgfFq8aDeFxjLHDzNzknAHaEK?rs=1&pid=ImgDetMain",
//     tags: ["Adventure", "Fantasy", "Open World"],
//     downloadSize: "14.4GB",
//     rating: 4.9,
//     downloadLink: "#",
//   },
//   {
//     title: "Among Us",
//     slug: "among-us",
//     description:
//       "A party game of teamwork and betrayal as you work together to complete tasks or sabotage the mission.",
//     genre: "Party",
//     coverImage:
//       "https://th.bing.com/th/id/OIP.3JNp8Om-jc0VpyT0eH7u7AHaEK?rs=1&pid=ImgDetMain",
//     tags: ["Multiplayer", "Social Deduction", "Casual"],
//     downloadSize: "0.5GB",
//     rating: 4.3,
//     downloadLink: "#",
//   },
//   {
//     title: "Minecraft",
//     slug: "minecraft",
//     description:
//       "A sandbox game that lets you build, explore, and survive in a blocky, procedurally generated world.",
//     genre: "Sandbox",
//     coverImage:
//       "https://th.bing.com/th/id/OIP.0L9oSnoLyNKnqNE4jLTUBAHaEK?rs=1&pid=ImgDetMain",
//     tags: ["Creative", "Survival", "Multiplayer"],
//     downloadSize: "1GB",
//     rating: 4.7,
//     downloadLink: "#",
//   },
//   {
//     title: "Hollow Knight",
//     slug: "hollow-knight",
//     description:
//       "A challenging and beautifully hand-drawn action platformer set in a mysterious underground world.",
//     genre: "Action",
//     coverImage:
//       "https://th.bing.com/th/id/OIP.aZ68YiDSQgPiME05BGGOMAHaEK?rs=1&pid=ImgDetMain",
//     tags: ["Metroidvania", "Indie", "Exploration"],
//     downloadSize: "9GB",
//     rating: 4.8,
//     downloadLink: "#",
//   },
//   {
//     title: "Fortnite",
//     slug: "fortnite",
//     description:
//       "A battle royale game where you fight to be the last one standing while building structures to gain an edge.",
//     genre: "Battle Royale",
//     coverImage:
//       "https://th.bing.com/th/id/OIP.qDsFMSalv4w7iwARDdqX2AHaEK?rs=1&pid=ImgDetMain",
//     tags: ["Shooter", "Multiplayer", "Building"],
//     downloadSize: "30GB",
//     rating: 4.6,
//     downloadLink: "#",
//   },
// ].forEach(async (game) => await addGame(game));