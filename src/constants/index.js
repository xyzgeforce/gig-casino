const GAMES = {
    LOAD: "GAMES_LOAD",
    LOAD_SEARCH: "GAMES_LOAD_SEARCH",
    SORT_GAMES: "SORT_GAMES",
    RESET_SEARCH: "GAMES_RESET_SEARCH",
    LAYOUT: "GAMES_LAYOUT",
    LOAD_SUCCESS: "GAMES_LOAD_SUCCESS",
    LOAD_FAIL: "GAMES_LOAD_FAIL",
};

const CATEGORIES = {
    LOAD: "CATEGORIES_LOAD",
    SET_CATEGORY: "SET_CATEGORY",
    LOAD_SUCCESS: "CATEGORIES_LOAD_SUCCESS",
    LOAD_FAIL: "CATEGORIES_LOAD_FAIL",
};

/**
 * @const DEFAULTS
 * @description default values for the application setup
 */
const DEFAULTS = {
    CATEGORY_ID: 24,
    LAYOUT: "grid",
    SORT_TYPE: "alphabetically",
};

export { GAMES, CATEGORIES, DEFAULTS };