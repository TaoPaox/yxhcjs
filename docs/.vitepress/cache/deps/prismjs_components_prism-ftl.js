// ../node_modules/.pnpm/prismjs@1.29.0/node_modules/prismjs/components/prism-ftl.js
(function(Prism2) {
  var FTL_EXPR = /[^<()"']|\((?:<expr>)*\)|<(?!#--)|<#--(?:[^-]|-(?!->))*-->|"(?:[^\\"]|\\.)*"|'(?:[^\\']|\\.)*'/.source;
  for (var i = 0; i < 2; i++) {
    FTL_EXPR = FTL_EXPR.replace(/<expr>/g, function() {
      return FTL_EXPR;
    });
  }
  FTL_EXPR = FTL_EXPR.replace(/<expr>/g, /[^\s\S]/.source);
  var ftl = {
    "comment": /<#--[\s\S]*?-->/,
    "string": [
      {
        // raw string
        pattern: /\br("|')(?:(?!\1)[^\\]|\\.)*\1/,
        greedy: true
      },
      {
        pattern: RegExp(/("|')(?:(?!\1|\$\{)[^\\]|\\.|\$\{(?:(?!\})(?:<expr>))*\})*\1/.source.replace(/<expr>/g, function() {
          return FTL_EXPR;
        })),
        greedy: true,
        inside: {
          "interpolation": {
            pattern: RegExp(/((?:^|[^\\])(?:\\\\)*)\$\{(?:(?!\})(?:<expr>))*\}/.source.replace(/<expr>/g, function() {
              return FTL_EXPR;
            })),
            lookbehind: true,
            inside: {
              "interpolation-punctuation": {
                pattern: /^\$\{|\}$/,
                alias: "punctuation"
              },
              rest: null
            }
          }
        }
      }
    ],
    "keyword": /\b(?:as)\b/,
    "boolean": /\b(?:false|true)\b/,
    "builtin-function": {
      pattern: /((?:^|[^?])\?\s*)\w+/,
      lookbehind: true,
      alias: "function"
    },
    "function": /\b\w+(?=\s*\()/,
    "number": /\b\d+(?:\.\d+)?\b/,
    "operator": /\.\.[<*!]?|->|--|\+\+|&&|\|\||\?{1,2}|[-+*/%!=<>]=?|\b(?:gt|gte|lt|lte)\b/,
    "punctuation": /[,;.:()[\]{}]/
  };
  ftl.string[1].inside.interpolation.inside.rest = ftl;
  Prism2.languages.ftl = {
    "ftl-comment": {
      // the pattern is shortened to be more efficient
      pattern: /^<#--[\s\S]*/,
      alias: "comment"
    },
    "ftl-directive": {
      pattern: /^<[\s\S]+>$/,
      inside: {
        "directive": {
          pattern: /(^<\/?)[#@][a-z]\w*/i,
          lookbehind: true,
          alias: "keyword"
        },
        "punctuation": /^<\/?|\/?>$/,
        "content": {
          pattern: /\s*\S[\s\S]*/,
          alias: "ftl",
          inside: ftl
        }
      }
    },
    "ftl-interpolation": {
      pattern: /^\$\{[\s\S]*\}$/,
      inside: {
        "punctuation": /^\$\{|\}$/,
        "content": {
          pattern: /\s*\S[\s\S]*/,
          alias: "ftl",
          inside: ftl
        }
      }
    }
  };
  Prism2.hooks.add("before-tokenize", function(env) {
    var pattern = RegExp(/<#--[\s\S]*?-->|<\/?[#@][a-zA-Z](?:<expr>)*?>|\$\{(?:<expr>)*?\}/.source.replace(/<expr>/g, function() {
      return FTL_EXPR;
    }), "gi");
    Prism2.languages["markup-templating"].buildPlaceholders(env, "ftl", pattern);
  });
  Prism2.hooks.add("after-tokenize", function(env) {
    Prism2.languages["markup-templating"].tokenizePlaceholders(env, "ftl");
  });
})(Prism);
//# sourceMappingURL=prismjs_components_prism-ftl.js.map