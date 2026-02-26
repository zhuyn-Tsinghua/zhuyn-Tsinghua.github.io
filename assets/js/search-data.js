// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-services",
          title: "Services",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/services/";
          },
        },{id: "nav-awards",
          title: "Awards",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/awards/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-tada-congratulations-congratulations-our-paper-rosense-got-accepted-by-ieee-iotj-and-the-poster-version-got-accepted-by-acm-sigmetrics",
          title: ':tada: Congratulations! Congratulations! Our Paper “RoSense” got accepted by IEEE IoTJ and the...',
          description: "",
          section: "News",},{id: "news-tada-congratulations-our-paper-readerprint-got-accepted-by-ieee-secon-2022",
          title: ':tada: Congratulations!  Our Paper “ReaderPrint” got accepted by IEEE SECON 2022.',
          description: "",
          section: "News",},{id: "news-tada-congratulations-our-paper-loprint-on-rfid-tagged-item-authentication-got-accepted-by-ieee-infocom-2024",
          title: ':tada: Congratulations! Our Paper “LoPrint” on RFID-Tagged Item Authentication got accepted by IEEE...',
          description: "",
          section: "News",},{id: "news-tada-congratulations-our-paper-meatspec-on-multispectral-imaging-based-meat-fraud-sensing-got-accepted-by-acm-mobicom-2024-our-dataset-is-released",
          title: ':tada: Congratulations! Our Paper “MeatSpec” on Multispectral Imaging-based Meat Fraud Sensing got accepted...',
          description: "",
          section: "News",},{id: "news-tada-congratulations-to-prof-duan-and-her-students-our-two-papers-rf-express-and-tagrecon-got-accepeted-by-ieee-infocom-2025-and-acm-tosn-2025-respectively",
          title: ':tada: Congratulations to Prof. Duan and her students! Our Two papers “RF-Express” and...',
          description: "",
          section: "News",},{id: "news-tada-congratulations-our-paper-mobhar-on-source-free-domain-generalization-for-har-got-accepeted-by-acm-imwut-ubicomp-2025-the-codes-and-datasets-are-released",
          title: ':tada: Congratulations! Our paper “MobHAR” on Source-free Domain Generalization for HAR got accepeted...',
          description: "",
          section: "News",},{id: "news-tada-congratulations-our-paper-freshspec-on-multispectral-imaging-based-sashimi-freshness-monitoring-got-accepted-by-ieee-transactions-on-mobile-computing-tmc-2025-our-dataset-is-released",
          title: ':tada: Congratulations! Our Paper “FreshSpec” on Multispectral Imaging-based Sashimi Freshness Monitoring got accepted...',
          description: "",
          section: "News",},{id: "news-tada-congratulations-our-paper-fruitphone-on-smartphone-based-spectral-sensing-for-fruits-got-accepted-by-acm-imwut-ubicomp-2025",
          title: ':tada: Congratulations! Our Paper “FruitPhone” on Smartphone-based Spectral Sensing for Fruits got accepted...',
          description: "",
          section: "News",},{id: "news-tada-congratulations-our-two-papers-dd-livm-on-multimodal-rgb-t-foundation-model-post-training-for-pv-defect-inspection-and-blinic-on-llm-cross-modal-distillation-for-home-based-smart-healthcare-got-accepted-by-acm-mobicom-2025",
          title: ':tada: Congratulations! Our Two Papers “DD-LIVM” on Multimodal RGB-T Foundation Model Post-training for...',
          description: "",
          section: "News",},{id: "news-tada-congratulations-our-paper-flourspec-got-aceepted-by-acm-sensys-2026",
          title: ':tada: Congratulations! Our Paper “FlourSpec” got aceepted by ACM SenSys 2026.',
          description: "",
          section: "News",},{id: "news-tada-congratulations-our-paper-meatspec-g-got-accepeted-by-ieee-transactions-on-mobile-computing-tmc-2025-extended-from-mobicom",
          title: ':tada: Congratulations! Our Paper “MeatSpec-G” got accepeted by IEEE Transactions on Mobile Computing...',
          description: "",
          section: "News",},{id: "news-mortar-board-passed-the-doctoral-dissertation-defense-two-papers-on-multi-agent-systems-and-vlms-are-submitted",
          title: ':mortar_board: Passed the doctoral dissertation defense! Two papers on multi-agent systems and VLMs...',
          description: "",
          section: "News",},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-hometown',
        title: 'Hometown',
        section: 'Socials',
        handler: () => {
          window.open("https://en.wikipedia.org/wiki/Hangzhou", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%7A%68%75%64%66@%63%73%65.%75%73%74.%68%6B", "_blank");
        },
      },{
        id: 'social-google_scholar',
        title: 'Google_scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=9VPxouYAAAAJ", "_blank");
        },
      },{
        id: 'social-dblp',
        title: 'Dblp',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/229/9836.html", "_blank");
        },
      },];
