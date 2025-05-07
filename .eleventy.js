const { DateTime } = require("luxon");
module.exports = function(eleventyConfig) {
    // Add a global date value
    eleventyConfig.addGlobalData("now", () => new Date());
  
    // Register a date filter
    eleventyConfig.addFilter("date", (value, format = "yyyy") => {
      return DateTime.fromJSDate(value).toFormat(format);
    });
    // pass CSS through to output
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/assets");
    // watch for data file changes
    eleventyConfig.addWatchTarget("src/_data");
  
    return {
      dir: {
        input: "src",
        includes: "_includes",
        data: "_data",
        output: "_site"
      },
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk"
    };
  };
  