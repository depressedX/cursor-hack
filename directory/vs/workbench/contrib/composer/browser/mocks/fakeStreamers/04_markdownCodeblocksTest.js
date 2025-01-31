import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../utils.js';
define(de[3042], he([1, 0, 795]), function (ce /*require*/,
 e /*exports*/,
 t /*utils*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.markdownCodeblocksTest = void 0),
				(e.markdownCodeblocksTest = {
					id: "04_markdownCodeblocks",
					content: `Alright, let's enhance your \`client/README.md\` by incorporating a description of your codebase. I'll add a section that gives an overview of the project structure and its components. Here's how you can update your README:

\`\`\`\`markdown:client/README.md
This is a [Next.js](https://nextjs.org/) project bootstrapped with [\`create-next-app\`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Project Overview
This project is a full-stack application that integrates a Next.js client with a Voxelize server. It leverages modern web technologies to deliver a high-performance, interactive experience. The key components of the codebase include:

- **Client**: Built with Next.js, the client handles the frontend logic and UI rendering. It uses \`next/font\` for font optimization and supports hot-reloading for efficient development.
- **Server**: The backend is powered by a Voxelize server, which manages game logic and real-time interactions. It is written in Rust and utilizes the Voxelize engine for voxel-based rendering.
- **Voxelize Engine**: A custom voxel engine that provides fast, multiplayer voxel rendering capabilities. It is designed to be modular and extendable, supporting custom blocks and dynamic meshes.

## Getting Started
First, run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying \`app/page.tsx\`. The page auto-updates as you edit the file.

This project uses [\`next/font\`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
\`\`\`\`

### Explanation:
- **Project Overview**: Added a new section to describe the overall architecture and components of your project, including the client, server, and Voxelize engine.
- **Client**: Highlighted the use of Next.js and its features.
- **Server**: Mentioned the Voxelize server and its role.
- **Voxelize Engine**: Briefly described the engine's capabilities and purpose.

This should give anyone reading your README a clear understanding of what your project is about and how it's structured.${t.SPACE}`,
				});
		})
