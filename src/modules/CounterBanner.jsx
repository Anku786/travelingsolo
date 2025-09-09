import React, { useState, useEffect } from 'react';
import { useStyles } from './style';

const CounterBanner = () => {
  const classes = useStyles();
  const [counts, setCounts] = useState({
    visitors: 0,
    customers: 0,
    awards: 0,
    listings: 0
  });

  const targetCounts = {
    visitors: 1254,
    customers: 12168,
    awards: 2172,
    listings: 732
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      setCounts(prevCounts => {
        const newCounts = {};
        let allComplete = true;

        Object.keys(targetCounts).forEach(key => {
          if (prevCounts[key] < targetCounts[key]) {
            const increment = Math.ceil((targetCounts[key] - prevCounts[key]) / (steps - 1));
            newCounts[key] = Math.min(prevCounts[key] + increment, targetCounts[key]);
            allComplete = false;
          } else {
            newCounts[key] = targetCounts[key];
          }
        });

        if (allComplete) {
          clearInterval(timer);
        }

        return newCounts;
      });
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={classes.counterBanner} aria-label="Statistics and achievements">
      <div className={classes.counterBannerBackground}>
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          alt="Team celebrating success and achievement"
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            opacity:0,
            transition: 'opacity 0.5s ease'
          }}
        />
        <div className={classes.counterBannerOverlay}></div>
      </div>
      
      <div className={classes.counterBannerContent}>
        <div className={classes.counterGrid} role="list" aria-label="Statistics">
          <div className={classes.counterItem} role="listitem" tabIndex="0">
            <div className={classes.counterNumber} aria-label={`${counts.visitors.toLocaleString()} new visitors every week`}>
              {counts.visitors.toLocaleString()}
            </div>
            <div className={classes.counterLabel}>New Visitors Every Week</div>
            <div className={classes.counterLine}></div>
          </div>
          
          <div className={classes.counterItem} role="listitem" tabIndex="0">
            <div className={classes.counterNumber} aria-label={`${counts.customers.toLocaleString()} happy customers every year`}>
              {counts.customers.toLocaleString()}
            </div>
            <div className={classes.counterLabel}>Happy customers every year</div>
            <div className={classes.counterLine}></div>
          </div>
          
          <div className={classes.counterItem} role="listitem" tabIndex="0">
            <div className={classes.counterNumber} aria-label={`${counts.awards.toLocaleString()} amazing awards won`}>
              {counts.awards.toLocaleString()}
            </div>
            <div className={classes.counterLabel}>Won Amazing Awards</div>
            <div className={classes.counterLine}></div>
          </div>
          
          <div className={classes.counterItem} role="listitem" tabIndex="0">
            <div className={classes.counterNumber} aria-label={`${counts.listings.toLocaleString()} new listings every week`}>
              {counts.listings.toLocaleString()}
            </div>
            <div className={classes.counterLabel}>New Listing Every Week</div>
            <div className={classes.counterLine}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterBanner;
