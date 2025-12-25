let npcs = [
    { id: 'npc1', lines: ["Hihihihi!!!", "MERRY CHRISTMAS NAT!!!", "ok wait... i forgot to wrap the presents", "i miss you a lot btw", "And I know that sometimes shit gets rough", "but Im very proud of you for pushing through", "you are so strong and I love you so much", "I love yououuoouu", "I dont really know what a chicken sounds like", "bkaak bkaak", "I love you so so much"], currentLine: -1, isInteracting: false, gif: 'chickengif.gif' },
    { id: 'npc2', lines: [
        "HAIIII",
        "its me chiikawa",
        "i know...",
        "im super fucking famous or wtv",
        "merry christmas!!!!",
        "i miss you nat",
        "i brought u a tiny present",
        "its invisible bc im shy",
        "I love you nat!",
        "do u like my little wiggle",
        "this is my world now teehee",
        "you wanna know my secret?",
        "idk i dont have any I love you sososo much nat",
        "k byeeee"
    ], currentLine: -1, isInteracting: false, gif: 'chiikawa-dancing.gif' },
    { id: 'npc3', lines: ["moo moo", "MERRY CHRISTMAS NAT <3", "i tried to put a little holiday vibe in here", "I hope you're doing all good :3", "Im a cow :3", "I tried to make this look cutesy", "so I hope you like the little game I made", "I completely learned html, css, and java script for this", "I know I might have spoiled it earlier", "but i still hope you like it <3", "anyways...", "my dumb fucking son wont stop complaining", '"oooh stop eating grass"', "just hand me another beer holy shit", "hes fucking purple like who made him like that", "go talk to him" ], currentLine: -1, isInteracting: false, gif: 'cowgif.gif' },
    { id: 'npc4', lines: ["Im a little cute blue cow", "merry christmas nat!!!", "i hope u get everything u want", "(especially love and peace and awesome snacks)", "I am so joyous and happy", "nothing in the world could hurt me", "hey....", ".", "..", "...", "....", ".....", "can I tell you something...", "all my dad does is eat grass...", "every second...", "every minute...", "every hour...", "every day...", "every week...", "every month...", "every year...", "every decade...", "every century...", "every millennium...", "every decillennium...", "every centillennium...", "every megennia...", "every decamegennia...", "every hectomegennia...", "every gigennium...", "every decagigennium...", "every hectogigennium...", "every teragennium...", "every decateragennium...", "every petagennium...", "every decapetagennium...", "every hectopetagennium...", "every exagennium...", "every decaexagennium...", "every hectoexagennium...", "every zettagennium...", "every decazettagennium...", "every hectozettagennium...", ".", "..", "...", "....", "I made like all of those up XD", "anyways...", "EXPLORE!!!"], currentLine: -1, isInteracting: false, gif: 'babycow.gif' },
    { id: 'npc5', lines: ["ohhhhhhh yeah :3", "its me usagi", "ok listen...", "merry christmas nat <3", "i miss you", "like when ur not around it feels weird", "did u leave cookies out?", "bc i ate them all sorry", "oh yeah im the goat look at me wiggle", ".", "..", "...", "....", "I dont really know what to say", "but I really hope you like this <3", "I love you so much Nat", "and im so proud of you", "<eeeee", "thank you so much for everything", "you make me so happy", "you are so forgiving", "thank you I love you"], currentLine: -1, isInteracting: false, gif: 'ezgif-479506b9e26835.gif' },
    { id: 'npc6', lines: ["I am the all might FIRE ANT!!!", "merry christmas nat... i guess.", "fine... i hope u have a cozy holiday.", "Bow before me!", "The earth trembles beneath my feet.", "The gods fear me!!!!", "I will burn everything!", "My little minions will come after you", "They are only slightly south from my position >:D", "whatever you do...", "do NOT go look for them", ".", "..", "...", "....", ".....", "......", ".......", "........", ".........", "god I fucking hate that dung beetle..."], currentLine: -1, isInteracting: false, gif: 'lavaant.gif' },
    { id: 'npc7', lines: [
        "The Fire Ant sees everything, Nat...",
        "Even in your darkest nightmares.",
        "He knows your every move...",
        "Do you really think you can hide?",
        "There’s nowhere you can run.",
        "He’s always watching... waiting.",
        "Your time is running out.",
        "Each step brings you closer to doom.",
        "The Fire Ant doesn’t forgive.",
        "One wrong step, and you'll beg...",
        "...for mercy...",
        "But mercy never comes."], currentLine: -1, isInteracting: false, gif: 'TunnelingMole.gif' },
    
    { id: 'npc8', lines: [
        "You're trapped, Nat...",
        "Nowhere to run, nowhere to hide.",
        "MWHAHAHAHAHAHA...",
        "The Fire Ant’s wrath is inevitable.",
        "You think you're safe?",
        "Foolish.",
        "The Fire Ant’s gaze never blinks.",
        "He sees you, Nat.",
        "Always.",
        "Stay in line, or we’ll have a little... 'chat.'",
        "Disobey, and your fate is sealed.",
        "Run, and it will be worse."], currentLine: -1, isInteracting: false, gif: 'RhinoBeetle.gif' },
    
    { id: 'npc9', lines: [
        "Messy business, Nat...",
        "You dont want to mess with us...",
        "We are full of EVIL MWHAHAHAHAHHAHA",
        "Everyone is powerless to our ruling!!!",
        "Youre no exception.",
        "MWAHAHAHAHAHAHA...",
        "We'll deal with you soon enough.",
        "Piece by piece, we'll dismantle you.",
        "You think you can escape us?",
        "Think again.",
        "You're just a speck of dust...",
        "Ready to be swept away."], currentLine: -1, isInteracting: false, gif: 'InfectedMouse.gif' },
    
    { id: 'npc10', lines: [
        "I hear everything, Nat...",
        "Even the things you fear to speak.",
        "Your secrets? They scream to me.",
        "There’s nowhere to hide from me.",
        "MWAHAHAHAHAHA...",
        "The Fire Ant already knows it all.",
        "He knows what you’ve done.",
        "And what you haven’t.",
        "We strike from the shadows...",
        "Silent...",
        "Deadly...",
        "You’ll be buried beneath your own sins."], currentLine: -1, isInteracting: false, gif: 'EngorgedTick.gif' },
    
        { id: 'npc11', lines: [
            "MWAHAHAHAHAHAHA! I’m the mighty Dung Beetle!",
            "You better be scared, Nat!",
            "I’m part of the Fire Ant’s elite mafia crew!",
            "You’ll never escape us! Fear my wrath!",
            "I’ll roll you up like a pile of dung!",
            "No one crosses me and survives!",
            "MWAHAHAHAHAHAHA!",
            "...",
            "uhh...",
            "...",
            "fuck...",
            "...",
            "Man I hate this shit...",
            "I don’t want to be here! This is way too much!",
            "I was happy just rolling dung!",
            'Now im stuck with this "mafia" shit',
            "HELP ME HELP ME PLEASE PLEASE PLEASE PLEASE PLEASE HELP ME HELP ME PLEASE PLEASE PLEASE PLEASE PLEASE HELP ME HELP ME PLEASE PLEASE PLEASE PLEASE PLEASE"], currentLine: -1, isInteracting: false, gif: 'DungBeetle.gif' },
        

];

let moveInterval;
let animationInterval;
let frame = 1; // Track the current animation frame for the player
const maxFrames = 8; // Total frames per direction for the player
let activeDirection = null; // Track the current direction being held
const interactionRange = 90; // Maximum distance to interact with NPCs
let activeNPC = null; // Track which NPC the player is currently interacting with
let isTextComplete = true; // Track if the current text is fully displayed (starts as true to allow initial interaction)
let npcInteractions = 0;
const totalNPCs = npcs.length;
const npcInteractionCounter = document.getElementById('npc-interaction-counter');
let interactedNPCs = new Set(); // To track unique NPCs interacted with
let baseDialogueFontPx = 74; // default; will be detected on load
const isTouchDevice = window.matchMedia && window.matchMedia('(hover: none) and (pointer: coarse)').matches;

function updateNPCInteractionCounter() {
    const npcInteractionCounter = document.getElementById('npc-interaction-counter');
    npcInteractionCounter.textContent = `NPCs interacted with: ${npcInteractions} / ${totalNPCs}`;
}

// Helper: compute a conservative target width for the dialogue text
function getDialogueTargetWidth(el) {
    // Use viewport width with a safety margin so we shrink earlier, and account for CSS max-width: 90%
    const vwTarget = window.innerWidth * 0.9; // matches CSS max-width: 90%
    const elWidth = el.clientWidth || vwTarget;
    // Take the smaller of element width and viewport target
    return Math.min(elWidth, vwTarget);
}

// Reduce dialogue font size until the content fits within the target width (no overflow)
function fitDialogueToWidth() {
    const el = document.getElementById('dialogue-box');
    if (!el || el.style.display === 'none') return;
    // Ensure it's single line; CSS already uses white-space: nowrap
    // Shrink font until scrollWidth fits within a margin of targetWidth or we hit a minimum.
    let iterations = 0;
    const maxIterations = 200;
    let fontSize = parseFloat(window.getComputedStyle(el).fontSize) || baseDialogueFontPx;
    const minFont = isTouchDevice ? 12 : 44;
    const targetWidth = getDialogueTargetWidth(el);
    while (el.scrollWidth > targetWidth && fontSize > minFont && iterations < maxIterations) {
        fontSize -= 1;
        el.style.fontSize = fontSize + 'px';
        iterations++;
    }
}

// Pre-fit: set font size to fit a given text completely before we start the typewriter
function prefitDialogueForText(fullText) {
    const el = document.getElementById('dialogue-box');
    if (!el) return;
    // Temporarily set the full text to measure
    const previous = el.textContent;
    el.textContent = fullText;
    el.style.fontSize = baseDialogueFontPx + 'px';
    let iterations = 0;
    const maxIterations = 200;
    let fontSize = parseFloat(window.getComputedStyle(el).fontSize) || baseDialogueFontPx;
    const minFont = isTouchDevice ? 12 : 44;
    const targetWidth = getDialogueTargetWidth(el);
    // Quick jump: estimate scale factor to get into range faster, then fine-tune
    const measured = el.scrollWidth || 1;
    if (measured > 0) {
        const factor = (targetWidth / measured) * 0.96; // 4% extra safety
        fontSize = Math.max(minFont, Math.min(baseDialogueFontPx, fontSize * factor));
        el.style.fontSize = fontSize + 'px';
    }
    while (el.scrollWidth > targetWidth && fontSize > minFont && iterations < maxIterations) {
        fontSize -= 1;
        el.style.fontSize = fontSize + 'px';
        iterations++;
    }
    // Restore for typewriter
    el.textContent = '';
}

// Ensure the player starts with the correct initial sprite
function initializePlayer() {
    const character = document.getElementById('character');
    character.style.backgroundImage = `url('walking2/dd1.png')`; // Set initial player sprite
}

// Initialize NPCs to display GIFs
function initializeNPCs() {
    npcs.forEach(npc => {
        const npcElement = document.getElementById(npc.id);
        npcElement.innerHTML = `<img src="${npc.gif}" alt="${npc.id}" style="width: 100%; height: 100%">`; // Use an img tag inside the NPC div
    });
}

// Function to update the interaction counter text
function updateNPCInteractionCounter() {
    npcInteractionCounter.textContent = `NPCs interacted with: ${npcInteractions} / ${totalNPCs}`;
}

// Function to handle interaction with NPCs and cycle through text
function interactWithNPC() {
    if (activeNPC && isTextComplete) { // Only allow interaction if the text is complete
        advanceNPCText(); // Display the next line of dialogue if near an NPC

        // Check if it's the first time interacting with this NPC
        if (!interactedNPCs.has(activeNPC.id)) {
            interactedNPCs.add(activeNPC.id);
            npcInteractions++; // Increment interaction count
            updateNPCInteractionCounter(); // Update the on-screen counter
        }
    }
}

// Other functions like moveWorld, changeCharacterSprite, etc...
function preloadImages() {
    const images = [
        'walking2/uu1.png', 'walking2/uu2.png', 'walking2/uu3.png', // Add all up direction frames
        'walking2/dd1.png', 'walking2/dd2.png', 'walking2/dd3.png', // Add all down direction frames
        'walking2/ll1.png', 'walking2/ll2.png', 'walking2/ll3.png', // Add all left direction frames
        'walking2/rr1.png', 'walking2/rr2.png', 'walking2/rr3.png' // Add all right direction frames
    ];

    images.forEach(function(image) {
        const img = new Image();
        img.src = image;
    });
}
// Start NPC GIFs and background music when the page loads
    window.onload = function () {
        preloadImages();
        let loadingText = document.querySelector('#loading-screen h1');
        let loadingStates = ["Loading.", "Loading..", "Loading..."];
        let loadingIndex = 0;

        // Function to cycle through "Loading.", "Loading..", "Loading..."
        function animateLoading() {
            loadingText.textContent = loadingStates[loadingIndex]; // Update text
            loadingIndex = (loadingIndex + 1) % loadingStates.length; // Loop through the states
        }

        // Set interval to update the loading text every 500ms (0.5 seconds)
        let loadingInterval = setInterval(animateLoading, 500);

        // Display the loading screen for 5 seconds, then transition to the game
        setTimeout(function() {
            clearInterval(loadingInterval); // Stop the loading animation after 5 seconds
            document.getElementById('loading-screen').style.display = 'none'; // Hide loading screen
            document.getElementById('world').style.display = 'block'; // Show the game world
        }, 10000); // 5000 ms = 5 seconds

        // Initialize NPCs, player, and other game elements
        initializeNPCs();
        initializePlayer();
        // detect the base dialogue font size from CSS to use for scaling resets
        const dlg = document.getElementById('dialogue-box');
        if (dlg) {
            const computed = window.getComputedStyle(dlg).fontSize;
            const parsed = parseFloat(computed);
            if (!isNaN(parsed)) baseDialogueFontPx = parsed;
        }
        
        // Start the background music
        const backgroundMusic = document.getElementById('background-music');
        backgroundMusic.volume = 0.5; // Adjust volume if needed
        backgroundMusic.play(); // Play the music when the page loads
        updateNPCInteractionCounter(); // Initialize the counter when the page loads

        // Re-fit dialogue on viewport changes (desktop only)
        if (!isTouchDevice) {
            window.addEventListener('resize', () => {
                fitDialogueToWidth();
            });
        }
    };


function moveWorld(direction) {
    const world = document.getElementById('world');
    let x = parseInt(world.dataset.x || 0, 10);
    let y = parseInt(world.dataset.y || 0, 10);

    // Adjust the world position based on the direction
    switch (direction) {
        case 'left':
            x += 10; // Moderate step size for smoother, faster movement
            break;
        case 'right':
            x -= 10;
            break;
        case 'up':
            y += 10;
            break;
        case 'down':
            y -= 10;
            break;
    }

    // Move the world background position independently
    let backgroundPositionX = parseInt(window.getComputedStyle(world).backgroundPositionX, 10);
    let backgroundPositionY = parseInt(window.getComputedStyle(world).backgroundPositionY, 10);

    switch (direction) {
        case 'left':
            backgroundPositionX += 10; // Move background with moderate speed
            break;
        case 'right':
            backgroundPositionX -= 10;
            break;
        case 'up':
            backgroundPositionY += 10;
            break;
        case 'down':
            backgroundPositionY -= 10;
            break;
    }

    // Apply the new background position to simulate movement
    world.style.backgroundPosition = `${backgroundPositionX}px ${backgroundPositionY}px`;

    // Move the NPCs in the same direction and speed as the world
    const npcs = document.querySelectorAll('.npc');
    npcs.forEach(npc => {
        // Get current position from inline styles or dataset
        let npcX = parseInt(npc.style.left || npc.dataset.x, 10);
        let npcY = parseInt(npc.style.top || npc.dataset.y, 10);

        // Adjust the NPCs' position based on the world movement
        switch (direction) {
            case 'left':
                npcX += 10;
                break;
            case 'right':
                npcX -= 10;
                break;
            case 'up':
                npcY += 10;
                break;
            case 'down':
                npcY -= 10;
                break;
        }

        // Update the NPC's position with new values
        npc.style.left = `${npcX}px`;
        npc.style.top = `${npcY}px`;

        // Update the data attributes to store the new position
        npc.dataset.x = npcX;
        npc.dataset.y = npcY;
    });

    // Store the world's new position
    world.dataset.x = x;
    world.dataset.y = y;

    // Check for proximity to NPCs after world movement
    checkProximityToNPCs();
    // Redraw compass after movement
    drawCompass();
}



// Function to change the character sprite based on the direction and frame number
function changeCharacterSprite(direction) {
    const character = document.getElementById('character');

    // Increment the frame and loop back to 1 if we exceed maxFrames
    frame = (frame % maxFrames) + 1;

    // Change the sprite based on the direction and frame number
    switch (direction) {
        case 'up':
            character.style.backgroundImage = `url('walking2/uu${frame}.png')`;
            break;
        case 'down':
            character.style.backgroundImage = `url('walking2/dd${frame}.png')`;
            break;
        case 'left':
            character.style.backgroundImage = `url('walking2/ll${frame}.png')`;
            break;
        case 'right':
            character.style.backgroundImage = `url('walking2/rr${frame}.png')`;
            break;
    }
}


// Function to start moving the player and the world
function startMoving(direction) {
    if (activeDirection !== direction) {
        stopMoving(); // Stop any previous movement if changing direction
        activeDirection = direction;

        // Move and animate immediately before setting the interval
        moveWorld(direction);
        changeCharacterSprite(direction);

        // Start moving the world in the given direction at a regular interval
        moveInterval = setInterval(function () {
            moveWorld(direction);
            checkProximityToNPCs(); // Check proximity during movement
        }, 50); // Adjust this value to a higher number if needed

        // Start updating the character's walking animation at a regular interval
        animationInterval = setInterval(function () {
            changeCharacterSprite(direction);
        }, 120); // Increased delay to 250ms for smoother frame switching
    }
}

// Function to stop moving the player and stop animation
function stopMoving() {
    clearInterval(moveInterval); // Stop the movement interval
    clearInterval(animationInterval); // Stop the animation interval
    frame = 1; // Reset the frame when movement stops
    activeDirection = null; // Reset the active direction
}

// Function to handle interaction with NPCs and cycle through text
function interactWithNPC() {
    if (activeNPC && isTextComplete) { // Only allow interaction if the text is complete
        advanceNPCText(); // Display the next line of dialogue if near an NPC
    }
}

// Function to display the current line of NPC text, letter by letter
function displayNPCText() {
    const dialogueBox = document.getElementById('dialogue-box');
    if (activeNPC) {
        const text = activeNPC.lines[activeNPC.currentLine];
        dialogueBox.textContent = ''; // Clear the dialogue box before displaying new text
        dialogueBox.style.display = 'block'; // Show the dialogue box
        isTextComplete = false; // Reset the flag before starting to show the next line
        // On desktop, pre-fit font size so it starts smaller if needed. On touch, keep CSS-defined size.
        if (!isTouchDevice) {
            prefitDialogueForText(text);
        }

        // Display each letter with a delay
        let currentIndex = 0;
        function showNextLetter() {
            if (currentIndex < text.length) {
                // Append the next character (including spaces) to the dialogue box
                dialogueBox.textContent += text[currentIndex];
                currentIndex++;
                // Desktop only: keep fitting during typing
                if (!isTouchDevice) {
                    fitDialogueToWidth();
                }
                setTimeout(showNextLetter, 20); // 0.02 seconds delay between each letter
            } else {
                isTextComplete = true; // Mark text as fully displayed
            }
        }

        showNextLetter(); // Start showing the text
    }
}

// Function to advance to the next line of dialogue, only if the previous one is fully displayed
function advanceNPCText() {
    if (activeNPC && isTextComplete) {
        // Move to the next line, loop back to the start if at the end
        activeNPC.currentLine = (activeNPC.currentLine + 1) % activeNPC.lines.length;
        displayNPCText(); // Update the dialogue box with the new line
    }
}

// Function to check proximity to NPCs and update `activeNPC`
function checkProximityToNPCs() {
    const player = document.getElementById('character');
    const playerRect = player.getBoundingClientRect();
    let npcFound = false; // Track if we find an NPC within range

    npcs.forEach(npc => {
        const npcElement = document.getElementById(npc.id);
        const npcRect = npcElement.getBoundingClientRect();

        // Calculate the distance between the player and the NPC
        const distance = Math.sqrt(
            Math.pow(playerRect.x - npcRect.x, 2) +
            Math.pow(playerRect.y - npcRect.y, 2)
        );

        // If player is within the interaction range, set activeNPC to this NPC
        if (distance < interactionRange) {
            activeNPC = npc; // Set the active NPC to the one in range
            npcFound = true; // Mark that an NPC was found within range
        }
    });

    // If no NPC is found within range, reset activeNPC and hide the dialogue box
    const dialogueBox = document.getElementById('dialogue-box');
    if (!npcFound) {
        activeNPC = null;
        dialogueBox.style.display = 'none'; // Hide the dialogue box when no NPC is nearby
    }
}

// Event listener for key presses
document.addEventListener('keydown', function (event) {
    // Move the world when arrow keys are pressed
    switch (event.key) {
        case 'ArrowLeft':
            startMoving('left');
            break;
        case 'ArrowRight':
            startMoving('right');
            break;
        case 'ArrowUp':
            startMoving('up');
            break;
        case 'ArrowDown':
            startMoving('down');
            break;
    }

    // Interact with NPC or advance dialogue when 'X' is pressed
    if (event.key === 'x' || event.key === 'X') {
        if (activeNPC) {
            advanceNPCText(); // Go to the next line if the previous one is done
        } else {
            interactWithNPC(); // Start interacting with an NPC if not already interacting
        }
    }
});

    // Stop movement when the key is released
    document.addEventListener('keyup', function () {
        stopMoving();
    });

// On-screen D-pad handlers (mouse + touch)
(function setupDpad() {
    const map = [
        { id: 'btn-up', dir: 'up' },
        { id: 'btn-down', dir: 'down' },
        { id: 'btn-left', dir: 'left' },
        { id: 'btn-right', dir: 'right' }
    ];

    function addPressListeners(el, direction) {
        if (!el) return;
        const start = (e) => { e.preventDefault(); startMoving(direction); };
        const stop = (e) => { e.preventDefault(); stopMoving(); };

        el.addEventListener('mousedown', start);
        el.addEventListener('mouseup', stop);
        el.addEventListener('mouseleave', stop);

        el.addEventListener('touchstart', start, { passive: false });
        el.addEventListener('touchend', stop, { passive: false });
        el.addEventListener('touchcancel', stop, { passive: false });
    }

    map.forEach(({ id, dir }) => addPressListeners(document.getElementById(id), dir));
})();

// On-screen Interact button (acts like pressing 'X')
(function setupInteractButton() {
    const btn = document.getElementById('btn-interact');
    if (!btn) return;

    const trigger = (e) => {
        e.preventDefault();
        if (activeNPC) {
            if (isTextComplete) {
                advanceNPCText();
            }
        } else {
            interactWithNPC();
        }
    };

    btn.addEventListener('click', trigger);
    btn.addEventListener('touchstart', trigger, { passive: false });
})();

// =====================
// Compass Overlay Logic
// =====================
let compassCanvas, compassCtx;
let compassArrowImg;
let compassArrowReady = false;

function setupCompassCanvas() {
    compassCanvas = document.getElementById('compass-overlay');
    if (!compassCanvas) return;
    compassCtx = compassCanvas.getContext('2d');

    // Preload the arrow image used for NPC direction indicators
    compassArrowImg = new Image();
    compassArrowImg.onload = () => {
        compassArrowReady = true;
        drawCompass();
    };
    compassArrowImg.onerror = () => {
        compassArrowReady = false;
    };
    compassArrowImg.src = 'arrow2.png';

    resizeCompassCanvas();
    window.addEventListener('resize', resizeCompassCanvas);
}

function resizeCompassCanvas() {
    if (!compassCanvas) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = { width: window.innerWidth, height: window.innerHeight };
    compassCanvas.width = Math.floor(rect.width * dpr);
    compassCanvas.height = Math.floor(rect.height * dpr);
    compassCanvas.style.width = rect.width + 'px';
    compassCanvas.style.height = rect.height + 'px';
    if (compassCtx) {
        compassCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    drawCompass();
}

function drawArrow(ctx, fromX, fromY, toX, toY, options = {}) {
    const { color = 'rgba(0,0,0,0.35)', width = 3, headLength = 14 } = options;
    const dx = toX - fromX;
    const dy = toY - fromY;
    const angle = Math.atan2(dy, dx);

    ctx.save();
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = width;
    ctx.lineCap = 'round';

    // Draw line
    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.stroke();

    // Draw arrow head
    ctx.beginPath();
    ctx.moveTo(toX, toY);
    ctx.lineTo(
        toX - headLength * Math.cos(angle - Math.PI / 6),
        toY - headLength * Math.sin(angle - Math.PI / 6)
    );
    ctx.lineTo(
        toX - headLength * Math.cos(angle + Math.PI / 6),
        toY - headLength * Math.sin(angle + Math.PI / 6)
    );
    ctx.closePath();
    ctx.fill();
    ctx.restore();
}

function drawArrowImage(ctx, x, y, angle, options = {}) {
    const { size = 24, alpha = 0.9 } = options;
    if (!compassArrowReady || !compassArrowImg) return false;

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.globalAlpha = alpha;

    // Assumes arrow.png points to the right by default.
    ctx.drawImage(compassArrowImg, -size / 2, -size / 2, size, size);
    ctx.restore();
    return true;
}

// Draw only an arrow head (triangle) at a given position and angle
function drawArrowHead(ctx, x, y, angle, options = {}) {
    const { color = 'rgba(255,105,180,0.85)', headLength = 12, width = 3 } = options;
    ctx.save();
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(
        x - headLength * Math.cos(angle - Math.PI / 6),
        y - headLength * Math.sin(angle - Math.PI / 6)
    );
    ctx.lineTo(
        x - headLength * Math.cos(angle + Math.PI / 6),
        y - headLength * Math.sin(angle + Math.PI / 6)
    );
    ctx.closePath();
    ctx.fill();
    ctx.restore();
}

function drawCompass() {
    if (!compassCtx) return;
    // Clear
    compassCtx.clearRect(0, 0, compassCanvas.width, compassCanvas.height);

    const player = document.getElementById('character');
    if (!player) return;
    const playerRect = player.getBoundingClientRect();
    const playerX = playerRect.left + playerRect.width / 2;
    const playerY = playerRect.top + playerRect.height / 2;

    // Draw only arrow heads positioned 60px from player toward each NPC
    npcs.forEach(npc => {
        const npcEl = document.getElementById(npc.id);
        if (!npcEl) return;
        const r = npcEl.getBoundingClientRect();
        const npcX = r.left + r.width / 2;
        const npcY = r.top + r.height / 2;

        // Skip if NPC is exactly at player position (avoid NaN angles)
        if (Math.abs(npcX - playerX) < 0.5 && Math.abs(npcY - playerY) < 0.5) return;
        const dx = npcX - playerX;
        const dy = npcY - playerY;
        const angle = Math.atan2(dy, dx);
        const radius = 60; // place the arrow head 60px from the player
        const headX = playerX + Math.cos(angle) * radius;
        const headY = playerY + Math.sin(angle) * radius;

        // Prefer image arrow; fall back to triangle if the image isn't ready.
        const drew = drawArrowImage(compassCtx, headX, headY, angle, { size: 26, alpha: 0.95 });
        if (!drew) {
            drawArrowHead(compassCtx, headX, headY, angle, {
                color: 'rgba(255,105,180,0.9)',
                headLength: 10,
                width: 3
            });
        }
    });
}

// Initialize compass after load
window.addEventListener('load', () => {
    setupCompassCanvas();
    drawCompass();
});
