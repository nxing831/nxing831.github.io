const markdownIt = require('markdown-it');
const markdownItKatex = require('@vscode/markdown-it-katex').default;
const pluginTOC = require('eleventy-plugin-toc');
const markdownItAnchor = require('markdown-it-anchor');
const cheerio = require('cheerio');

module.exports = function (eleventyConfig) {

    // This will stop the default behaviour of foo.html being turned into foo/index.html
    eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");

    const md = markdownIt({
        html: true, // Allows HTML in Markdown
        linkify: true, // Automatically links URLs
        typographer: true, // Applies typographic replacements
      }).use(markdownItKatex, {
        macros: {
          "\\P" : "\\mathbb{P}",
          "\\E" : "\\mathbb{E}",
          "\\Z" : "\\mathbb{Z}",
          "\\F" : "\\mathbb{F}",
          "\\G" : "\\mathbb{G}",
          "\\R" : "\\mathbb{R}",
          "\\Var": "\\text{ Var}",
          "\\eps": "\\epsilon",
          "\\X": "\\mathcal{X}",
          "\\b": "\\beta",
          "\\se": "\\text{SE}",
          "\\tss": "\\text{TSS}",
          "\\rss": "\\text{RSS}",
          "\\Cov": "\\text{Cov}",
        }
      });

    // escape apostrophes
    md.core.ruler.before('normalize', 'fix-apostrophes', state => {
      state.src = state.src.replace(/’/g, "'");
    });
    
    // use anchor tags
    md.use(markdownItAnchor, {
      level: 1,
      // slugify: string => string,
      permalink: false,
      // renderPermalink: (slug, opts, state, permalink) => {},
      permalinkClass: 'header-anchor',
      permalinkSymbol: '¶',
      permalinkBefore: false
    });

    // use toc plugin 
    eleventyConfig.addPlugin(pluginTOC, {
      wrapper: '', // remove wrapper and add manually in template 
      ul: true,
      tags: ['h2', 'h3'],
    });

    // make blog dates nice
    const english = new Intl.DateTimeFormat("en");
    eleventyConfig.addFilter("niceDate", function(d) {
      return english.format(d);
    });
    // support blog excerpts
    eleventyConfig.addShortcode('excerpt', post => extractExcerpt(post));
    function extractExcerpt(post) {
      if (!post.templateContent) return '';
      // Load the content into Cheerio for HTML parsing
      const $ = cheerio.load(post.templateContent);
      // Remove all headings
      $('h1, h2, h3, h4, h5, h6').remove();
      // Find the first paragraph
      const firstParagraph = $('p').first();
      return firstParagraph.length ? $.html(firstParagraph) : '';
    }
  

    // Tell Eleventy to use the markdown-it instance
    eleventyConfig.setLibrary("md", md);

    return {
      dir: {
        input: "content",
        output: "public",
      },
    };
  };