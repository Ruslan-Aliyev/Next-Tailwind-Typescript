# Next.js 14 & Tailwind & TypeScript

## Tutorials

- Quickstart tutorials
	- https://www.freecodecamp.org/news/nextjs-tutorial
	- https://www.youtube.com/watch?v=Sklc_fQBmcs
- Official docs: https://nextjs.org/docs#join-our-community
	- Note which you chose to use: Page or App router. If you setup `create-next-app` and choosen `App Router`, then read the documentation about App Router.
- Next 12: https://www.youtube.com/playlist?list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw
- Next 14: https://www.youtube.com/playlist?list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI
- TypeScript: https://www.freecodecamp.org/news/learn-typescript-beginners-guide
- Tailwind: https://www.youtube.com/playlist?list=PL4cUxeGkcC9gpXORlEHjc5bgnIi5HEGhw

## Auth

- https://www.youtube.com/watch?v=v6TPcU23wP8 (Very Good)
	- https://next-auth.js.org/providers/credentials
- https://www.youtube.com/watch?v=n5dsBONfwjE 
- https://blog.logrocket.com/using-supertokens-authentication-next-js

## Server vs Client sides

- CSR: 
	- What is it:
		- Server gives `<div id="root"></div>` and JS to client. Client renders it all
	- Disadvantages:
		- Bad SEO
		- Browser must render all the JS on browser first before website us usable
- SSR & Hydration: 
	- What is it:
		- Rendered on server then send to client. Hydration takes over and makes interactive.
	- Types:
		- SSR: Rendered on server at request time. Good for personalized contents, eg: logged in users
		- SSG: Rendered on server at deploy/build time. Good for largely static contents, eg blogs
			- ISR: When data changes, individual pages gets rebuild, instead of the whole site.
		- More info on various rendering patterns: https://www.youtube.com/watch?v=Dkx5ydvtpCA
	- Disadvantages:
		- Server must get all the needed data before it renders the page
		- All JavaScript must download from the server before the client can be hydrated with it.
		- All hydration has to complete on the client before anything can be interacted with.
- SSR & Suspense: 
	- What is it:
		- The `<Suspense component>`, allowing:
			- HTML streaming: Server don't need all the data before it renders the page
			- Code splitting: JavaScript are streamed to the browser piece-meal
			- Selective hydration: Hydration in piece-meal, according to priority or need
	- Disadvantages:
		- If there a lot of JS, then browser still need to download them all eventually. There has to be a better way, ie: some of the JS work can be done on the server
		- Things that dont need hydration gets hydrated too
- React Server Components: 
	- What is it:
		- React invented Server components in version ~18/19, Next uses it since version 13. Next introduced App router in version 13, it's built around the RSC architecture. In App Router projects, a component is server side by default, unless have `"use client"` specified at the top of the file.
		- Server and Client components are seperated. 
		- Server components only runs on the server, it never gets downloaded to the browser, hence reducing the load on the browser.
		- Client components handles interactivity
	- Advantages:
		- Less JS need to be download to browser
		- Data fetching in server components, on server side, which is closer to data source, hence faster.
		- Sensitive info kept on server side
	- More info:
		- https://www.plasmic.app/blog/how-react-server-components-work
- Qwik Resumability: https://www.youtube.com/watch?v=t11M-Fj6iiQ
	- Hydration vs Qwik Resumability: https://thenewstack.io/javascript-on-demand-how-qwik-differs-from-react-hydration

## Next 13 changes

Next 13 added the new **App Router** on top of its pre existing **Page Router**

![](/Illustrations/NextJS_routers.png)

### SSR, SSG & ISR

In App Router

```
fetch (URL), {
  cache: "force-cache", // SSG
  cache: "no-store", // SSR
  next: {revalidate: 1} // ISR
})
```

`fetch` vs Next's patched `fetch`:  
- Original `fetch`: https://developer.mozilla.org/en-US/docs/Web/API/fetch#parameters
- Next's `fetch`: https://nextjs.org/docs/app/api-reference/functions/fetch 
	- Note: Next's `fetch` have an extra options field called `next`, in which you can specify ISR revalidation time

In Page Router

- SSR: `getServerSideProps`
- SSG: `getStaticProps` & `getStaticPaths`
- ISR:
```
function getStaticProps() {
  // ...
  return {
    props: { THE RESULT },
    revalidate: 1
  }
}
```

https://nextjs.org/docs/pages/building-your-application/configuring/typescript#static-generation-and-server-side-rendering

## See also

- https://github.com/Ruslan-Aliyev/JAM

# Todo

- https://blog.logrocket.com/implementing-service-workers-next-js
- https://www.pronextjs.dev/next-js-file-uploads-server-side-solutions
- Multilingual
