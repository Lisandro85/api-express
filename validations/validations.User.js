const z = require("zod");

const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  age: z.number(),
});

module.exports = { userSchema };
