import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeSanitize from 'rehype-sanitize'

export function MarkdownContent({ content }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeSanitize]}
      components={{
        h2: ({ children }) => (
          <h2 className="mt-8 mb-3 text-sm font-medium uppercase tracking-[0.2em] text-foreground">
            {children}
          </h2>
        ),
        p: ({ children }) => (
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            {children}
          </p>
        ),
        ul: ({ children }) => (
          <ul className="mb-4 list-disc pl-5 text-sm text-muted-foreground">
            {children}
          </ul>
        ),
        li: ({ children }) => <li className="mb-1">{children}</li>,
        strong: ({ children }) => (
          <strong className="font-semibold text-foreground">{children}</strong>
        ),
        code: ({ className, children }) => {
          const match = /language-(\w+)/.exec(className || '')
          const lang = match?.[1]
          const codeString = String(children).replace(/\n$/, '')

          const isBlock = codeString.includes('\n') || !!lang

          if (!isBlock) {
            return (
              <code className="rounded-md border border-border/60 bg-muted/40 px-1.5 py-0.5 font-mono text-[0.75rem] text-foreground">
                {codeString}
              </code>
            )
          }

          return (
            <div className="mb-6 overflow-hidden rounded-xl border border-border/60 bg-muted/30">
              {lang && (
                <div className="flex items-center justify-between border-b border-border/60 px-3 py-1.5 text-[0.6rem] uppercase tracking-wider text-muted-foreground">
                  <span>{lang}</span>
                </div>
              )}

              <pre className="overflow-x-auto p-4 text-xs leading-relaxed">
                <code className="font-mono text-foreground">{codeString}</code>
              </pre>
            </div>
          )
        }
      }}
    >
      {content}
    </ReactMarkdown>
  )
}