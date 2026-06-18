import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Media distribution, releases, and campaign visibility',
      description: 'Plan, publish, and discover media distribution updates, press releases, campaign briefs, and newsroom-ready stories.',
      openGraphTitle: 'Media distribution and newsroom visibility',
      openGraphDescription: 'Discover media campaigns, press-ready releases, distribution notes, and publication updates in one focused archive.',
      keywords: ['media distribution', 'press release', 'newsroom updates', 'campaign visibility'],
    },
    hero: {
      badge: 'Efficiency meets visibility',
      title: ['Media distribution', 'built for releases that need reach.'],
      description: 'Coordinate announcements, campaign updates, editorial placements, and public information with a focused media distribution workflow.',
      primaryCta: { label: 'Browse media updates', href: '/media-distribution' },
      secondaryCta: { label: 'Plan distribution', href: '/contact' },
      searchPlaceholder: 'Search releases, campaigns, topics, and outlets',
      focusLabel: 'Distribution focus',
      featureCardBadge: 'press-ready rotation',
      featureCardTitle: 'Every update is shaped for clarity, visibility, and reuse.',
      featureCardDescription: 'Recent media distribution items drive the homepage, archive, and related story surfaces.',
    },
    intro: {
      badge: 'About the desk',
      title: 'Built for organized media distribution from brief to public update.',
      paragraphs: [
        'This site brings together distribution updates, media notes, visual assets, and campaign context so visitors can understand what is being announced and why it matters.',
        'Instead of scattering releases across disconnected pages, the platform keeps every update connected to categories, search, and related public information.',
        'Whether someone starts with a campaign brief, media release, source note, or visual post, they can keep discovering related distribution activity without friction.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Media-first homepage with stronger emphasis on releases and campaign imagery.',
        'Connected sections for updates, visuals, source material, and supporting resources.',
        'Cleaner browsing rhythm designed for editors, partners, and stakeholders.',
        'Lightweight interactions that keep distribution discovery fast and readable.',
      ],
      primaryLink: { label: 'Browse media distribution', href: '/media-distribution' },
      secondaryLink: { label: 'Contact the desk', href: '/contact' },
    },
    cta: {
      badge: 'Start distributing',
      title: 'Move from campaign brief to public visibility through one connected experience.',
      description: 'Explore media updates, image-led releases, partner notes, and supporting resources through one clearer distribution system.',
      primaryCta: { label: 'Browse Media', href: '/media-distribution' },
      secondaryCta: { label: 'Contact Desk', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'About us',
    title: 'Media distribution with structure, speed, and editorial clarity.',
    description: `${slot4BrandConfig.siteName} helps teams package announcements, campaign notes, and public updates into a clearer media distribution experience.`,
    paragraphs: [
      'Instead of splitting campaign material into disconnected pages, the platform keeps releases, visuals, categories, and source context easy to move through and easy to understand.',
      'Whether someone starts with a press update, media distribution item, image post, or resource page, they can continue exploring without losing context.',
    ],
    values: [
      {
        title: 'Release-first experience',
        description: 'We prioritize clarity, pacing, and structure so editors, partners, and audiences can understand each update quickly.',
      },
      {
        title: 'Connected distribution surfaces',
        description: 'Media updates, visual posts, resources, and profiles stay connected so discovery feels natural across the site.',
      },
      {
        title: 'Reliable public context',
        description: 'We focus on clean navigation, source context, and clear page structure to help visitors find useful information faster.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Talk to the media distribution desk.',
    description: 'Tell us what you need to announce, amplify, syndicate, or correct. We will route the request through the right campaign, editorial, or support lane.',
    formTitle: 'Send your distribution brief',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search releases, campaign updates, topics, categories, and media distribution content across the site.',
    },
    hero: {
      badge: 'Search the archive',
      title: 'Find releases, campaigns, visuals, and source notes faster.',
      description: 'Use keywords, categories, and content types to discover media distribution posts from every active section of the site.',
      placeholder: 'Search by release, outlet, campaign, category, or title',
    },
    resultsTitle: 'Latest media distribution content',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit media distribution content for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to create media distribution content.',
      description: 'Use your account to open the publishing workspace and prepare releases, updates, visuals, and supporting notes.',
    },
    hero: {
      badge: 'Distribution workspace',
      title: 'Prepare releases and campaign updates for publication.',
      description: 'Choose the content type, add details, and prepare a clean media post with images, source links, summary, and body content.',
    },
    formTitle: 'Content details',
    submitLabel: 'Submit content',
    successTitle: 'Content submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Member access',
      title: 'Welcome back to your publishing space.',
      description: 'Login to continue browsing, managing submissions, and creating media distribution content from your account.',
      formTitle: 'Access your desk',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Site access',
      title: 'Create your account and start distributing.',
      description: 'Create an account to access the distribution workspace, save details, and submit media updates through the site.',
      formTitle: 'Create distribution account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
