const debounce = function (callback, ms = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback.apply(this, args);
        }, ms);
    };
};

const createSearchQuery = function (namesArray) {
    const searchQuery = namesArray
        .map((name) => `username=${name.trim()}`)
        .join('&');
    return searchQuery;
};

export { debounce, createSearchQuery };
