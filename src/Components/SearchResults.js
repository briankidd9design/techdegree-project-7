import React from 'react';
import Gallery from './Gallery';
import NoResults from './NoResults';

const SearchResults = (props) => {

    const results = props.data;

    let searchPics;

        if (results.length > 0) {
            
           searchPics = results.map(pic => 
                <Gallery 
                    url={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`}
                    key={pic.id} 
                    title={pic.title}
                    /> );
                    
        } else {
            searchPics = <NoResults />
        }
       
    return(
        <div className="photo-container">
         <h2>Search Results</h2>
                <ul>
                    {searchPics}
                </ul>
        </div>
        );
    }

export default SearchResults;