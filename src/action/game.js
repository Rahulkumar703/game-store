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
  downloads,
  downloadSize,
  rating,
  downloadLink,
}) => {
  try {

    // Ensure tags is a non-empty string
    if (!tags || typeof tags !== "string") {
      throw new Error("Tags must be a non-empty string.");
    }

    // Process tags array
    const tagsArray = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "");

    const tagRecords = await Promise.all(
      tagsArray.map(async (tagName) => {
        if (tagName !== '') {
          return prisma.tags.upsert({
            where: { name: tagName },
            update: {},
            create: { name: tagName },
          });
        }
        return null;
      })
    );

    // Filter valid tags (ensure all records are objects)
    const validTagRecords = await tagRecords.filter((tag) => tag && typeof tag === "object");


    // Create the game entry
    await prisma.game.create({
      data: {
        title,
        slug,
        description,
        genre,
        coverImage,
        downloadSize,
        rating: parseFloat(rating),
        downloadLink,
        downloads: parseInt(downloads),
        views: 0,
        tags: {
          connect: validTagRecords.map((tag) => ({ id: tag.id })),
        },
      },
    });

    // Revalidate relevant paths
    revalidatePath("/")
    revalidatePath("/dashboard")
    revalidatePath("/all-games")
    revalidatePath("/top-games")

    return {
      message: "Game added to the store successfully.",
      type: "success",
      success: true,
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

export const getMetaData = async (slug) => {
  try {
    const metaData = await prisma.game.findUnique({
      where: { slug },
      select: {
        title: true,
        description: true,
      },
    });

    if (!metaData) {
      return {
        message: "Game not found.",
        type: "error",
        success: false,
      };
    }

    return {
      data: metaData,
      message: "MetaData fetched successfully.",
      type: "success",
      success: true,
    };
  } catch (error) {
    console.error("Error Getting MetaData of game:", error);
    return {
      message: error.message,
      type: "error",
      success: false,
    };
  }
};


export const getGame = async (slug) => {
  try {
    const game = await prisma.game.findUnique({
      where: { slug },
      include: {
        tags: true, // Include associated tags
      },
    });

    if (!game) {
      return {
        message: "Game not found.",
        type: "error",
        success: false,
      };
    }


    // Increment the views count
    await prisma.game.update({
      where: { slug },
      data: {
        views: {
          increment: 1, // Increase views by 1
        },
      },
    });

    return {
      data: game,
      message: "Game fetched successfully.",
      type: "success",
      success: true,
    };
  } catch (error) {
    console.error("Error Getting game:", error);
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
    console.error("Error fetching top games:", error);
    return {
      message: error.message,
      type: "error",
      success: false,
    };
  }
};

