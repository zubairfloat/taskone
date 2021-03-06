import React, { Component } from 'react'
import {
  Header,
  Connect,
  Section2,
  AboutUser,
  Footer,
} from '../layouts/home02/index'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      card: [
        {
          id: 1,
          classcard: 'iconbox-s2 iconbox-s2-t1 bg-white',
          wowdelay: '0.5s',
          image: './images/section/20.png',
          alt: 'images',
          title: 'Web UI Design',
          text:
            "I'm a professional UX designer with 4 years of experience. My main focus is on listening.",
        },
        {
          id: 2,
          classcard: 'iconbox-s2 iconbox-s2-t1 bg-white active',
          wowdelay: '0.8s',
          image: './images/section/21.png',
          alt: 'images',
          title: 'Mobile UI Design',
          text:
            "I'm a professional UX designer with 4 years of experience. My main focus is on listening.",
        },
        {
          id: 3,
          classcard: 'iconbox-s2 iconbox-s2-t1 bg-white',
          wowdelay: '1.1s',
          image: './images/section/22.png',
          alt: 'images',
          title: 'Branding Design',
          text:
            "I'm a professional UX designer with 4 years of experience. My main focus is on listening.",
        },
      ],
    }
  }
  render() {
    return (
      <div>
        <Header />
        <Connect />
        <Section2 />
      </div>
    )
  }
}

export default Home
