import { configure, addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import CheesecakeTheme from './ckl-theme'

import '../src/styles/base.css'

const stories = require.context('../src/components', true, /stories\.js$/)

addParameters({
  options: {
    theme: CheesecakeTheme,
  },
})

addDecorator(
  withInfo({
    header: false,
    inline: false,
    source: true,
  })
)
function loadStories() {
  stories.keys().forEach(stories)
}

configure(loadStories, module)
