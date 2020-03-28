const apiKey = 'i36vMpjPzvt-p5ozs24duxVAZh7nCFdjKzZNz4e9Yfr5hZbToA2AgubdM5aEIffvcIab_RckJYWjG959-9Eo2go74rgnXj35TZqUv86Na0Ap0PInpq8JJCir7nZkXnYx';

const Yelp = {
    async search(term, location, sortBy) {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        });
        const jsonResponse = await response.json();
        if (jsonResponse.businesses) {
            return jsonResponse.businesses.map(business => ({
                id: business.id,
                imageSrc: business.image_url,
                url: business.url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                category: business.categories[0].title,
                rating: business.rating,
                reviewCount: business.review_count
            }));
        }
    }
};

export default Yelp;