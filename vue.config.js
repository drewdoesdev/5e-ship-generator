module.exports = {
    css: {
      loaderOptions: {
        sass: {
            additionalData: `
                   @import "@/scss/variables/_variables.scss"; 
                   @import "@/scss/elements/_elements.scss";
            `
        }
      }
    },
    chainWebpack: config => {
        const svgRule = config.module.rule('svg')
    
        svgRule.uses.clear()
    
        svgRule
          .use('vue-svg-loader')
          .loader('vue-svg-loader')
      }
  };