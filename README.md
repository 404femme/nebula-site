```
    _   __     __          __     
   / | / /__  / /_  __  __/ /___ _
  /  |/ / _ \/ __ \/ / / / / __ `/
 / /|  /  __/ /_/ / /_/ / / /_/ /
/_/ |_/\___/_.___/\__,_/_/\__,_/  
                                    
```

# Nebula-Site

**Nebula-Site** is a professional-grade web platform for Discord servers, developed with **Next.js**. It delivers a centralized interface for server management, community engagement, and information dissemination, designed to optimize both administrative workflows and user interaction.

---

## Key Capabilities

### Administrative Tools

Empower server administrators with advanced management features:

* **User Moderation**

    * Execute bans, kicks, and timeouts efficiently.
    * Maintain automated logs of moderation activities.
    * Track nickname changes and enforce policies.

* **Audit & Compliance**

    * Access detailed logs of all moderation actions.
    * Maintain action history for accountability and transparency.

* **Server Management**

    * Configure roles, permissions, and channels seamlessly.
    * Automate repetitive tasks and server notifications.

* **Customizable Settings**

    * Tailor moderation tools to your server’s operational requirements.
    * Assign role-based access control for moderators and administrators.

### User Engagement Features

Enhance community participation and streamline user access:

* **Knowledge Base & Documentation**

    * Publish structured guides, FAQs, and tutorials.
    * Ensure content is easily navigable for all users.

* **Rules & Guidelines**

    * Present server policies clearly and professionally.
    * Implement automated reminders and acknowledgment tracking.

* **News & Announcements**

    * Share updates directly from your Discord server.
    * Highlight events and critical information prominently.

* **Interactive Features**

    * Support user profiles and achievement badges.
    * Manage event calendars and participation tracking.

---

## Deployment Instructions

0. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/nubula-site.git
    ```

1. Go to the project's directory
    ```bash
    mkdir nubula-site
    ```

2. Configure environment variables in `.env` with your Discord and site credentials.
    ```bash
    cp .env.example .env
    ```

### Dev version: 

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Start the development server:

   ```bash
   pnpm run dev
   ```

5. Access the platform at `http://localhost:3000`.

### Production version:

3. Run docker
    ```bash
    docker-compose up -d --build
    ```
4. Access the platform at `http://localhost`.
---

## Licensing

This software is distributed under the **AGPL-3.0 License**.

> The GNU Affero General Public License requires that any use, modification, or distribution of this software ensures the source code remains openly available, including for network-based usage.
