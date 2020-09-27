module.exports = {
  title: 'Web Essentials',
  description: 'Web Essentials course for the VIVES elektronics and ICT',
  dest: 'dist',
  plugins: [
    ['vuepress-plugin-zooming'],
    [
      // includes all files in `sourceDir`
      // ignore dotfiles and markdown
      'vuepress-plugin-public-files', {
        from: 'files',
        to: 'files',
      }
    ],
    ['vuepress-plugin-container', {
      type: 'quote',
      defaultTitle: '',
    }],
    ['vuepress-plugin-container', {
      type: 'right',
      defaultTitle: '',
    }],
    ['vuepress-plugin-container', {
      type: 'tip',
      defaultTitle: 'TIP',
    }],
    ['vuepress-plugin-container', {
      type: 'warning',
      defaultTitle: 'WARNING',
    }],
    ['vuepress-plugin-container', {
      type: 'danger',
      defaultTitle: 'WARNING',
    }],
    ['vuepress-plugin-container', {
      type: 'details',
      before: info => `<details class="custom-block details">${info ? `<summary>${info}</summary>` : ''}\n`,
      after: () => '</details>\n'
    }],
  ],
  markdown: {
    lineNumbers: true,
  },
  serviceWorker: true,
  themeConfig: {
    nav: [
    ],
    sidebar: [
      {
        title: 'Course Introduction',   // required
        path: '/chapters/00-course_introduction/',      // optional, which should be a absolute path.
        collapsable: true, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          ''
        ]
      },
      {
        title: 'Introduction',   // required
        // path: '/chapters/01-introduction/',      // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/chapters/01-introduction/history.md',
          '/chapters/01-introduction/tcp_ip_stack.md',
          '/chapters/01-introduction/client_server_model.md',
          '/chapters/01-introduction/web_protocols.md',
          '/chapters/01-introduction/internet_of_things.md',
        ]
      },
      {
        title: 'Building Webpages',
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          {
            title: 'HyperText Markup Language',
            children: ''
          },
          {
            title: 'Cascading StyleSheets',
            children: ''
          },
          {
            title: 'Layouts',
            children: ''
          },
          {
            title: 'JavaScript',
            children: ''
          }
        ]
      },
      {
        title: 'How the Web Works',
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/chapters/03-how_the_web_works/urls.md',
          '/chapters/03-how_the_web_works/http/http.md',
          '/chapters/03-how_the_web_works/mqtt.md',
          '/chapters/03-how_the_web_works/dns.md',
          '/chapters/03-how_the_web_works/json.md',
          '/chapters/03-how_the_web_works/netlify.md',
        ]
      }
    ],
    sidebarDepth: 1,
    repo: 'sillevl/course-web-essentials',
    docsDir: 'docs',
    docsBranch: 'master'
  },
}