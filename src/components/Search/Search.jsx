import React from 'react';
import classes from './Search.module.css';


const SearchBox = () => {
  return (
    <div className={classes.content}>
        <div>
        <article>
          <h3>Possible substitutions</h3>
          <p>
            Although all the ingredients in the recipe should be easily 
            accessible either in your local grocery store or online, I still wanted to include a list of substitutions you can make.

            Active dried yeast: You can use instant yeast, in which case you do not
            need to activate it, but just add it straight to the dry ingredients 
            along with the sugar. Add the water that would be used in activating 
            the active dried yeast to the dry ingredients along with the psyllium 
            gel and apple cider vinegar.
            Apple cider vinegar: You can use other types of vinegar, although 
            I recommend sticking to apple cider vinegar if at all possible.
            Psyllium husk: YOU CAN NOT SUBSTITUTE IT WITH A DIFFERENT INGREDIENT. 
            But, if you use psyllium husk powder as opposed to the rough husk form, 
            use only 75-85% of the weight listed in the recipe.
            Buckwheat flour: You can use white teff flour, sorghum flour or oat flour instead.
            Tapioca starch: You can use corn starch, potato starch or arrowroot starch instead.
            Millet flour: You can use brown rice flour instead.
            </p>
            <img src={require('../Content/image/contentph5.png')}/>
           
        </article>
        <article>
            <h3>The secrets of a perfectly baked Greek bread A simple homely version</h3>
            <p>
                This is an easy simple homely version of the traditional 
                Greek village bread recipe that calls for fresh yeast and
                a long time proving (overnight). A combination that will 
                give a unique yeast-y taste and texture that resembles sourdough bread.

                When preparing this Greek bread recipe it is best to use a 
                “strong” flour known as bread flour which is high in protein. 
                This will help the bread hold it’s shape better and give more texture.

                An extra tip is to spread out some semolina on the working 
                surface when kneading the finished dough. Semolina gives 
                homemade bread that extra crisp, that I personally love.

                Note: If you don’t have any fresh yeast lying around, you 
                could also use instant yeast (1/3 of the amount of fresh yeast).
            </p>
            <img src={require('../Content/image/content728x550.jpeg')}/>
        </article>
        <article>
            <h3>The secrets of a perfectly baked Greek bread A simple homely version</h3>
            <p>
                This is an easy simple homely version of the traditional 
                Greek village bread recipe that calls for fresh yeast and
                a long time proving (overnight). A combination that will 
                give a unique yeast-y taste and texture that resembles sourdough bread.

                When preparing this Greek bread recipe it is best to use a 
                “strong” flour known as bread flour which is high in protein. 
                This will help the bread hold it’s shape better and give more texture.

                An extra tip is to spread out some semolina on the working 
                surface when kneading the finished dough. Semolina gives 
                homemade bread that extra crisp, that I personally love.

                Note: If you don’t have any fresh yeast lying around, you 
                could also use instant yeast (1/3 of the amount of fresh yeast).
            </p>
            <img src={require('../Content/image/content728x550.jpeg')}/>
        </article>
        
        </div>
        </div>   
        );
  }

  export default SearchBox;