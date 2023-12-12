import * as React from 'react';
import * as Markup from '../../../js/react';
import {Carousel2} from '../../../../app-typescript';

export class CarouselDocs extends React.Component {
    render() {
        return (
            <section className='docs-page__container'>

                <h2 className='docs-page__h2'>Carousel</h2>

                <p className='docs-page__paragraph'></p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row docs-page__content-row--no-margin'>
                            <div className='form__row'>
                                <Carousel2
                                    images={[
                                        {src: '/examples/img/carousel-thumb--01.jpg'},
                                        {src: '/examples/img/carousel-thumb--02.jpg'},
                                        {src: '/examples/img/carousel-thumb--03.jpg'},
                                        {src: '/examples/img/carousel-thumb--04.jpg'},
                                    ]}
                                />
                            </div>
                        </div>

                    </Markup.ReactMarkupPreview>

                    <Markup.ReactMarkupCode>{`
                        <Carousel2
                            images={[
                                {src: '/examples/img/carousel-thumb--01.jpg'},
                                {src: '/examples/img/carousel-thumb--02.jpg'},
                                {src: '/examples/img/carousel-thumb--03.jpg'},
                                {src: '/examples/img/carousel-thumb--04.jpg'},
                            ]}
                        />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        )
    }
}
