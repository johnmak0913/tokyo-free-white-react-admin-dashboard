import { ReactNode } from 'react';

import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
import BrightnessLowTwoToneIcon from '@mui/icons-material/BrightnessLowTwoTone';
import MmsTwoToneIcon from '@mui/icons-material/MmsTwoTone';
import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import BallotTwoToneIcon from '@mui/icons-material/BallotTwoTone';
import BeachAccessTwoToneIcon from '@mui/icons-material/BeachAccessTwoTone';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';
import HowToVoteTwoToneIcon from '@mui/icons-material/HowToVoteTwoTone';
import LocalPharmacyTwoToneIcon from '@mui/icons-material/LocalPharmacyTwoTone';
import RedeemTwoToneIcon from '@mui/icons-material/RedeemTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import TrafficTwoToneIcon from '@mui/icons-material/TrafficTwoTone';
import VerifiedUserTwoToneIcon from '@mui/icons-material/VerifiedUserTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import ConstructionTwoToneIcon from '@mui/icons-material/ConstructionTwoTone';
import AppRegistrationTwoToneIcon from '@mui/icons-material/AppRegistrationTwoTone';
import EventNoteTwoToneIcon from '@mui/icons-material/EventNoteTwoTone';
import ContactSupportTwoToneIcon from '@mui/icons-material/ContactSupportTwoTone';
import EventAvailableTwoToneIcon from '@mui/icons-material/EventAvailableTwoTone';

export interface MenuItem {
  link?: string;
  icon?: ReactNode;
  badge?: string;
  items?: MenuItem[];
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItems[] = [
  {
    heading: '',
    items: [
      {
        name: 'Home',
        link: '/overview',
        icon: HomeTwoToneIcon
      },
      {
        name: 'My Bookings',
        link: '/overview',
        icon: EventAvailableTwoToneIcon
      },
    ]
  },
  {
    heading: 'Equipment',
    items: [
      {
        name: 'Registration / Reservation', // or Usage
        icon: AppRegistrationTwoToneIcon,
        link: '/equipment/registration-or-reservation'
      },
      {
        name: 'Training',
        link: '/equipment/training',
        icon: ConstructionTwoToneIcon
      },
      {
        name: 'Schedules',
        link: '/equipment/schedules',
        icon: EventNoteTwoToneIcon
      },
    ]
  },
  {
    heading: 'Staff',
    items: [
      {
        name: 'Profiles',
        link: '/staff/profiles',
        icon: AccountCircleTwoToneIcon
      },
      {
        name: 'Consultation',
        icon: ContactSupportTwoToneIcon,
        link: '/staff/consultation'
      },
      {
        name: 'Schedules',
        link: '/staff/schedules',
        icon: EventNoteTwoToneIcon
      },
    ]
  },
  {
    heading: 'Dashboards',
    items: [
      {
        name: 'Crypto',
        link: '/dashboards/crypto',
        icon: BrightnessLowTwoToneIcon
      },
      {
        name: 'Messenger',
        icon: MmsTwoToneIcon,
        link: '/dashboards/messenger'
      },
    ]
  },
  {
    heading: 'Management',
    items: [
      {
        name: 'Transactions',
        icon: TableChartTwoToneIcon,
        link: '/management/transactions'
      },
      {
        name: 'User Profile',
        icon: AccountCircleTwoToneIcon,
        link: '/management/profile',
        items: [
          {
            name: 'Profile Details',
            link: '/management/profile/details'
          },
          {
            name: 'User Settings',
            link: '/management/profile/settings'
          }
        ]
      }
    ]
  },
  {
    heading: 'Components',
    items: [
      {
        name: 'Buttons',
        icon: BallotTwoToneIcon,
        link: '/components/buttons'
      },
      {
        name: 'Modals',
        icon: BeachAccessTwoToneIcon,
        link: '/components/modals'
      },
      {
        name: 'Accordions',
        icon: EmojiEventsTwoToneIcon,
        link: '/components/accordions'
      },
      {
        name: 'Tabs',
        icon: FilterVintageTwoToneIcon,
        link: '/components/tabs'
      },
      {
        name: 'Badges',
        icon: HowToVoteTwoToneIcon,
        link: '/components/badges'
      },
      {
        name: 'Tooltips',
        icon: LocalPharmacyTwoToneIcon,
        link: '/components/tooltips'
      },
      {
        name: 'Avatars',
        icon: RedeemTwoToneIcon,
        link: '/components/avatars'
      },
      {
        name: 'Cards',
        icon: SettingsTwoToneIcon,
        link: '/components/cards'
      },
      {
        name: 'Forms',
        icon: TrafficTwoToneIcon,
        link: '/components/forms'
      },
    ]
  },
  {
    heading: 'Extra Pages',
    items: [
      {
        name: 'Status',
        icon: VerifiedUserTwoToneIcon,
        link: '/status',
        items: [
          {
            name: 'Error 404',
            link: '/status/404'
          },
          {
            name: 'Error 500',
            link: '/status/500'
          },
          {
            name: 'Maintenance',
            link: '/status/maintenance'
          },
          {
            name: 'Coming Soon',
            link: '/status/coming-soon'
          }
        ]
      }
    ]
  }
];

export default menuItems;
