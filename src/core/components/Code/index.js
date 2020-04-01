import React from "react";
import CodeBlock from '@theme/CodeBlock';

export default ({children, language}) => <CodeBlock className={`language-${language}`}>{children}</CodeBlock>;
