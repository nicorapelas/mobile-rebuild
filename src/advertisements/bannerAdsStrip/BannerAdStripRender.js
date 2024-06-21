import React, { useContext, useEffect } from 'react'
import { View } from 'react-native'

import { Context as AdvertisementContext } from '../../context/AdvertisementContext'
import BannerAdStrip1 from './BannerAdStrip1'

const BannerAdStripRender = () => {
  const {
    state: { bannerAdStripSelected },
  } = useContext(AdvertisementContext)

  useEffect(() => {
    console.log(`bannerAdStripSelected:`, bannerAdStripSelected)
  }, [bannerAdStripSelected])

  const renderContent = () => {
    switch (bannerAdStripSelected) {
      case 'bannerAdStrip1':
        return <BannerAdStrip1 />
      default:
        break
    }
  }

  return renderContent()
}

export default BannerAdStripRender
