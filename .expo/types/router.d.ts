/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/questions` | `/questions`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/results` | `/results`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/rotas` | `/rotas`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/questions` | `/questions`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/results` | `/results`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/rotas` | `/rotas`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/questions${`?${string}` | `#${string}` | ''}` | `/questions${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/results${`?${string}` | `#${string}` | ''}` | `/results${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/rotas${`?${string}` | `#${string}` | ''}` | `/rotas${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/questions` | `/questions`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/results` | `/results`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/rotas` | `/rotas`; params?: Router.UnknownInputParams; };
    }
  }
}
