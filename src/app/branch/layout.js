// layout.tsx برای مسیر login
export default function BranchLayout({ children }) {
  return (
    <html lang="en">
      <body>  
        {children} {/* بدون Header و Footer */}
      </body>
    </html>
  );
}
