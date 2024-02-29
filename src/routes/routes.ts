import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}


const LazyLayout = lazy(() => import(/* webpackChunkName: "Chunk1" */ '../01-lazyload/layout/LazyLayout'));
// const Lazy2 = lazy(() => import(/* webpackChunkName: "Chunk2" */ '../01-lazyload/pages/LazyPage2'));
// const Lazy3 = lazy(() => import(/* webpackChunkName: "Chunk3" */ '../01-lazyload/pages/LazyPage3'));



export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload',
        component: LazyLayout,
        name: 'LazyLayout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        component: NoLazy,
        name: 'No Lazy'
    },
]