const PHASES = {
  phase1: {
    id: 'phase1',
    title: 'The Launchpad',
    subtitle: '新手入门必备',
    icon: '🚀',
    unlockRequirement: 0,
    tutorials: [
      {
        id: 'phase1-ep01',
        shortTitle: '[Phase 1 EP01]',
        title: 'How do I choose my first 3D printer?',
        author: 'Xinyi Li',
        points: 20,
        skillBonus: 0,
        content: `
          <p class="update-date">Last Updated: Feb 2026</p>
          <p>Don't just hunt for the absolute cheapest clone on the market. In 2026, the real choice isn't about "quality"—most mainstream brands produce great results. The real choice is between a machine that is an "Appliance" (focused on printing) and one that is a "Project" (focused on tinkering).</p>
          
          <h2>FDM vs. Resin: Which one should I start with?</h2>
          <p>This is the "fork in the road." Based on our tracking of over 10,000+ community members, most beginners find more long-term success starting with FDM:</p>
          <ul>
            <li><strong>FDM (Filament)</strong>: Uses spools of plastic. Best for functional parts, toys, and large props. It's safer, cleaner, and the "standard" 3D printing experience.</li>
            <li><strong>Resin (SLA/LCD)</strong>: Uses liquid chemicals. Best for high-detail miniatures (D&D) and jewelry. <em>Warning: It is messy, smells, and requires gloves/masks.</em></li>
          </ul>
          <p><strong>Meshy's Take:</strong> Start with FDM unless you specifically only want to print tiny 28mm soldiers.</p>
          
          <h2>The "Appliance" vs. The "DIY Path": What's the difference?</h2>
          <p>Instead of looking at price tags, look at the workflow:</p>
          <ul>
            <li><strong>The Appliance Experience</strong>: These are "ready-to-print" machines from reputable mainstream brands. They focus on UX, offering AI-assisted monitoring and seamless app integration so you can spend your time creating, not fixing.</li>
            <li><strong>The DIY Path</strong>: Often found at the budget end, these require manual tuning and constant "tinkering". Great for learning how machines work, but frustrating if you just want a finished model.</li>
          </ul>
          
          <h2>How do I know if a printer is "Newbie-Friendly"?</h2>
          <p>In 2026, features like Auto Bed Leveling (ABL) and PEI Build Plates are standard on most mid-range machines. Look for these "Newbie-Friendly" extras:</p>
          <ol>
            <li><strong>Remote Monitoring & App Control</strong>: Receive mobile alerts, view live progress, and pause prints from your phone.</li>
            <li><strong>Filament Runout Sensor</strong>: Automatically pauses if you run out of plastic mid-print.</li>
          </ol>
        `,
        faq: [
          { q: 'Is 3D printing an expensive hobby?', a: 'The initial cost is the printer ($200-$1,000). After that, a standard 1kg spool of PLA filament costs about $15-$25 and can print roughly 40-50 small "Benchy" boats. It is much cheaper than collecting high-end statues or LEGO sets.' },
          { q: 'Can I put a 3D printer in my bedroom?', a: 'We don\'t recommend it. While FDM printing is generally safe, it still produces "Ultra-fine Particles" (UFPs). It\'s best to keep it in a well-ventilated room, an office, or a garage with some airflow.' }
        ]
      },
      {
        id: 'phase1-ep02',
        shortTitle: '[Phase 1 EP02]',
        title: 'Is 3D printing safe? What you need to know about fumes and fire',
        author: 'Xinyi Li',
        points: 20,
        skillBonus: 0,
        content: `
          <p class="update-date">Last Updated: Feb 2026</p>
          <p>3D printing is safe if you aren't reckless. Modern machines are much safer than they used to be, but you are still melting plastic in your house. Use common sense: don't huff the fumes, and don't leave a "tinker" printer unattended.</p>
          
          <h2>Fumes: What are you actually breathing?</h2>
          <p>The "smell" of printing depends entirely on the material. Based on air quality studies, FDM and Resin have very different safety profiles:</p>
          <ul>
            <li><strong>FDM (Filament)</strong>: Standard PLA is generally considered safe, but it still emits Ultra-fine Particles (UFPs) and Volatile Organic Compounds (VOCs). Materials like ABS or ASA are "spicy" and require a dedicated enclosure and external venting.</li>
            <li><strong>Resin (SLA)</strong>: These chemicals are sensitizers. You <em>must</em> wear nitrile gloves and a respirator. Never handle uncured resin with bare skin.</li>
          </ul>
          <p><strong>Meshy suggest</strong> keeping any 3D printer out of your bedroom to avoid long-term exposure to particulates.</p>
          
          <h2>Fire Safety: Is my printer a fire hazard?</h2>
          <p>Early 3D printers were notorious for "Thermal Runaway"—where the heater gets stuck "on" until it catches fire.</p>
          <ul>
            <li><strong>Modern Gear</strong>: In 2026, reputable mainstream "Appliance-style" printers include robust firmware protections as a default. These systems automatically shut the machine down if a temperature anomaly is detected.</li>
            <li><strong>Budget "Clones"</strong>: If you bought a $99 "no-name" printer, double-check that "Thermal Runaway Protection" is enabled in the settings.</li>
          </ul>
        `,
        faq: [
          { q: 'Can I leave my 3D printer running while I\'m at work?', a: 'For high-end, reliable machines with built-in sensors, many users do this daily. However, for your first few weeks, we recommend only printing while you are home until you trust your setup.' },
          { q: 'Are 3D printed items food-safe?', a: 'Generally, no. Even if the plastic is "food-safe," the tiny gaps between layers are breeding grounds for bacteria. Use 3D prints for display or utility, not for your dinner plate.' },
          { q: 'Is it safe to have a 3D printer around pets or kids?', a: 'Only if it\'s enclosed. Hotends reach 220°C+ and the moving parts can easily pinch small fingers or inquisitive paws. An enclosure is a "must-have" for family-friendly setups.' }
        ]
      },
      {
        id: 'phase1-ep03',
        shortTitle: '[Phase 1 EP03]',
        title: 'What do these 3D printing words mean? A Beginner\'s Dictionary',
        author: 'Xinyi Li',
        points: 20,
        skillBonus: 0,
        content: `
          <p class="update-date">Last Updated: Feb 2026</p>
          <p>3D printing is a world of weird acronyms and engineering slang. This is your cheat sheet to understanding the community on Reddit and knowing exactly why someone is telling you to "check your Z-offset".</p>
          
          <h2>What are the big "Three" terms you need to know?</h2>
          <p>Before you hit print, you need to understand the workflow:</p>
          <ul>
            <li><strong>FDM (Fused Deposition Modeling)</strong>: The most common type of hobbyist printing that melts spools of plastic filament.</li>
            <li><strong>Slicer</strong>: The software (like Bambu Studio or Cura) that acts as a "translator," turning your 3D model into machine instructions.</li>
            <li><strong>G-Code</strong>: The actual language the printer speaks—it is a text file containing a long list of coordinates for the nozzle to follow.</li>
          </ul>
          
          <h2>What are the most common hardware parts?</h2>
          <ul>
            <li><strong>Hotend</strong>: The metal part that gets very hot to melt the plastic filament so it can flow out. Think of it as the "heating element" in a glue gun.</li>
            <li><strong>Extruder</strong>: The motor and gears that "push" the plastic into the hotend.</li>
            <li><strong>Build Plate / Bed</strong>: The surface where the model is built; often made of textured steel (PEI).</li>
          </ul>
          
          <h2>What terms will save your prints from failing?</h2>
          <ul>
            <li><strong>Z-Offset</strong>: The tiny, critical gap between the nozzle and the bed. If this is wrong, your print won't stick or will get squashed.</li>
            <li><strong>Supports</strong>: Temporary "scaffolding" for parts of your model that hang in mid-air (overhangs).</li>
            <li><strong>Brim</strong>: A thin, flat layer of plastic around the base of your model to stop it from peeling off the bed.</li>
          </ul>
        `,
        faq: [
          { q: 'What is a "Benchy"?', a: 'It is a small toy boat (3DBenchy) used as the universal benchmark for 3D printers. If your Benchy looks clean, your machine is "dialed in".' },
          { q: 'What does "Non-Manifold" mean?', a: 'It means your 3D model has "holes" or errors in the mesh that make it impossible for the slicer to understand. AI-generated models often need a "Repair" to become manifold.' }
        ]
      },
      {
        id: 'phase1-ep04',
        shortTitle: '[Phase 1 EP04]',
        title: 'What is the Day 1 checklist for a successful first print?',
        author: 'Xinyi Li',
        points: 20,
        skillBonus: 0,
        content: `
          <p class="update-date">Last Updated: Feb 2026</p>
          <p>Don't just plug it in and pray. Most "Day 1" failures are caused by loose hardware or a dirty build plate. Follow this ritual to ensure your first "Benchy" doesn't turn into a ball of plastic yarn.</p>
          
          <h2>Is the hardware actually ready to rock?</h2>
          <p>Before you flip the power switch, do a quick "sanity check" on the machine:</p>
          <ul>
            <li><strong>Tension the Belts</strong>: They should feel firm and "ping" like a low guitar string when plucked.</li>
            <li><strong>Clean the Bed</strong>: Even if it's brand new, wipe the build plate with 90%+ Isopropyl Alcohol (IPA) to remove factory oils or fingerprints.</li>
            <li><strong>The "Paper Test"</strong>: If your printer doesn't have auto-leveling, use a piece of A4 paper to set your Z-Offset until there is a slight "tug".</li>
          </ul>
          
          <h2>What are the "Golden" software settings for a first try?</h2>
          <p>Don't get fancy with your slicer on Day 1:</p>
          <ul>
            <li><strong>Material</strong>: Use the spool of PLA —it is the "King" of beginner materials. While some brands include a sample, many printers don't ship with filament anymore—always have a backup roll ready.</li>
            <li><strong>Profiles</strong>: Use the "Standard" or "0.2mm Optimal" default profile in Bambu Studio or Cura.</li>
            <li><strong>Speed</strong>: Don't floor it; keep your initial layer speed slow (around 20mm/s) to ensure it sticks.</li>
          </ul>
        `,
        faq: [
          { q: 'What should my first print be?', a: 'Print the "3DBenchy" boat. It is designed to test every part of your printer, from overhangs to cooling, and it\'s the universal language of the community.' },
          { q: 'My print is finished! How do I get it off the bed?', a: 'Wait for the bed to cool to room temperature. Most modern PEI plates will "pop" the print off as the metal shrinks. If it\'s still stuck, gently flex the steel plate or use a plastic scraper (spatula) to pry it loose.' },
          { q: 'Should I use glue on the bed?', a: 'On a clean, modern PEI bed with correct Z-offset, you usually don\'t need it for PLA. If you are struggling with adhesion, re-clean the bed.' }
        ]
      },
      {
        id: 'phase1-ep05',
        shortTitle: '[Phase 1 EP05]',
        title: 'What are the "Must-Have" tools for every 3D printing kit?',
        author: 'Xinyi Li',
        points: 20,
        skillBonus: 0,
        content: `
          <p class="update-date">Last Updated: Feb 2026</p>
          <p>Most printers ship with a "starter bag" of cheap tools, but they are usually the bare minimum. If you want to spend more time printing and less time struggling, you need a dedicated kit for cleaning, maintenance, and the inevitable "clog surgery".</p>
          
          <h2>What tools are essential for bed adhesion and cleaning?</h2>
          <p>The secret to a perfect first layer isn't a "magic setting"—it's a clean surface.</p>
          <ul>
            <li><strong>Isopropyl Alcohol (IPA) 90%+</strong>: This is the "Gold Standard" for wiping down your PEI bed to remove oils and fingerprints.</li>
            <li><strong>Microfiber Cloth</strong>: Use this to wipe the bed without leaving lint or scratches behind.</li>
            <li><strong>Dish Soap</strong>: If IPA isn't working, a simple wash with warm water and basic dish soap is the best way to deep-clean a build plate.</li>
          </ul>
          
          <h2>What do I need for removing supports and post-processing?</h2>
          <p>Once the print is done, the work isn't quite over:</p>
          <ul>
            <li><strong>Flush Cutters (Nippers)</strong>: These are mandatory for snipping filament and removing stubborn support structures.</li>
            <li><strong>Deburring Tool</strong>: Perfect for cleaning up sharp edges or the "Elephant's Foot" on the bottom of your prints.</li>
            <li><strong>Needle-nose Pliers</strong>: Essential for reaching into tight gaps to pull out tree supports.</li>
          </ul>
          
          <h2>What tools are required for hardware maintenance?</h2>
          <ul>
            <li><strong>Digital Calipers</strong>: If you want to ensure your 20mm cube is actually 20mm, you need these for dimensional accuracy.</li>
            <li><strong>Nozzle Cleaning Needles</strong>: For those minor clogs that don't require full "clog surgery".</li>
            <li><strong>Allen Key Set</strong>: Most printers use metric hex bolts; a high-quality set will prevent you from stripping screws.</li>
          </ul>
        `,
        faq: [
          { q: 'Do I really need a glue stick?', a: 'For PLA on a clean PEI bed, usually no. Glue is often used as a "release agent" for materials like PETG so they don\'t stick too well and damage the bed.' },
          { q: 'Should I buy a 3D printing "Tool Kit" bundle?', a: 'Many "all-in-one" bundles on Amazon are filled with low-quality junk. You are better off buying a few high-quality basics like IPA, flush cutters, and a deburring tool separately.' }
        ]
      }
    ]
  },
  phase2: {
    id: 'phase2',
    title: 'AI-Powered Modeling',
    subtitle: 'Meshy 核心功能',
    icon: '🤖',
    unlockRequirement: 3,
    tutorials: [
      {
        id: 'phase2-ep01',
        shortTitle: '[Phase 2 EP01]',
        title: 'How does Meshy change the game for non-designers?',
        author: 'Joanne (Xuanmeng) Wang',
        points: 30,
        skillBonus: 10,
        content: `
          <p class="update-date">Last Updated: Feb 2026</p>
          <p>For years, the biggest barrier in 3D printing hasn't been hardware, but content creation. If you couldn't master complex CAD software, you were stuck printing files designed by others. However, <strong>Meshy changes this dynamic entirely</strong>. Powered by our latest Meshy 6, we transform you from a passive "downloader" into an active "creator." By bypassing the steep learning curve of traditional modeling, Meshy enables non-designers to turn imagination directly into physical reality.</p>
          
          <h2>Image to 3D: How Can I Turn a Sketch into a Printable Statue?</h2>
          <p>The most transformative workflow for beginners is Meshy's "Image to 3D" feature. Traditionally, turning a 2D idea into a 3D object required hours of digital sculpting. With Meshy, you simply upload a reference—whether it's a rough sketch you drew, a piece of concept art, or an AI-generated image.</p>
          <p>Meshy can interpret the depth, form, and structure of your 2D input to construct a detailed 3D model in minutes. <strong>Reliability is key here</strong>: according to our testing, Meshy 6 has increased the printable output success rate from 5% to over 90%. This means you can generate your own custom miniatures, props, or decorations without touching a single polygon, confident that the result will actually print.</p>
          
          <h2>Multi-Color Printing: How Do I Get Colorful Prints Without Manual Painting?</h2>
          <p>Creating vibrant, multi-colored models usually involves a painful choice: tedious hand-painting after printing, or complex "painting" within slicing software. Meshy eliminates this hassle by bridging the gap between AI texturing and physical filament.</p>
          <p>Our "Multi-Color Printing" feature automatically analyzes your model's texture and intelligently segments it into distinct color zones. Instead of spending hours manually coloring vertices in a slicer, Meshy maps the dominant colors directly to filament slots and exports a print-ready 3MF file. This automation allows non-designers to achieve professional-looking, multi-color prints instantly.</p>
        `,
        faq: [
          { q: 'Can I print Meshy models directly?', a: 'According to our internal testing, Meshy 6 has increased the printable output success rate from 5% to over 90%. Most generated models are ready for the slicer immediately. However, for specific cases (e.g. extremely delicate features or thin floating parts), you may still need to perform some manual modeling to ensure the physical object is durable enough.' },
          { q: 'Does the Multi-Color feature work on standard 3D printers?', a: 'The automatic coloring feature is designed for multi-material printers (like Bambu Lab AMS). However, if you have a standard single-color printer, you can still use Meshy to generate the geometry (shape) and print it perfectly in one color.' }
        ]
      },
      {
        id: 'phase2-ep02',
        shortTitle: '[Phase 2 EP02]',
        title: 'What are the Dos and Don\'ts for Meshy printability?',
        author: 'Xinyi Li',
        points: 30,
        skillBonus: 10,
        content: `
          <p class="update-date">Last Updated: Feb 2026</p>
          <p>Meshy can dream up anything, but your printer lives in the real world with gravity. If you want to avoid a bed full of plastic spaghetti, you need to "design for the nozzle."</p>
          
          <h2>🎯 The Golden Rule: Stability is King</h2>
          <p>Successful printing starts in the generation phase, not the slicer. For a high-success "set it and forget it" experience, follow the <strong>Flat & Low</strong> principle.</p>
          
          <h2>✅ The "High Success" Profile (Green Light)</h2>
          <p>Target these traits when prompting in Meshy to ensure a "Banger" print:</p>
          <ul>
            <li><strong>Large Footprint</strong>: Opt for models with a flat base or a wide contact area (think coasters, busts, or thick-legged characters). This ensures maximum bed adhesion.</li>
            <li><strong>Dense Geometry</strong>: Lean toward "solid" or stylized low-poly designs. They are structurally sound and handle infill better.</li>
            <li><strong>Gentle Slopes</strong>: Features that slope up gradually (less than 45°) are a dream to print and often don't even need supports.</li>
          </ul>
          
          <h2>❌ The "Spaghetti" Profile (Red Light)</h2>
          <p>These traits are "Printer Kryptonite"—avoid them unless you're a support-material wizard:</p>
          <ul>
            <li><strong>Spider-Legs</strong>: Tiny, free-floating limbs or thin antennas. They tend to snap during printing or support removal.</li>
            <li><strong>Acute Overhangs</strong>: Massive parts hanging in mid-air with nothing beneath them. These require heavy "scaffolding" (supports) and leave a messy surface finish.</li>
            <li><strong>Hollow/Shell Gaps</strong>: AI models with weird internal voids can confuse your slicer, leading to "ghost" layers that collapse.</li>
          </ul>
          
          <h2>💡 Pro-Tip: The "Base-First" Strategy</h2>
          <p>If you have a complex AI model you really want to print, don't fight gravity—bypass it.</p>
          <p>Try our "Add Base" feature in Meshy. It's the ultimate "cheat code" for intricate designs like miniatures and figurines. We provide dozens of pre-set bases to:</p>
          <ul>
            <li><strong>Prevent Failures</strong>: Eliminate issues caused by uneven or rounded bottoms.</li>
            <li><strong>Improve Quality</strong>: Give your printer a solid foundation for the entire build.</li>
          </ul>
        `,
        faq: [
          { q: 'Why doesn\'t my physical print look as detailed as the 3D view?', a: 'FDM printers have physical limits based on nozzle size (usually 0.4mm). While Meshy 6 generates sculpting-level detail, extremely tiny features may be "lost" or simplified by the slicer to maintain structural integrity during the print process.' }
        ]
      },
      {
        id: 'phase2-ep03',
        shortTitle: '[Phase 2 EP03]',
        title: 'Text-to-3D Workflow: How to craft banger prompts to generate printable models?',
        author: 'Joanne (Xuanmeng) Wang',
        points: 30,
        skillBonus: 10,
        content: `
          <p class="update-date">Last Updated: Feb 2026</p>
          <p>Crafting effective prompts is key to unlocking Meshy's full potential. When it comes to 3D printing, the words you choose define not just the aesthetic, but the structural integrity of your model. Master the art of the "banger prompt" to generate solid, print-ready 3D assets without wasting time on failed prints.</p>
          
          <h2>Workflow: How to turn texts into 3D models?</h2>
          <ol>
            <li><strong>Step 1: Select Model</strong> - Open the Meshy Workspace and choose Text to 3D mode to start your project.</li>
            <li><strong>Step 2: Enter Prompt</strong> - Paste your prompt into the input box.</li>
            <li><strong>Step 3: Generate</strong> - Hit the Generate button and watch your text transform into a 3D preview in seconds.</li>
            <li><strong>Step 4: Retry (If Needed)</strong> - If you are not satisfied with the result, you can regenerate the model.</li>
          </ol>
          
          <h2>✅ The Winning Formula: Subject + Physics + Style</h2>
          <ul>
            <li><strong>Define the Core Subject</strong>: First, describe your character, creature, or object clearly and concisely to capture its essence.</li>
            <li><strong>Add "Physical" Mass</strong>: Once the subject is defined, give it weight.
              <ul>
                <li><em>Keywords</em>: Chunky, Thick-walled, Sturdy, Blocky, Heavy.</li>
                <li><em>Example</em>: "A chunky robot with thick armor."</li>
              </ul>
            </li>
            <li><strong>Lock in a Solid Style</strong>: Choose aesthetics that naturally simplify geometry and close gaps.
              <ul>
                <li><em>Best Styles</em>: Low-poly, Voxel, Chibi, Totem, Stone Carving.</li>
                <li><em>Material Hints</em>: Adding words like Jade, Marble, or Wood encourages the AI to create continuous, watertight surfaces.</li>
              </ul>
            </li>
            <li><strong>Ground the Pose</strong>: Gravity is non-negotiable.
              <ul>
                <li><em>Keywords</em>: Standing firmly, Seated base, T-pose, Flat bottom.</li>
              </ul>
            </li>
          </ul>
          
          <h2>❌ The "Printer-Killer" Traps (What to Avoid)</h2>
          <p>Avoid these triggers that confuse slicers or create physical failures:</p>
          <ul>
            <li><strong>Gravity Defiers</strong>: Words like Flying, Levitating, or Jumping create disconnected parts that will collapse on the print bed.</li>
            <li><strong>Intangible Effects</strong>: Visual effects like Fire, Smoke, Magic aura, or Blur turn into messy, unprintable noise in 3D geometry.</li>
            <li><strong>Slicer Confusers</strong>: Avoid Hollow, Transparent, Glass, or Internal gears. These terms often create weird internal cavities or non-manifold geometry that ruin the print structure.</li>
            <li><strong>Fragile Details</strong>: Steer clear of Thin wires, Long flowing hair, or Insect legs unless you are an expert at removing supports.</li>
          </ul>
        `,
        faq: [
          { q: 'Why did my generated model collapse when printing?', a: 'This usually happens when prompts use words like flying or smoke, creating disconnected parts. Instead, use grounding terms like standing firmly or flat bottom to ensure the model has a solid, continuous base.' },
          { q: 'Why does my model look messy despite a detailed prompt?', a: 'Visual effect words like glowing, misty confuse 3D generators, often creating noise instead of shapes. Focus on physical structure and use keywords like solid, carved, or blocky to help Meshy generate clear, printable geometry.' }
        ]
      },
      {
        id: 'phase2-ep04',
        shortTitle: '[Phase 2 EP04]',
        title: 'Image-to-3D Workflow: How to Pick Right Images for 3D Generation?',
        author: 'Molly (Yihan) Sun',
        points: 30,
        skillBonus: 10,
        content: `
          <p class="update-date">Last Updated: Feb 2026</p>
          <p>Turning a photo into a fully realized 3D model might sound like magic — but with Meshy's Image-to-3D feature, it's just a few clicks away.</p>
          
          <h2>How to turn photos into 3D models?</h2>
          <ol>
            <li><strong>Step 1: Go to Workspace</strong> - Choose the Image-to-3D feature in Meshy.</li>
            <li><strong>Step 2: Upload Your Image</strong> - Select a high-resolution image with a standard front view.</li>
            <li><strong>Step 3: Generate</strong> - Click "Generate" and watch Meshy turn your 2D input into a high-quality 3D model in seconds.</li>
            <li><strong>Step 4: Retry if Needed</strong> - If you are not happy with the first result, don't worry—Meshy allows you to regenerate your model.</li>
          </ol>
          
          <h2>What kind of photos work best for 3D printing?</h2>
          <p>If you're a beginner and want to know what kind of images are easiest to use for good 3D printing results, here are some helpful tips:</p>
          <ul>
            <li><strong>Standard Front View</strong>: Use straightforward, front-facing angles. Clear orientation allows the model to capture shapes and proportions accurately.</li>
            <li><strong>Clean & Simple Backgrounds</strong>: White or minimal backgrounds keep the object distinct, making generation easier and results more precise.</li>
            <li><strong>Simple & Clear Details</strong>: Simplified details help the 3D generator produce accurate models faster and prevent messy geometry.</li>
            <li><strong>High Resolution & Sharpness</strong>: Well-lit, sharp images preserve surface details and textures, which improves 3D model quality.</li>
            <li><strong>Chibi Style</strong>: Chibi-style characters are ideal, as their shapes are easier for the 3D generator to interpret.</li>
            <li><strong>Thick Limbs & Strong Structures</strong>: Select images where characters or objects have thick arms, legs, or prominent parts.</li>
          </ul>
          
          <h2>Which image types should you avoid?</h2>
          <ul>
            <li><strong>Text on the Image</strong>: Avoid images containing text, as letters can confuse the 3D generator.</li>
            <li><strong>Unclear Object vs. Background</strong>: Do not use images where the object blends into the background.</li>
            <li><strong>Excessive Environmental Effects</strong>: Avoid smoke, fog, magical particles, or any effects that obscure the object's form.</li>
            <li><strong>Long Hair, Fur, or Fine Structures</strong>: Images with long hair, fur, or delicate hair-like parts are difficult for the generator to interpret accurately.</li>
          </ul>
        `,
        faq: [
          { q: 'What should I do if my object has asymmetrical details that aren\'t showing up correctly?', a: 'If a model looks too symmetrical or is missing unique features on one side, try using the Image Workspace to generate a slightly angled view or a "Three-Quarter" view before hitting the final 3D generate button.' },
          { q: 'Can I turn a hand-drawn sketch into a 3D model for printing?', a: 'Yes, Meshy is excellent at interpreting 2D sketches. For the best results, ensure your sketch has bold, clean outlines and is drawn from a straight-on perspective.' }
        ]
      },
      {
        id: 'phase2-ep05',
        shortTitle: '[Phase 2 EP05]',
        title: 'AI Model Repair: How to Fix Your STL Files for a Flawless Print?',
        author: 'Molly (Yihan) Sun',
        points: 30,
        skillBonus: 10,
        content: `
          <p class="update-date">Last Updated: Feb 2026</p>
          <p>Before sending the amazing model you created in Meshy straight to the printer, there's one small but important technical detail to check: <strong>non-manifold edges</strong>.</p>
          <p>The good news? Fixing this is easier than it sounds. Here is a quick, beginner-friendly guide to making your model "watertight" and ready for print.</p>
          
          <h2>Step 1: Download your Masterpiece</h2>
          <p>Go to your model page in Meshy. Click the green download icon in the bottom-right corner, select <strong>STL format</strong>, and click Download. This is the standard file type for 3D printing and the most compatible format for repair tools.</p>
          
          <h2>Step 2: Check for Slicer Red Flags</h2>
          <p>Open your favorite slicer (like Bambu Studio, Cura, or OrcaSlicer) and drop your file in. Keep a close eye on the bottom right corner for a pop-up warning.</p>
          <p>📌 If you see an error saying <strong>"Non-manifold edges detected"</strong>, stop right there! For a clean, professional print, it's better to fix the model's geometry before hitting "Slice".</p>
          
          <h2>Step 3: One-Click Fix</h2>
          <p>Head over to <strong>Formware's Online STL Repair</strong>. You can use this free online tool without hassle to fix your STL files quickly:</p>
          <ul>
            <li>Upload your original STL file.</li>
            <li>The tool will automatically scan for holes, flipped faces, and those pesky non-manifold edges.</li>
            <li>Within minutes, the tool patches every flaw, turning your mesh into a perfectly solid, print-ready file.</li>
          </ul>
          
          <h2>Step 4: Download & Slice</h2>
          <p>Once the repair is finished, download the fixed version of your model. Toss this new file back into your slicer. You'll notice the warnings are gone!</p>
          <p>Now you can safely hit "Slice," send it to your printer, and watch your Meshy creation come to life without any weird gaps or structural glitches.</p>
        `,
        faq: [
          { q: 'What exactly is a "non-manifold" edge, and why does it ruin my print?', a: 'It is a physical impossibility—like a shape with zero thickness or holes. Slicers can\'t distinguish "inside" from "outside," causing skipped layers or messy "spiderwebs."' },
          { q: 'Will repairing my STL file reduce the level of detail I created in Meshy?', a: 'Generally, no. Standard repair tools focus on fixing the "logic" of the mesh (closing holes and merging edges) rather than simplifying it.' }
        ]
      },
      {
        id: 'phase2-ep06',
        shortTitle: '[Phase 2 EP06]',
        title: 'AI Texturing: How to Add Textures to 3D Models in Meshy?',
        author: 'Molly (Yihan) Sun',
        points: 30,
        skillBonus: 10,
        content: `
          <p class="update-date">Last Updated: Feb 2026</p>
          <p>If you want to print vibrant, multi-color models, Meshy's AI Texturing is a feature you can't miss! With just one click, it generates high-quality textures for your models, making multi-color printing fast, flexible, and effortless.</p>
          
          <h2>Which types of 3D models can you texture?</h2>
          <p>There are two types of models that can be textured:</p>
          <ul>
            <li><strong>Models generated with Meshy</strong>: Select a model in your generation history. You can select a model with no texture or a textured model, but stylized and animated models are not supported for texturing.</li>
            <li><strong>Models uploaded by you</strong>: You can go to Workspace, click AI Texturing to upload your model, or click the upload button next to New Model on the model generation page.</li>
          </ul>
          
          <h2>How to apply the texture you want?</h2>
          <p>Once your model is loaded, navigate to the Texture tab. You have two ways to apply a texture:</p>
          
          <h3>Image Input: How to use reference photos for 3D textures?</h3>
          <p>Upload reference images in the Image Input section to guide the texture style, materials, or color details.</p>
          <p>✨ Tip: You can choose whether to enable Generate PBR Maps based on the effect you want to achieve.</p>
          <p>❗ However, PBR effects cannot be printed by regular 3D printers.</p>
          
          <h3>Text Input: How to write prompts for 3D textures?</h3>
          <p>Enter a text prompt in the Text Input field to describe the texture you want, such as materials, style, or surface details. If you're unsure what to write, use our <strong>Texture Helper</strong> to instantly transform simple ideas into professional prompts.</p>
          <p>Once everything is ready, click <strong>Texture</strong>. In just a few seconds, you'll receive a textured 3D model.</p>
          <p>Satisfied with the overall look but want to tweak a specific detail? You don't have to restart! You can fine-tune colors, patterns, and materials using <strong>Texture Edit</strong>.</p>
        `,
        faq: [
          { q: 'Does the AI texture follow my model\'s shape?', a: 'Yes! Meshy is "geometry-aware," meaning it recognizes surface features. It intelligently places textures based on your model\'s contours.' },
          { q: 'Can I re-texture a model multiple times to try different styles?', a: 'Absolutely! Select any textured model from your history to apply new prompts or images. This is perfect for creating seasonal variations of the same character without re-modeling.' }
        ]
      },
      {
        id: 'phase2-ep07',
        shortTitle: '[Phase 2 EP07]',
        title: 'Texture Edit: How to Refine and Customize Your 3D Model Textures?',
        author: 'Molly (Yihan) Sun',
        points: 30,
        skillBonus: 10,
        content: `
          <p class="update-date">Last Updated: Feb 2026</p>
          <p>The Texture Edit tool lets you customize the look of 3D models you've already generated. You can change colors, add patterns, or apply entirely new textures to specific parts of your model.</p>
          
          <h2>1️⃣ Navigate to Texture Edit</h2>
          <p>After your model has been textured, you'll see the Texture Edit icon at the bottom center of the screen.</p>
          <ul>
            <li>By default, you'll enter <strong>Free Camera Mode</strong>. Whenever you want to adjust the size or rotation of the model, you need to return to Free Camera Mode.</li>
            <li>The left panel displays your model along with a history of edits as you make changes.</li>
          </ul>
          <p>📌 Note: The Texture Edit view shows the original texture, not the PBR preview, even if PBR was previously enabled.</p>
          
          <h2>2️⃣ Edit the Texture</h2>
          <p>Texture Edit supports both <strong>AI Texture Edit</strong> and manual tools for precise control.</p>
          
          <h3>How to Edit Textures Using AI?</h3>
          <ol>
            <li><strong>Choose the edit region</strong>: You can use either a brush or lasso tool to choose which part you want to edit.</li>
            <li><strong>Prompt Input</strong>: Type a clear description of the new look in the prompt box.
              <ul>
                <li><em>Be specific</em>: Instead of "change to a different texture," try "a shiny, bronze texture with intricate carvings."</li>
                <li><em>Use descriptive words</em>: Mention colors, materials, and styles.</li>
              </ul>
            </li>
            <li><strong>Adjust Settings</strong>:
              <ul>
                <li><strong>Import Original Prompt</strong>: Start from your original texture prompt and refine it.</li>
                <li><strong>Image Reference</strong>: Upload reference images to guide the texture.</li>
                <li><strong>Prompt Influence Strength</strong>: Control how strongly your prompt affects the result.</li>
              </ul>
            </li>
            <li><strong>Retexture</strong>: Click the Retexture button to create a new texture.</li>
          </ol>
          
          <h3>How to Edit Textures Manually?</h3>
          <ul>
            <li><strong>Brush Tool</strong>: Healing Tool, Stamp Tool, Solid Paint Tool.</li>
            <li><strong>Decal Tool</strong>: Apply your own decals or texture images to the surface.</li>
          </ul>
          
          <h2>3️⃣ Apply or Discard Changes</h2>
          <p>If you like the new texture, click <strong>Apply</strong> to save the changes. If not, click the trash can icon and try again.</p>
          
          <h2>4️⃣ Save to Model</h2>
          <p>Once you're happy with all your changes, click the <strong>Save to Model</strong> button to create a new version of your textured 3D model.</p>
        `,
        faq: [
          { q: 'After multiple edits, can I revert to a previous step in the history?', a: 'Yes. The left panel keeps a record of your edit history, allowing you to return to any previous step and continue editing.' },
          { q: 'Does saving overwrite my original model?', a: 'No. Clicking Save to Model creates a new textured version. Your original model remains unchanged.' }
        ]
      },
      {
        id: 'phase2-ep08',
        shortTitle: '[Phase 2 EP08]',
        title: 'Texture Helper: How to Improve Your Texture Prompts with Meshy\'s AI Helper?',
        author: 'Molly (Yihan) Sun',
        points: 30,
        skillBonus: 10,
        content: `
          <p class="update-date">Last Updated: Feb 2026</p>
          
          <h2>What is Texture Helper?</h2>
          <p>When writing prompts, it's easy to get stuck—your description might be too vague, the colors off, or the style just won't come through. Don't worry—let <strong>Texture Helper</strong> handle it!</p>
          <p>Texture Helper is an AI assistant that guides you in crafting and refining prompts, helping you achieve the exact textures you want with ease.</p>
          
          <h2>What can you do with Texture Helper?</h2>
          <ul>
            <li><strong>Batch Prompt</strong> – Generate multiple texture prompts at once</li>
            <li><strong>Change Prompt Style</strong> – Quickly adjust the visual style</li>
            <li><strong>Image to Prompt</strong> – Convert reference images into usable prompts</li>
            <li><strong>Expand Prompt</strong> – Automatically enrich simple prompts with more detail</li>
          </ul>
          <p>You can also choose <strong>Create Image</strong> to generate reference images directly from your prompt.</p>
        `,
        faq: [
          { q: 'Can I edit the prompt after Texture Helper generates it?', a: 'Yes. The prompt appears in the text field, and you can manually add, delete, or modify any specific keywords before clicking "Generate" to ensure the final result matches your exact needs.' },
          { q: 'Does Texture Helper cost extra credits to use?', a: 'No. Texture Helper is a built-in tool designed to assist with prompt engineering. You only use credits when you proceed to generate the actual 3D texture.' }
        ]
      }
    ]
  },
  phase3: {
    id: 'phase3',
    title: 'The Juice',
    subtitle: '材料与耗材',
    icon: '🧵',
    unlockRequirement: 7,
    tutorials: [
      {
        id: 'phase3-ep01',
        shortTitle: '[Phase 3 EP01]',
        title: 'Why 90% of Your Prints Should Start With PLA Basic or PLA Matte?',
        author: 'Weihan Yang',
        images: ['assets/images/phase3-ep01/image_01.jpg', 'assets/images/phase3-ep01/image_02.jpg'],
        points: 30,
        skillBonus: 0,
        content: `
          <p class="update-date">Last updated: Feb 2026</p>
          <p>If 3D printing filaments were a royal family, PLA would be the beloved king that everyone loves. It's forgiving, affordable, and won't fill your house with chemical fumes.</p>
          <p>For beginners—especially those printing their first Meshy-generated model — <strong>PLA Basic or PLA Matte</strong> would be your best friend.</p>
          
          <h2>Which PLA finish should I choose: Basic or Matte?</h2>
          <ul>
            <li><strong>Basic PLA</strong>: Glossy, shiny finish that makes colors pop. Trade-off: visible layer lines can give prints a "cheap plastic" look.</li>
            <li><strong>Matte PLA</strong>: Hides layer lines beautifully with a clay-like, non-reflective surface. Community favorite for figurines and display pieces.</li>
          </ul>
          <p><strong>Quick rule of thumb</strong>: if your model has lots of fine detail (like a Meshy figurine), go Matte. If you want vivid, eye-catching color, go Basic.</p>
          
          <h2>Why should beginners start with PLA Basic & Matte?</h2>
          <ul>
            <li><strong>Easiest to print</strong>: Nozzle temp of 190–220°C, minimal warping, and better overhang performance than almost any other material.</li>
            <li><strong>Pleasant to work with</strong>: Unlike ABS, PLA gives off a faint, sweet aroma — almost like waffles. Always ventilate your space, though.</li>
            <li><strong>Widest availability</strong>: Basic and Matte PLA are stocked by every major brand in dozens of colors, making them easy to source anywhere.</li>
          </ul>
          
          <h2>What are PLA Basic & Matte's biggest weaknesses?</h2>
          <ul>
            <li><strong>Brittle under impact</strong> — Can snap under stress. Avoid using it for functional gears or load-bearing parts.</li>
            <li><strong>Softens at ~60°C</strong> — PLA's glass transition temperature is around 60°C. A print left in a hot car will deform. For heat-exposed parts, consider PETG.</li>
            <li><strong>Not ideal for outdoor use</strong> — PLA degrades under prolonged UV exposure. For outdoor projects, also switch to PETG.</li>
          </ul>
        `,
        faq: [
          { q: 'Can I paint or post-process PLA Basic and Matte prints?', a: 'Yes. PLA Matte takes paint particularly well due to its non-glossy surface. PLA Basic benefits from light sanding before painting to improve adhesion.' },
          { q: 'How should I store PLA filament?', a: 'Keep it sealed with silica gel packets. Moisture-absorbed PLA causes popping, stringing, and rough surfaces. A dry box is a worthwhile investment.' },
          { q: 'Is PLA environmentally friendly?', a: 'PLA is made from renewable resources like corn starch and is industrially compostable. However, it won\'t break down in a home compost bin or typical landfill within a normal timeframe.' }
        ]
      },
      {
        id: 'phase3-ep02',
        shortTitle: '[Phase 3 EP02]',
        title: 'Speciality PLA Filament: How Do I Print PLA Silk, Marble, Wood, and Glow-in-the-Dark?',
        author: 'Weihan Yang',
        images: ['assets/images/phase3-ep02/image_01.jpg'],
        points: 30,
        skillBonus: 0,
        content: `
          <p class="update-date">Last Updated: Feb 2026</p>
          <p>You've mastered PLA Basic and Matte. Now you want your Meshy models to look like metal, stone, or magic. Welcome to <strong>specialty PLA</strong> — standard PLA mixed with additives that change how prints look and feel. Each type has quirks, though. You shouldn't just use your standard profile and expect a banger.</p>
          
          <h2>1. How do I print Silk PLA for a metallic finish?</h2>
          <p>Silk PLA has a gorgeous metallic sheen that makes prints look like polished treasure. Though it's also the weakest PLA variant. The shiny additives ruin layer-to-layer bonding.</p>
          <ul>
            <li><strong>Temperature</strong>: Print at 215–230°C for maximum gloss (hotter than standard PLA).</li>
            <li><strong>Flow Trick</strong>: Lower your flow rate to 0.90 or 0.95 to prevent bloating.</li>
            <li><strong>Speed Limit</strong>: Slow down your outer walls to 30–40mm/s for maximum bling. High speeds disturb the polymer alignment and turn the finish matte.</li>
            <li><strong>Cooling Fan</strong>: 30–50%. Too much cooling also dulls the finish.</li>
          </ul>
          
          <h2>2. How do I get that natural stone look with Marble PLA?</h2>
          <p>Marble PLA is usually a white or grey PLA with tiny black specks suspended in it. The variegated texture hides layer lines and makes prints look like solid plaster.</p>
          <p><strong>The Risk</strong>: Most "Marble" PLA uses colored plastic specks, but some also use real rock powder. Check before you buy. If it contains real stone, use a 0.6mm nozzle to prevent clogs. Pigment-only versions work fine at 0.4mm.</p>
          
          <h2>3. How do I get the best results with Wood PLA?</h2>
          <p>Wood filament is PLA mixed with 30–40% wood dust. It smells like a woodshop when printing and can be sanded, stained, and varnished like real timber.</p>
          <ul>
            <li><strong>Temp Trick</strong>: Higher temperature = darker "burn" marks for wood grain effect. Print at 190°C for a light pine look, or 230°C for a dark mahogany look.</li>
            <li><strong>Nozzle Requirement</strong>: A 0.6mm nozzle is strongly recommended. 0.4mm nozzle will easily get clogged. 0.2mm nozzle is not compatible.</li>
            <li><strong>Don't Let it Cook</strong>: Unload Wood PLA immediately after printing. Otherwise, it will carbonize and permanently block your hotend.</li>
          </ul>
          
          <h2>4. What should I know before printing Glow-in-the-Dark PLA?</h2>
          <p>Glow filament is best for ghosts, magic items, and sci-fi accessories. It looks cool in the dark, but it's also abrasive. Those phosphorescent particles are basically tiny sandpaper bits running through your printer.</p>
          <ul>
            <li>A hardened steel nozzle is required when printing. Stainless steel nozzles are not compatible. 0.2mm nozzles are not compatible.</li>
            <li>AMS 2 Pro, AMS HT & AMS are compatible, but can lead to faster wear. AMS Lite is not compatible.</li>
            <li>Expose to light for 5-10 minutes for maximum glow.</li>
          </ul>
        `,
        faq: [
          { q: 'Can I mix specialty PLA with regular PLA in a multi-color print?', a: 'Yes, but use the specialty filament\'s settings for the whole print to avoid quality issues between material transitions.' },
          { q: 'Do specialty filaments need special storage?', a: 'Yes — especially Wood and Silk PLA, which absorb moisture faster than standard PLA. Seal with desiccant and dry before use.' },
          { q: 'Are specialty PLA filaments safe for food contact?', a: 'No. Additives like wood dust and glow particles make them unsuitable for food use. Display items only.' }
        ]
      },
      {
        id: 'phase3-ep03',
        shortTitle: '[Phase 3 EP03]',
        title: 'When Should I Switch from PLA to PETG for 3D Printing?',
        author: 'Weihan Yang',
        images: ['assets/images/phase3-ep03/image_01.jpg', 'assets/images/phase3-ep03/image_02.jpg'],
        points: 30,
        skillBonus: 0,
        content: `
          <p class="update-date">Last Updated: Feb 2026</p>
          <p>Your Meshy model looks amazing, but you want it on your car dashboard or use it as a garden planter. PLA's glass transition is only 60°C — one hot afternoon turns it into a sad puddle.</p>
          <p>Time to level up to <strong>PETG</strong> — the material that laughs at heat.</p>
          
          <h2>What is PETG and why is it called "the best of both worlds"?</h2>
          <p>Think of PETG as PLA's tougher, more athletic sibling. It combines PLA's ease of printing with engineering-grade durability:</p>
          <ul>
            <li><strong>Heat resistant</strong>: PETG's glass transition is 81°C — a 21°C advantage over PLA. Car accessories and outdoor decor will stay solid.</li>
            <li><strong>Flexible strength</strong>: Unlike brittle PLA, PETG bends before it breaks.</li>
            <li><strong>No toxic fumes</strong>: Low odor and safe for home printing.</li>
          </ul>
          
          <h2>What problems should I expect when printing PETG?</h2>
          <ul>
            <li><strong>It's stringy (the "Spiderweb Effect")</strong>: PETG flows like honey and leaves thin strings between parts. Increase retraction speed and distance slightly compared to your PLA settings.</li>
            <li><strong>It's a moisture magnet</strong>: PETG absorbs humidity like a sponge — roughly 0.3% by weight — causing popping sounds while printing and rough surfaces. Always dry PETG before first use.</li>
            <li><strong>It sticks too well</strong>: PETG can fuse permanently to glass and smooth PEI sheets. Use a glue stick or hairspray as a release agent — it creates a barrier so prints pop off safely.</li>
          </ul>
          <p><strong>Meshy Pro-Tip</strong>: PETG and PLA don't stick to each other, so you can't combine them in a multi-color print expecting a strong bond. Flip side: this makes them useful as breakaway support material for each other in dual-extruder setups.</p>
        `,
        faq: [
          { q: 'Is PETG food-safe?', a: 'PETG itself is FDA-approved, but 3D printed PETG isn\'t truly food-safe — micro-gaps between layers harbor bacteria. Apply a food-safe epoxy coating for food use.' },
          { q: 'Can I print PETG without an enclosure?', a: 'Yes. Unlike ABS, PETG doesn\'t warp badly and produces minimal fumes. An enclosure is optional but helps with temperature consistency on large prints.' },
          { q: 'Is PETG recyclable?', a: 'PETG carries the #1 recycling code and is technically recyclable, but most curbside programs don\'t accept 3D prints. Collect scraps for specialist recycling services.' }
        ]
      },
      {
        id: 'phase3-ep04',
        shortTitle: '[Phase 3 EP04]',
        title: 'How Do I Dry Wet 3D Printing Filament and Prevent Moisture Damage?',
        author: 'Weihan Yang',
        images: ['assets/images/phase3-ep04/image_01.jpg'],
        points: 30,
        skillBonus: 0,
        content: `
          <p class="update-date">Last Updated: Feb 2026</p>
          <p>Here's a plot twist most beginners don't see coming: <strong>All 3D printing filaments absorb moisture from the air</strong>. Your filament can get "wet" just by sitting on your desk.</p>
          <p>Wet filament is your #1 enemy. It's like trying to cook with soggy pasta—technically possible, but the results will be sad.</p>
          
          <h2>How do I know if my filament is wet?</h2>
          <ul>
            <li><strong>Stringing</strong>: Thin strings and wisps between parts that weren't there before — the most visible sign of moisture damage.</li>
            <li><strong>Popping/Crackling Sounds</strong>: That's literally water boiling into steam inside the nozzle. Especially noticeable with transparent filaments, where you can see tiny bubbles forming.</li>
            <li><strong>The "Acne" Look</strong>: Random bumps, tiny holes, or fuzzy textures on the surface.</li>
            <li><strong>Poor layer adhesion</strong>: Layers don't bond properly and parts break easily.</li>
          </ul>
          <p><strong>Meshy Pro-Tip — The "Snap" Test</strong>: Bend the end of your PLA filament 90 degrees. Dry PLA bends with resistance and springs back. Wet PLA snaps instantly like a dry twig. If it snaps — dry it immediately.</p>
          
          <h2>What's the best way to dry filament?</h2>
          <ul>
            <li><strong>Filament Dryer (Recommended)</strong>: Dedicated dryers maintain precise temps. Set the temperature, wait a few hours, and done.</li>
            <li><strong>Heated bed method</strong>: Place the spool on the print bed and heat it to the target temperature. Works well on enclosed printers — open-frame printers can't retain enough heat for this method.</li>
            <li><strong>Food Dehydrator</strong>: Works great if it reaches the specific temperatures needed. Never leave it unattended, ensure low-temperature operation, and avoid placing filament near surfaces that contact food.</li>
            <li><strong>Oven (Danger Zone)</strong>: Home ovens have poor temp control. A spike above the glass transition temp will melt your spool into a plastic donut.</li>
          </ul>
          
          <h2>How do I prevent moisture damage in the first place?</h2>
          <ul>
            <li><strong>Seal it</strong>: Store filaments in airtight bags or containers with silica gel (desiccant) packets. This is the single most effective thing you can do.</li>
            <li><strong>Don't leave it out</strong>: Unload and bag up your filament after each print session.</li>
            <li><strong>Climate check</strong>: In humid climates (>60% RH), consider drying filaments before every print.</li>
            <li><strong>Monitor humidity</strong>: Place a hygrometer in your storage container. Aim for below 20% RH.</li>
          </ul>
        `,
        faq: [
          { q: 'Can I "over-dry" filament?', a: 'Not really, as long as you stay below the glass transition temperature. Excessive heat will warp the spool or fuse coils together — always stick to the recommended temps.' },
          { q: 'Are vacuum-sealed new filaments already dry?', a: 'Usually yes, but quality varies by brand. If the silica gel packet inside the bag has turned pink, the filament may have absorbed moisture during shipping. Dry it before first use to be safe.' }
        ]
      },
      {
        id: 'phase3-ep05',
        shortTitle: '[Phase 3 EP05]',
        title: 'How Can I Reduce 3D Printing Waste and Print More Sustainably?',
        author: 'Weihan Yang',
        images: ['assets/images/phase3-ep05/image_01.jpg'],
        points: 30,
        skillBonus: 0,
        content: `
          <p class="update-date">Last Updated: Feb 2026</p>
          <p>Let's be real: 3D printing creates waste. Failed prints, support structures, test pieces — they add up. According to industry data, roughly <strong>33% of all filament used ends up as waste</strong>. But you can still print responsibly without sacrificing quality or fun.</p>
          
          <h2>Is PLA really eco-friendly?</h2>
          <p>PLA is plant-based (corn starch / sugarcane), which sounds great. But here's the truth:</p>
          <ul>
            <li>PLA only biodegrades under industrial composting conditions (60°C+ with specific microbes).</li>
            <li>In a landfill or your backyard, it acts just like regular plastic for decades.</li>
          </ul>
          <p>So PLA is better than petroleum-based plastics, but it's not a magic guilt-free material. Responsible habits still matter.</p>
          
          <h2>What are the simplest ways to reduce printing waste?</h2>
          <ul>
            <li><strong>Optimize infill</strong>: Meshy models are usually for display, not structural stress. Standard parts use 15–20% infill, but for Meshy figurines, 5–10% is usually plenty — based on our testing, this saves up to 40% material with no visible difference.</li>
            <li><strong>Choose recycled filament</strong>: Brands like Polymaker, eSun, and Filamentive sell "rPLA" — made from recycled factory waste. It prints identically to virgin PLA with a smaller carbon footprint.</li>
            <li><strong>Nail your settings first</strong>: Print a small test piece before committing to a 12-hour print. One calibration run can prevent a whole spool of wasted plastic.</li>
          </ul>
          
          <h2>What should I do with scraps and failed prints?</h2>
          <p>Most curbside recycling bins DO NOT accept 3D prints because they lack the recycling code symbols. Here are your options:</p>
          <ul>
            <li><strong>Specialist services</strong>: Collect scraps and mail them to recyclers like Printerior (US) or Recycling Fabrik (EU).</li>
            <li><strong>Creative upcycling</strong>: Melt scraps into silicone molds for coasters, or use them for mosaic art.</li>
            <li><strong>Filament extruder</strong>: You can buy a filament extruder that grinds your scraps and melts them back into new filament spool. These machines are expensive and tricky to master. But for hardcore makers, it's the ultimate recycling dream.</li>
          </ul>
        `,
        faq: [
          { q: 'Can I recycle PLA with regular household recycling?', a: 'No. PLA lacks the standard recycling code symbols that sorting facilities recognize. Collect 3D printing scraps separately and use a specialist recycling service.' },
          { q: 'Is recycled filament (rPLA) lower quality than regular PLA?', a: 'No. Modern rPLA prints at the same temperatures (190–215°C) and delivers identical surface quality. You won\'t notice a difference.' },
          { q: 'Does reducing infill weaken my display prints?', a: 'For figurines and display models, no. Even 10% infill with 3–4 wall lines provides plenty of strength for shelf display. Only increase infill for functional, load-bearing parts.' }
        ]
      }
    ]
  },
  phase4: {
    id: 'phase4',
    title: 'The Brain',
    subtitle: '软件与切片',
    icon: '💻',
    unlockRequirement: 12,
    tutorials: [
      {
        id: 'phase4-ep01',
        shortTitle: '[Phase 4 EP01]',
        title: 'Slicing 101: How does a 3D printer know what to print?',
        author: 'Joanne (Xuanmeng) Wang',
        images: ['assets/images/phase4-ep01/image_01.jpg', 'assets/images/phase4-ep01/image_02.jpg', 'assets/images/phase4-ep01/image_03.jpg', 'assets/images/phase4-ep01/image_04.jpg', 'assets/images/phase4-ep01/image_05.jpg', 'assets/images/phase4-ep01/image_06.jpg', 'assets/images/phase4-ep01/image_07.jpg', 'assets/images/phase4-ep01/image_08.jpg', 'assets/images/phase4-ep01/image_09.jpg', 'assets/images/phase4-ep01/image_10.jpg'],
        points: 30,
        skillBonus: 5,
        content: `
          <p class="update-date">Last Updated: Feb 2026</p>
          
          <h2>Why can't I print a 3D model file directly?</h2>
          <p>Before your 3D printer can start printing, it needs instructions. That's where <strong>slicing</strong> comes in—it acts as the bridge between digital art and physical reality.</p>
          <p>Technically, a slicer takes your 3D model (usually an .STL or .3MF file) and divides it into thousands of thin horizontal layers. It then generates a G-code file—a set of commands controlling coordinates, speeds, and temperatures that tells the printer exactly what to do.</p>
          <p>In short, slicing is like preparing a recipe. It tells the machine exactly how to "cook" your model. This step is crucial: the choices you make here define the print time, material usage, and structural integrity of your final masterpiece.</p>
          
          <h2>What is G-Code?</h2>
          <p>Simply put, G-code is the blueprint that tells your 3D printer exactly how to bring a digital model to life. It guides every specific movement and action, primarily controlling:</p>
          <ul>
            <li><strong>Print Path</strong>: The exact route the nozzle follows layer by layer.</li>
            <li><strong>Speed</strong>: The pace of printing to balance efficiency and precision.</li>
            <li><strong>Temperature</strong>: The heat level of the nozzle and bed for smooth material flow.</li>
          </ul>
          
          <h2>The Slicing Workflow: What are the steps to turn a 3D model into G-code?</h2>
          <ol>
            <li><strong>Step 1: Import & Check</strong> - First, import your 3D model (STL, OBJ, or 3MF) into the slicer. The slicer will automatically check for geometry issues—such as holes or non-manifold edges—to ensure the model is solid and printable.</li>
            <li><strong>Step 2: Orientation & Supports</strong> - Ensure the model is flat on the plate for stability. Use Slicer's support generation tools to handle complex overhangs if needed.</li>
            <li><strong>Step 3: G-Code Generation</strong> - Once settings are finalized, click "Slice". This action converts the digital mesh into machine instructions (G-code). The software calculates the precise path for the nozzle, defining the Perimeters (outer walls) and Infill (internal structure) for every single layer.</li>
            <li><strong>Step 4: Preview & Verify (Line Type)</strong> - Before printing, switch the view to Line Type to inspect the actual toolpaths. This mode color-codes the model's structure—distinguishing Outer Walls, Infill, and Overhangs. Use the vertical slider to scrub through the layers and check the inside of the model.</li>
          </ol>
          <p>You now have the "blueprint" ready for your machine!</p>
        `,
        faq: [
          { q: 'What is the difference between an STL file and G-code?', a: 'An STL file represents only the 3D shape (geometry), while G-code contains the specific instructions for your printer. The printer cannot read an STL directly; it needs the G-code to know exactly where to move the nozzle, how fast to print, and what temperature to use for each layer.' },
          { q: 'Why should I check the "Line Type" preview before printing?', a: 'The standard 3D view only shows the outer shell, hiding potential internal errors. The "Line Type" preview reveals the actual path the nozzle will take. Checking this allows you to spot unsupported overhangs, hollow gaps, or missing infill that would cause the print to collapse.' }
        ]
      },
      {
        id: 'phase4-ep02',
        shortTitle: '[Phase 4 EP02]',
        title: 'Profile Tuning: How to Set Up 3D Printing Slicer for the Best Results?',
        author: 'Molly (Yihan) Sun',
        images: ['assets/images/phase4-ep02/image_01.jpg', 'assets/images/phase4-ep02/image_02.jpg', 'assets/images/phase4-ep02/image_03.jpg', 'assets/images/phase4-ep02/image_04.jpg', 'assets/images/phase4-ep02/image_05.jpg', 'assets/images/phase4-ep02/image_06.jpg', 'assets/images/phase4-ep02/image_07.jpg', 'assets/images/phase4-ep02/image_08.jpg', 'assets/images/phase4-ep02/image_09.jpg', 'assets/images/phase4-ep02/image_10.jpg'],
        points: 30,
        skillBonus: 5,
        content: `
          <p class="update-date">Last Updated: Feb 2026</p>
          <p>Profile tuning isn't about chasing a single "perfect" setting—it's about making deliberate trade-offs based on your goal. Default slicer profiles are a solid starting point, but fine-tuning is what truly unlocks your printer's potential.</p>
          <p><strong>Bottom line</strong>: There is no universally "best" profile—only the one that best fits your use case.</p>
          
          <h2>What layer height should you use for your 3D print?</h2>
          <p>Layer height has the biggest impact on both surface quality and print time.</p>
          <ul>
            <li><strong>Extra Fine & Fine (0.08 & 0.12 mm)</strong>: Ideal for miniatures and highly detailed surfaces where layer lines must be nearly invisible.</li>
            <li><strong>Balanced Quality (0.16 mm)</strong>: The recommended default—an excellent balance between detail and efficiency.</li>
            <li><strong>Balanced Strength (0.20 & 0.24 mm)</strong>: Best for functional parts and large models, prioritizing strength and faster prints.</li>
          </ul>
          
          <h2>Pro Tip: Variable Layer Height</h2>
          <p>Variable Layer Height lets the slicer use different layer thicknesses in different parts of a model instead of one fixed layer height. This lets you improve surface quality without significantly increasing total print time.</p>
          <ul>
            <li>Uses thinner layers on curves and slopes → smoother surface</li>
            <li>Uses thicker layers on flat areas → faster printing</li>
          </ul>
          
          <h2>How to choose infill density and pattern?</h2>
          <p>Infill defines internal strength, material usage, and print time.</p>
          <ul>
            <li><strong>Functional parts</strong>: 20–40% density</li>
            <li><strong>Visual models/prototypes</strong>: 10–15% density</li>
            <li><strong>Infill Overlap</strong>: Set 10–30% to ensure strong bonding between infill and walls.</li>
          </ul>
          
          <h2>What wall count and thickness work best?</h2>
          <p>Walls often contribute more to strength than infill.</p>
          <ul>
            <li><strong>Decorative models</strong>: 1-2 walls to save time and material</li>
            <li><strong>Standard</strong>: 2-3 walls</li>
            <li><strong>Functional prints</strong>: 4-5 walls for brackets or tools</li>
          </ul>
          <p>Set wall thickness as a multiple of your nozzle diameter. With a 0.4 mm nozzle, use at least 0.8 mm (2 lines).</p>
          
          <h2>Which nozzle size should you use?</h2>
          <ul>
            <li><strong>0.2 mm</strong>: Ultra-fine details (miniatures, jewelry), but slow and clog-prone</li>
            <li><strong>0.4 mm</strong>: The all-rounder—balanced speed, detail, and reliability</li>
            <li><strong>0.6 mm</strong>: Faster prints, stronger parts, better for flexible materials</li>
            <li><strong>0.8 mm</strong>: Excellent for large prototypes and structural parts</li>
          </ul>
        `,
        faq: [
          { q: 'Should I use 100% infill for maximum strength?', a: 'No. Increasing Wall Count is more effective. 3–4 walls with 20% infill is often stronger and faster than 2 walls with 100% infill.' },
          { q: 'When should I use Variable Layer Height?', a: 'Use it for curved or sloping tops (like domes) to smooth surfaces. For vertical or mechanical parts, a fixed layer height ensures a more consistent finish and faster slicing.' }
        ]
      },
      {
        id: 'phase4-ep03',
        shortTitle: '[Phase 4 EP03]',
        title: 'Support Structures: How to build support for complex, floating models?',
        author: 'Joanne (Xuanmeng) Wang',
        images: ['assets/images/phase4-ep03/image_01.jpg', 'assets/images/phase4-ep03/image_02.jpg', 'assets/images/phase4-ep03/image_03.jpg', 'assets/images/phase4-ep03/image_04.jpg', 'assets/images/phase4-ep03/image_05.jpg', 'assets/images/phase4-ep03/image_06.jpg', 'assets/images/phase4-ep03/image_07.jpg', 'assets/images/phase4-ep03/image_08.jpg', 'assets/images/phase4-ep03/image_09.jpg', 'assets/images/phase4-ep03/image_10.jpg', 'assets/images/phase4-ep03/image_11.jpg', 'assets/images/phase4-ep03/image_12.jpg', 'assets/images/phase4-ep03/image_13.jpg', 'assets/images/phase4-ep03/image_14.jpg', 'assets/images/phase4-ep03/image_15.jpg', 'assets/images/phase4-ep03/image_16.jpg'],
        points: 30,
        skillBonus: 5,
        content: `
          <p class="update-date">Last Updated: Feb 2026</p>
          
          <h2>Why do 3D printers need supports?</h2>
          <p>3D printers—specifically FDM machines—have one weakness: they cannot print on thin air. Since printers build layer by layer from the bottom up, any part of your model that hangs in empty space will collapse into a mess of "spaghetti" without help.</p>
          <p>Supports are temporary "scaffolding" that holds up the overhanging parts of your model while it prints.</p>
          
          <h2>The "YHT" Rule</h2>
          <ul>
            <li><strong>The "Y" Shape</strong>: Requires no support because its gradual slopes (45° or steeper) allow each layer to overlap securely.</li>
            <li><strong>The "H" Shape</strong>: Utilizes "bridging" to span short gaps successfully without support, but requires support for longer distances.</li>
            <li><strong>The "T" Shape</strong>: Must have support because FDM printers cannot deposit material in mid-air.</li>
          </ul>
          
          <h2>Tree vs Normal Supports</h2>
          <p><strong>Tree Supports</strong>: Grow like tree branches, wrapping around the model to touch only necessary points.</p>
          <ul>
            <li>Pros: Less material, faster printing, easy removal, minimal scarring</li>
            <li>Best for: Organic shapes like characters and miniatures</li>
          </ul>
          <p><strong>Normal Supports</strong>: Build straight vertical pillars.</p>
          <ul>
            <li>Pros: Stronger and more supportive of large overhangs</li>
            <li>Best for: Geometric structures, tilted models, spheres, large flat overhangs</li>
          </ul>
          
          <h2>"On build plate only" vs "Supports Everywhere"</h2>
          <ul>
            <li><strong>On build plate only</strong>: Restricts support to the print bed only. Prevents scarring on model surfaces. Best for simple overhangs.</li>
            <li><strong>Supports Everywhere</strong>: Creates supports from the model itself. Required for complex geometries with internal cavities or overlapping parts.</li>
          </ul>
          
          <h2>Workflow to Generate Supports</h2>
          <ol>
            <li><strong>Analyze and Orient</strong>: Examine your model for overhangs. Consider re-orienting to minimize support usage.</li>
            <li><strong>Auto Support Generate</strong>: Enable "Support" and choose the type that fits your model.</li>
            <li><strong>Preview Check</strong>: Verify no part starts "in mid-air" and that critical details are properly supported.</li>
          </ol>
          
          <h2>How to Remove Supports Without Damage</h2>
          <ul>
            <li>Use flush cutters to snip connection points carefully</li>
            <li>Don't rip them off violently</li>
            <li>Warm water (for PLA) can soften supports slightly</li>
            <li>Small marks can be removed with fine-grit sandpaper</li>
          </ul>
        `,
        faq: [
          { q: 'Will removing supports ruin the surface of my model?', a: 'Supports often leave small marks or "scars" where they touch the print. To minimize this, use Tree Supports for organic models or tune your "Z-distance" settings. Any remaining marks can usually be removed with fine-grit sandpaper or a hobby knife.' },
          { q: 'Why did my print fail even with support enabled?', a: 'Slicers sometimes miss small overhangs or isolated parts. Always verify the Preview mode before printing. If you see unsupported areas starting in mid-air, you must manually add support using the "Paint-on" feature.' }
        ]
      },
      {
        id: 'phase4-ep04',
        shortTitle: '[Phase 4 EP04]',
        title: 'Multi-Color in Slicer: How to Paint Your 3D Models?',
        author: 'Molly (Yihan) Sun',
        images: ['assets/images/phase4-ep04/image_01.jpg', 'assets/images/phase4-ep04/image_02.jpg', 'assets/images/phase4-ep04/image_03.jpg', 'assets/images/phase4-ep04/image_04.jpg', 'assets/images/phase4-ep04/image_05.jpg', 'assets/images/phase4-ep04/image_06.jpg', 'assets/images/phase4-ep04/image_07.jpg', 'assets/images/phase4-ep04/image_08.jpg', 'assets/images/phase4-ep04/image_09.jpg', 'assets/images/phase4-ep04/image_10.jpg', 'assets/images/phase4-ep04/image_11.jpg', 'assets/images/phase4-ep04/image_12.jpg'],
        points: 30,
        skillBonus: 5,
        content: `
          <p class="update-date">Last Updated: Feb 2026</p>
          <p>In the world of 3D printing, you are no longer limited to a single color. This guide will walk you through the process of painting your model in the slicer.</p>
          
          <h2>What should you set before painting a model?</h2>
          <p>Before you start painting, you need to tell the software how many colors you plan to use.</p>
          <ul>
            <li>Open the Filament list, which shows all available filaments in the current project as colored boxes.</li>
            <li>Click a color box to select a filament for painting. You can assign a different filament to each section of your model.</li>
          </ul>
          
          <h2>How to start color painting in the slicer?</h2>
          <p>Once the colors are ready, select your model and click the Color Painting icon in the top toolbar (or press shortcut N) to enter Painting Mode.</p>
          
          <h2>Which painting tool should you pick?</h2>
          <ul>
            <li><strong>Circle Tool</strong>: Works like a brush for freely painting curved or irregular areas. You can lock to vertical or horizontal mode for aligned strokes.</li>
            <li><strong>Sphere Tool</strong>: Colors all faces inside the brush volume, not just visible ones. Useful for models with holes or internal structures.</li>
            <li><strong>Triangle Tool</strong>: Colorizes a single triangle pointed by the mouse. Best for logos, sharp edges, and small corrections.</li>
            <li><strong>Height Range Tool</strong>: Paints all facets within a specific height range. Useful for horizontal color bands.</li>
            <li><strong>Fill Tool</strong>: Colorizes connected facets from the pointed area. Stops at different colors or sharp corners.</li>
            <li><strong>Gap Fill Tool</strong>: Detects small gaps and auto-fills them with neighboring colors.</li>
          </ul>
          
          <h2>Pro Tip: How to paint hidden or blocked areas?</h2>
          <p><strong>Section View</strong> lets you temporarily cut open the model so you can see and paint surfaces that are normally blocked. It is useful when outer shells cover the areas you want to color.</p>
        `,
        faq: [
          { q: 'Why does the estimated print time increase so much after painting?', a: 'Multi-color printing requires frequent filament changes. Each time a color switches on a layer, the printer must retract, cut, load new material, and purge the nozzle.' },
          { q: 'Can I apply a color photo directly to my model?', a: 'No, the slicer\'s painting tools are for manual coloring. However, you can use Meshy\'s AI Texturing tool to generate the texture first and then export the multi-color model directly into your slicer.' }
        ]
      },
      {
        id: 'phase4-ep05',
        shortTitle: '[Phase 4 EP05]',
        title: 'Multi-Color Printing: How to Turn a Meshy Textured Model into a Multi-Color 3D Print?',
        author: 'Molly (Yihan) Sun',
        images: ['assets/images/phase4-ep05/image_01.jpg', 'assets/images/phase4-ep05/image_02.jpg', 'assets/images/phase4-ep05/image_03.jpg', 'assets/images/phase4-ep05/image_04.jpg', 'assets/images/phase4-ep05/image_05.jpg', 'assets/images/phase4-ep05/image_06.jpg', 'assets/images/phase4-ep05/image_07.jpg'],
        points: 30,
        skillBonus: 5,
        content: `
          <p class="update-date">Last Updated: Feb 2026</p>
          <p>If you've generated a textured model in Meshy, you can convert it into a physical multi-color print with just a few steps.</p>
          <p>📌 Tip: Keep model detail high — recommended 100k+ faces.</p>
          
          <h2>How to enable multi-color printing in Meshy?</h2>
          <p>Once you are satisfied with your model, click the printing icon at the bottom and choose Multi-Color Printing to enter the optimization suite.</p>
          
          <h2>Color Count Management (1-16)</h2>
          <p>You can select between 1–16 colors. For most setups, we recommend using 4 colors for the best balance between print quality and efficiency. Based on your selection, the system will automatically detect and assign the dominant colors to your model.</p>
          
          <h2>Level of Detail</h2>
          <p>You can choose how much color detail from your original model is preserved in the multi-color printing preparation. Higher values retain fine edges, textures, and small features, while lower values simplify the model.</p>
          
          <h2>Filament Slots Management</h2>
          <p>Assign and preview which colors are mapped to each filament slot before printing. You can manually select any part of the model and adjust its color, then map that color to a specific filament slot.</p>
          
          <h2>Resize for Scale</h2>
          <p>Before downloading, you can adjust the dimensions of your model to fit your specific printing needs.</p>
          
          <h2>Download or Direct Send</h2>
          <p>Then you can download the optimized model in 3MF or OBJ format or use our One-Click Send to Bambu Studio feature for a seamless transition.</p>
        `,
        faq: [
          { q: 'Which file format is best for multi-color 3D printing?', a: '3MF is the highly recommended format.' },
          { q: 'Where can I find examples of successful multi-color prints created with Meshy?', a: 'You can explore the Meshy Community Gallery or join our Discord server. Many users share their physical results there, along with the specific slicer settings they used.' }
        ]
      },
      {
        id: 'phase4-ep06',
        shortTitle: '[Phase 4 EP06]',
        title: 'Slicing Tips: How to use Variable layer height, Ironing, Fuzzy skin, and Hide seams?',
        author: 'Joanne (Xuanmeng) Wang',
        images: ['assets/images/phase4-ep06/image_01.jpg', 'assets/images/phase4-ep06/image_02.jpg', 'assets/images/phase4-ep06/image_03.jpg', 'assets/images/phase4-ep06/image_04.jpg', 'assets/images/phase4-ep06/image_05.jpg', 'assets/images/phase4-ep06/image_06.jpg', 'assets/images/phase4-ep06/image_07.jpg', 'assets/images/phase4-ep06/image_08.jpg', 'assets/images/phase4-ep06/image_09.jpg', 'assets/images/phase4-ep06/image_10.jpg', 'assets/images/phase4-ep06/image_11.jpg', 'assets/images/phase4-ep06/image_12.jpg', 'assets/images/phase4-ep06/image_13.jpg', 'assets/images/phase4-ep06/image_14.jpg', 'assets/images/phase4-ep06/image_15.jpg', 'assets/images/phase4-ep06/image_16.jpg'],
        points: 30,
        skillBonus: 5,
        content: `
          <p class="update-date">Last Updated: Feb 2026</p>
          
          <h2>Variable Layer Height: Control detail and speed</h2>
          <p>Variable Layer Height lets the slicer use different layer thicknesses in different parts of a model instead of one fixed layer height.</p>
          <ul>
            <li>Uses thinner layers on curves and slopes → smoother surface</li>
            <li>Uses thicker layers on flat areas → faster printing</li>
          </ul>
          <p><strong>How to use:</strong></p>
          <ul>
            <li><strong>Adaptive (Quality–Speed slider)</strong>: Adjust toward Quality for finer layers, or Speed for thicker layers.</li>
            <li><strong>Manual Painting</strong>: Use the vertical bar to paint thinner or thicker layers for specific heights.</li>
            <li><strong>Smooth mode</strong>: Smooths transitions between different layer heights.</li>
          </ul>
          <p>⚠️ For multi-color prints with a prime tower, all models must use the same variable layer height settings.</p>
          
          <h2>Ironing: Smooth the top surfaces</h2>
          <p>While Variable Layer Height handles vertical curves, ironing perfects flat top surfaces. The hot nozzle runs over the final printed layer again to melt and flatten rough lines, like ironing a shirt.</p>
          <ul>
            <li>Creates a smooth, injection-molded finish on flat areas</li>
            <li>Trade-off: Adds extra print time</li>
            <li>Note: Only effective on horizontal flat surfaces, not curved tops</li>
          </ul>
          
          <h2>Fuzzy Skin: Hide layer lines and add texture</h2>
          <p>Instead of drawing smooth straight lines, the printer randomly jitters the nozzle to create a rough, textured finish on the outer walls.</p>
          <ul>
            <li>Completely hides layer lines, ringing, and Z-seams</li>
            <li>Simulates materials like stone, cast iron, or fur</li>
            <li>Adds excellent grip to tool handles and knobs</li>
            <li>Trade-off: Massively increases print time</li>
          </ul>
          <p>⚠️ Do not use on mating surfaces (like lids or screw threads), or parts won't fit together.</p>
          
          <h2>Hide Seams: Why is there an ugly line on my model?</h2>
          <p>Every FDM print has a "Z-Seam"—a vertical scar formed where the printer starts and stops each layer.</p>
          <ul>
            <li><strong>Aligned (Sharpest Corner)</strong>: Best default setting. Hides the seam inside the model's natural edges.</li>
            <li><strong>Back</strong>: Forces the seam to the rear of the model.</li>
            <li><strong>Seam Painting</strong>: For total control, manually draw a line to place the seam exactly where you want.</li>
            <li>Avoid "Random": This creates a "zits" effect that usually looks worse than a single clean line.</li>
          </ul>
        `,
        faq: [
          { q: 'Can I use Fuzzy Skin on parts that need to fit together?', a: 'Generally, no. The added texture creates thickness and roughness, changing the part\'s dimensions. Always use a Modifier to disable Fuzzy Skin on critical mating surfaces.' },
          { q: 'Why is the seam still visible on my round model even with "Aligned"?', a: '"Aligned" relies on sharp corners to hide the seam. Round models have no corners, so the software cannot hide the line automatically. Use "Back" or "Seam Painting" instead.' }
        ]
      }
    ]
  },
  phase5: {
    id: 'phase5',
    title: 'The Fix-it Shop',
    subtitle: '问题排查',
    icon: '🛠',
    unlockRequirement: 18,
    tutorials: [
      {
        id: 'phase5-ep01',
        shortTitle: '[Phase 5 EP01]',
        title: 'Uneven First Layer - Fixing failed prints due to poor first-layer stick or small contact area',
        author: 'Tony (Yuchen) Liu',
        images: ['assets/images/phase5-ep01/image_01.jpg', 'assets/images/phase5-ep01/image_02.jpg', 'assets/images/phase5-ep01/image_03.jpg', 'assets/images/phase5-ep01/image_04.jpg', 'assets/images/phase5-ep01/image_05.jpg', 'assets/images/phase5-ep01/image_06.jpg', 'assets/images/phase5-ep01/image_07.jpg', 'assets/images/phase5-ep01/image_08.jpg', 'assets/images/phase5-ep01/image_09.jpg', 'assets/images/phase5-ep01/image_10.jpg', 'assets/images/phase5-ep01/image_11.jpg'],
        points: 40,
        skillBonus: 5,
        content: `
          <p class="update-date">Last Updated: Feb 2026</p>
          <p>The Great Escape: Why models lose their grip?</p>
          <p>If your 3D model were a ballerina, its tiny claw-tips or slender legs might be performing a daring pirouette on the virtual stage of your slicer. But once music starts on the physical print bed, gravity can be a harsh critic. Without a solid footing, your character might just decide to take an unscheduled bow and fall right off the stage. This guide helps you give your models the strong foundation they need.</p>
          
          <h2>Common Issues</h2>
          <p><strong>Issue A: Uneven Bottom</strong>. The AI generates a base with tiny bumps or uneven textures, preventing it from lying perfectly flat.</p>
          <p><strong>Issue B: Tiny Contact Points</strong>. The character has claws or thin feet, meaning there is almost zero surface area sticking to the bed.</p>
          
          <h2>How can you fix it?</h2>
          
          <h3>Method A (Best for characters without a base): Use the Meshy "Add Base" feature</h3>
          <p>How to do it: Go to the Print tab in Meshy and click the Add Base button.</p>
          <p>Key Tip: After adding the base, check the preview carefully. Make sure all bottom parts of your model (like claw tips) are fully touching and merged into the new base. This turns tiny contact points into one solid, stable foundation to prevent print failure.</p>
          
          <h3>Method B (Universal fix): Use the "Planar Cut" tool in your slicer</h3>
          <p>How to do it: This works whether your model has a base or not. In slicing software like PrusaSlicer or Bambu Studio, press the C key to open the Cut tool. Move the cutting plane up by 0.5mm - 1.0mm to cut off the uneven bits.</p>
          <p>The Result: This forces the bottom of the model to be a perfectly flat surface for 100% bed adhesion.</p>
          
          <h3>Method C: Z-Axis Sinking</h3>
          <p>Alternatively, you can move the model down along the Z-axis (e.g., Z = -1.0mm) so the uneven bottom part is "sunk" below the virtual build plate. The slicer will ignore anything below zero and print a flat first layer starting from the new contact point.</p>
          
          <h3>Method D: Add a Brim or Raft</h3>
          <p>In your slicer settings, go to Other → Bed Adhesion → turn on Brim. This prints a wide "ring" around the bottom of the model to help it grip the bed.</p>
        `,
        faq: [
          { q: 'What is the best method for complex characters?', a: 'The Meshy "Add Base" feature is usually the best for complex characters as it provides a stable foundation without manual intervention in the slicer.' },
          { q: 'Will cutting off part of the model affect its appearance?', a: 'Usually not. The bottom 0.5-1.0mm is rarely visible once the print is complete and sitting on a surface.' }
        ]
      },
      {
        id: 'phase5-ep02',
        shortTitle: '[Phase 5 EP02]',
        title: 'Model Detail Too Thin - Fixing failed prints due to Fragile or Tiny Parts',
        author: 'Tony (Yuchen) Liu',
        images: ['assets/images/phase5-ep02/image_01.jpg', 'assets/images/phase5-ep02/image_02.jpg', 'assets/images/phase5-ep02/image_03.jpg', 'assets/images/phase5-ep02/image_04.jpg', 'assets/images/phase5-ep02/image_05.jpg', 'assets/images/phase5-ep02/image_06.jpg', 'assets/images/phase5-ep02/image_07.jpg', 'assets/images/phase5-ep02/image_08.jpg', 'assets/images/phase5-ep02/image_09.jpg'],
        points: 40,
        skillBonus: 5,
        content: `
          <p class="update-date">Last Updated: Feb 2026</p>
          <p>The Precision Crisis: Saving Fingers and Fairytales</p>
          
          <h2>The Problem: Why do my hero's fingers look like spaghetti?</h2>
          <p>We've all been there: your character looks like a legend in the slicer, but comes out of the printer with fingers that snap like dry twigs or hair that looks more like a bird's nest. Those tiny features look glorious in your preview but turn into a crumbly mess the moment they meet the real world.</p>
          
          <h2>The Cause: The "Big Pen" Struggle</h2>
          <p>Think of your FDM printer as a giant trying to write a love letter with a thick Sharpie. Most printers use a standard 0.4mm nozzle. If you try to print a strand of hair or a tiny cane that's thinner than that "pen tip," the printer simply loses its mind. It can't pour enough "ink" to give the part any real bone and muscle.</p>
          
          <h2>How to fix this:</h2>
          
          <h3>Hardware Solution: Change the Nozzle</h3>
          <p>If you need high precision for miniature details, the most direct fix is a hardware upgrade:</p>
          <p><strong>Install a 0.2mm Nozzle</strong>: This allows the printer to extrude much finer lines, capturing details that a 0.4mm nozzle would simply skip.</p>
          <p>⚠️ Note: Smaller nozzles increase the risk of clogging and will significantly increase your total print time.</p>
          
          <h3>Software Solutions: Slicer Adjustments</h3>
          <p>If you prefer to stick with your current hardware, use these digital workarounds:</p>
          
          <p><strong>Option 1: Scale Up (120% - 200%)</strong></p>
          <p>Increasing the overall size of the model is the simplest fix. It widens thin features until they exceed the 0.4mm threshold, giving the printer enough space to create a solid structure.</p>
          
          <p><strong>Option 2: The "Cut & Lay Flat" Technique</strong></p>
          <p>Use the Cut tool in your slicer to separate delicate parts (like a staff or an outstretched arm). Rotate these pieces and print them flat on the build plate for better results.</p>
        `,
        faq: [
          { q: 'Will a 0.2mm nozzle work with all filaments?', a: 'No. Some specialty filaments like Wood PLA, Glow-in-the-Dark, and sparkling filaments are not compatible with 0.2mm nozzles due to particle size.' },
          { q: 'How much longer does printing with a 0.2mm nozzle take?', a: 'Expect 2-4x longer print times compared to a 0.4mm nozzle, as the printer needs to deposit many more layers and lines to cover the same area.' }
        ]
      },
      {
        id: 'phase5-ep03',
        shortTitle: '[Phase 5 EP03]',
        title: 'The model lacks detail - The physical print does not look as detailed as the 3D view',
        author: 'Tony (Yuchen) Liu',
        points: 40,
        skillBonus: 5,
        content: `<p class="update-date">Last Updated: Feb 2026</p><p>Next - 详细内容即将更新</p>`,
        faq: [{ q: '打印效果不如预期？', a: 'Next - 即将更新' }]
      },
      {
        id: 'phase5-ep04',
        shortTitle: '[Phase 5 EP04]',
        title: 'Thin Wall - How to handle thin wall issues',
        author: 'Tony (Yuchen) Liu',
        points: 40,
        skillBonus: 5,
        content: `<p class="update-date">Last Updated: Feb 2026</p><p>Next - 详细内容即将更新</p>`,
        faq: [{ q: '薄壁问题如何解决？', a: 'Next - 即将更新' }]
      },
      {
        id: 'phase5-ep05',
        shortTitle: '[Phase 5 EP05]',
        title: 'The Visual Fail Gallery - Match your "spaghetti" to our photo guide to find the fix',
        author: 'Tony (Yuchen) Liu',
        points: 40,
        skillBonus: 0,
        content: `<p class="update-date">Last Updated: Feb 2026</p><p>Next - 详细内容即将更新</p>`,
        faq: [{ q: '打印失败对照图？', a: 'Next - 即将更新' }]
      },
      {
        id: 'phase5-ep06',
        shortTitle: '[Phase 5 EP06]',
        title: 'Bed Adhesion & Leveling - Mastering the "Paper Test" and the perfect first layer',
        author: 'Tony (Yuchen) Liu',
        points: 40,
        skillBonus: 0,
        content: `<p class="update-date">Last Updated: Feb 2026</p><p>Next - 详细内容即将更新</p>`,
        faq: [{ q: '如何调平热床？', a: 'Next - 即将更新' }]
      },
      {
        id: 'phase5-ep07',
        shortTitle: '[Phase 5 EP07]',
        title: 'Fighting the Frizz - How to eliminate stringing, oozing, and blobs',
        author: 'Tony (Yuchen) Liu',
        points: 40,
        skillBonus: 0,
        content: `<p class="update-date">Last Updated: Feb 2026</p><p>Next - 详细内容即将更新</p>`,
        faq: [{ q: '如何消除拉丝？', a: 'Next - 即将更新' }]
      },
      {
        id: 'phase5-ep08',
        shortTitle: '[Phase 5 EP08]',
        title: 'Clog Surgery - The "Cold Pull" method and nozzle replacement guide',
        author: 'Tony (Yuchen) Liu',
        points: 40,
        skillBonus: 0,
        content: `<p class="update-date">Last Updated: Feb 2026</p><p>Next - 详细内容即将更新</p>`,
        faq: [{ q: '如何清理喷嘴堵塞？', a: 'Next - 即将更新' }]
      }
    ]
  }
};

const BADGES = [
  { id: 'phase1-complete', name: '新手毕业生', icon: '🎓', phase: 'phase1' },
  { id: 'phase2-complete', name: 'AI 建模师', icon: '🤖', phase: 'phase2' },
  { id: 'phase3-complete', name: '材料大师', icon: '🧵', phase: 'phase3' },
  { id: 'phase4-complete', name: '切片专家', icon: '💻', phase: 'phase4' },
  { id: 'phase5-complete', name: '问题终结者', icon: '🛠', phase: 'phase5' },
  { id: 'all-complete', name: '3D 打印大师', icon: '🏆', phase: 'all' }
];

const UNLOCK_THRESHOLDS = {
  phase1: 0,
  phase2: 3,
  phase3: 7,
  phase4: 12,
  phase5: 18
};
