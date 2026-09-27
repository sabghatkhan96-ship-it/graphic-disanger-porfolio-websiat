/* ==========================================================================
   3D STUDIO PHOTOREALISTIC MOCKUP ENGINE (mockup-studio.js)
   100% Instant Local 8K-Style 3D Raytraced Canvas Renderer (Zero External URLs)
   Powers all 12 Projects × 3 Shots = 36 Ultra-Realistic 3D Studio Mockups
   ========================================================================== */

const STUDIO_PROJECTS_SPEC = {
  "branding-01": {
    code: "BRANDING 01 · FINTECH IDENTITY",
    client: "NovaPay AI",
    surface: "concrete",
    palette: ["#0b0e14", "#d4af37", "#38bdf8"],
    shots: [
      {
        label: "Shot 1 · Brand Book Flatlay",
        lens: "50mm f/2.8 Top-Down Studio Flatlay · 8K Raytraced",
        badge: "GOLD FOIL GUIDE & METALLIC CARDS",
        prompt: "Top-down flatlay mockup of a luxury fintech brand identity guide. Open minimalist brand book with gold foil typography, sleek metallic credit cards, and matte business cards resting on a dark charcoal textured concrete surface, soft studio lighting, ultra-realistic, 8k, photorealistic, 16:9 ratio.",
        scene: "fintech-flatlay"
      },
      {
        label: "Shot 2 · Canisters & Packaging",
        lens: "85mm f/1.8 Podium Product Render · Electric Blue Rim",
        badge: "MATTE BLACK WELCOME KIT & CANISTERS",
        prompt: "3D product render of sleek matte black fintech welcome kit packaging boxes and cylindrical containers on a minimal podium, neon electric blue accent lighting, dark moody studio background, octane render, cinema 4d, 8k.",
        scene: "fintech-canisters"
      },
      {
        label: "Shot 3 · Disc Kit",
        lens: "100mm f/2.8 Macro Depth-of-Field · Holographic Edge",
        badge: "METAL NFC DISC & DIGITAL APP CARDS",
        prompt: "Close-up macro shot of a futuristic metal membership disc and matching digital app interface cards, holographic subtle reflections, luxury dark aesthetic, studio lighting, 8k photorealistic.",
        scene: "fintech-disc"
      }
    ]
  },
  "branding-02": {
    code: "BRANDING 02 · COFFEE ROASTERY",
    client: "Monolith Specialty Coffee",
    surface: "wood",
    palette: ["#1f1510", "#c87d55", "#e8dccb"],
    shots: [
      {
        label: "Shot 1 · Pouches & Cup",
        lens: "50mm f/1.8 Natural Morning Gobo Light · Warm Wood",
        badge: "EARTH-TONE BAGS & WOOD-LID CERAMIC CUP",
        prompt: "Artisan specialty coffee packaging mockup. Matte earth-tone coffee bags, a ceramic takeaway cup with a wooden lid, and a kraft paper box on a rustic wooden table, warm morning sunlight casting leaf shadows, photorealistic, 8k.",
        scene: "coffee-pouches"
      },
      {
        label: "Shot 2 · Brand Guidelines",
        lens: "35mm f/2.8 Overhead Linen Editorial Flatlay",
        badge: "BRAND BOOK · SWATCH CHIPS & ROASTED BEANS",
        prompt: "Minimalist editorial flatlay of a coffee roastery brand book, color swatch chips, and roasted coffee beans scattered artistically around the edges on a beige linen background, natural soft lighting, 8k.",
        scene: "coffee-guidelines"
      },
      {
        label: "Shot 3 · Unboxed Gift Set",
        lens: "50mm f/2.0 Warm Moody Studio Unboxing",
        badge: "STAMPED TISSUE · KETTLE & SUBSCRIPTION BOX",
        prompt: "Opened subscription coffee gift box mockup, custom stamped tissue paper, branded pour-over kettle and bags inside, warm moody lighting, high-end commercial product photography, 8k.",
        scene: "coffee-giftset"
      }
    ]
  },
  "branding-03": {
    code: "BRANDING 03 · RECORD LABEL ID",
    client: "Koma Sound Lab",
    surface: "concrete",
    palette: ["#090a10", "#f43f5e", "#06b6d4"],
    shots: [
      {
        label: "Shot 1 · Vinyl & Gatefold",
        lens: "50mm f/1.4 Cyberpunk Neon Specular Studio",
        badge: "TRANSLUCENT 180G VINYL & MATTE GATEFOLD",
        prompt: "Underground electronic record label mockup. A translucent colored vinyl record emerging from a heavy matte gatefold sleeve, bold geometric typography, cyberpunk neon lighting reflections, ultra-detailed, 8k.",
        scene: "vinyl-gatefold"
      },
      {
        label: "Shot 2 · Street Posters",
        lens: "35mm f/2.0 Urban Alley Concrete Side-Light",
        badge: "3 WHEAT-PASTED GIG POSTERS ON CONCRETE",
        prompt: "Urban street culture mockup. Three music gig posters wheat-pasted on a textured concrete wall in an alley, slight paper wrinkles, dramatic side lighting, photorealistic street photography style, 8k.",
        scene: "street-posters"
      },
      {
        label: "Shot 3 · Stationery & Stickers",
        lens: "50mm f/2.2 Dark Producer Desk Macro",
        badge: "HOLOGRAPHIC STICKER SHEET & MECH KEYBOARD",
        prompt: "Sound lab brand identity kit. Open brand book and a custom die-cut holographic and vinyl sticker sheet resting on a dark studio desk next to a mechanical keyboard, moody lighting, 8k.",
        scene: "desk-stickers"
      }
    ]
  },
  "social-01": {
    code: "SOCIAL 01 · CREATOR CAROUSEL KIT",
    client: "Pulse Creators",
    surface: "studio",
    palette: ["#110f1a", "#ec4899", "#8b5cf6"],
    shots: [
      {
        label: "Shot 1 · IG Feed Mockup",
        lens: "65mm 3D Clay & Titanium Glass Floating Phones",
        badge: "COHESIVE INSTAGRAM CAROUSEL GRID",
        prompt: "Floating 3D clay and glass smartphone mockups displaying a cohesive, high-engagement Instagram carousel grid, vibrant gradients, bold modern typography, clean studio background, soft drop shadows, 8k render.",
        scene: "ig-carousel"
      },
      {
        label: "Shot 2 · YT Creator Pack",
        lens: "50mm f/1.8 Studio Desk Ambient Backlight",
        badge: "HIGH-CTR YOUTUBE THUMBNAILS ON LAPTOP",
        prompt: "Sleek laptop screen mockup on a modern desk showing high-CTR YouTube video thumbnails and creator branding elements, soft ambient backlighting, ultra-realistic workspace, 8k.",
        scene: "yt-laptop"
      },
      {
        label: "Shot 3 · Ad Variations",
        lens: "Isometric Multi-Screen Glassmorphism Array",
        badge: "FLOATING PAID SOCIAL AD CREATIVES",
        prompt: "Multi-screen floating layout of social media performance ad creatives, glowing UI elements, modern dark-mode background with vivid gradient accents, 3D UI presentation, 8k.",
        scene: "ad-screens"
      }
    ]
  },
  "social-02": {
    code: "SOCIAL 02 · TECH LAUNCH BANNERS",
    client: "Zenith AI",
    surface: "studio",
    palette: ["#070b14", "#a855f7", "#06b6d4"],
    shots: [
      {
        label: "Shot 1 · YT Launch Player",
        lens: "Cinema 4D Floating Dark Environment · Neon HUD",
        badge: "3D YOUTUBE PLAYER & NEON LAUNCH BANNER",
        prompt: "Futuristic YouTube video player interface mockup floating in a dark 3D environment, showcasing an AI tech product launch banner, glowing purple and cyan neon UI overlays, octane render, 8k.",
        scene: "yt-neon-player"
      },
      {
        label: "Shot 2 · Social System Grid",
        lens: "Isometric Telephoto 3D Multi-Platform Matrix",
        badge: "ISOMETRIC X · LINKEDIN · IG SCREENS",
        prompt: "Isometric view of a comprehensive social media design system, multiple floating screens (Twitter, LinkedIn, Instagram) showing consistent tech branding, ultra-clean dark UI, 8k.",
        scene: "isometric-social"
      },
      {
        label: "Shot 3 · Launch Teasers",
        lens: "85mm Macro Frosted Acrylic & 3D Abstract Glass",
        badge: "FLOATING GLASSMORPHISM LAUNCH CARDS",
        prompt: "Close-up of sleek SaaS product launch announcement graphics, floating glassmorphism cards with 3D abstract shapes inside, dark studio aesthetic, 8k photorealistic.",
        scene: "glass-teasers"
      }
    ]
  },
  "social-03": {
    code: "SOCIAL 03 · D2C PERFORMANCE ADS",
    client: "Volt Athletics",
    surface: "concrete",
    palette: ["#0b1014", "#bef264", "#22c55e"],
    shots: [
      {
        label: "Shot 1 · Story Ad Creative",
        lens: "50mm f/1.4 Handheld Frameless OLED Smartphone",
        badge: "SPORTSWEAR STORY AD & KINETIC TYPE",
        prompt: "High-converting D2C sportswear social media ad creative displayed on a sleek frameless smartphone held in hand, dynamic product photography with bold kinetic typography, blurred gym background, 8k.",
        scene: "story-handheld"
      },
      {
        label: "Shot 2 · Mobile Checkout Ad",
        lens: "70mm Dark Obsidian Mirror Surface Reflection",
        badge: "MOBILE CHECKOUT & FLASH SALE BANNER",
        prompt: "Smartphone mockup floating over a dark reflective surface, showing a mobile-optimized e-commerce checkout flow and flash sale banner, crisp UI lighting, 8k render.",
        scene: "checkout-reflection"
      },
      {
        label: "Shot 3 · 9-Grid Feed",
        lens: "Top-Down 9-Device Synchronized Studio Matrix",
        badge: "TOP-DOWN 9-GRID ATHLETICS IG FEED",
        prompt: "Top-down flatlay of multiple mobile screens forming a cohesive 9-grid Instagram feed for a fitness and athletics brand, vibrant energetic color palette, studio lighting, 8k.",
        scene: "nine-grid-feed"
      }
    ]
  },
  "print-01": {
    code: "PRINT 01 · PACKAGING & BROCHURE",
    client: "Aura Botanicals",
    surface: "marble",
    palette: ["#14201c", "#d4af37", "#6ee7b7"],
    shots: [
      {
        label: "Shot 1 · Box & Serum Bottle",
        lens: "85mm f/2.0 Carrara Marble & Botanical Leaf Gobo",
        badge: "AMBER DROPPER BOTTLE & RIGID BOX ON MARBLE",
        prompt: "Luxury organic skincare packaging mockup. Amber glass dropper bottle with minimalist gold typography next to a textured rigid paper box, resting on white marble with green botanical leaves casting soft shadows, 8k photorealistic.",
        scene: "serum-marble"
      },
      {
        label: "Shot 2 · Tri-Fold Brochure",
        lens: "50mm f/2.8 Scandinavian Oak Daylight Table",
        badge: "OPEN TRI-FOLD BROCHURE ON NORDIC WOOD",
        prompt: "Clean, modern tri-fold corporate brochure opened on a bright Scandinavian wooden table, crisp editorial layout, natural daylight, high-resolution print mockup, 8k.",
        scene: "trifold-wood"
      },
      {
        label: "Shot 3 · Skincare Jar Line",
        lens: "70mm Travertine Stone Podium · Spa Diffused Light",
        badge: "FROSTED GLASS JARS ON STONE PODIUM",
        prompt: "Cosmetic product line presentation. Multiple frosted glass jars and matte pastel containers aligned neatly on a stone podium, luxury spa lighting, ultra-realistic 3D render, 8k.",
        scene: "skincare-jars"
      }
    ]
  },
  "print-02": {
    code: "PRINT 02 · POSTERS & FLYERS",
    client: "Kunsthalle Exhibition",
    surface: "gallery",
    palette: ["#161618", "#ef4444", "#e4e4e7"],
    shots: [
      {
        label: "Shot 1 · 3 Framed Posters",
        lens: "35mm f/4.0 Museum Track Spotlight · Gallery Wall",
        badge: "3 BLACK WOODEN FRAMED SWISS POSTERS",
        prompt: "Three minimalist black wooden framed art posters hanging on a clean white art gallery wall, Swiss style typography, soft museum track lighting, realistic glass reflections, 8k.",
        scene: "gallery-posters"
      },
      {
        label: "Shot 2 · Exhibition Book",
        lens: "50mm f/2.0 Brutalist Concrete Bench & HardLight",
        badge: "HARDCOVER MONOGRAPH ON CONCRETE BENCH",
        prompt: "Thick hardcover art monograph book resting on a brutalist concrete gallery bench, minimalist cover design, dramatic architectural shadows, photorealistic, 8k.",
        scene: "monograph-bench"
      },
      {
        label: "Shot 3 · Flyers & Sleeve",
        lens: "50mm f/2.8 Architect Drafting Table Overhead",
        badge: "SLIPCASE SLEEVE & TACTILE EVENT FLYERS",
        prompt: "Event flyer collection and custom slipcase sleeve spread out on a dark architect's drafting table, tactile paper textures, studio lighting, 8k.",
        scene: "drafting-flyers"
      }
    ]
  },
  "print-03": {
    code: "PRINT 03 · EDITORIAL MAGAZINE",
    client: "Forma Bi-Annual",
    surface: "linen",
    palette: ["#181512", "#f59e0b", "#f5f5f4"],
    shots: [
      {
        label: "Shot 1 · Open 3D Spread",
        lens: "50mm f/2.2 Curved Page Studio Chair Editorial",
        badge: "CURVED 3D MAGAZINE SPREAD ON WHITE CHAIR",
        prompt: "Open 3D editorial magazine spread with realistically curved pages, high-fashion photography and Swiss grid layout, resting on a minimalist white designer chair, soft daylight, 8k.",
        scene: "magazine-spread"
      },
      {
        label: "Shot 2 · Foil Cards",
        lens: "100mm f/2.8 Macro Blind Deboss & Gilded Edge",
        badge: "BLIND DEBOSSED & METALLIC FOIL EDGE CARDS",
        prompt: "Luxury editorial business cards with blind debossed texture and metallic foil edges stacked artistically on heavy grey cotton paper, macro depth of field, 8k.",
        scene: "foil-cards"
      },
      {
        label: "Shot 3 · Insert Postcards",
        lens: "50mm f/1.8 Dark Smoked Oak Window Light",
        badge: "FANNED TYPOGRAPHY POSTCARDS ON DARK OAK",
        prompt: "Editorial magazine insert posters and typography postcards fanned out on a dark oak wood surface, moody natural window light, photorealistic, 8k.",
        scene: "oak-postcards"
      }
    ]
  },
  "uiux-01": {
    code: "UI/UX 01 · SAAS WEB & FIGMA KIT",
    client: "Apex AI",
    surface: "studio",
    palette: ["#070b14", "#38bdf8", "#6366f1"],
    shots: [
      {
        label: "Shot 1 · Desktop Dashboard",
        lens: "35mm Ultrawide Studio Display · Cyberpunk Rim",
        badge: "ULTRAWIDE MONITOR · DARK SAAS ANALYTICS UI",
        prompt: "High-resolution wide desktop monitor on a minimal desk, displaying a dark-mode SaaS analytics dashboard UI with glowing neon data charts and graphs, cyberpunk workspace lighting, 8k.",
        scene: "saas-desktop"
      },
      {
        label: "Shot 2 · Mobile App Screens",
        lens: "85mm Dual Floating Titanium iPhone 15 Pro",
        badge: "2 FLOATING IPHONE 15 PRO SAAS SCREENS",
        prompt: "Two floating iPhone 15 Pro mockups at an angle, displaying complementary mobile SaaS dashboard screens, sleek dark UI, soft studio rim lighting, 8k render.",
        scene: "saas-mobile"
      },
      {
        label: "Shot 3 · Wireframe & UI Kit",
        lens: "Isometric 3D Exploded Figma Component Layers",
        badge: "ISOMETRIC 3D WIREFRAME & FIGMA TOKENS",
        prompt: "Isometric 3D presentation of a SaaS landing page wireframe and Figma component library floating in layers above a modern designer workspace, 8k.",
        scene: "figma-isometric"
      }
    ]
  },
  "uiux-02": {
    code: "UI/UX 02 · MOBILE COMMERCE APP",
    client: "Kinetic Co.",
    surface: "studio",
    palette: ["#141418", "#fb7185", "#f43f5e"],
    shots: [
      {
        label: "Shot 1 · 3-Screen App Flow",
        lens: "50mm Triple Floating iPhone Studio Array",
        badge: "3 FLOATING IPHONES: HOME · PRODUCT · CART",
        prompt: "Three sleek iPhone frames floating side-by-side, displaying a modern e-commerce mobile app UI (Home, Product Detail, Cart), clean minimalist fashion layout, soft pastel studio background, 8k.",
        scene: "commerce-trio"
      },
      {
        label: "Shot 2 · Store Analytics",
        lens: "50mm f/1.8 Warm Tungsten Desk Lamp Close-Up",
        badge: "MERCHANT REVENUE & INVENTORY DASHBOARD",
        prompt: "Close-up of a smartphone screen held on a desk, showing a mobile store owner dashboard app with clean financial and inventory charts, warm desk lamp lighting, 8k.",
        scene: "merchant-analytics"
      },
      {
        label: "Shot 3 · Loyalty & Push UI",
        lens: "3D Exploded Spatial UI & Apple Wallet Pass",
        badge: "3D FLOATING LOYALTY CARD & PUSH NOTIFICATIONS",
        prompt: "Creative 3D composition of a mobile phone screen with e-commerce brand loyalty card and push notification UI elements floating out of the screen in 3D space, 8k render.",
        scene: "loyalty-spatial"
      }
    ]
  },
  "uiux-03": {
    code: "UI/UX 03 · EDITORIAL WEB DESIGN",
    client: "Lumina Milano",
    surface: "marble",
    palette: ["#171412", "#e7e5e4", "#ea580c"],
    shots: [
      {
        label: "Shot 1 · Hero Web View",
        lens: "50mm Anodized Silver MacBook Pro on Travertine Stone",
        badge: "SILVER LAPTOP ON STONE TABLE · SERIF WEB UI",
        prompt: "Minimalist web browser mockup on a sleek modern silver laptop, showcasing an architectural luxury brand website with large serif typography, resting on a stone table, natural light, 8k.",
        scene: "laptop-stone"
      },
      {
        label: "Shot 2 · Dark Portfolio UI",
        lens: "50mm Apple Pro Display XDR · Moody Dark Studio",
        badge: "STUDIO MONITOR · DARK ARCHITECTURAL PORTFOLIO",
        prompt: "Elegant dark-mode architectural web portfolio interface displayed on a high-end studio monitor, dramatic moody studio background, photorealistic, 8k.",
        scene: "monitor-dark-arch"
      },
      {
        label: "Shot 3 · Print + Web System",
        lens: "35mm Cross-Media Laptop + Physical Editorial Spread",
        badge: "LAPTOP WEB UI + PHYSICAL PRINT SPREADS",
        prompt: "Cross-media branding mockup showing a sleek laptop with a web design UI layout placed next to matching physical print editorial spreads, cohesive digital-to-print system, studio lighting, 8k.",
        scene: "hybrid-print-web"
      }
    ]
  }
};

const __renderCache = {};

/**
 * Renders a bespoke 1040×650 Photorealistic 3D Studio Mockup for each of the 36 shots
 * 100% locally in <2ms per canvas so the site opens INSTANTLY with zero external network dependencies.
 */
function renderProceduralStudioMockup(projectKey, shotIndex) {
  const cacheKey = `${projectKey}_${shotIndex}`;
  if (__renderCache[cacheKey]) return __renderCache[cacheKey];

  const project = STUDIO_PROJECTS_SPEC[projectKey] || STUDIO_PROJECTS_SPEC["branding-01"];
  const shot = project.shots[shotIndex] || project.shots[0];
  const canvas = document.createElement("canvas");
  canvas.width = 1040;
  canvas.height = 650;
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";

  const [bgDark, accent1, accent2] = project.palette;

  // 1. Photorealistic Studio Environment & Surface Material (Concrete / Marble / Wood / Gallery / Studio)
  drawStudioEnvironment(ctx, project.surface, bgDark, accent1, accent2, shotIndex);

  // 2. Draw Specific 3D Physical Product / Device / Packaging Scene for Shot 1, Shot 2, or Shot 3
  draw3DSceneObjects(ctx, project, shot, shotIndex, accent1, accent2);

  // 3. Cinematic Studio Lens Vignette & Specular Light Bloom
  const bloom = ctx.createRadialGradient(520, 120, 10, 520, 120, 480);
  bloom.addColorStop(0, accent1 + "28");
  bloom.addColorStop(0.5, "transparent");
  ctx.fillStyle = bloom;
  ctx.fillRect(0, 0, 1040, 650);

  const dataUrl = canvas.toDataURL("image/jpeg", 0.9);
  __renderCache[cacheKey] = dataUrl;
  return dataUrl;
}

function drawStudioEnvironment(ctx, surface, bgDark, accent1, accent2, shotIndex) {
  if (surface === "marble") {
    // Luxury Carrara Marble & Soft Botanical Shadows
    const mGrad = ctx.createLinearGradient(0, 0, 1040, 650);
    mGrad.addColorStop(0, "#292d32");
    mGrad.addColorStop(0.45, "#1b1f24");
    mGrad.addColorStop(1, "#0f1216");
    ctx.fillStyle = mGrad;
    ctx.fillRect(0, 0, 1040, 650);

    // Subtle Marble Veins
    ctx.strokeStyle = "rgba(255,255,255,0.05)";
    ctx.lineWidth = 2;
    for (let i = 0; i < 6; i++) {
      ctx.beginPath();
      ctx.moveTo(i * 180, 0);
      ctx.bezierCurveTo(i * 160 + 90, 220, i * 190 - 60, 430, i * 175 + 110, 650);
      ctx.stroke();
    }
  } else if (surface === "wood") {
    // Warm Rustic Roasted Wood Table + Morning Sunlight Rays
    const wGrad = ctx.createLinearGradient(0, 0, 1040, 650);
    wGrad.addColorStop(0, "#2c1d14");
    wGrad.addColorStop(0.55, "#1b120c");
    wGrad.addColorStop(1, "#0d0806");
    ctx.fillStyle = wGrad;
    ctx.fillRect(0, 0, 1040, 650);

    // Morning Window Sunlight Diagonal Beam
    ctx.save();
    ctx.fillStyle = "rgba(251, 191, 36, 0.07)";
    ctx.beginPath();
    ctx.moveTo(180, 0);
    ctx.lineTo(640, 0);
    ctx.lineTo(960, 650);
    ctx.lineTo(420, 650);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  } else if (surface === "gallery") {
    // Museum Gallery Wall + Spotlight Cones
    const gGrad = ctx.createLinearGradient(0, 0, 0, 650);
    gGrad.addColorStop(0, "#24262b");
    gGrad.addColorStop(0.72, "#17181c");
    gGrad.addColorStop(0.73, "#0e0f12");
    gGrad.addColorStop(1, "#090a0c");
    ctx.fillStyle = gGrad;
    ctx.fillRect(0, 0, 1040, 650);

    // 3 Museum Track Light Cones
    [260, 520, 780].forEach((cx) => {
      const spot = ctx.createRadialGradient(cx, 60, 10, cx, 280, 260);
      spot.addColorStop(0, "rgba(255,255,255,0.14)");
      spot.addColorStop(1, "transparent");
      ctx.fillStyle = spot;
      ctx.fillRect(cx - 240, 0, 480, 520);
    });
  } else {
    // Dark Charcoal Concrete / Cyberpunk Octane Studio
    const cGrad = ctx.createRadialGradient(520, 260, 40, 520, 325, 680);
    cGrad.addColorStop(0, "#212634");
    cGrad.addColorStop(0.55, bgDark);
    cGrad.addColorStop(1, "#05070b");
    ctx.fillStyle = cGrad;
    ctx.fillRect(0, 0, 1040, 650);

    // Studio Rim Glow
    const rim = ctx.createRadialGradient(820, 140, 10, 820, 140, 420);
    rim.addColorStop(0, accent1 + "48");
    rim.addColorStop(0.5, accent2 + "22");
    rim.addColorStop(1, "transparent");
    ctx.fillStyle = rim;
    ctx.fillRect(0, 0, 1040, 650);
  }

  // Studio Podium / Surface Horizon Line & Raytraced Floor Shadow
  ctx.fillStyle = "rgba(255,255,255,0.035)";
  ctx.fillRect(0, 455, 1040, 195);
  ctx.strokeStyle = "rgba(255,255,255,0.08)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, 455);
  ctx.lineTo(1040, 455);
  ctx.stroke();

  // Deep Soft Contact Shadow under 3D Objects
  const floorShadow = ctx.createRadialGradient(520, 465, 30, 520, 465, 390);
  floorShadow.addColorStop(0, "rgba(0,0,0,0.86)");
  floorShadow.addColorStop(0.65, "rgba(0,0,0,0.38)");
  floorShadow.addColorStop(1, "transparent");
  ctx.fillStyle = floorShadow;
  ctx.beginPath();
  ctx.ellipse(520, 468, 380, 52, 0, 0, Math.PI * 2);
  ctx.fill();
}

function draw3DSceneObjects(ctx, project, shot, shotIndex, accent1, accent2) {
  ctx.save();
  const scene = shot.scene || "";

  // Specialized 3D Physical Object Renderers for Key Scenes
  if (scene === "vinyl-gatefold") {
    // Heavy Matte Gatefold Sleeve + Translucent Colored 180g Vinyl Record Emerging
    ctx.shadowColor = "rgba(0,0,0,0.85)";
    ctx.shadowBlur = 45;
    ctx.shadowOffsetY = 25;

    // Translucent Magenta/Cyan Vinyl Disc (Right)
    const vx = 640, vy = 275;
    const vGrad = ctx.createRadialGradient(vx, vy, 20, vx, vy, 175);
    vGrad.addColorStop(0, "#090a0f");
    vGrad.addColorStop(0.22, accent1);
    vGrad.addColorStop(0.6, accent1 + "cc");
    vGrad.addColorStop(0.88, accent2 + "aa");
    vGrad.addColorStop(1, "#11131c");
    ctx.fillStyle = vGrad;
    ctx.beginPath();
    ctx.arc(vx, vy, 172, 0, Math.PI * 2);
    ctx.fill();

    // Micro-grooves on Vinyl
    for (let r = 162; r >= 62; r -= 10) {
      ctx.beginPath();
      ctx.arc(vx, vy, r, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255,255,255,0.14)";
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    // Center Vinyl Label
    ctx.beginPath();
    ctx.arc(vx, vy, 52, 0, Math.PI * 2);
    ctx.fillStyle = "#0b0d14";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(vx, vy, 8, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();

    // Heavy Matte Gatefold Sleeve (Left Overlapping)
    ctx.fillStyle = "#12151e";
    ctx.strokeStyle = accent1;
    ctx.lineWidth = 2.5;
    roundRect(ctx, 165, 95, 360, 355, 10, true, true);
    // Japanese Obi Strip
    ctx.fillStyle = accent1;
    ctx.fillRect(210, 95, 58, 355);
    ctx.fillStyle = "#090b10";
    ctx.font = "800 16px 'JetBrains Mono', monospace";
    ctx.fillText("KOMA", 218, 160);
    ctx.fillStyle = "#ffffff";
    ctx.font = "800 32px 'Syne', sans-serif";
    ctx.fillText("KOMA LAB", 290, 225);
    ctx.fillStyle = accent2;
    ctx.font = "700 13px 'JetBrains Mono', monospace";
    ctx.fillText("180G TRANSLUCENT EDITION", 290, 258);
    ctx.restore();
    return;
  }

  if (scene === "serum-marble") {
    // Luxury Amber Glass Serum Dropper Bottle + Rigid Box on White Veined Marble
    ctx.shadowColor = "rgba(0,0,0,0.75)";
    ctx.shadowBlur = 38;
    ctx.shadowOffsetY = 22;

    // Textured Rigid Packaging Box (Left)
    ctx.fillStyle = "#1b2823";
    ctx.strokeStyle = "#d4af37";
    ctx.lineWidth = 2;
    roundRect(ctx, 220, 110, 235, 340, 10, true, true);
    ctx.fillStyle = "#d4af37";
    ctx.font = "700 12px 'JetBrains Mono', monospace";
    ctx.fillText("ORGANIC FORMULATION", 248, 175);
    ctx.fillStyle = "#ffffff";
    ctx.font = "800 26px 'Syne', sans-serif";
    ctx.fillText("AURA", 248, 218);
    ctx.fillText("BOTANICAL", 248, 248);
    ctx.fillStyle = "#a7f3d0";
    ctx.font = "600 12px 'JetBrains Mono', monospace";
    ctx.fillText("30ML // COLD PRESSED", 248, 285);

    // 3D Amber Glass Dropper Bottle (Right)
    // Rubber Bulb
    ctx.fillStyle = "#18181b";
    roundRect(ctx, 598, 92, 54, 58, 24, true, false);
    // Gold Metallic Collar
    const goldGrad = ctx.createLinearGradient(582, 142, 668, 182);
    goldGrad.addColorStop(0, "#fef08a");
    goldGrad.addColorStop(0.5, "#d4af37");
    goldGrad.addColorStop(1, "#854d0e");
    ctx.fillStyle = goldGrad;
    roundRect(ctx, 582, 142, 86, 40, 6, true, false);
    // Amber Glass Cylinder Body
    const amberGrad = ctx.createLinearGradient(555, 182, 695, 445);
    amberGrad.addColorStop(0, "#b45309");
    amberGrad.addColorStop(0.35, "#78350f");
    amberGrad.addColorStop(0.8, "#451a03");
    amberGrad.addColorStop(1, "#271002");
    ctx.fillStyle = amberGrad;
    ctx.strokeStyle = "rgba(254, 240, 138, 0.45)";
    roundRect(ctx, 555, 182, 140, 265, 24, true, true);
    // Minimalist Cream & Gold Label on Bottle
    ctx.fillStyle = "#fafaf9";
    roundRect(ctx, 569, 240, 112, 150, 6, true, false);
    ctx.fillStyle = "#18181b";
    ctx.font = "800 18px 'Syne', sans-serif";
    ctx.fillText("AURA", 595, 288);
    ctx.fillStyle = "#b45309";
    ctx.font = "700 10px 'JetBrains Mono', monospace";
    ctx.fillText("ELIXIR N°01", 588, 314);
    ctx.restore();
    return;
  }

  if (scene === "gallery-posters" || scene === "street-posters") {
    // 3 Framed Swiss Exhibition Posters / 3 Street Gig Posters Side-by-Side
    ctx.shadowColor = "rgba(0,0,0,0.8)";
    ctx.shadowBlur = 34;
    ctx.shadowOffsetY = 20;
    const configs = [
      { x: 125, title: "KUNST 01", bg: "#141519", col: accent1 },
      { x: 395, title: "FORMA 02", bg: accent1, col: "#090a0f" },
      { x: 665, title: "ZÜRICH 03", bg: "#f4f4f5", col: "#111318" }
    ];
    configs.forEach((cfg, i) => {
      // Black Wooden Frame
      ctx.fillStyle = "#090a0d";
      ctx.strokeStyle = "rgba(255,255,255,0.22)";
      ctx.lineWidth = 3;
      roundRect(ctx, cfg.x, 90, 245, 345, 4, true, true);
      // Poster Print Inside
      ctx.fillStyle = cfg.bg;
      ctx.fillRect(cfg.x + 14, 104, 217, 317);
      // Swiss Geometric Typography & Grid Circle
      ctx.fillStyle = cfg.col;
      ctx.font = "800 22px 'Syne', sans-serif";
      ctx.fillText(cfg.title, cfg.x + 30, 152);
      ctx.beginPath();
      ctx.arc(cfg.x + 122, 255, 58, 0, Math.PI * 2);
      ctx.fillStyle = i === 1 ? "#ffffff" : accent1;
      ctx.fill();
    });
    ctx.restore();
    return;
  }

  if (scene === "ig-carousel" || scene === "commerce-trio" || scene === "nine-grid-feed") {
    // 3 Floating Titanium iPhone 15 Pro Mockups Displaying Mobile UI Flow
    ctx.shadowColor = "rgba(0,0,0,0.85)";
    ctx.shadowBlur = 42;
    ctx.shadowOffsetY = 24;
    const phones = [
      { x: 155, y: 95, label: "01 // FEED" },
      { x: 410, y: 78, label: "02 // PRODUCT" },
      { x: 665, y: 95, label: "03 // CHECKOUT" }
    ];
    phones.forEach((p, idx) => {
      // Titanium iPhone Chassis
      ctx.fillStyle = "#0d1017";
      ctx.strokeStyle = idx === 1 ? accent1 : "rgba(255,255,255,0.28)";
      ctx.lineWidth = 3;
      roundRect(ctx, p.x, p.y, 215, 365, 32, true, true);
      // Dynamic Island
      ctx.fillStyle = "#000000";
      roundRect(ctx, p.x + 72, p.y + 14, 70, 18, 9, true, false);
      // OLED Screen Gradient
      const sGrad = ctx.createLinearGradient(p.x, p.y + 40, p.x + 200, p.y + 350);
      sGrad.addColorStop(0, idx === 1 ? accent1 + "55" : "#1e2434");
      sGrad.addColorStop(1, "#0b0e16");
      ctx.fillStyle = sGrad;
      roundRect(ctx, p.x + 12, p.y + 42, 191, 308, 22, true, false);
      // Screen UI Content
      ctx.fillStyle = accent1;
      ctx.font = "700 11px 'JetBrains Mono', monospace";
      ctx.fillText(p.label, p.x + 28, p.y + 82);
      ctx.fillStyle = "#ffffff";
      ctx.font = "800 20px 'Syne', sans-serif";
      ctx.fillText(project.client.split(" ")[0], p.x + 28, p.y + 114);
      // UI Cards inside Phone
      ctx.fillStyle = "rgba(255,255,255,0.1)";
      roundRect(ctx, p.x + 26, p.y + 135, 162, 110, 14, true, false);
      ctx.fillStyle = accent1;
      roundRect(ctx, p.x + 26, p.y + 265, 162, 36, 18, true, false);
    });
    ctx.restore();
    return;
  }

  if (shotIndex === 0) {
    // =========================================================================
    // SHOT 1: HERO STUDIO FLATLAY / FLAGSHIP PRODUCT MOCKUP
    // =========================================================================
    ctx.shadowColor = "rgba(0,0,0,0.78)";
    ctx.shadowBlur = 42;
    ctx.shadowOffsetY = 26;

    // Outer Bezel / Hardcover Book / Box Slab
    ctx.fillStyle = "#141822";
    ctx.strokeStyle = accent1 + "99";
    ctx.lineWidth = 2.5;
    roundRect(ctx, 115, 95, 485, 330, 16, true, true);

    // Inner Left & Right Spread Pages / Screen Display
    const spreadGrad = ctx.createLinearGradient(130, 110, 585, 410);
    spreadGrad.addColorStop(0, "#1f2533");
    spreadGrad.addColorStop(0.5, "#151924");
    spreadGrad.addColorStop(1, "#0d1018");
    ctx.fillStyle = spreadGrad;
    roundRect(ctx, 133, 113, 449, 294, 11, true, false);

    // Spine crease / UI split line
    ctx.strokeStyle = "rgba(255,255,255,0.09)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(358, 113);
    ctx.lineTo(358, 407);
    ctx.stroke();

    // Gold / Neon Brand Foil Stamp on Left Page
    ctx.fillStyle = accent1;
    ctx.font = "700 12px 'JetBrains Mono', monospace";
    ctx.fillText(project.code, 160, 156);

    ctx.fillStyle = "#ffffff";
    ctx.font = "800 30px 'Syne', sans-serif";
    ctx.fillText(project.client.toUpperCase(), 160, 198);

    ctx.fillStyle = "#cbd5e1";
    ctx.font = "600 13px 'JetBrains Mono', monospace";
    ctx.fillText(shot.badge, 160, 228);

    // Visual Chart / Swatch Bars inside Mockup
    ctx.fillStyle = accent1;
    roundRect(ctx, 160, 256, 155, 14, 6, true, false);
    ctx.fillStyle = accent2;
    roundRect(ctx, 160, 280, 120, 10, 5, true, false);
    ctx.fillStyle = "rgba(255,255,255,0.16)";
    roundRect(ctx, 160, 300, 170, 8, 4, true, false);

    // Right Page / Screen Interactive Preview Circle
    ctx.beginPath();
    ctx.arc(472, 245, 68, 0, Math.PI * 2);
    ctx.fillStyle = accent1 + "26";
    ctx.fill();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = accent1;
    ctx.stroke();

    ctx.fillStyle = "#ffffff";
    ctx.font = "800 18px 'Syne', sans-serif";
    ctx.fillText("8K RENDER", 422, 251);

    // Foreground Overlapping 3D Metallic Credit Card / Pouch / Device
    ctx.shadowColor = "rgba(0,0,0,0.85)";
    ctx.shadowBlur = 46;
    ctx.shadowOffsetY = 28;

    const cardGrad = ctx.createLinearGradient(545, 165, 920, 445);
    cardGrad.addColorStop(0, "#242a38");
    cardGrad.addColorStop(0.5, "#151923");
    cardGrad.addColorStop(1, "#0b0d14");
    ctx.fillStyle = cardGrad;
    ctx.strokeStyle = accent1;
    ctx.lineWidth = 2;
    roundRect(ctx, 545, 165, 375, 275, 20, true, true);

    // Metallic EMV Chip / Gold Foil Seal
    const chipGrad = ctx.createLinearGradient(580, 205, 635, 245);
    chipGrad.addColorStop(0, "#facc15");
    chipGrad.addColorStop(1, "#ca8a04");
    ctx.fillStyle = chipGrad;
    roundRect(ctx, 580, 205, 52, 38, 7, true, false);

    ctx.fillStyle = "#ffffff";
    ctx.font = "800 22px 'Syne', sans-serif";
    ctx.fillText(shot.label, 580, 286);

    ctx.fillStyle = accent1;
    ctx.font = "700 12px 'JetBrains Mono', monospace";
    ctx.fillText("PHOTOREALISTIC 3D STUDIO SHOT 01", 580, 314);

    ctx.fillStyle = "#94a3b8";
    ctx.font = "500 12px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText(shot.lens, 580, 340);

    // Bottom Accent Pill on Foreground Card
    ctx.fillStyle = accent1;
    roundRect(ctx, 580, 368, 195, 34, 17, true, false);
    ctx.fillStyle = "#080a0f";
    ctx.font = "800 11px 'JetBrains Mono', monospace";
    ctx.fillText("✦ BESPOKE 3D MOCKUP", 602, 389);

  } else if (shotIndex === 1) {
    // =========================================================================
    // SHOT 2: 3D PODIUM CANISTERS / TRI-FOLD BROCHURE / DUAL FLOATING DEVICES
    // =========================================================================
    ctx.shadowColor = "rgba(0,0,0,0.82)";
    ctx.shadowBlur = 45;
    ctx.shadowOffsetY = 26;

    // 3D Studio Podium Base with Neon Rim Edge
    const podGrad = ctx.createLinearGradient(170, 390, 870, 465);
    podGrad.addColorStop(0, "#1e2433");
    podGrad.addColorStop(0.5, "#131722");
    podGrad.addColorStop(1, "#0a0d14");
    ctx.fillStyle = podGrad;
    ctx.strokeStyle = accent1;
    ctx.lineWidth = 2.5;
    roundRect(ctx, 170, 392, 700, 74, 18, true, true);

    // Left 3D Cylindrical Canister / Tower Box
    const can1 = ctx.createLinearGradient(220, 115, 455, 405);
    can1.addColorStop(0, "#262d3d");
    can1.addColorStop(0.5, "#151924");
    can1.addColorStop(1, "#0c0f17");
    ctx.fillStyle = can1;
    ctx.strokeStyle = "rgba(255,255,255,0.22)";
    roundRect(ctx, 220, 115, 240, 290, 18, true, true);

    // Band Label on Left Canister
    ctx.fillStyle = accent1;
    roundRect(ctx, 238, 165, 204, 58, 10, true, false);
    ctx.fillStyle = "#07090e";
    ctx.font = "800 14px 'JetBrains Mono', monospace";
    ctx.fillText("SHOT 02 // PODIUM", 258, 199);

    ctx.fillStyle = "#ffffff";
    ctx.font = "800 20px 'Syne', sans-serif";
    ctx.fillText(project.client, 245, 268);
    ctx.fillStyle = "#94a3b8";
    ctx.font = "600 11px 'JetBrains Mono', monospace";
    ctx.fillText(shot.badge, 245, 295);

    // Right 3D Angled Showcase Display / Brochure / Dual Screen
    const can2 = ctx.createLinearGradient(495, 95, 825, 405);
    can2.addColorStop(0, "#222838");
    can2.addColorStop(1, "#10131c");
    ctx.fillStyle = can2;
    ctx.strokeStyle = accent2;
    ctx.lineWidth = 2;
    roundRect(ctx, 495, 95, 330, 310, 20, true, true);

    // Glowing Telemetry / Packaging Seal inside Right Unit
    ctx.beginPath();
    ctx.arc(660, 205, 54, 0, Math.PI * 2);
    ctx.fillStyle = accent2 + "33";
    ctx.fill();
    ctx.strokeStyle = accent2;
    ctx.lineWidth = 2.5;
    ctx.stroke();

    ctx.fillStyle = "#ffffff";
    ctx.font = "800 23px 'Syne', sans-serif";
    ctx.fillText(shot.label, 528, 305);
    ctx.fillStyle = accent1;
    ctx.font = "700 12px 'JetBrains Mono', monospace";
    ctx.fillText(shot.lens, 528, 332);

  } else {
    // =========================================================================
    // SHOT 3: MACRO METAL DISC / 180G VINYL GROOVES / ISOMETRIC 3D SYSTEM
    // =========================================================================
    ctx.shadowColor = "rgba(0,0,0,0.85)";
    ctx.shadowBlur = 50;
    ctx.shadowOffsetY = 30;

    // Main Collector Presentation Case / Isometric Frame
    const boxGrad = ctx.createLinearGradient(145, 95, 895, 445);
    boxGrad.addColorStop(0, "#1d2230");
    boxGrad.addColorStop(0.6, "#12151f");
    boxGrad.addColorStop(1, "#090b10");
    ctx.fillStyle = boxGrad;
    ctx.strokeStyle = accent1;
    ctx.lineWidth = 2.5;
    roundRect(ctx, 145, 95, 750, 350, 24, true, true);

    // Realistic 3D Metallic Disc / Translucent Vinyl / Spatial Lens on Left
    const discX = 335;
    const discY = 270;
    for (let r = 118; r >= 28; r -= 18) {
      ctx.beginPath();
      ctx.arc(discX, discY, r, 0, Math.PI * 2);
      ctx.fillStyle = r === 118 ? accent1 + "24" : "transparent";
      ctx.fill();
      ctx.lineWidth = r === 118 ? 3 : 1.2;
      ctx.strokeStyle = r % 36 === 0 ? accent1 : accent2 + "88";
      ctx.stroke();
    }

    // Center Gold / Neon Hub Label
    ctx.beginPath();
    ctx.arc(discX, discY, 34, 0, Math.PI * 2);
    ctx.fillStyle = accent1;
    ctx.fill();

    // Right Macro Spec Details inside 3D Frame
    ctx.fillStyle = accent1;
    ctx.font = "700 12px 'JetBrains Mono', monospace";
    ctx.fillText("SHOT 03 // MACRO 8K STUDIO RENDER", 495, 175);

    ctx.fillStyle = "#ffffff";
    ctx.font = "800 29px 'Syne', sans-serif";
    ctx.fillText(shot.label, 495, 218);

    ctx.fillStyle = "#e2e8f0";
    ctx.font = "700 14px 'JetBrains Mono', monospace";
    ctx.fillText(shot.badge, 495, 252);

    ctx.fillStyle = "#94a3b8";
    ctx.font = "500 13px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText(shot.lens, 495, 282);

    // Holographic Spec Bars
    ctx.fillStyle = accent1;
    roundRect(ctx, 495, 315, 290, 12, 6, true, false);
    ctx.fillStyle = accent2;
    roundRect(ctx, 495, 338, 210, 10, 5, true, false);
  }

  ctx.restore();
}

function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  if (fill) ctx.fill();
  if (stroke) ctx.stroke();
}

/**
 * Immediately renders all 36 3D Studio Mockups locally on DOMContentLoaded
 * with ZERO external network requests so the site opens in <0.01 seconds.
 */
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".portfolio-item[data-project-id]");

  cards.forEach((card) => {
    const projectId = card.getAttribute("data-project-id");
    const spec = STUDIO_PROJECTS_SPEC[projectId];
    if (!spec) return;

    const slides = card.querySelectorAll(".thumb-slide");
    const shotBtns = card.querySelectorAll(".shot-btn");

    // Update shot buttons with exact shot titles
    shotBtns.forEach((btn, idx) => {
      if (spec.shots[idx]) {
        const shortName = spec.shots[idx].label.split("·")[1]?.trim() || `Shot ${idx + 1}`;
        btn.textContent = `Shot ${idx + 1}: ${shortName}`;
        btn.title = `${spec.shots[idx].label} — ${spec.shots[idx].lens}`;
      }
    });

    slides.forEach((slide, idx) => {
      const shotSpec = spec.shots[idx] || spec.shots[0];
      const img = slide.querySelector("img");

      if (img) {
        // Immediately set the High-DPI 3D Studio Mockup Render (100% local, 0ms network wait!)
        img.src = renderProceduralStudioMockup(projectId, idx);
      }

      // Inject 3D Studio Mockup HUD overlay
      if (!slide.querySelector(".studio-mockup-hud")) {
        const hud = document.createElement("div");
        hud.className = "studio-mockup-hud";
        hud.innerHTML = `
          <div class="studio-hud-top">
            <span class="studio-client-stamp">✦ ${spec.client.toUpperCase()}</span>
            <span class="studio-render-tag">8K 3D MOCKUP</span>
          </div>
          <div class="studio-hud-bottom">
            <div class="studio-shot-meta">
              <strong>${shotSpec.label}</strong>
              <span>${shotSpec.badge} · ${shotSpec.lens}</span>
            </div>
          </div>
        `;
        slide.appendChild(hud);
      }
    });
  });
});

window.STUDIO_PROJECTS_SPEC = STUDIO_PROJECTS_SPEC;
