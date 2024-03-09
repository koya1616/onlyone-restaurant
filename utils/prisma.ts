import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getRecommendRestaurants = async () => {
  return await prisma.recommend_restaurants.findMany();
}

export const getNotableRestaurants = async () => {
  return await prisma.notable_restaurants.findMany();
}

export const getPopularRestaurants = async () => {
  return await prisma.popular_restaurants.findMany();
}

export const getNewRestaurants = async () => {
  return await prisma.new_restaurants.findMany();
}
