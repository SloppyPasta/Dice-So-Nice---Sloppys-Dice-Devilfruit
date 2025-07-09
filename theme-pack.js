Hooks.once('diceSoNiceReady', (dice3d) => {


 CONFIG.fontDefinitions["🍝 animeace2_bld"] = {
  editor: true,
  fonts: [
    {urls: ["modules/dice-so-nice-sloppys-devilfruit/fonts/animeace2_bld.woff2"]}
        ]
    };

dice3d.addTexture("Conq Haki", {
	    name: "🍝 Conq Haki",
	    composite: "multiply",
	    source: "modules/dice-so-nice-sloppys-devilfruit/textures/Conq Haki.jpg",
	    bump: "modules/dice-so-nice-sloppys-devilfruit/textures/Conq Hakib.jpg"
	});

dice3d.addTexture("Nito Nito No Mi", {
	    name: "🍝 Nito Nito No Mi",
	    composite: "multiply",
	    source: "modules/dice-so-nice-sloppys-devilfruit/textures/Nito Nito No Mi.png",
	    bump: "modules/dice-so-nice-sloppys-devilfruit/textures/Nito Nito No Mi.png"
	});

dice3d.addTexture("Ryu Ryu No Mi - Allosaurus", {
	    name: "🍝 Ryu Ryu No Mi - Allosaurus",
	    composite: "multiply",
	    source: "modules/dice-so-nice-sloppys-devilfruit/textures/Ryu Ryu No Mi - Allosaurus.png",
	    bump: "modules/dice-so-nice-sloppys-devilfruit/textures/Ryu Ryu No Mi - Allosaurus.png"
	});

dice3d.addTexture("Doku Doku No Mi", {
	    name: "🍝 Doku Doku No Mi",
	    composite: "multiply",
	    source: "modules/dice-so-nice-sloppys-devilfruit/textures/Doku Doku No Mi.png",
	    bump: "modules/dice-so-nice-sloppys-devilfruit/textures/Doku Doku No Mi.png"
	});

dice3d.addTexture("Gomu Gomu No Mi", {
	    name: "🍝 Gomu Gomu No Mi",
	    composite: "multiply",
	    source: "modules/dice-so-nice-sloppys-devilfruit/textures/Gomu Gomu No Mi.png",
	    bump: "modules/dice-so-nice-sloppys-devilfruit/textures/Gomu Gomu No Mib.png"
	});

//////////////////////////////////////////
//                Silas                  //
//////////////////////////////////////////

    dice3d.addSystem({id: "Silas", name: "🍝  Silas"}, "preferred");
    dice3d.addDicePreset({
        type: "d2",
        labels: [
          "1",
          "modules/dice-so-nice-sloppys-devilfruit/textures/Silas/nat20.png"
        ],
        bumpMaps: [
          "modules/dice-so-nice-sloppys-devilfruit/textures/Silas/nat20_bump.png"
        ],
        system: "Silas"
    });

    dice3d.addDicePreset({
        type: "d4",
        labels: [
          "1","2","3",
          "modules/dice-so-nice-sloppys-devilfruit/textures/Silas/nat20.png"
        ],
        bumpMaps: [
          "modules/dice-so-nice-sloppys-devilfruit/textures/Silas/nat20_bump.png"
        ],
        system: "Silas"
    });

    dice3d.addDicePreset({
        type: "d6",
        labels: [
          "1","2","3","4","5",
          "modules/dice-so-nice-sloppys-devilfruit/textures/Silas/nat20.png"
        ],
        bumpMaps: [,,,,
          "modules/dice-so-nice-sloppys-devilfruit/textures/Silas/nat20_bump.png"
        ],
        system: "Silas"
    });

    dice3d.addDicePreset({
        type: "d8",
        labels: [
          "1","2","3","4","5","6","7",
          "modules/dice-so-nice-sloppys-devilfruit/textures/Silas/nat20-81020.png"
        ],
        bumpMaps: [
          "modules/dice-so-nice-sloppys-devilfruit/textures/Silas/nat20_bump-81020.png"
       ],
        system: "Silas"
    });

    dice3d.addDicePreset({
        type: "d10",
        labels: [
          "1","2","3","4","5","6","7","8","9",
          "modules/dice-so-nice-sloppys-devilfruit/textures/Silas/nat20-81020.png"
        ],
        bumpMaps: [
          "modules/dice-so-nice-sloppys-devilfruit/textures/Silas/nat20_bump-81020.png"
        ],
        system: "Silas"
    });

    dice3d.addDicePreset({
        type: "d12",
        labels: [
          "1","2","3","4","5","6","7","8","9","10","11",
          "modules/dice-so-nice-sloppys-devilfruit/textures/Silas/nat20.png"
        ],
        bumpMaps: [
          "modules/dice-so-nice-sloppys-devilfruit/textures/Silas/nat20_bump.png"
        ],
        system: "Silas"
    });

    dice3d.addDicePreset({
        type: "d20",
        labels: [
          "1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19",
          "modules/dice-so-nice-sloppys-devilfruit/textures/Silas/nat20-81020.png"
        ],
        bumpMaps: [
          "modules/dice-so-nice-sloppys-devilfruit/textures/Silas/nat20_bump-81020.png"
        ],
        system: "Silas"
    });

});