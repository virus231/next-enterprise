import { Metadata } from "next"
import { Button } from "components/Button/Button"

export const metadata: Metadata = {
  title: "Test Page",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
}

export default function TestPage() {
  return <Button href="/">Test</Button>
}
