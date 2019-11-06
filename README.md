<p align="center">
  <br>
  <a href="https://vuefront.com">
    <img src="https://vuefront.com/logo.png" width="120"/>
  </a>
</p>
<h1 align="center">VueFront Starter Kit</h1>
<p align="center">
Vue powered CMS agnostic frontend framework for your old-fashioned Blog and Ecommerce site. <a href="https://twitter.com/intent/tweet?text=I%20just%20turned%20my%20old%20website%20into%20a%20SPA%20and%20PWA%20for%20free%20@VueFront_js&url=https://vuefront.com&hashtags=vuejs,webapp,vuefront,pwa,spajs"><img src="https://img.shields.io/twitter/url/https/VueFront_js.svg?style=social" /></a></p>


<p align="center">
  <a href="https://github.com/vuefront/vuefront"><img src="https://img.shields.io/badge/price-FREE-0098f7.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vuefront"><img src="https://img.shields.io/npm/v/vuefront.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vuefront"><img src="https://img.shields.io/npm/l/vuefront.svg" alt="License"></a>
  <a href="https://discord.gg/C9vcTCQ"><img src="https://img.shields.io/badge/chat-on%20discord-7289da.svg" alt="Chat"></a>
</p>

<p align="center">
Show your :heart: - give us a :star: <br/> 
Help us grow this project to be the best it can be!
  </p>

The VueFront Starter kit is a boilerplate of a VueFront Web App built on Nuxt. You can clone it and modify to quickly start working with VueFront. 

You can also use an App Generator by running this command in your terminal:

```bash
# Create VueFront app. replace <project-name> with vuefront
yarn create vuefront-app <project-name>
# OR npx create-vuefront-app <project-name>

yarn dev
```

### CMS Connect App (required to be installed first)
VueFront is compatible with the following CMS:
1. [Wordpress](https://github.com/vuefront/wordpress)
2. [Magento](https://github.com/vuefront/magento)
3. [OpenCart](https://github.com/vuefront/opencart)
4. [PrestaShop](https://github.com/vuefront/prestashop)


## Quick Start
1. Install [CMS Connect App](https://vuefront.com/cms) on your CMS website to obtain the CMS Connect URL 
2. Fork this repo
3. Modify the .env (add CMS Connect URL to your website)
4. Deploy on Heroku or Netlify

## Netlify setup
- Repositiory: connect your forked vuefront-starter-kit
- Build command: npm run generate
- Publish directory: dist


## Setup VueFront App on your local computer
1. Clone this repo
2. Run the following commands
``` bash
# 1. install dependencies
$ yarn install

# 2. serve with hot reload at localhost:3000
$ yarn run dev

# 3.1 build for production and launch server
$ yarn run build
$ yarn start

# 3.2 generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
