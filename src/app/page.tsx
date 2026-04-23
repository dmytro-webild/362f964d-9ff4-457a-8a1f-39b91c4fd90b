"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Clock, Coffee, MapPin, Utensils } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="largeSmall"
        background="fluid"
        cardStyle="layered-gradient"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Menu",          id: "menu"},
        {
          name: "Reviews",          id: "reviews"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Tarek's Cafe"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-static"}}
      title="Fresh, Authentic Halal Flavors at Tarek's"
      description="Experience the difference of truly authentic halal dining. We combine time-honored recipes with premium, fresh ingredients to create a unique culinary experience that goes far beyond your typical cafe."
      buttons={[
        {
          text: "View Full Menu",          href: "#menu"},
        {
          text: "Order Delivery",          href: "https://places.singleplatform.com"},
      ]}
      carouselItems={[
        {
          id: "h1",          imageSrc: "http://img.b2bpic.net/free-photo/top-close-up-view-cup-tea-with-lemon-blue-saucer-appetizing-cupcakes-with-cream-cup-herbal-tea-with-lemon-cinnamon-dark-table_140725-111504.jpg",          imageAlt: "Gourmet Philly Cheesesteak"},
        {
          id: "h2",          imageSrc: "http://img.b2bpic.net/free-photo/side-view-hands-holding-doner-filled-with-chicken-vegetables-pickles-sauce-wrapped-lavash_140725-12898.jpg",          imageAlt: "Chicken Chimichanga Special"},
        {
          id: "h3",          imageSrc: "http://img.b2bpic.net/free-photo/plate-fish-chips-potatoes-wooden-surface_839833-19792.jpg",          imageAlt: "Authentic Cuban Sandwich"},
        {
          id: "h4",          imageSrc: "http://img.b2bpic.net/free-photo/classic-luxury-style-restaurant-with-tables-chairs_140725-9389.jpg",          imageAlt: "Luxurious Cafe Interior"},
        {
          id: "h5",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-recipe-book-still-life-concept_23-2149056020.jpg",          imageAlt: "Fresh Quality Ingredients"},
        {
          id: "h6",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-asian-smiling-barista-girl-serving-coffee-standing-near-cafe-counter-apron-preparing_1258-199277.jpg",          imageAlt: "Welcoming Friendly Atmosphere"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Our Story"
      title="A Passion for Authentic Halal Cuisine"
      description="Tarek's Cafe was born out of a desire to bring genuine, mouth-watering halal flavors to the Tampa community. We pride ourselves on the quality of our ingredients and the craft we pour into every dish."
      subdescription="Whether you're stopping by for a quick lunch or enjoying a leisurely dinner, our friendly atmosphere ensures you feel right at home with us."
      icon={Coffee}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-chef-preparing-traditional-japanese-food_23-2148759578.jpg"
      imageAlt="Chef preparing delicious halal cuisine"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          icon: Utensils,
          title: "Premium Halal Ingredients",          description: "Every ingredient is carefully selected to ensure authentic, high-quality halal standards."},
        {
          icon: Clock,
          title: "Quick & Friendly Service",          description: "We value your time, delivering freshly prepared meals with a smile, every single time."},
        {
          icon: MapPin,
          title: "Convenient Campus Location",          description: "Located perfectly at the University of South Florida for students and locals alike."},
      ]}
      title="Why Guests Choose Tarek's Cafe"
      description="We blend quality, speed, and flavor to create an unforgettable dining experience in the heart of Tampa."
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="Tarek's is hands-down the best cheesesteak I’ve ever had. Absolutely delicious and halal! The chicken philly and Cuban sandwich are also fantastic. Always a friendly, clean atmosphere."
      rating={5}
      author="Local Guide"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/this-is-my-new-profile-social-network_329181-2899.jpg",          alt: "Satisfied Diner 1"},
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-african-american-woman-cafe_273609-5349.jpg",          alt: "Satisfied Diner 2"},
        {
          src: "http://img.b2bpic.net/free-photo/he-is-satisfied-from-his-life_329181-2789.jpg",          alt: "Satisfied Diner 3"},
        {
          src: "http://img.b2bpic.net/free-photo/people-cheering-with-their-cups-tea_23-2148693090.jpg",          alt: "Satisfied Diner 4"},
        {
          src: "http://img.b2bpic.net/free-photo/close-up-image-happy-smiling-woman-enjoy-her-morning-french-breakfast-open-cafe-terrace-tasty-organic-food-holding-french-croissant-her-hand_291049-526.jpg",          alt: "Satisfied Diner 5"},
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          name: "Classic Philly Cheesesteak",          price: "$12",          imageSrc: "http://img.b2bpic.net/free-photo/grilled-eggplant-slices-with-pesto-yogurt-sauce_114579-2129.jpg"},
        {
          id: "p2",          name: "Chicken Philly",          price: "$11",          imageSrc: "http://img.b2bpic.net/free-photo/side-view-caesar-pizza-with-grilled-chicken-tomato-melted-cheese-parmesan-cheese-lettuce-board_141793-4783.jpg"},
        {
          id: "p3",          name: "Chicken Chimichanga",          price: "$13",          imageSrc: "http://img.b2bpic.net/free-photo/tasty-mexican-food_23-2148140197.jpg"},
        {
          id: "p4",          name: "Authentic Cuban Sandwich",          price: "$10",          imageSrc: "http://img.b2bpic.net/free-photo/sandwich_1339-1111.jpg"},
        {
          id: "p5",          name: "Signature Garden Salad",          price: "$9",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-caesar-salad-with-chicken_141793-2818.jpg"},
        {
          id: "p6",          name: "Daily Dessert Platter",          price: "$8",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-delicious-cheesecake-with-strawberry-chocolate-plate-bowls_140725-105619.jpg"},
      ]}
      title="Our Signature Specialties"
      description="Explore our curated menu of halal favorites, crafted daily with passion."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",          title: "Is all food halal?",          content: "Yes, Tarek's Cafe is 100% committed to halal standards."},
        {
          id: "q2",          title: "Do you offer delivery?",          content: "Yes, we provide delivery services so you can enjoy our food at home or at the office."},
        {
          id: "q3",          title: "What are your operating hours?",          content: "We are open until 3 PM daily. Visit us for lunch!"},
      ]}
      sideTitle="Common Questions"
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Visit Us"
      title="Hungry? Come Say Hello!"
      description="We are located at 12901 Bruce B Downs Blvd, Tampa, FL 33612. Call us at (813) 974-5920 for any questions or large orders."
      buttons={[
        {
          text: "Get Directions",          href: "https://maps.google.com"},
        {
          text: "Call Now",          href: "tel:8139745920"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Quick Links",          items: [
            {
              label: "Menu",              href: "#menu"},
            {
              label: "About",              href: "#about"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
        {
          title: "Support",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Delivery Info",              href: "https://places.singleplatform.com"},
          ],
        },
      ]}
      logoText="Tarek's Cafe"
      copyrightText="© 2025 Tarek's Cafe | All Rights Reserved"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}