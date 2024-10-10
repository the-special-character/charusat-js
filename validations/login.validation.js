const { z } = require("zod");

const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(16, "Password must not exceed 16 characters.")
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/,
      "Password must be between 8 and 16 characters, contain at least one letter, one number, and one special character."
    ),
});

module.exports = loginSchema;
