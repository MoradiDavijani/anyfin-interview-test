### Location of deployed application

[Heroku Application](https://anyfin-countries.herokuapp.com/)

**NOTE:** Please note that it is on a free Heroku account. So, the first time you open the URL will take more because it sleeps after 30 minutes of inactivity and may take around a minute to wake up again.

### Time spent

I spent about 5.5 hours on the assignment:

- Reading APIs: ~0.25h
- Thinking about the app features and UI: ~0.5h
- Installing NextJs and preparing the project: ~0.25h
- Adding backend APIs to get data: ~1h
- Adding the Home page components: ~1.5h
- Adding the Country page components: ~1.5h
- Deploying on Heroku: ~0.25h
- Adding this document: ~0.25h

### Shortcuts/Compromises made

There are a lot of parts that could be better if it was a real-world application. Here are some of the enhancements I would do if I had more time:

- Improve UI with a better design!
- Add tests!
- Add internationalization for users to be able to change the website language
- Add json/ld schemas for country pages for SEO improvements.
- I used a UTF-8 character instead of icon and I know that it looks different on different devices. I usually use [webfont-webpack-plugin](https://www.npmjs.com/package/webfont-webpack-plugin) to generate a web-font from my SVG files.
- Add the feature to change the base currency from SEK to something else.
- Cache assets in the service-worker so that it can show the latest fetched information when user is offline.
- Add some [shortcuts](https://developer.mozilla.org/en-US/docs/Web/Manifest/shortcuts) for the app in the `site.webmanifest` file.
- I used Heroku CLI to deploy the app, but we could use Vercel (NextJs recommended platform) or Docker with a CI/CD tool like CircleCI.

### Instructions to run assignment locally

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Follow these steps to run the project on your local machine:

1. Copy the `.env.sample` file to `.env.local` and replace the value for `FIXER_API_KEY` with your own Fixer API key.
2. Install dependencies: `npm install`.
3. Run the development server: `npm run dev`.
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
