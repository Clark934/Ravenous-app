const apiKey = 'i36vMpjPzvt-p5ozs24duxVAZh7nCFdjKzZNz4e9Yfr5hZbToA2AgubdM5aEIffvcIab_RckJYWjG959-9Eo2go74rgnXj35TZqUv86Na0Ap0PInpq8JJCir7nZkXnYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        });
    }
};