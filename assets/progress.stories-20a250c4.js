var s=Object.defineProperty;var e=(o,t)=>s(o,"name",{value:t,configurable:!0});import{j as n}from"./jsx-runtime-69008c6b.js";import{P as r}from"./progress-f9b628a8.js";import"./index-a38f3d31.js";import"./es.object.get-own-property-descriptor-d261b708.js";const f={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Progress } from './progress'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Feedback/Progress 进度条',
  component: Progress,
} as ComponentMeta<typeof Progress>

const Template: ComponentStory<typeof Progress> = args => <Progress {...args} />

export const DefaultProgress = Template.bind({})

DefaultProgress.args = {
  percent: 80,
  theme: 'primary',
}
`,locationsMap:{"default-progress":{startLoc:{col:50,line:15},endLoc:{col:80,line:15},startBody:{col:50,line:15},endBody:{col:80,line:15}}}}},title:"Feedback/Progress 进度条",component:r},a=e(o=>n(r,{...o}),"Template"),p=a.bind({});p.args={percent:80,theme:"primary"};const d=["DefaultProgress"];export{p as DefaultProgress,d as __namedExportsOrder,f as default};
//# sourceMappingURL=progress.stories-20a250c4.js.map