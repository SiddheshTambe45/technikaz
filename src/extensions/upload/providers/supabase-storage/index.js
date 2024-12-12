"use strict";

const { createClient } = require("@supabase/supabase-js");

// Helper function to construct the file key
const getKey = ({ directory, file }) => {
  const uniqueIdentifier = `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  return `${directory}/${uniqueIdentifier}-${file.name}${file.ext}`.replace(
    /^\//g,
    ""
  );
};

module.exports = {
  provider: "supabase-storage",
  name: "Supabase Storage",
  auth: {
    apiUrl: {
      label: "Supabase API URL (e.g., 'https://xyz.supabase.co')",
      type: "text",
    },
    apiKey: {
      label: "Supabase API Key",
      type: "text",
    },
    bucket: {
      label: "Supabase Bucket Name",
      type: "text",
    },
    directory: {
      label: "Directory in Bucket",
      type: "text",
    },
    options: {
      label: "Supabase Additional Options",
      type: "object",
    },
  },
  init: (config) => {
    const apiUrl = config.apiUrl;
    const apiKey = config.apiKey;
    const bucket = config.bucket || "strapi-uploads";
    const directory = (config.directory || "").replace(/(^\/)|(\/$)/g, "");
    const options = config.options || undefined;

    const supabase = createClient(apiUrl, apiKey, options);

    return {
      upload: (file) =>
        new Promise((resolve, reject) => {
          const key = getKey({ directory, file });

          supabase.storage
            .from(bucket)
            .upload(key, Buffer.from(file.buffer, "binary"), {
              cacheControl: "public, max-age=31536000, immutable",
              upsert: true,
              contentType: file.mime,
            })
            .then(({ data, error }) => {
              if (error) return reject(error);

              const { publicURL, error: urlError } = supabase.storage
                .from(bucket)
                .getPublicUrl(key);

              if (urlError) return reject(urlError);

              file.url = publicURL;
              resolve();
            });
        }),

      delete: (file) =>
        new Promise((resolve, reject) => {
          const key = getKey({ directory, file });

          supabase.storage
            .from(bucket)
            .remove([key])
            .then(({ data, error }) => {
              if (error) return reject(error);
              resolve();
            });
        }),
    };
  },
};
