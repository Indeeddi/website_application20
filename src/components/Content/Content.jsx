import React from 'react';
import SocialNetworks from '../Navigation/SocialNetworks/SocialNetworks';
import classes from './Content.module.css';


const Content = () => {
  return (
    <div className={classes.content}>
        <div>
        <article>
          <h3> HI FRIENDS!</h3>
           <p>
              Your eyes do not deceive you – this is indeed a brand new gluten
              free bread recipe, and one that’s been in the works for a while now.

              In fact, this is probably one of my favourite gluten free bread recipes 
              I’ve made to date. Its incredibly soft and chewy, with a crisp crust and 
              an amazing flavour thanks to the abundance of mixed seeds. On top of that,
              it’s also incredibly easy (and relatively quick) to make, requiring only
              a single rise rather than the more standard two rounds of rising.
           </p>
            <img src={require('./image/contentph2.png')}/>
            <h5>This is my contact, write me!</h5>
            <SocialNetworks />
        </article>
        </div>
        <div>
        <article className={classes.content2}>
          <h3>Methods of bread making</h3>
          <p>
          Although raised bread originally relied upon spontaneous 
          fermentation, bakers learned to produce fermentation with 
          yeast. Specific strains have been developed with useful 
          bread-making qualities, including stability, rapid 
          fermentation capacity, and the ability to withstand high 
          temperatures, all permitting production of a uniform 
          product. Only wheat and rye flours produce the necessary 
          gluten to make raised loaves, and wheat gluten is more 
          satisfactory for this purpose. Other ingredients include 
          liquids, such as milk or water, shortenings of animal or 
          vegetable origin, salt, and sugar.
            </p>
            <img src={require('./image/contentph1.png')}/>
        </article>
        </div>
      </div>
  );
}

export default Content;
