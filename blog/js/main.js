// Data definitions
const blogPosts = [
    {
        id: 1,
        title: "The Future of Web Development in 2023",
        excerpt: "Exploring the latest frameworks, tools and methodologies shaping the future of web development.",
        category: "technology",
        date: "June 15, 2023",
        readTime: "8 min read",
        image: "https://picsum.photos/800/400?random=10",
        content: `
            <header class="mb-8">
                <span class="text-primary-600 text-sm font-medium">TECHNOLOGY</span>
                <h1 class="text-4xl font-bold my-4">The Future of Web Development in 2023</h1>
                <div class="flex items-center text-gray-600">
                    <span>June 15, 2023</span>
                    <span class="mx-2">•</span>
                    <span>8 min read</span>
                </div>
            </header>
            
            <img src="https://picsum.photos/800/400?random=10" alt="Web development trends" class="w-full rounded-xl mb-8">
            
            <div class="prose max-w-none">
                <p class="text-lg text-gray-700 mb-6">The landscape of web development is constantly evolving, with new frameworks, tools, and methodologies emerging at a rapid pace. As we move through 2023, several key trends are shaping the future of how we build for the web.</p>
                
                <h2 class="text-2xl font-bold my-6">The Rise of Frameworks</h2>
                <p class="text-gray-700 mb-6">React, Vue, and Angular continue to dominate the frontend landscape, but we're seeing interesting developments in newer frameworks like Svelte and Solid.js that challenge the virtual DOM paradigm.</p>
                
                <p class="text-gray-700 mb-6">These frameworks offer compelling advantages in terms of bundle size and performance, which is increasingly important as users access websites on a wider variety of devices with varying connection speeds.</p>
                
                <h2 class="text-2xl font-bold my-6">Server-Side Rendering Comeback</h2>
                <p class="text-gray-700 mb-6">After years of client-side rendering dominance, we're witnessing a resurgence in server-side rendering approaches. Next.js, Nuxt.js, and SvelteKit are leading this charge, offering the best of both worlds: the interactivity of SPAs with the SEO benefits and faster initial load times of traditional server-rendered sites.</p>
                
                <blockquote class="border-l-4 border-primary-500 pl-4 italic my-8 text-gray-700">
                    "The future of web development isn't about choosing between client-side or server-side rendering, but rather finding the right balance for each use case."
                </blockquote>
                
                <h2 class="text-2xl font-bold my-6">WebAssembly Expands Possibilities</h2>
                <p class="text-gray-700 mb-6">WebAssembly (Wasm) continues to mature, enabling high-performance applications to run in the browser. We're seeing more tools and languages targeting Wasm, which opens up exciting possibilities for applications that previously wouldn't have been feasible on the web.</p>
                
                <h2 class="text-2xl font-bold my-6">AI-Powered Development Tools</h2>
                <p class="text-gray-700 mb-6">AI-assisted coding tools like GitHub Copilot are becoming standard in many developers' workflows. These tools are evolving from simple autocomplete to providing more sophisticated assistance with code structure, bug detection, and even generating tests.</p>
                
                <h2 class="text-2xl font-bold my-6">Conclusion</h2>
                <p class="text-gray-700 mb-6">The future of web development is exciting and diverse. As developers, we need to stay adaptable, continuously learning, and focused on creating experiences that are fast, accessible, and valuable to users regardless of the underlying technology choices.</p>
            </div>
        `
    },
    {
        id: 2,
        title: "Essential UI/UX Principles for Developers",
        excerpt: "Key design principles that every developer should know to create better user experiences.",
        category: "design",
        date: "May 28, 2023",
        readTime: "6 min read",
        image: "https://picsum.photos/800/400?random=11",
        content: `
            <header class="mb-8">
                <span class="text-primary-600 text-sm font-medium">DESIGN</span>
                <h1 class="text-4xl font-bold my-4">Essential UI/UX Principles for Developers</h1>
                <div class="flex items-center text-gray-600">
                    <span>May 28, 2023</span>
                    <span class="mx-2">•</span>
                    <span>6 min read</span>
                </div>
            </header>
            
            <img src="https://picsum.photos/800/400?random=11" alt="UI/UX design principles" class="w-full rounded-xl mb-8">
            
            <div class="prose max-w-none">
                <p class="text-lg text-gray-700 mb-6">As a developer, understanding UI/UX principles is no longer optional—it's essential. Even if you're not a designer, these principles will help you build better interfaces and collaborate more effectively with design teams.</p>
                
                <h2 class="text-2xl font-bold my-6">1. Consistency is Key</h2>
                <p class="text-gray-700 mb-6">Maintain visual and functional consistency throughout your application. Use consistent spacing, typography, color schemes, and interaction patterns. This reduces cognitive load for users and makes your application feel more polished.</p>
                
                <h2 class="text-2xl font-bold my-6">2. Prioritize Accessibility</h2>
                <p class="text-gray-700 mb-6">Build with accessibility in mind from the start. Ensure proper color contrast, semantic HTML structure, keyboard navigation, and ARIA attributes where needed. Accessibility isn't just a nice-to-have—it's a requirement for inclusive design.</p>
                
                <h2 class="text-2xl font-bold my-6">3. Provide Clear Feedback</h2>
                <p class="text-gray-700 mb-6">Users should always know what's happening. Provide immediate feedback for actions—button states, loading indicators, success/error messages. This creates a sense of direct manipulation and prevents confusion.</p>
                
                <h2 class="text-2xl font-bold my-6">4. Keep it Simple</h2>
                <p class="text-gray-700 mb-6">Avoid unnecessary complexity. Each additional button, field, or option increases cognitive load. Follow the principle of progressive disclosure—show only what's necessary at each step.</p>
                
                <h2 class="text-2xl font-bold my-6">5. Design for Mobile First</h2>
                <p class="text-gray-700 mb-6">Starting with mobile constraints forces you to focus on what's truly important. This approach typically results in cleaner, more focused interfaces that scale well to larger screens.</p>
                
                <h2 class="text-2xl font-bold my-6">Conclusion</h2>
                <p class="text-gray-700 mb-6">By incorporating these UI/UX principles into your development workflow, you'll create better experiences for your users and become a more valuable team member. Remember, good design and good code go hand in hand.</p>
            </div>
        `
    },
    {
        id: 3,
        title: "10 Productivity Hacks for Remote Workers",
        excerpt: "Practical tips to stay focused and productive while working from home or remotely.",
        category: "productivity",
        date: "April 12, 2023",
        readTime: "10 min read",
        image: "https://picsum.photos/800/400?random=12",
        content: `
            <header class="mb-8">
                <span class="text-primary-600 text-sm font-medium">PRODUCTIVITY</span>
                <h1 class="text-4xl font-bold my-4">10 Productivity Hacks for Remote Workers</h1>
                <div class="flex items-center text-gray-600">
                    <span>April 12, 2023</span>
                    <span class="mx-2">•</span>
                    <span>10 min read</span>
                </div>
            </header>
            
            <img src="https://picsum.photos/800/400?random=12" alt="Remote work productivity" class="w-full rounded-xl mb-8">
            
            <div class="prose max-w-none">
                <p class="text-lg text-gray-700 mb-6">Working remotely offers incredible flexibility, but it also presents unique challenges to staying productive. After years of remote work, I've compiled my most effective strategies for maintaining focus and getting things done.</p>
                
                <h2 class="text-2xl font-bold my-6">1. Designate a Dedicated Workspace</h2>
                <p class="text-gray-700 mb-6">Create a space used exclusively for work. This helps your brain associate that area with productivity and makes it easier to "switch off" at the end of the day.</p>
                
                <h2 class="text-2xl font-bold my-6">2. Establish a Morning Routine</h2>
                <p class="text-gray-700 mb-6">Start your day with a consistent routine that doesn't involve immediately checking email or messages. This sets a positive tone for the rest of the day.</p>
                
                <h2 class="text-2xl font-bold my-6">3. Use Time Blocking</h2>
                <p class="text-gray-700 mb-6">Schedule specific blocks of time for different types of work. Group similar tasks together to minimize context switching.</p>
                
                <h2 class="text-2xl font-bold my-6">4. Take Regular Breaks</h2>
                <p class="text-gray-700 mb-6">Follow the Pomodoro Technique or similar approaches—work for focused intervals (25-50 minutes), then take short breaks (5-10 minutes).</p>
                
                <h2 class="text-2xl font-bold my-6">5. Set Clear Boundaries</h2>
                <p class="text-gray-700 mb-6">Communicate your working hours to family, friends, and colleagues. Learn to say no to non-urgent requests outside those hours.</p>
                
                <h2 class="text-2xl font-bold my-6">6. Minimize Digital Distractions</h2>
                <p class="text-gray-700 mb-6">Use website blockers during focus time, turn off non-essential notifications, and consider using a separate browser profile for work.</p>
                
                <h2 class="text-2xl font-bold my-6">7. Optimize Your Toolkit</h2>
                <p class="text-gray-700 mb-6">Invest time in learning your tools thoroughly. Keyboard shortcuts, automation, and efficient workflows can save hours each week.</p>
                
                <h2 class="text-2xl font-bold my-6">8. Practice the Two-Minute Rule</h2>
                <p class="text-gray-700 mb-6">If a task takes less than two minutes, do it immediately. This prevents small tasks from accumulating and creating mental clutter.</p>
                
                <h2 class="text-2xl font-bold my-6">9. End Your Day with Planning</h2>
                <p class="text-gray-700 mb-6">Spend the last 10 minutes of your workday reviewing what you accomplished and planning the next day's priorities.</p>
                
                <h2 class="text-2xl font-bold my-6">10. Prioritize Health and Wellness</h2>
                <p class="text-gray-700 mb-6">Regular exercise, proper nutrition, and adequate sleep are non-negotiable for sustained productivity and creativity.</p>
                
                <h2 class="text-2xl font-bold my-6">Conclusion</h2>
                <p class="text-gray-700 mb-6">Remote work productivity isn't about working more hours—it's about working smarter. Experiment with these strategies to find what works best for you, and remember that consistency is more important than perfection.</p>
            </div>
        `
    },
    {
        id: 4,
        title: "Color Theory for Web Designers",
        excerpt: "Learn how to choose color palettes that enhance user experience and convey the right message.",
        category: "design",
        date: "March 22, 2023",
        readTime: "7 min read",
        image: "https://picsum.photos/800/400?random=13",
        content: `
            <header class="mb-8">
                <span class="text-primary-600 text-sm font-medium">DESIGN</span>
                <h1 class="text-4xl font-bold my-4">Color Theory for Web Designers</h1>
                <div class="flex items-center text-gray-600">
                    <span>March 22, 2023</span>
                    <span class="mx-2">•</span>
                    <span>7 min read</span>
                </div>
            </header>
            
            <img src="https://picsum.photos/800/400?random=13" alt="Color theory for web design" class="w-full rounded-xl mb-8">
            
            <div class="prose max-w-none">
                <p class="text-lg text-gray-700 mb-6">Color is one of the most powerful tools in a designer's toolkit. It influences mood, directs attention, and communicates meaning. Understanding color theory is essential for creating effective web designs.</p>
                
                <h2 class="text-2xl font-bold my-6">The Color Wheel and Basic Terminology</h2>
                <p class="text-gray-700 mb-6">The color wheel is the foundation of color theory. It consists of primary colors (red, yellow, blue), secondary colors (created by mixing primaries), and tertiary colors (mixing primary and secondary).</p>
                
                <h2 class="text-2xl font-bold my-6">Color Harmony Schemes</h2>
                <p class="text-gray-700 mb-6">Different color combinations create different effects:</p>
                <ul class="list-disc pl-6 mb-6 text-gray-700">
                    <li class="mb-2"><strong>Complementary:</strong> Colors opposite each other on the wheel (high contrast)</li>
                    <li class="mb-2"><strong>Analogous:</strong> Colors next to each other (harmonious and comfortable)</li>
                    <li class="mb-2"><strong>Triadic:</strong> Three colors evenly spaced (vibrant and balanced)</li>
                    <li class="mb-2"><strong>Monochromatic:</strong> Variations in lightness and saturation of a single hue (cohesive)</li>
                </ul>
                
                <h2 class="text-2xl font-bold my-6">Psychological Effects of Color</h2>
                <p class="text-gray-700 mb-6">Colors evoke emotional responses:</p>
                <ul class="list-disc pl-6 mb-6 text-gray-700">
                    <li class="mb-2"><strong>Blue:</strong> Trust, security, calm</li>
                    <li class="mb-2"><strong>Red:</strong> Energy, urgency, excitement</li>
                    <li class="mb-2"><strong>Green:</strong> Growth, health, nature</li>
                    <li class="mb-2"><strong>Yellow:</strong> Optimism, attention, warmth</li>
                    <li class="mb-2"><strong>Purple:</strong> Creativity, luxury, wisdom</li>
                </ul>
                
                <h2 class="text-2xl font-bold my-6">Accessibility Considerations</h2>
                <p class="text-gray-700 mb-6">Ensure sufficient color contrast between text and background (WCAG guidelines recommend at least 4.5:1 for normal text). Don't rely on color alone to convey information—use patterns, labels, or icons as well.</p>
                
                <h2 class="text-2xl font-bold my-6">Practical Tips for Web Design</h2>
                <p class="text-gray-700 mb-6">Start with a limited palette (3-5 colors). Use a dominant color (60%), secondary color (30%), and accent color (10%). Establish consistent color meanings throughout your site (e.g., blue for links, green for success).</p>
                
                <h2 class="text-2xl font-bold my-6">Tools and Resources</h2>
                <p class="text-gray-700 mb-6">Use tools like Adobe Color, Coolors, or Paletton to generate harmonious color schemes. Browser extensions like ColorZilla can help you extract colors from existing websites.</p>
                
                <h2 class="text-2xl font-bold my-6">Conclusion</h2>
                <p class="text-gray-700 mb-6">Mastering color theory takes practice, but the effort pays off in more effective, appealing designs. Remember that context matters—the same color can have different meanings in different cultures or industries.</p>
            </div>
        `
    },
    {
        id: 5,
        title: "Introduction to Web Accessibility",
        excerpt: "Making your websites accessible to everyone is not just ethical—it's essential.",
        category: "technology",
        date: "February 18, 2023",
        readTime: "9 min read",
        image: "https://picsum.photos/800/400?random=14",
        content: `
            <header class="mb-8">
                <span class="text-primary-600 text-sm font-medium">TECHNOLOGY</span>
                <h1 class="text-4xl font-bold my-4">Introduction to Web Accessibility</h1>
                <div class="flex items-center text-gray-600">
                    <span>February 18, 2023</span>
                    <span class="mx-2">•</span>
                    <span>9 min read</span>
                </div>
            </header>
            
            <img src="https://picsum.photos/800/400?random=14" alt="Web accessibility introduction" class="w-full rounded-xl mb-8">
            
            <div class="prose max-w-none">
                <p class="text-lg text-gray-700 mb-6">Web accessibility ensures that people with disabilities can perceive, understand, navigate, and interact with websites and tools. It's not just a nice-to-have—it's a fundamental aspect of creating inclusive digital experiences.</p>
                
                <h2 class="text-2xl font-bold my-6">Why Accessibility Matters</h2>
                <p class="text-gray-700 mb-6">Approximately 15% of the world's population lives with some form of disability. Accessibility benefits everyone, including people with temporary disabilities (like a broken arm) and situational limitations (like bright sunlight affecting screen visibility).</p>
                
                <h2 class="text-2xl font-bold my-6">Web Content Accessibility Guidelines (WCAG)</h2>
                <p class="text-gray-700 mb-6">WCAG is the international standard for web accessibility, built around four principles:</p>
                <ul class="list-disc pl-6 mb-6 text-gray-700">
                    <li class="mb-2"><strong>Perceivable:</strong> Information must be presentable in ways users can perceive</li>
                    <li class="mb-2"><strong>Operable:</strong> Interface components must be operable by all users</li>
                    <li class="mb-2"><strong>Understandable:</strong> Information and operation must be understandable</li>
                    <li class="mb-2"><strong>Robust:</strong> Content must be robust enough to work with current and future tools</li>
                </ul>
                
                <h2 class="text-2xl font-bold my-6">Key Accessibility Practices</h2>
                <h3 class="text-xl font-bold my-4">Semantic HTML</h3>
                <p class="text-gray-700 mb-6">Use HTML elements according to their intended purpose. Headings (h1-h6) create document structure, buttons are for actions, links for navigation. Screen readers rely on semantic markup.</p>
                
                <h3 class="text-xl font-bold my-4">Keyboard Navigation</h3>
                <p class="text-gray-700 mb-6">Ensure all interactive elements are accessible via keyboard. Maintain a logical tab order and provide visible focus indicators.</p>
                
                <h3 class="text-xl font-bold my-4">Alternative Text</h3>
                <p class="text-gray-700 mb-6">Provide descriptive alt text for images. Decorative images should have empty alt attributes (alt="").</p>
                
                <h3 class="text-xl font-bold my-4">Color Contrast</h3>
                <p class="text-gray-700 mb-6">Maintain sufficient contrast between text and background colors. WCAG AA requires at least 4.5:1 for normal text.</p>
                
                <h3 class="text-xl font-bold my-4">ARIA Attributes</h3>
                <p class="text-gray-700 mb-6">Use ARIA (Accessible Rich Internet Applications) attributes when native HTML isn't sufficient. But prefer native HTML elements whenever possible.</p>
                
                <h2 class="text-2xl font-bold my-6">Testing for Accessibility</h2>
                <p class="text-gray-700 mb-6">Use automated tools like axe, WAVE, or Lighthouse to catch common issues. But remember—automated testing only catches about 30% of accessibility problems. Manual testing with screen readers and keyboard navigation is essential.</p>
                
                <h2 class="text-2xl font-bold my-6">Conclusion</h2>
                <p class="text-gray-700 mb-6">Accessibility isn't a feature to bolt on at the end—it should be integrated throughout the design and development process. By building accessible websites, we create better experiences for all users and fulfill our ethical responsibility as web professionals.</p>
            </div>
        `
    },
    {
        id: 6,
        title: "Building a Career in Tech: A Developer's Guide",
        excerpt: "Navigating the path to a successful career in the ever-changing tech industry.",
        category: "career",
        date: "January 5, 2023",
        readTime: "11 min read",
        image: "https://picsum.photos/800/400?random=15",
        content: `
            <header class="mb-8">
                <span class="text-primary-600 text-sm font-medium">CAREER</span>
                <h1 class="text-4xl font-bold my-4">Building a Career in Tech: A Developer's Guide</h1>
                <div class="flex items-center text-gray-600">
                    <span>January 5, 2023</span>
                    <span class="mx-2">•</span>
                    <span>11 min read</span>
                </div>
            </header>
            
            <img src="https://picsum.photos/800/400?random=15" alt="Tech career development" class="w-full rounded-xl mb-8">
            
            <div class="prose max-w-none">
                <p class="text-lg text-gray-700 mb-6">Building a successful career in technology requires more than just technical skills. It involves continuous learning, strategic planning, and developing the right mindset. Here's what I've learned from over a decade in the industry.</p>
                
                <h2 class="text-2xl font-bold my-6">1. Master the Fundamentals</h2>
                <p class="text-gray-700 mb-6">While frameworks and tools come and go, fundamental concepts endure. Invest time in understanding computer science fundamentals, programming paradigms, and how things work under the hood.</p>
                
                <h2 class="text-2xl font-bold my-6">2. Develop T-Shaped Skills</h2>
                <p class="text-gray-700 mb-6">Cultivate both depth and breadth. Have deep expertise in one or two areas (the vertical bar of the T) while maintaining working knowledge across related disciplines (the horizontal top).</p>
                
                <h2 class="text-2xl font-bold my-6">3. Build a Portfolio, Not Just a Resume</h2>
                <p class="text-gray-700 mb-6">Create tangible evidence of your skills. Contribute to open source, build side projects, write blog posts, or speak at meetups. These demonstrate passion and capability beyond what's on paper.</p>
                
                <h2 class="text-2xl font-bold my-6">4. Learn How to Learn</h2>
                <p class="text-gray-700 mb-6">The tech industry changes rapidly. Develop effective learning strategies and stay curious. Allocate regular time for skill development amidst your daily responsibilities.</p>
                
                <h2 class="text-2xl font-bold my-6">5. Cultivate Soft Skills</h2>
                <p class="text-gray-700 mb-6">Technical ability alone isn't enough. Develop communication, collaboration, and problem-solving skills. These often differentiate good developers from great ones.</p>
                
                <h2 class="text-2xl font-bold my-6">6. Find Mentors and Be a Mentor</h2>
                <p class="text-gray-700 mb-6">Seek out experienced professionals who can provide guidance. As you progress, pay it forward by mentoring others. Teaching reinforces your own understanding.</p>
                
                <h2 class="text-2xl font-bold my-6">7. Understand the Business</h2>
                <p class="text-gray-700 mb-6">Learn how technology creates business value. Understanding the "why" behind projects makes you more effective and opens up leadership opportunities.</p>
                
                <h2 class="text-2xl font-bold my-6">8. Build Your Network</h2>
                <p class="text-gray-700 mb-6">Attend conferences, participate in online communities, and connect with peers. Your network can provide opportunities, support, and diverse perspectives.</p>
                
                <h2 class="text-2xl font-bold my-6">9. Prioritize Work-Life Balance</h2>
                <p class="text-gray-700 mb-6">Avoid burnout by setting boundaries and maintaining interests outside of technology. Sustainable careers are built over decades, not years.</p>
                
                <h2 class="text-2xl font-bold my-6">10. Embrace Change</h2>
                <p class="text-gray-700 mb-6">The only constant in technology is change. Develop adaptability and view new technologies as opportunities rather than threats.</p>
                
                <h2 class="text-2xl font-bold my-6">Conclusion</h2>
                <p class="text-gray-700 mb-6">Building a successful tech career is a marathon, not a sprint. Focus on continuous improvement, seek meaningful work, and remember that your career is yours to shape. The most rewarding careers often follow non-linear paths full of learning and growth.</p>
            </div>
        `
    }
];

// Navigation and page management
function navigateTo(page, param = null) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => {
        p.classList.add('hidden');
        p.classList.remove('active');
    });
    
    // Show the requested page
    const pageElement = document.getElementById(`${page}-page`);
    if (pageElement) {
        pageElement.classList.remove('hidden');
        pageElement.classList.add('active');
        
        // Scroll to top
        window.scrollTo(0, 0);
        
        // Page-specific initialization
        if (page === 'blog') {
            initializeBlogPage(param);
        } else if (page === 'post') {
            initializePostPage(param);
        }
    }
    
    // Close mobile menu if open
    document.getElementById('mobile-menu').classList.remove('open');
}

// Initialize blog page with posts
function initializeBlogPage(category = 'all') {
    const container = document.getElementById('blog-posts-container');
    container.innerHTML = '';
    
    // Update active category filter
    document.querySelectorAll('.category-filter').forEach(btn => {
        if (btn.dataset.category === category) {
            btn.classList.add('active', 'bg-gray-200');
        } else {
            btn.classList.remove('active', 'bg-gray-200');
            btn.classList.add('hover:bg-gray-100');
        }
    });
    
    // Filter posts by category if specified
    const filteredPosts = category === 'all' 
        ? blogPosts 
        : blogPosts.filter(post => post.category === category);
    
    // Display posts
    if (filteredPosts.length > 0) {
        filteredPosts.forEach(post => {
            const postElement = document.createElement('article');
            postElement.className = 'blog-card bg-white rounded-xl overflow-hidden shadow-md';
            postElement.innerHTML = `
                <img src="${post.image}" alt="${post.title}" class="w-full h-48 object-cover">
                <div class="p-6">
                    <span class="text-primary-600 text-sm font-medium">${post.category.toUpperCase()}</span>
                    <h3 class="text-xl font-bold my-2">${post.title}</h3>
                    <p class="text-gray-600 mb-4">${post.excerpt}</p>
                    <div class="flex justify-between items-center">
                        <span class="text-gray-500 text-sm">${post.date} • ${post.readTime}</span>
                        <a href="#" class="text-primary-600 font-medium hover:underline" onclick="navigateTo('post', ${post.id})">Read More</a>
                    </div>
                </div>
            `;
            container.appendChild(postElement);
        });
    } else {
        container.innerHTML = `
            <div class="text-center py-12">
                <i class="fas fa-inbox text-4xl text-gray-300 mb-4"></i>
                <p class="text-gray-500">No posts found in this category.</p>
            </div>
        `;
    }
    
    // Hide load more button if filtered or all posts are shown
    document.getElementById('load-more').classList.add('hidden');
}

// Initialize single post page
function initializePostPage(postId) {
    const post = blogPosts.find(p => p.id === postId);
    const container = document.getElementById('post-content');
    
    if (post) {
        container.innerHTML = post.content;
        document.title = `${post.title} | My Personal Blog`;
    } else {
        container.innerHTML = `
            <div class="text-center py-12">
                <i class="fas fa-exclamation-circle text-4xl text-gray-300 mb-4"></i>
                <p class="text-gray-500">Post not found.</p>
                <a href="#" class="text-primary-600 font-medium hover:underline mt-4 inline-block" onclick="navigateTo('blog')">← Back to Blog</a>
            </div>
        `;
    }
}

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.carousel-indicator');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Form validation and submission
function validateContactForm() {
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;
    
    // Reset all error messages
    document.querySelectorAll('.text-red-500').forEach(error => {
        error.classList.add('hidden');
    });
    
    // Validate name
    if (!name) {
        document.getElementById('name-error').classList.remove('hidden');
        isValid = false;
    }
    
    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        document.getElementById('email-error').classList.remove('hidden');
        isValid = false;
    }
    
    // Validate subject
    if (!subject) {
        document.getElementById('subject-error').classList.remove('hidden');
        isValid = false;
    }
    
    // Validate message
    if (!message) {
        document.getElementById('message-error').classList.remove('hidden');
        isValid = false;
    }
    
    return isValid;
}

// Theme toggle functionality
function toggleTheme() {
    const html = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');
    
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        icon.className = 'fas fa-moon text-gray-600';
        localStorage.setItem('theme', 'light');
    } else {
        html.classList.add('dark');
        icon.className = 'fas fa-sun text-gray-600';
        localStorage.setItem('theme', 'dark');
    }
}

// Initialize theme from localStorage
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark');
        document.getElementById('theme-toggle').querySelector('i').className = 'fas fa-sun text-gray-600';
    }
}

// FAQ toggle functionality
function initializeFAQ() {
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('i');
            
            answer.classList.toggle('hidden');
            
            if (answer.classList.contains('hidden')) {
                icon.className = 'fas fa-chevron-down';
            } else {
                icon.className = 'fas fa-chevron-up';
            }
        });
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    initializeTheme();
    
    // Initialize FAQ
    initializeFAQ();
    
    // Mobile menu toggle
    document.getElementById('mobile-menu-button').addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.add('open');
    });
    
    document.getElementById('close-menu').addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.remove('open');
    });
    
    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    
    // Carousel controls
    document.getElementById('carousel-next').addEventListener('click', nextSlide);
    document.getElementById('carousel-prev').addEventListener('click', prevSlide);
    
    // Carousel indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
    
    // Auto-advance carousel
    setInterval(nextSlide, 5000);
    
    // Category filters
    document.querySelectorAll('.category-filter').forEach(filter => {
        filter.addEventListener('click', () => {
            const category = filter.dataset.category;
            initializeBlogPage(category);
        });
    });
    
    // Contact form submission
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateContactForm()) {
            // Show loading state
            const submitText = document.getElementById('submit-text');
            const submitLoading = document.getElementById('submit-loading');
            const formSuccess = document.getElementById('form-success');
            const formError = document.getElementById('form-error');
            
            submitText.textContent = 'Sending...';
            submitLoading.classList.remove('hidden');
            
            // Simulate form submission
            setTimeout(() => {
                submitText.textContent = 'Send Message';
                submitLoading.classList.add('hidden');
                formSuccess.classList.remove('hidden');
                formError.classList.add('hidden');
                
                // Reset form
                document.getElementById('contact-form').reset();
                
                // Hide success message after 3 seconds
                setTimeout(() => {
                    formSuccess.classList.add('hidden');
                }, 3000);
            }, 2000);
        }
    });
    
    // Load more posts functionality
    document.getElementById('load-more').addEventListener('click', function() {
        // This would typically load more posts from an API
        this.classList.add('hidden');
    });
    
    // Initialize blog page if it's the current page
    if (document.getElementById('blog-page').classList.contains('active')) {
        initializeBlogPage();
    }
});