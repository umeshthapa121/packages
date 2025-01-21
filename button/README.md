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
# Props
## DSMButton Props
|Prop	         |Type	                   |Default	     |Description|
|--------------|-------------------------|--------------|-----------|
|`tooltipProps`|	`Partial<TooltipProps>`|`{}`         |Properties for the tooltip.|
|`skeletonProps`|	`SkeletonProps`        |`{ visible: false }`|	Controls the skeleton loader visibility.|
|`icon` |	`ReactNode`|	`<IconPhoto />`	|Custom icon for the button’s leftSection.|
|Other props |	`ButtonProps` |`	-	` |All Mantine Button props are supported.|


### Author

Developed by Umesh Thpapa.

## Contributing  

Contributions are welcome! Please follow these steps:  
1. Fork the repository.  
2. Create a feature branch: `git checkout -b feature-name`.  
3. Commit your changes: `git commit -m 'Add feature'`.  
4. Push to your branch: `git push origin feature-name`.  
5. Open a pull request.  

---

## License  

This project is licensed under the [ISC License](LICENSE).  

---

## Support  

If you encounter any issues, feel free to open a bug report in the [issues section](https://github.com/umeshthapa121/packages/issues).  

---

Let me know if you need further modifications or enhancements!