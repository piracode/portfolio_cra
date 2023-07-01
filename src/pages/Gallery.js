import Footer from '../components/Footer'
import NavigationLinks from '../components/NavigationLinks'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import Loading from '../components/Loading'

const Gallery = () => {
  const { t, i18n, ready } = useTranslation()
  const images = t('gallery.images', { returnObjects: true }) // Access images

  return (
    <>
      {ready ? (
        <div className='parallax-container'>
          <section className='section-container gallery'>
            <h1>{t('gallery.bigTitle')}</h1>
            <h2>{t('gallery.titleSectionGallery')}</h2>
            <div className='image-gallery__container'>
              {images.map((image, index) => (
                <figure
                  key={`image${index}`}
                  className={`image-gallery__item image-${index}`}
                >
                  <img src={image.src} alt={image.alt} />
                  <figcaption>{image.caption}</figcaption>
                </figure>
              ))}
            </div>

            <Footer />
          </section>
          <NavigationLinks />
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default Gallery
