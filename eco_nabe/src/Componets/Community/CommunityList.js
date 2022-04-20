import classes from './Community.module.css';

const CommunityList = () => {
  const CommunityListElements = ['Housing', 'Food Production', 'Office Space: Coworking / Private',
    'Important Retail Shops', 'Restaurants, Bars, Coffee Shops, Bakery', 'Grocery Store',
    'Important Services', 'Community Event space', 'Jacuzzi’s, Saunas, and Steam Room', 'Outdoor Nature Space', 'Gym'];
  return (
    <section className={classes.CommunityListElements}>
      {CommunityListElements.map((item, i) => {
        return (
          <div key={i}>
            <p><span>0{i+1}/</span>{item}</p>
          </div>
        )
      })}
    </section>
  );
}

export default CommunityList;