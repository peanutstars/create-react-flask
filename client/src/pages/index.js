
//// No Use Splitting
// export {default as Home} from "./Home";
// export {default as About} from "./About";
// export {default as Posts} from "./Posts";
// export {default as Post} from "./Post";

//// Use Splitting as Library
import withSplitting from '../withSplitting';

export const Home = withSplitting(() => import('./Home'));
export const About = withSplitting(() => import('./About'));
export const Posts = withSplitting(() => import('./Posts'));
export const Post = withSplitting(() => import('./Post'));

