import React from 'react'

import {
  ZeitIcon,
  ForkIcon,
  StarIcon,
  ArrowRightIcon,
  GatsbyIcon,
  NetlifyIcon,
  FacebookIcon,
  TwitterIcon,
  GithubIcon,
  CodepenIcon,
  LinkedinIcon,
  InstagramIcon,
} from './icons'

export function Icon({ icon, ...props }) {
  switch (icon) {
    case 'Facebook':
      return <FacebookIcon {...props} />
    case 'Twitter':
      return <TwitterIcon {...props} />
    case 'Github':
      return <GithubIcon {...props} />
    case 'Codepen':
      return <CodepenIcon {...props} />
    case 'Linkedin':
      return <LinkedinIcon {...props} />
    case 'Instagram':
      return <InstagramIcon {...props} />
    case 'Gatsby':
      return <GatsbyIcon {...props} />
    case 'Netlify':
      return <NetlifyIcon {...props} />
    case 'ArrowRight':
      return <ArrowRightIcon {...props} />
    case 'Fork':
      return <ForkIcon {...props} />
    case 'Star':
      return <StarIcon {...props} />
    case 'Zeit':
      return <ZeitIcon {...props} />
    default:
      return <></>
  }
}
