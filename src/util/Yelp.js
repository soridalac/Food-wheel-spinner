const apiKey = 'uRQxCW41cGTSMV-g_GNCKUJ6BOa5Sn1nWUwVZR-_LioQ4j1Onm8jtzZRkhyEk4geJ0dJFSGrzg7UtZScYK5vp5Lq5FqZCNy0e14-MZPGFgIXHk6gu79LWHIlOkTgYnYx'; // Insert API key here.

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://corsanywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Access-Control-Allow-Origin': '*'
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
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
    });
  }
};

export default Yelp;