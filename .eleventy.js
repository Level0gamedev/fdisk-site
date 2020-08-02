const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginNav = require("@11ty/eleventy-navigation");
const fs = require("fs");

module.exports = function(eleventyConfig) {
	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(pluginNav);
	eleventyConfig.addPassthroughCopy("src/assets");

  // custom functions for nchrs.xyz
	eleventyConfig.addFilter("nchrsDate", function(date) {
	  // returns the date in YYMMDD format
		const zero = "0"
		const yy = date.getFullYear().toString().slice(2,4)
		let mm = date.getMonth() + 1
		mm = mm < 10 ? zero.concat(mm.toString()) : mm.toString()
		let dd = date.getDate()
		dd = dd < 10 ? zero.concat(dd.toString()) : dd.toString()
		return yy.concat(mm).concat(dd)
	});

  eleventyConfig.addFilter("urlToTitle", function(path) {
    // takes a path as an input and returns the last directory without slashes
    // e.g. projects/games/oldMansJourney/ returns oldMansJourney
    let folders = path.split("/")
    folders = folders.slice(1,folders.length - 1)
    return folders.length > 0 ? folders[folders.length - 1] : "nchrs"    
  })

  eleventyConfig.addFilter("splitWords", function(str) {
    // finds uppercase letters in camel case strings and inserts a whitespace character
    // e.g. oldMansJourney returns old Mans Journey
    return str.replace(/([A-Z])/g, ' $1')  
  })

  eleventyConfig.addFilter("capitalize", function(str) {
    // capitalizes the first letter of a string
    // e.g. old Mans Journey returns Old Man's Journey
    return str.charAt(0).toUpperCase() + str.slice(1)
  })
  
   eleventyConfig.addFilter("removeVal", function(arr,val) {
    // removes the specified value from an array
    // e.g [1,2,3] | removeVal(2) => [1,3]
	for(var i = arr.length - 1; i >= 0; i--) {
		if(arr[i] === val) {
			arr.splice(i, 1);
		}
	}
    return arr
  })
  
   eleventyConfig.addNunjucksAsyncFilter("stat", (file, prop="birthtime", callback) => {
	// Used for retriving creation and update dates. Originally from: https://github.com/11ty/eleventy/issues/1032	
	
	/**
   * USAGE:
   * {{ page.inputPath | stat("atime") }} -- The timestamp indicating the last time this file was accessed.
   * {{ page.inputPath | stat("birthtime") }} -- The timestamp indicating the creation time of this file.
   * {{ page.inputPath | stat("mtime") }} -- The timestamp indicating the last time this file was modified.
   * {{ page.inputPath | stat("ctime") }} --  The timestamp indicating the last time the file status was changed.
   * {{ page.inputPath | stat }} -- Alias for `stat("birthtime")`.
   */
   
	// If you called a naked `{{ page.inputPath | stat }}`, then the callback
    // function gets set to the `prop` attribute, so we need to juggle some
    // attribute values.
    if (typeof prop === "function") {
      callback = prop;
      prop = "birthtime";
    }
    fs.stat(file, (err, stats) => callback(err, stats && stats[prop]));
	});

  // custom input and output directories
  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
}