/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as RegisterImport } from './routes/register'
import { Route as PricingImport } from './routes/pricing'
import { Route as LoginImport } from './routes/login'
import { Route as ContactImport } from './routes/contact'
import { Route as IndexImport } from './routes/index'
import { Route as BlogIndexImport } from './routes/blog/index'
import { Route as BlogPostIdImport } from './routes/blog/$postId'

// Create/Update Routes

const RegisterRoute = RegisterImport.update({
  id: '/register',
  path: '/register',
  getParentRoute: () => rootRoute,
} as any)

const PricingRoute = PricingImport.update({
  id: '/pricing',
  path: '/pricing',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const ContactRoute = ContactImport.update({
  id: '/contact',
  path: '/contact',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const BlogIndexRoute = BlogIndexImport.update({
  id: '/blog/',
  path: '/blog/',
  getParentRoute: () => rootRoute,
} as any)

const BlogPostIdRoute = BlogPostIdImport.update({
  id: '/blog/$postId',
  path: '/blog/$postId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/contact': {
      id: '/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/pricing': {
      id: '/pricing'
      path: '/pricing'
      fullPath: '/pricing'
      preLoaderRoute: typeof PricingImport
      parentRoute: typeof rootRoute
    }
    '/register': {
      id: '/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof RegisterImport
      parentRoute: typeof rootRoute
    }
    '/blog/$postId': {
      id: '/blog/$postId'
      path: '/blog/$postId'
      fullPath: '/blog/$postId'
      preLoaderRoute: typeof BlogPostIdImport
      parentRoute: typeof rootRoute
    }
    '/blog/': {
      id: '/blog/'
      path: '/blog'
      fullPath: '/blog'
      preLoaderRoute: typeof BlogIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/contact': typeof ContactRoute
  '/login': typeof LoginRoute
  '/pricing': typeof PricingRoute
  '/register': typeof RegisterRoute
  '/blog/$postId': typeof BlogPostIdRoute
  '/blog': typeof BlogIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/contact': typeof ContactRoute
  '/login': typeof LoginRoute
  '/pricing': typeof PricingRoute
  '/register': typeof RegisterRoute
  '/blog/$postId': typeof BlogPostIdRoute
  '/blog': typeof BlogIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/contact': typeof ContactRoute
  '/login': typeof LoginRoute
  '/pricing': typeof PricingRoute
  '/register': typeof RegisterRoute
  '/blog/$postId': typeof BlogPostIdRoute
  '/blog/': typeof BlogIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/contact'
    | '/login'
    | '/pricing'
    | '/register'
    | '/blog/$postId'
    | '/blog'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/contact'
    | '/login'
    | '/pricing'
    | '/register'
    | '/blog/$postId'
    | '/blog'
  id:
    | '__root__'
    | '/'
    | '/contact'
    | '/login'
    | '/pricing'
    | '/register'
    | '/blog/$postId'
    | '/blog/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ContactRoute: typeof ContactRoute
  LoginRoute: typeof LoginRoute
  PricingRoute: typeof PricingRoute
  RegisterRoute: typeof RegisterRoute
  BlogPostIdRoute: typeof BlogPostIdRoute
  BlogIndexRoute: typeof BlogIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ContactRoute: ContactRoute,
  LoginRoute: LoginRoute,
  PricingRoute: PricingRoute,
  RegisterRoute: RegisterRoute,
  BlogPostIdRoute: BlogPostIdRoute,
  BlogIndexRoute: BlogIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/contact",
        "/login",
        "/pricing",
        "/register",
        "/blog/$postId",
        "/blog/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/contact": {
      "filePath": "contact.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/pricing": {
      "filePath": "pricing.tsx"
    },
    "/register": {
      "filePath": "register.tsx"
    },
    "/blog/$postId": {
      "filePath": "blog/$postId.tsx"
    },
    "/blog/": {
      "filePath": "blog/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
