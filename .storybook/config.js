
import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import '../src/styles/base.css'

const stories = require.context('../src/components', true, /stories\.js$/)

addDecorator(withInfo({
  header: false,
  inline: false,
  source: true,
}))

function loadStories() {
  stories.keys().forEach(stories)
}

configure(loadStories, module)