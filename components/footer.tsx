export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <p className="text-sm text-muted-foreground">          © {new Date().getFullYear()} Dweep Manish Chande. All rights reserved.
        </p>
        <div className="flex items-center space-x-4">
          <a
            href="https://www.linkedin.com/in/dweep-chande-6bbb98213/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a            href="mailto:dvv2ep@gmail.com"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
