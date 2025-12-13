import React from 'react'

const GithubFooterText = () => {
  return (
    <div className="text-center text-sm text-muted-foreground  max-w-4xl">
        Found an issue? Open an issue on{" "}
        <a
          href="https://github.com/yourusername/gridmantle/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-medium"
        >
          GitHub
        </a>
      </div>
  )
}

export default GithubFooterText