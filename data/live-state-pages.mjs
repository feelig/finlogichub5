import { manualStatePages } from "./manual-state-pages.mjs";
import { statePages } from "./state-pages.mjs";

export const liveStatePages = [...statePages, ...manualStatePages];
