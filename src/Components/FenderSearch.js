import React from 'react';
import Gallery from './Gallery';
import NoResults from './NoResults';

let fenderPics;

const FenderSearch = (props) => {

    const results = props.data;

    if (results.length > 0) {
  
            fenderPics = results.map(pic => 
                <Gallery 
                    url={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`}
                    key={pic.id} 
                    title={pic.title}
                    /> );
                    
        } else {
            fenderPics = <NoResults />
        }

        return(
            <div className="photo-container">
             <h2>Search Results</h2>
                    <ul>
                        {fenderPics}
                    </ul>
            </div>
            );
        }

        export default FenderSearch;