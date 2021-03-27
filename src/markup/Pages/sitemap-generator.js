require("babel-register")({
    presets: ["es2015", "react"]
  });
   
  const router = require("../Layout/sitemap-routes.js").default;
  const Sitemap = require("react-router-sitemap").default;
  
  function generateSitemap() {
      return (
        new Sitemap(router)
            .build("https://www.grandlimousine.com/")
            .save("./public/sitemap.xml")
      );
  }
  
  generateSitemap();