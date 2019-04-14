import React from 'react';
import Gallery from './Gallery';
import NoResults from './NoResults';

let kieselPics;

const KieselSearch = (props) => {

    const results = props.data;

    if (results.length > 0) {
           
            kieselPics = results.map(pic => 
                <Gallery 
                    url={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`}
                    key={pic.id} 
                    title={pic.title}
                    /> );
                    
        } else {
            kieselPics = <NoResults />
        }

        return(
            <div className="photo-container">
             <h2>Search Results</h2>
                    <ul>
                        {kieselPics}
                    </ul>
            </div>
            );
        }

        export default KieselSearch;