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
    ['vuepress-plugin-presentation-mode'],
  ],
  markdown: {
    lineNumbers: true,
  },
  serviceWorker: true,
  themeConfig: {
    nav: [
      { text: 'Toledo', link: 'https://p.cygnus.cc.kuleuven.be/webapps/tol-web-rs-bb-bb_bb60/goto_lu.do?batchUid=B-VIVN-B5N146-2021&entityId=urn%3Amace%3Akuleuven.be%3Akulassoc%3Akuleuven.be' },
      { text: 'Blackboard Collaborate', link: 'https://p.cygnus.cc.kuleuven.be/webapps/blackboard/content/launchLink.jsp?course_id=_974914_1&tool_id=_5163_1&tool_type=TOOL&mode=cpview&mode=reset' },
      { text: 'ECTS', link: 'https://p.cygnus.cc.kuleuven.be/webapps/tol-ECTS-bb_bb60/public/display?button_id=338029f4-47f6-4f27-b476-6b642a1b0fb3' }
    ],
    sidebar: [
      {
        title: 'Introduction',   // required
        path: '/',      // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 0,    // optional, defaults to 1
        children: [
          ''
        ]
      },
      {
        title: 'How The Web Works',   // required
        // path: '/chapters/01-introduction/',      // optional, which should be a absolute path.
        collapsable: true, // optional, defaults to true
        sidebarDepth: 0,    // optional, defaults to 1
        children: [
          '/chapters/01-how_the_web_works/history.md',
          '/chapters/01-how_the_web_works/tcp_ip_stack.md',
          '/chapters/01-how_the_web_works/client_server_model.md',
          '/chapters/01-how_the_web_works/web_protocols.md',
          '/chapters/01-how_the_web_works/internet_of_things.md',
        ]
      },
      {
        title: 'Building Webpages',
        collapsable: true, // optional, defaults to true
        sidebarDepth: 0,    // optional, defaults to 1
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
        sidebarDepth: 0,    // optional, defaults to 1
        children: [
          '/chapters/03-protocols_and_technologies/urls.md',
          '/chapters/03-protocols_and_technologies/http/http.md',
          '/chapters/03-protocols_and_technologies/mqtt.md',
          '/chapters/03-protocols_and_technologies/dns.md',
          '/chapters/03-protocols_and_technologies/json.md',
          '/chapters/03-protocols_and_technologies/netlify.md',
        ]
      }
    ],
    sidebarDepth: 1,
    repo: 'sillevl/course-web-essentials',
    docsDir: 'docs',
    docsBranch: 'master'
  },
}