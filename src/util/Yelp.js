const apiKey = 't-Wk0ePbtlzESfvNz7mMwZsgi263U_P_H4TlkG7ist1pnxt_6SGsFKxs8hEVqIRU4rOthwbMhySCDdI2HfqqbePhs3Pls6vHC8XDiccmAo33qhRO0pDgBEWEyPj7YnYx'; // Insert API key here.

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