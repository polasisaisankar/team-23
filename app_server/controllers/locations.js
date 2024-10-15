const homelist = (req, res) => {
  res.render('locations-list', {
      title: 'Blood Bank - Blood banks collect blood from donors',
      pageHeader: {
          title: 'Blood Bank',
          strapline: 'Blood banks collect blood from donors'
      },
      sidebar: 'Blood banks separate blood into its components, such as red blood cells, platelets, and plasma, so that each component can be used most effectively',
      locations: [
          {
              name: 'Sanjeevini Blood Bank',
              address: '1-1-79/A, Bhagyanagar Complex, RTC X Rd, near Sri Mayuri Theatre',
              rating: 4,
              facilities: ['A+', 'A-', 'B+', 'B-', 'O-', 'O+'],
              distance: '100m',
              link: "/location"
          },
          {
              name: 'SANGAM BLOOD CENTRE',
              address: 'H.No. 8-15-106/1, 3rd floor, Sri Ram Nagar, Lane Beside BVK Multiplex, L.B Nagar',
              rating: 3,
              facilities: ['A+', 'A-', 'B+', 'B-', 'O-', 'O+'],
              distance: '200m',
              link: "/sangam"
          },
          {
              name: 'Indian Red Cross Blood Bank',
              address: '1-9-311/A',
              rating: 2,
              facilities: ['A+', 'A-', 'B+', 'B-', 'O-', 'O+'],
              distance: '250m',
              link: "/indian"
          }
      ]
  });
};

/* GET 'Location info' page */
const locationInfo = (req, res) => {
  res.render('location-info', { title: 'Location Info' });
};

const sangam = (req, res) => {
  res.render('sangam', { title: 'SANGAM BLOOD BANK' });
};

const indian = (req, res) => {
  res.render('indian', { title: 'INDIAN RED CROSS BLOOD BANK' });
};

/* GET 'Add review' page */
const addReview = (req, res) => {
  res.render('location-review-form', { title: 'Add Review' });
};

module.exports = {
  homelist,
  locationInfo,
  sangam,
  indian,
  addReview
};
