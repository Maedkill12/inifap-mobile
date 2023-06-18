import { proxy } from "valtio";

const state = proxy({ books: [] });

export default state;
