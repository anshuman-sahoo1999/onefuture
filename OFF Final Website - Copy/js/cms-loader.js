/**
 * CMS Content Loader
 * Loads content from markdown files created by Netlify CMS
 */

class CMSLoader {
    constructor() {
        this.cache = {};
    }

    /**
     * Parse markdown frontmatter
     */
    parseFrontmatter(content) {
        const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
        const match = content.match(frontmatterRegex);
        
        if (!match) {
            return { data: {}, content: content };
        }

        const frontmatter = match[1];
        const body = match[2];
        const data = {};

        // Parse YAML-like frontmatter
        frontmatter.split('\n').forEach(line => {
            const colonIndex = line.indexOf(':');
            if (colonIndex > 0) {
                const key = line.substring(0, colonIndex).trim();
                let value = line.substring(colonIndex + 1).trim();
                
                // Remove quotes if present
                if ((value.startsWith('"') && value.endsWith('"')) || 
                    (value.startsWith("'") && value.endsWith("'"))) {
                    value = value.slice(1, -1);
                }
                
                // Convert booleans and numbers
                if (value === 'true') value = true;
                else if (value === 'false') value = false;
                else if (!isNaN(value) && value !== '') value = Number(value);
                
                data[key] = value;
            }
        });

        // Handle multiline biography
        const biographyMatch = frontmatter.match(/biography:\s*\|\s*\n([\s\S]*?)(?=\n\w+:|$)/);
        if (biographyMatch) {
            data.biography = biographyMatch[1].trim();
        }

        return { data, content: body.trim() };
    }

    /**
     * Load a single markdown file
     */
    async loadMarkdown(path) {
        if (this.cache[path]) {
            return this.cache[path];
        }

        try {
            const response = await fetch(path);
            if (!response.ok) {
                throw new Error(`Failed to load ${path}`);
            }
            const text = await response.text();
            const parsed = this.parseFrontmatter(text);
            this.cache[path] = parsed;
            return parsed;
        } catch (error) {
            console.error('Error loading markdown:', error);
            return null;
        }
    }

    /**
     * Load all advisors
     */
    async loadAdvisors() {
        const advisorFiles = [
            '/content/advisors/guruprasad-mishra.md',
            '/content/advisors/ashok-basa.md'
        ];

        const advisors = [];
        for (const file of advisorFiles) {
            const parsed = await this.loadMarkdown(file);
            if (parsed && parsed.data.active !== false) {
                advisors.push({
                    ...parsed.data,
                    biography: parsed.data.biography || parsed.content
                });
            }
        }

        // Sort by order
        advisors.sort((a, b) => (a.order || 0) - (b.order || 0));
        return advisors;
    }

    /**
     * Load site settings
     */
    async loadSettings() {
        try {
            const response = await fetch('/content/settings/contact.json');
            if (!response.ok) {
                throw new Error('Failed to load settings');
            }
            return await response.json();
        } catch (error) {
            console.error('Error loading settings:', error);
            return null;
        }
    }

    /**
     * Load gallery items
     */
    async loadGallery() {
        // This will be populated as you add gallery items through CMS
        // For now, return empty array
        return [];
    }

    /**
     * Load downloads
     */
    async loadDownloads() {
        // This will be populated as you add downloads through CMS
        // For now, return empty array
        return [];
    }
}

// Create global instance
window.cmsLoader = new CMSLoader();
