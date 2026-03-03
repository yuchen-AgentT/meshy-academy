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
        title: 'Why 90% of Your Prints Should Start With PLA Basic or PLA Matte?',
        author: 'Weihan Yang',
        points: 30,
        skillBonus: 0,
        content: `<p class="update-date">Last Updated: Feb 2026</p><p>Next - 详细内容即将更新</p>`,
        faq: [{ q: 'PLA 适合什么场景？', a: 'Next - 即将更新' }]
      },
      {
        id: 'phase3-ep02',
        title: 'Speciality PLA Filament: How Do I Print PLA Silk, Marble, Wood, and Glow-in-the-Dark?',
        author: 'Weihan Yang',
        points: 30,
        skillBonus: 0,
        content: `<p class="update-date">Last Updated: Feb 2026</p><p>Next - 详细内容即将更新</p>`,
        faq: [{ q: '特殊 PLA 如何打印？', a: 'Next - 即将更新' }]
      },
      {
        id: 'phase3-ep03',
        title: 'When Should I Switch from PLA to PETG for 3D Printing?',
        author: 'Weihan Yang',
        points: 30,
        skillBonus: 0,
        content: `<p class="update-date">Last Updated: Feb 2026</p><p>Next - 详细内容即将更新</p>`,
        faq: [{ q: '什么时候应该用 PETG？', a: 'Next - 即将更新' }]
      },
      {
        id: 'phase3-ep04',
        title: 'How Do I Dry Wet 3D Printing Filament and Prevent Moisture Damage?',
        author: 'Weihan Yang',
        points: 30,
        skillBonus: 0,
        content: `<p class="update-date">Last Updated: Feb 2026</p><p>Next - 详细内容即将更新</p>`,
        faq: [{ q: '如何干燥耗材？', a: 'Next - 即将更新' }]
      },
      {
        id: 'phase3-ep05',
        title: 'How Can I Reduce 3D Printing Waste and Print More Sustainably?',
        author: 'Weihan Yang',
        points: 30,
        skillBonus: 0,
        content: `<p class="update-date">Last Updated: Feb 2026</p><p>Next - 详细内容即将更新</p>`,
        faq: [{ q: '如何减少打印浪费？', a: 'Next - 即将更新' }]
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
        title: 'Slicing 101: How does a 3D printer know what to print?',
        author: 'Joanne (Xuanmeng) Wang',
        points: 30,
        skillBonus: 5,
        content: `<p class="update-date">Last Updated: Feb 2026</p><p>Next - 详细内容即将更新</p>`,
        faq: [{ q: '什么是切片？', a: 'Next - 即将更新' }]
      },
      {
        id: 'phase4-ep02',
        title: 'Profile Tuning: How to Set Up 3D Printing Slicer for the Best Results?',
        author: 'Molly (Yihan) Sun',
        points: 30,
        skillBonus: 5,
        content: `<p class="update-date">Last Updated: Feb 2026</p><p>Next - 详细内容即将更新</p>`,
        faq: [{ q: '如何优化切片设置？', a: 'Next - 即将更新' }]
      },
      {
        id: 'phase4-ep03',
        title: 'Support Structures: How to build support for complex, floating models?',
        author: 'Joanne (Xuanmeng) Wang',
        points: 30,
        skillBonus: 5,
        content: `<p class="update-date">Last Updated: Feb 2026</p><p>Next - 详细内容即将更新</p>`,
        faq: [{ q: '如何添加支撑？', a: 'Next - 即将更新' }]
      },
      {
        id: 'phase4-ep04',
        title: 'Multi-Color in Slicer: How to Paint Your 3D Models?',
        author: 'Molly (Yihan) Sun',
        points: 30,
        skillBonus: 5,
        content: `<p class="update-date">Last Updated: Feb 2026</p><p>Next - 详细内容即将更新</p>`,
        faq: [{ q: '如何在切片软件中添加多色？', a: 'Next - 即将更新' }]
      },
      {
        id: 'phase4-ep05',
        title: 'Multi-Color Printing: How to Turn a Meshy Textured Model into a Multi-Color 3D Print?',
        author: 'Molly (Yihan) Sun',
        points: 30,
        skillBonus: 5,
        content: `<p class="update-date">Last Updated: Feb 2026</p><p>Next - 详细内容即将更新</p>`,
        faq: [{ q: '如何打印多色模型？', a: 'Next - 即将更新' }]
      },
      {
        id: 'phase4-ep06',
        title: 'Slicing Tips: How to use Variable layer height, Ironing, Fuzzy skin, and Hide seams?',
        author: 'Joanne (Xuanmeng) Wang',
        points: 30,
        skillBonus: 5,
        content: `<p class="update-date">Last Updated: Feb 2026</p><p>Next - 详细内容即将更新</p>`,
        faq: [{ q: '有哪些高级切片技巧？', a: 'Next - 即将更新' }]
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
        title: 'Uneven First Layer - Fixing failed prints due to poor first-layer stick or small contact area',
        author: 'Tony (Yuchen) Liu',
        points: 40,
        skillBonus: 5,
        content: `<p class="update-date">Last Updated: Feb 2026</p><p>Next - 详细内容即将更新</p>`,
        faq: [{ q: '首层问题如何解决？', a: 'Next - 即将更新' }]
      },
      {
        id: 'phase5-ep02',
        title: 'Model Detail Too Thin - Fixing failed prints due to Fragile or Tiny Parts',
        author: 'Tony (Yuchen) Liu',
        points: 40,
        skillBonus: 5,
        content: `<p class="update-date">Last Updated: Feb 2026</p><p>Next - 详细内容即将更新</p>`,
        faq: [{ q: '细节太细怎么办？', a: 'Next - 即将更新' }]
      },
      {
        id: 'phase5-ep03',
        title: 'The model lacks detail - The physical print does not look as detailed as the 3D view',
        author: 'Tony (Yuchen) Liu',
        points: 40,
        skillBonus: 5,
        content: `<p class="update-date">Last Updated: Feb 2026</p><p>Next - 详细内容即将更新</p>`,
        faq: [{ q: '打印效果不如预期？', a: 'Next - 即将更新' }]
      },
      {
        id: 'phase5-ep04',
        title: 'Thin Wall - How to handle thin wall issues',
        author: 'Tony (Yuchen) Liu',
        points: 40,
        skillBonus: 5,
        content: `<p class="update-date">Last Updated: Feb 2026</p><p>Next - 详细内容即将更新</p>`,
        faq: [{ q: '薄壁问题如何解决？', a: 'Next - 即将更新' }]
      },
      {
        id: 'phase5-ep05',
        title: 'The Visual Fail Gallery - Match your "spaghetti" to our photo guide to find the fix',
        author: 'Tony (Yuchen) Liu',
        points: 40,
        skillBonus: 0,
        content: `<p class="update-date">Last Updated: Feb 2026</p><p>Next - 详细内容即将更新</p>`,
        faq: [{ q: '打印失败对照图？', a: 'Next - 即将更新' }]
      },
      {
        id: 'phase5-ep06',
        title: 'Bed Adhesion & Leveling - Mastering the "Paper Test" and the perfect first layer',
        author: 'Tony (Yuchen) Liu',
        points: 40,
        skillBonus: 0,
        content: `<p class="update-date">Last Updated: Feb 2026</p><p>Next - 详细内容即将更新</p>`,
        faq: [{ q: '如何调平热床？', a: 'Next - 即将更新' }]
      },
      {
        id: 'phase5-ep07',
        title: 'Fighting the Frizz - How to eliminate stringing, oozing, and blobs',
        author: 'Tony (Yuchen) Liu',
        points: 40,
        skillBonus: 0,
        content: `<p class="update-date">Last Updated: Feb 2026</p><p>Next - 详细内容即将更新</p>`,
        faq: [{ q: '如何消除拉丝？', a: 'Next - 即将更新' }]
      },
      {
        id: 'phase5-ep08',
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
