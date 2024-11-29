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
    ["", "all-games", "top-games", "dashboard"].forEach(revalidatePath);

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
