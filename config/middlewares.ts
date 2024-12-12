export default [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];

// export default ({ env }) => [
//   "strapi::errors",
//   {
//     name: "strapi::security",
//     config: {
//       contentSecurityPolicy: {
//         useDefaults: true,
//         directives: {
//           "img-src": ["'self'", "data:", "blob:", env("SUPABASE_URL")],
//           "media-src": ["'self'", "data:", "blob:", env("SUPABASE_URL")],
//         },
//       },
//     },
//   },
//   "strapi::cors",
//   "strapi::logger",
//   "strapi::query",
//   "strapi::body",
//   "strapi::session",
//   "strapi::public",
// ];

// export default ({ env }) => [
//   "strapi::errors",
//   {
//     name: "strapi::security",
//     config: {
//       contentSecurityPolicy: {
//         useDefaults: true,
//         directives: {
//           "connect-src": ["'self'", "https:", "http:"],
//           "img-src": [
//             "'self'",
//             "data:",
//             "blob:",
//             "res.cloudinary.com", // cloudinary images
//             "lh3.googleusercontent.com", // google avatars
//             "platform-lookaside.fbsbx.com", // facebook avatars
//             "dl.airtable.com", // strapi marketplace,
//             "market-assets.strapi.io",
//             env("SUPABASE_URL"),
//           ],
//           "media-src": ["'self'", "data:", "blob:", env("SUPABASE_URL")],
//           upgradeInsecureRequests: null,
//         },
//       },
//     },
//   },
//   "strapi::cors",
//   "strapi::poweredBy",
//   "strapi::logger",
//   "strapi::query",
//   "strapi::body",
//   "strapi::session",
//   "strapi::favicon",
//   "strapi::public",
// ];
