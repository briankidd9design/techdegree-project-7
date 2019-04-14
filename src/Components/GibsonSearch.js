import React from 'react';
import Gallery from './Gallery';
import NoResults from './NoResults';

let gibsonPics;

const GibsonSearch = (props) => {

    const results = props.data;

    if (results.length > 0) {

            gibsonPics = results.map(pic => 
                <Gallery 
                    url={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`}
                    key={pic.id} 
                    title={pic.title}
                    /> );
                    
        } else {
            gibsonPics = <NoResults />
}

        return(
            <div className="photo-container">
            <h2>Search Results</h2>
                    <ul>
                        {gibsonPics}
                    </ul>
            </div>
            );
        }

export default GibsonSearch;