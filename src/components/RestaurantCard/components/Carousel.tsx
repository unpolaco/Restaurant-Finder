import React, { useState, useEffect } from 'react'
import { Icon } from 'semantic-ui-react';
import { Photo } from '../../../api/restaurants/selectedRestaurant.types';
import './Carousel.css'

interface CarouselProps {
    photos: Photo[];
    name: string
}

export const Carousel: React.FC<CarouselProps> = ({ photos, name }) => {
    const [currentPhotoNumber, setCurrentPhotoNumber] = useState(0)
    const [isRightArrowDisabled, setIsRightArrowDisabled] = useState(false)
    const [isLeftArrowDisabled, setIsLeftArrowDisabled] = useState(false)

    useEffect(() => {
        if (currentPhotoNumber === 0) {
            setIsLeftArrowDisabled(true)
        } else if (currentPhotoNumber === photos.length - 1) {
            setIsRightArrowDisabled(true)
        } else {
            setIsLeftArrowDisabled(false)
            setIsRightArrowDisabled(false)
        }
    }, [currentPhotoNumber])
    setTimeout(() => {
        if (currentPhotoNumber === photos.length - 1) {
            setCurrentPhotoNumber(0)
        } else {
            setCurrentPhotoNumber(currentPhotoNumber + 1)
        }
    }, 2000)

    const changePhoto = (option: 'next' | 'previous') => {
        option === 'next' ?
            !isRightArrowDisabled && setCurrentPhotoNumber(currentPhotoNumber + 1) :
            !isLeftArrowDisabled && setCurrentPhotoNumber(currentPhotoNumber - 1)
    }

    return (
        <div>
            <div className='carousel'>
                <Icon name='angle left' size='big' onClick={() => changePhoto('previous')} color={isLeftArrowDisabled ? 'grey' : 'black'} />
                <img src={photos[currentPhotoNumber].photoSrcSmall} alt={name} className='restaurant-photo' />
                <Icon name='angle right' size='big' onClick={() => changePhoto('next')} color={isRightArrowDisabled ? 'grey' : 'black'} />
            </div>
            <div>
                {photos.map((photo, index) => {
                    return <Icon name='circle' size='tiny' color={index === currentPhotoNumber ? 'yellow' : 'grey'} />
                })
                }
            </div>
        </div>
    )
}