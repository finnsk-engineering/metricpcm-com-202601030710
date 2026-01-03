import React from 'react';
import { Outlet } from 'react-router-dom';

// Per instructions, importing the component that serves as the Header ('Navigation')
// and a 'Footer' component. 'Navigation' is from the 'Available Components' list.
import Navigation from '../../components/Navigation/Navigation.jsx';
import Footer from '../../components/Footer/Footer.jsx'; // Assuming a standard Footer component exists

const MainLayout = ({ brandingData }) => {

  // Navigation logic: Constructing the navigation array from the 'Available Pages' list.
  const mainNavLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/aboutmetricpcm' },
    {
      label: 'Services',
      path: '/ourservices',
      // Example of dropdown/sub-navigation structure
      children: [
        { label: 'Project Construction Management', path: '/projectconstructionmanagement' },
        { label: 'Shutdown Management', path: '/shutdownmanagement' },
        { label: 'Commissioning Management', path: '/commissioningmanagement' },
        { label: 'Risk Management', path: '/riskmanagement' },
        { label: 'Owner Representation', path: '/ownerrepresentation' },
      ],
    },
    { label: 'Recent Projects', path: '/recentprojects' },
    { label: 'Team', path: '/team' },
    { label: 'Contact', path: '/contactus' },
  ];

  const footerLinks = [
    { label: 'About', path: '/aboutmetricpcm' },
    { label: 'Services', path: '/ourservices' },
    { label: 'Projects', path: '/recentprojects' },
    { label: 'Contact Us', path: '/contactus' },
  ];

  return (
    <>
      <Navigation 
        data={{
          navigation: mainNavLinks,
          // Defensive Coding: Use optional chaining for potentially missing data
          logoUrl: brandingData?.logo?.url
        }}
      />

      <main>
        {/* The Outlet component renders the matched child route's component */}
        <Outlet />
      </main>

      <Footer
        data={{
          links: footerLinks,
          // Defensive Coding for contact info and copyright text
          contactDetails: brandingData?.contact,
          copyrightText: brandingData?.copyright || `© ${new Date().getFullYear()} Swell Kiosks. All rights reserved.`
        }}
      />
    </>
  );
};

export default MainLayout;