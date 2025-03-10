import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const DeploymentGuide = () => {
  return (
    <div className="min-h-screen pt-20 pb-10 px-6">
      <div className="container max-w-4xl mx-auto">
        <AnimatedSection className="mb-8" animation="slide-down">
          <Button variant="outline" className="mb-8">
            <Link to="/" className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back to Portfolio
            </Link>
          </Button>
          
          <div className="glass-morphism rounded-xl p-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gradient">Deploy to GitHub Pages</h1>
            
            <div className="space-y-6 text-muted-foreground">
              <p>
                Follow these steps to deploy your portfolio to GitHub Pages:
              </p>
              
              <div className="space-y-6">
                <AnimatedSection animation="slide-up" delay={100}>
                  <div>
                    <h2 className="text-xl font-semibold mb-3 text-foreground">1. Prepare Your Repository</h2>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Create a new repository on GitHub or use an existing one.</li>
                      <li>Make sure your code is pushed to the <code className="bg-primary/10 px-1 py-0.5 rounded text-primary">main</code> branch.</li>
                    </ul>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection animation="slide-up" delay={200}>
                  <div>
                    <h2 className="text-xl font-semibold mb-3 text-foreground">2. Install GitHub Pages Dependencies</h2>
                    <p>Add the gh-pages package to your project:</p>
                    <div className="bg-black/20 p-4 rounded-lg my-3 font-mono text-sm overflow-x-auto">
                      <code>npm install --save-dev gh-pages</code>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection animation="slide-up" delay={300}>
                  <div>
                    <h2 className="text-xl font-semibold mb-3 text-foreground">3. Update package.json</h2>
                    <p>Add these fields and scripts to your package.json file:</p>
                    <div className="bg-black/20 p-4 rounded-lg my-3 font-mono text-sm overflow-x-auto">
                      <pre>{`{
  "homepage": "https://yourusername.github.io/repository-name",
  "scripts": {
    // ... other scripts
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}`}</pre>
                    </div>
                    <p>Replace <code className="bg-primary/10 px-1 py-0.5 rounded text-primary">yourusername</code> and <code className="bg-primary/10 px-1 py-0.5 rounded text-primary">repository-name</code> with your actual GitHub username and repository name.</p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection animation="slide-up" delay={400}>
                  <div>
                    <h2 className="text-xl font-semibold mb-3 text-foreground">4. Update vite.config.ts</h2>
                    <p>Update your Vite configuration to handle GitHub Pages base path:</p>
                    <div className="bg-black/20 p-4 rounded-lg my-3 font-mono text-sm overflow-x-auto">
                      <pre>{`import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/repository-name/", // Add this line with your repo name
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});`}</pre>
                    </div>
                    <p>Replace <code className="bg-primary/10 px-1 py-0.5 rounded text-primary">repository-name</code> with your actual repository name.</p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection animation="slide-up" delay={500}>
                  <div>
                    <h2 className="text-xl font-semibold mb-3 text-foreground">5. Update React Router</h2>
                    <p>If you're using React Router (which this portfolio does), update your <code className="bg-primary/10 px-1 py-0.5 rounded text-primary">BrowserRouter</code> to use the correct basename:</p>
                    <div className="bg-black/20 p-4 rounded-lg my-3 font-mono text-sm overflow-x-auto">
                      <pre>{`<BrowserRouter basename="/repository-name">
  {/* Your routes */}
</BrowserRouter>`}</pre>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection animation="slide-up" delay={600}>
                  <div>
                    <h2 className="text-xl font-semibold mb-3 text-foreground">6. Deploy Your Site</h2>
                    <p>Run the deploy script to build and publish to GitHub Pages:</p>
                    <div className="bg-black/20 p-4 rounded-lg my-3 font-mono text-sm overflow-x-auto">
                      <code>npm run deploy</code>
                    </div>
                    <p>This will create a <code className="bg-primary/10 px-1 py-0.5 rounded text-primary">gh-pages</code> branch in your repository with the built project.</p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection animation="slide-up" delay={700}>
                  <div>
                    <h2 className="text-xl font-semibold mb-3 text-foreground">7. Configure GitHub Pages Settings</h2>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Go to your repository on GitHub.</li>
                      <li>Click on Settings → Pages.</li>
                      <li>Under "Source", select "Deploy from a branch".</li>
                      <li>Select the <code className="bg-primary/10 px-1 py-0.5 rounded text-primary">gh-pages</code> branch and "/ (root)" folder.</li>
                      <li>Click Save.</li>
                    </ul>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection animation="slide-up" delay={800}>
                  <div>
                    <h2 className="text-xl font-semibold mb-3 text-foreground">8. Wait for Deployment</h2>
                    <p>GitHub will now build and deploy your site. This may take a few minutes. Once complete, your portfolio will be available at:</p>
                    <div className="bg-black/20 p-4 rounded-lg my-3 font-mono text-sm">
                      <code>https://yourusername.github.io/repository-name</code>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
              
              <AnimatedSection animation="slide-up" delay={900}>
                <div className="mt-8 p-4 border border-primary/20 rounded-lg bg-primary/5">
                  <h3 className="text-lg font-semibold mb-2">Additional Resources</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <a 
                        href="https://vitejs.dev/guide/static-deploy.html#github-pages" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Vite Deployment Guide
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://docs.github.com/en/pages" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        GitHub Pages Documentation
                      </a>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default DeploymentGuide;
