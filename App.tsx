import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Campaigns from './components/Campaigns';
import AppPromo from './components/AppPromo';
import GameTutorials from './components/GameTutorials';
import FunZone from './components/FunZone';
import Investment from './components/Investment';
import Footer from './components/Footer';
import Stories from './components/Stories';

// Import new page components
import EventsPage from './components/pages/Events';
import CafesPage from './components/pages/Cafes';
import TutorialsPage from './components/pages/Tutorials';
import AboutPage from './components/pages/About';
import ProfilePage from './components/pages/Profile';
import NotificationsPage from './components/pages/Notifications';
import AIAssistantPage from './components/pages/AIAssistantPage';
import SearchPage from './components/pages/Search';
import LeaderboardPage from './components/pages/LeaderboardPage';
import BlogPage from './components/pages/BlogPage';
import PartnershipPage from './components/pages/PartnershipPage';


// Import new detail pages
import TutorialDetail from './components/pages/details/TutorialDetail';
import EventDetail from './components/pages/details/EventDetail';
import CafeDetail from './components/pages/details/CafeDetail';


interface Route {
  page: string;
  params?: { [key: string]: any };
}

const App: React.FC = () => {
  const [route, setRoute] = useState<Route>({ page: 'home' });

  const navigate = (page: string, params?: { [key: string]: any }) => {
    setRoute({ page, params });
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (route.page) {
      case 'events':
        return <EventsPage onNavigate={navigate} />;
      case 'eventDetail':
        return <EventDetail eventId={route.params?.id} onNavigate={navigate} />;
      case 'cafes':
        return <CafesPage onNavigate={navigate} />;
      case 'cafeDetail':
        return <CafeDetail cafeId={route.params?.id} onNavigate={navigate} />;
      case 'tutorials':
        if (route.params?.id) {
            return <TutorialDetail tutorialId={route.params.id} onNavigate={navigate} />;
        }
        return <TutorialsPage onNavigate={navigate} />;
      case 'about':
        return <AboutPage />;
      case 'profile':
        return <ProfilePage onNavigate={navigate} />;
      case 'notifications':
        return <NotificationsPage onNavigate={navigate} />;
      case 'aiAssistant':
        return <AIAssistantPage onNavigate={navigate} />;
      case 'search':
        return <SearchPage query={route.params?.query} onNavigate={navigate} />;
      case 'leaderboard':
        return <LeaderboardPage onNavigate={navigate} />;
       case 'blog':
        return <BlogPage onNavigate={navigate} />;
       case 'partnership':
        return <PartnershipPage onNavigate={navigate} />;
      case 'home':
      default:
        return (
          <>
            <Hero onNavigate={navigate} />
            <Stories />
            <Campaigns onNavigate={navigate} />
            <AppPromo />
            <GameTutorials onNavigate={navigate} />
            <FunZone />
            <Investment />
          </>
        );
    }
  };

  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      <Header onNavigate={navigate} />
      <main className="pt-20"> {/* Add padding to main content to avoid overlap with fixed header */}
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
};

export default App;