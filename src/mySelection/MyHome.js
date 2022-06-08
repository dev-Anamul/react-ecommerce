import React from 'react';
import { MetaTags } from 'react-meta-tags';
import LayoutOne from '../layouts/LayoutOne';
import BannerOne from '../wrappers/banner/BannerOne';
import BlogFeatured from '../wrappers/blog-featured/BlogFeatured';
import CategoryTwoSlider from '../wrappers/category/CategoryTwoSlider';
import FeatureIcon from '../wrappers/feature-icon/FeatureIcon';
import HeroSliderNine from '../wrappers/hero-slider/HeroSliderNine';
import NewsletterFive from '../wrappers/newsletter/NewsletterFive';
import TabProduct from '../wrappers/product/TabProduct';
import TestimonialOne from '../wrappers/testimonial/TestimonialOne';

function MyHome() {
  return (
    <>
      <MetaTags>
        <title>Flone | Fashion Home</title>
        <meta
          name="description"
          content="Fashion home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
      >
        {/* hero slider */}
        <HeroSliderNine spaceLeftClass="ml-70" spaceRightClass="mr-70" />
        {/* feature icon */}
        <FeatureIcon spaceTopClass="pt-100" spaceBottomClass="pb-60" />
        {/* banner */}
        <BannerOne spaceTopClass="pt-60" spaceBottomClass="pb-65" />
        {/* tab product */}
        <TabProduct spaceBottomClass="pb-60" category="fashion" />
        {/* category */}
        <CategoryTwoSlider spaceTopClass="pt-100" spaceBottomClass="pb-95" />
        {/* newsletter */}
        <NewsletterFive
          subscribeBtnClass="dark-blue-subscribe"
          newsletterBg="/assets/img/bg/newsletter-bg.jpg"
          spaceTopClass="pt-100"
          spaceBottomClass="pb-95"
          spaceLeftClass="ml-70"
          spaceRightClass="mr-70"
        />
        <TestimonialOne spaceTopClass="pt-100" />
        {/* blog featured */}
        <BlogFeatured spaceTopClass="pt-100" spaceBottomClass="pb-55" />
        {/* feature icon */}
      </LayoutOne>
    </>
  );
}

export default MyHome;
