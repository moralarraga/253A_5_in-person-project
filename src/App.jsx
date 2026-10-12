// Week 7: Migrating Your Interactive Portfolio to React
// This starter file guides you through migrating your Week 6 vanilla JavaScript portfolio to React

import './App.css'

function App() {
  // ============================================
  // PART 1: EVENT HANDLER FUNCTIONS
  // ============================================
  // TODO: Move your Week 6 event handler functions here
  // In Week 6, you had functions like:
  // - handleNavClick (for smooth scroll)
  // - filterProjects (for project filtering)
  // - handleFormSubmit (for form validation)
  //
  // HINT: These will be regular JavaScript functions defined inside App component
  // Example from Week 6:
  //   const filterProjects = (category) => {
  //     // Your filtering logic here
  //   }
  
  // TODO: Add smooth scroll handler
  // Replace: navLinks.forEach(link => link.addEventListener('click', ...))
  // With: const handleNavClick = (e) => { ... }
  
  // TODO: Add filter handler
  // Replace: filterButtons.forEach(button => button.addEventListener('click', ...))
  // With: const handleFilterClick = (category) => { ... }
  
  // TODO: Add form validation functions
  // You'll need: isValidEmail, showError, clearError, showSuccess
  // These can stay mostly the same!
  
  // TODO: Add form submit handler
  // Replace: contactForm.addEventListener('submit', ...)
  // With: const handleFormSubmit = (e) => { ... }


  // ============================================
  // PART 2: JSX RETURN STATEMENT
  // ============================================
  // TODO: Copy your Week 6 HTML structure here
  // Remember to convert HTML to JSX:
  // - class → className
  // - onclick → onClick
  // - onsubmit → onSubmit
  // - for → htmlFor
  // - All event attributes use camelCase
  //
  // IMPORTANT: Put EVERYTHING in this one return statement!
  // This week we're building a MONOLITHIC component (one big component)
  // Week 8 will teach you how to break this into smaller pieces

  return (
    <div className="portfolio">
      {
        <nav id="navbar">
            <div class="nav-brand">
                <span>Lilia Mora</span>
            </div>
            <ul class="nav-menu">
                <li><a href="#home" className="nav-link">Home</a></li>
                <li><a href="#about" className="nav-link">About</a></li>
                <li><a href="#skills" className="nav-link">Skills</a></li>
                <li><a href="#projects" className="nav-link">Projects</a></li>
                <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
            <!-- Mobile menu toggle (for bonus implementation) -->
            <div class="nav-toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    }
    
      {/* HINT: Replace onclick with onClick={handleNavClick} */}

      {
        <section id="home" className="hero">
            <div className="hero-content">
                <h1 className="hero-title">Lilia Mora</h1>
                <p className="hero-subtitle">Frontend Developer & UI Designer</p>
                <p className="hero-tagline">Creating beautiful, responsive web experiences with modern technologies</p>
                <div className="hero-buttons">
                    <a href="#projects" class="btn btn-primary">View Projects</a>
                    <a href="#contact" class="btn btn-secondary">Get In Touch</a>
                </div>
            </div>
        </section>
      }
      
      {
        <section id="about" class="section">
              <div class="container">
                  <h2>About Me</h2>
                  <div class="about-grid">
                      <div class="about-text">
                          <p>I am passionate about the technical aspects of networking and I enjoy a creative approach to problem solving.</p>
                          <div class="about-details">
                              <div class="detail-item">
                                  <span class="detail-icon">📍</span>
                                  <span>San Mateo, CA</span>
                              </div>
                              <div class="detail-item">
                                  <span class="detail-icon">✉️</span>
                                  <a href="mailto:mora.larraga@gmail.com">mora.larraga@gmail.com</a>
                              </div>
                              <div class="detail-item">
                                  <span class="detail-icon">📱</span>
                                  <span>(650) 200-8165</span>
                              </div>
                          </div>
                      </div>
                      <div class="about-availability">
                          <h3>Currently Available For:</h3>
                          <div class="availability-tags">
                              <span class="tag tag-available">Freelance</span>
                              <span class="tag tag-available">Full-Time</span>
                              <span class="tag tag-available">Remote</span>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      }
      
      {/* TODO: Add your skills section here */}
      
      {/* TODO: Add your projects section here */}
      {/* HINT: For filter buttons, use onClick={() => handleFilterClick('category')} */}
      
      {/* TODO: Add your contact form here */}
      {/* HINT: Form will use onSubmit={handleFormSubmit} */}
      {/* HINT: Inputs will use onChange for real-time validation */}
      
      {/* TODO: Add your footer here */}

    </div>
  )
}

export default App
