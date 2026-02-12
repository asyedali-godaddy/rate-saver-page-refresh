import Card from '@ux/card';
import Sidebar from './components/sidebar';
import UtilityNav from './components/utility-nav';
import Logo from './assets/logo.png';
import Illo from './assets/illo.png';
import text from '@ux/text';
import Bullets from '@ux/icon/bulleted-list';
import Slat from './components/slat';
import Box from '@ux/box';
import Calendar from '@ux/icon/calendar';
import Conversations from '@ux/icon/conversations';
import Shipping from '@ux/icon/shipping';
import Button from '@ux/button';
import Tabs from '@ux/tabs';
import Checkbox from '@ux/checkbox';
import ChevronRight from '@ux/icon/chevron-right';
import { useState } from 'react';

import '@ux/tabs/styles';
import '@ux/text/styles';
import '@ux/card/styles';
import '@ux/icon/bulleted-list/styles';
import '@ux/box/styles';
import '@ux/icon/calendar/styles';
import '@ux/icon/conversations/styles';
import '@ux/icon/shipping/styles';
import '@ux/button/styles';
import '@ux/checkbox/styles';
import '@ux/icon/chevron-right/styles';
import './App.css';

function App() {
  const items = [
    { id: 'website', text: 'Website' },
    { id: 'marketing', text: 'Marketing' },
    { id: 'commerce', text: 'Commerce' }
  ];

  const [completed, setCompleted] = useState({});
  const websiteTasks = [
    {
      id: 'contact-info',
      label: 'Add contact info so visitors know how to get in touch with you.'
    },
    { id: 'add-logo', label: 'Add a logo to look professional.' },
    { id: 'add-photos', label: 'Add photos to personalize your site.' }
  ];

  const toggleTask = (id) =>
    setCompleted((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="App">
      <UtilityNav />
      <Sidebar />
      <div className="container">
        <header>
          <img src={Logo} alt="The Eden Edit" />
          <text.h1 as='heading'>The Eden Edit</text.h1>
        </header>
        <main>
          <div className="main-content">
            <Box inlinePadding='lg' blockPadding='lg' elevation='card' gap='lg'>
              <div className="checklist-header">
                <text.h2 as='title'>Here’s how to get set up.</text.h2>
                <p className="checklist-progress-meta">0 / 10 items</p>
              </div>
              <div className="checklist-progress-rail">
                <div className="checklist-progress-bar" />
              </div>
              <Box gap='sm'>
                <Tabs design='manila' id='default-tabs' items={ items }/>
                <div className="checklist-list">
                  {websiteTasks.map((t) => (
                    <button key={t.id} className="checklist-item" onClick={() => toggleTask(t.id)}>
                      <div className="checklist-item-left">
                        <Checkbox
                          id={t.id}
                          name={t.id}
                          checked={!!completed[t.id]}
                          onChange={() => toggleTask(t.id)}
                          aria-label={t.label}
                        />
                        <text.span className="checklist-item-text" size={ 1 }>{t.label}</text.span>
                      </div>
                      <ChevronRight width={20} height={20} />
                    </button>
                  ))}
                </div>
              </Box>
            </Box>
            <Box gap='md'>
              <text.h2 as='title'>Recommendations for You</text.h2>
              <div className="recommendations-grid">
                <Card>
                  <Box gap='md' inlineAlignChildren='start'>
                    <div className="recommendations-card-content">
                      <img src={Illo} alt="Recommendations for You" />
                    </div>
                    <text.h3 as='title' size={ -2 }>Create social posts for new products</text.h3>
                    <Button design='secondary' size='sm'>Create Post</Button>
                  </Box>
                </Card>
                <div className="recommendations-subgrid">
                  <Card actions={<Button design='secondary' size='sm'>Create Ad</Button>}>
                    <Box gap='md' inlineAlignChildren='start'>
                      <text.h3 as='title' size={ -2 }>Grow your audience by launching an ad</text.h3>
                    </Box>
                  </Card>
                  <Card actions={<Button design='secondary' size='sm'>Create Code</Button>}>
                    <Box gap='md' inlineAlignChildren='start'>
                      <text.h3 as='title' size={ -2 }>Offer a discount code for upcoming products</text.h3>
                    </Box>
                  </Card>
                </div>
              </div>
            </Box>
          </div>
          <div className="main-sidebar">
            <Card title="Your Action Items">
              <Box gap='lg'>
                <Slat icon={<Shipping height={24} width={24} />} title="2 products low in stock" />
                <Slat icon={<Bullets height={24} width={24} />} title="5 unfulfilled orders" />
                <Slat icon={<Calendar height={24} width={24} />} title="2 upcoming appointments" />
                <Slat icon={<Conversations height={24} width={24} />} title="8 unread conversations" />
              </Box>
            </Card>
            <Card title="Payouts">
              <h3 className="payouts-amount"><div className="payouts-dollar">$</div> 245.11</h3>
              <hr className="payouts-divider" />
              <div className="payouts-info">
                <div className="payouts-info-header">
                  <p as='title'>Last Transfer</p>
                  <Button design='inline' size='sm'>See All</Button>
                </div>
                <div className="payouts-info-content">
                  <p>October 27, 2024</p>
                  <p>$1500.75</p>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
