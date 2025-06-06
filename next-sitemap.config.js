/** @type {import('next-sitemap').IConfig} */
module.exports = {
    // Informe o domínio do seu site (sem barra no final)
    siteUrl: 'https://whiteshining.com',
  
    // Defina onde ele deve salvar o sitemap. Por padrão, vai para public/
    // Se quiser outra pasta, ajuste outputDirectory.
    // outputDirectory: './public',
  
    // Para gerar também um robots.txt automaticamente:
    generateRobotsTxt: true,
  
    // Caso queira customizar políticas de robots (ex.: bloquear /admin):
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' },
        // { userAgent: '*', disallow: '/admin' },
      ],
      // Se tiver mais de um sitemap (ex.: sitemap-posts.xml):
      additionalSitemaps: [
        // 'https://seudominio.com/sitemap-posts.xml',
      ],
    },
  
    // Se o projeto usa rotas dinâmicas, você pode informar outras configurações:
    //   transform: async (config, path) => { ... }
  }
  