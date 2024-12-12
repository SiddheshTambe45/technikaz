export default () => ({});

// module.exports = ({ env }) => ({
//   upload: {
//     provider: "strapi-provider-upload-supabase",
//     providerOptions: {
//       apiUrl: env("SUPABASE_API_URL"),
//       apiKey: env("SUPABASE_API_KEY"),
//       bucket: env("SUPABASE_BUCKET", "media"),
//       // directory: env("SUPABASE_DIRECTORY", "uploads"),
//       // privateBucket: env.bool("SUPABASE_PRIVATE_BUCKET", false),
//       options: {
//         dynamic_directory: env.bool("SUPABASE_DYNAMIC_DIRECTORY", true),
//         sizeLimit: env.int("SUPABASE_SIZE_LIMIT", Infinity),
//         expiryMinutes: env.int("SUPABASE_EXPIRY_MINUTES", 60),
//       },
//     },
//   },
// });
