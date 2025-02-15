const z = require("zod");

const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  age: z.number(),
});

const userUpdateSchema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  age: z.number().optional(),
});

module.exports = { userSchema, userUpdateSchema };
