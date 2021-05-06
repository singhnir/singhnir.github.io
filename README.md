# Personal Website

See: [https://singhnir.github.io/](https://singhnir.github.io/).

My personal website. An [MIT](https://github.com/singhnir/singhnir.github.io/blob/main/LICENSE) licensed, simple, easily modifiable, statically-exportable [React](https://reactjs.org/), [Jamstack](https://jamstack.org/) application that deploys automatically for free using [github pages](https://pages.github.com/). Built using modern javascript, based on [create-react-app](https://github.com/facebook/create-react-app) with [React-Router](https://reactrouter.com/), SCSS, [github actions](https://github.com/features/actions), and many other useful technologies.

## Set up

To download the repository and install dependencies, run the following commands:

```bash
git clone https://github.com/singhnir/singhnir.github.io.git # replace [singhnir] with your github username if you fork first.
cd singhnir.github.io
nvm install # this is optional - make sure you're running >= node 12 with `node --version`
npm install
```

## Running

Run the following command to build the react application and serve it with fast refresh:

```bash
npm start
```

Your web browser should automatically open to `<ip>:<port>:<path>` default: [http://localhost:3000/](http://localhost:3000/).

## Adapting this Website

This website has been created in such a way that one doesn't encounter any trouble adapting this website. But there are still bugs. I am sorry. So if you find a bug, please email me (nirsingh124@gmail.com), submit a pull request (I'll buy you a coffee as a thank you), or submit an issue.

You may wish to fork this repository or remove my remote origin and add your own. Go [here](https://help.github.com/articles/changing-a-remote-s-url/) for more information on how to change remotes.

## Before you start

1. Make sure you have a good text editor. I recommend [Visual Studio Code](https://code.visualstudio.com/).
2. Review `src/App.js`. This file contains all of our route definitions. If you wish to add or remove a page, you should do so here.

## Setup

1. Run the project before making any modifications by following mentioned steps in the begining.
2. Change `homepage` in `package.json` to reflect where you plan to host the site. This is important for static exporting via react-snap. This also changes your path when developing locally. For example, a homepage of `singhnir.github.io` places the site at `localhost:3000` and a homepage of `https://singhnir.github.io/personal-site/` places the site at `localhost:3000/personal-site/`. If you plan to host at on a path such as `https://[your-github-username].github.io/[your-repo-name]`, you should set this now so that your development environment mirrors your production environment.
3. Create a `.env` file. To do this, run:

    ```bash
    cp sample.env .env
    ```

    and set values as appropriate. Most people will not need to modify this file.

## Adapt Content

I recommend keeping the project running as you go (with `npm start`) to help correct mistakes quickly.

1. Start by changing text in the sidebar. This file is located at `src/components/Template/SideBar.js`.
2. Add an image of yourself in `public/images/me.jpg`. Your image should be approximately 256 x 256 pixels. Larger and smaller is ok, but avoid very large images to save bandwidth. If you need help resizing your image, Adobe makes a great online tool [here](https://www.adobe.com/photoshop/online/resize-image.html).
3. Modify the text on the homepage. This file is located at `src/pages/Index.js`.
4. Modify the files in `src/data/resume/` next.
5. Modify all of the other files in the `src/data/` directory.
6. You've finished modifying >95% of the pages. Search through the rest of the files for references to `Nirmal Singh` and change values to your name.
7. Change or remove the favicon in `public/index.html`. [This](https://realfavicongenerator.net/) website may be helpful.

## Deploying

### Deploying to Github Pages

1. Modify the environmental variables and git remote url in [`.github/workflows/github-pages.yml`](.github/workflows/github-pages.yml).
2. Modify `homepage` in `package.json` to point to where you plan to host your site. If you do not plan on using a custom domain name, it should look like `https://[your-gh-username].github.io/[repository-name - default:personal-site]/`
3. If you plan on using a custom domain, modify `public/CNAME`. If you don't, delete `public/CNAME`.

Make a commit to `main` and push your changes. That's it.

### Static Export

To statically export the site without deploying to github pages, delete or disable `.github/workflows/github-pages.yml` and run `npm run predeploy`. This generates a static export of the website as `personal-site/build/`. Copy this and self-host or deploy to a CDN.

## Acknowledgements

This project is a major derivative of Michael d'Angelo work [personal-site](https://github.com/mldangelo/personal-site). You should check it out.
