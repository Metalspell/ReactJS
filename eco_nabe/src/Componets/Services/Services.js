import classes from './Services.module.css';

const Services = () => {
  let serviceList = ['Chef Services', 'Nanny Services', 'Housecleaning Services', 'Laundry Services',
    'Massage / Spa Services', 'Senior Care Services', 'Delivery Services', 'Car Sharing'];

  let description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus vitae, dignissim auctor risus pellentesque felis dui.';
  return (
    <section className={classes.mainWrapper}>
      <h1 className={classes.title}>Services</h1>
      {serviceList.map((item, i) => {
        return (
          <div key={i} className={classes.itemWrapper}>
            <div>
              <h3>{item}</h3>
            </div>
            <div className={classes.description}>
              <div className={classes.descriptionText}>
                <p>{description}</p>
              </div>
              <div className={classes.circle}>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  );
}

export default Services;