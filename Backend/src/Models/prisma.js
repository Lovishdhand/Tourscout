// NOTE: path assumes generated client is at project-root/generated/prisma
const { PrismaClient } = require('../../generated/prisma');
const prisma = new PrismaClient();

module.exports = prisma;
