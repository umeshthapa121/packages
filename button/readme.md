dsm-button

A reusable and customizable button component with skeleton loading and tooltip support, built with Mantine.
Features

    Skeleton loader for a smooth loading experience.
    Tooltip support with customizable properties.
    Built with Mantine’s flexible component library.
    Lightweight, modern, and TypeScript-based.

Installation

Install the package via npm or yarn:

`npm install dsm-button`
# or
`yarn add dsm-button`

Peer Dependencies

Ensure the following libraries are installed in your project:

`npm install react react-dom @mantine/core @tabler/icons-react`

Usage
Basic Example
```typescript
import React from 'react';
import { DSMButton } from 'dsm-button';

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <DSMButton
        tooltipProps={{ label: 'Click me!', position: 'right' }}
        skeletonProps={{ visible: false }}
        onClick={() => alert('Button clicked!')}
      >
        Click Me
      </DSMButton>
    </div>
  );
}
```

Skeleton Loader

Use skeletonProps to show a loading state:
```typescript
<DSMButton skeletonProps={{ visible: true }}>Loading...</DSMButton>
```

Tooltip Customization

Customize the tooltip properties such as position and label:

```typescript
<DSMButton
  tooltipProps={{
    label: 'Save your progress',
    position: 'bottom',
    withArrow: true,
  }}
>
  Save
</DSMButton>

Custom Icon

Replace the default icon with your own:

import { IconCheck } from '@tabler/icons-react';

<DSMButton
  tooltipProps={{ label: 'Done!' }}
>
  <IconCheck size={16} /> Complete
</DSMButton>
```
Props
DSMButton Props
Prop	Type	Default	Description
tooltipProps	Partial`<TooltipProps>	{}`	Properties for the tooltip.
skeletonProps	SkeletonProps	`{ visible: false }`	Controls the skeleton loader visibility.
icon	ReactNode	`<IconPhoto />`	Custom icon for the button’s leftSection.
Other props	ButtonProps	-	All Mantine Button props are supported.
License

This package is licensed under the ISC License.
Author

Developed by Umesh Thpapa.