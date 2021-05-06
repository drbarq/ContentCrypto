import React, { useState } from 'react';
import { Paragraph } from '@contentful/forma-36-react-components';
import { SidebarExtensionSDK } from '@contentful/app-sdk';

interface SidebarProps {
  sdk: SidebarExtensionSDK;
}

// The field ID from our blog post field
const CONTENT_FIELD_ID = 'body';

const Sidebar = (props: SidebarProps) => {
  // The sdk allows us to interact with the Contentful web app
  const { sdk } = props;

  // With the field ID we can reference individual fields from an entry
  const contentField = sdk.entry.fields[CONTENT_FIELD_ID];

  // Get the current value from the blog post field and store it in React state
  const [blogText, setBlogText] = useState(contentField.getValue());

  return <Paragraph>Hello Sidebar Component</Paragraph>;
};

export default Sidebar;
