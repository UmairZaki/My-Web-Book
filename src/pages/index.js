import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/1.jpg'
import thumb02 from '../assets/images/thumbs/2.jpg'
import thumb03 from '../assets/images/thumbs/3.jpg'
import thumb04 from '../assets/images/thumbs/4.jpg'
import thumb05 from '../assets/images/thumbs/5.jpg'
import thumb06 from '../assets/images/thumbs/6.jpg'
import thumb07 from '../assets/images/thumbs/7.jpg'
import thumb08 from '../assets/images/thumbs/8.jpg'

import full01 from '../assets/images/fulls/1.jpg'
import full02 from '../assets/images/fulls/2.jpg'
import full03 from '../assets/images/fulls/3.jpg'
import full04 from '../assets/images/fulls/4.jpg'
import full05 from '../assets/images/fulls/5.jpg'
import full06 from '../assets/images/fulls/6.jpg'
import full07 from '../assets/images/fulls/7.jpg'
import full08 from '../assets/images/fulls/8.jpg'

const DEFAULT_IMAGES = [
    { id: '1', source: full01, thumbnail: thumb01, caption: 'https://umairnew.netlify.com/'},
    { id: '2', source: full02, thumbnail: thumb02, caption: 'https://umair-zaki.netlify.com/'},
    { id: '3', source: full03, thumbnail: thumb03, caption: 'https://umairportfolio.netlify.com/'},
    { id: '4', source: full04, thumbnail: thumb04, caption: 'https://umairzakicv.netlify.com/'},
    { id: '5', source: full05, thumbnail: thumb05, caption: 'https://umairzaki-new.netlify.com/'},
    { id: '6', source: full06, thumbnail: thumb06, caption: 'https://umairzakiresume.netlify.com/'},
    { id: '7', source: full07, thumbnail: thumb07, caption: 'https://umairzaki.netlify.com/'},
    { id: '8', source: full08, thumbnail: thumb08, caption: 'https://umairzakiportfolio.netlify.com/'}
];

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Umair Zaki | Showcase"
        const siteDescription = "My Web Book"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main" className="a">

                    

                    <section id="two ">
                        <h2>My Web Book</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description, url }) => ({
                            source,
                            thumbnail,
                            caption,
                            description,
                            url
                        }))} />

                        
                    </section>

                    <section className="d">
                    <div >
                       <p className="m-0 small">Umair Zaki | 03132873668</p>
                    </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex