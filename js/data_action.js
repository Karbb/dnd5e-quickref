data_action = [
    {
        title: "Attacco",
        icon: "crossed-swords",
        subtitle: "Attacco in mischia o da distanza",
        description: "Esegui un attacco in mischia o da distanza con la tua arma",
        reference: "PHB, pgs. 192,194-195.",
        bullets: [
            "Alcune caratteristiche, come la funzione <i>Attacco Extra</i> del guerriero, permettono di effettuare più di un attacco con questa azione. Ognuno di questi attacchi è un tiro separato e può mirare a creature diverse. Potete muovervi tra questi attacchi",
            "Quando attacchi con un'arma da mischia leggera, puoi usare un'azione bonus per attaccare con l'altra mano (vedi l'azione bonus <i>Attacco con la mano secondaria</i>)",
            "Puoi sostituire uno dei tuoi attacchi da corpo a corpo con una <i>Presa</i> o una <i>Spinta</i>.", "Puoi sostituire uno dei tuoi attacchi da corpo a corpo con un <i>Ancino</i>.",
            "Alcune condizioni danno vantaggio sull'attacco: attacchi contro bersagli accecati, paralizzati, pietrificati, trattenuti, storditi o incoscienti; attacchi da corpo a corpo contro bersagli proni; attacchi da parte di aggressori invisibili o nascosti",
            "Alcune condizioni danno svantaggio all'attacco: attacchi contro bersagli invisibili o nascosti; attacchi a distanza contro bersagli proni; attacchi da parte di aggressori accecati, spaventati, avvelenati, avvelenati o trattenuti"
        ]
    },
    {
        title: "Presa",
        icon: "grab",
        subtitle: "Attacco speciale corpo a corpo",
        description: "Tentativo di trattenere una creatura o di lottare con essa.",
        reference: "PHB, pg. 195.",
        bullets: [
            "You can use the <i>Attack</i> action to make a special melee attack, a grapple. If you're able to make multiple attacks with the Attack action, this attack replaces one of them.",
            "The target of your grapple must be no more than one size larger than you, and it must be within your reach.",
            "Using at least one free hand, you try to seize the target by making a grapple check, a Strength (Athletics) check contested by the target's Strength (Athletics) or Dexterity (Acrobatics) check (the target chooses the ability to use).",
            "If you succeed, you subject the target to the grappled condition (its speed is set to 0)."
        ]
    },
    {
        title: "Spinta",
        icon: "hand",
        subtitle: "Attacco speciale corpo a corpo",
        description: "Spingi una creature, per farla cadere prona o per spingerla via da te.",
        reference: "PHB, pg. 195.",
        bullets: [
            "Using the <i>Attack</i> action, you can make a special melee attack to shove a creature. If you're able to make multiple attacks with the Attack action, this attack replaces one of them.",
            "The target of your shove must be no more than one size larger than you, and it must be within your reach.",
            "You make a Strength (Athletics) check contested by the target's Strength (Athletics) or Dexterity (Acrobatics) check (the target chooses the ability to use).",
            "If you win the contest, you either knock the target prone or push it 5 feet away from you."
        ]
    },
    {
        title: "Lancia un incantesimo",
        icon: "magic-swirl",
        subtitle: "Tempo di lancio di 1 azione",
        description: "Cast a spell with a casting time of 1 action",
        reference: "PHB, pg. 192.",
        bullets: [
            "You can't cast a spell with you action and a different spell with your bonus action in the same turn, except if the action is used to cast a cantrip.",
            "The target of a spell must be within the spell's range. To target something, you must have a clear path to it, so it can't be behind total cover.",
            "Spells with material components do not consume the material unless explicitly stated. Unless the cost of a material is given, you can assume that the cost is negligible and the material is simply available in a component pouch.",
            "Some spells require you to maintain concentration in order to keep their magic active. If you lose concentration, such a spell ends. You lose concentration on a spell if you cast another spell that requires concentration or when you are incapacitated. Each time you take damage, you must make a Constitution saving throw to maintain your concentration. The DC equals 10 or half the damage you take, whichever number is higher."
        ]
    },
    {
        title: "Scatto",
        icon: "sprint",
        subtitle: "Velocità di movimento doppia",
        description: "Gain extra movement for the current turn",
        reference: "PHB, pg. 192.",
        bullets: [
            "The increase equals your speed, after applying any modifiers."
        ]
    },
    {
        title: "Disimpegno",
        icon: "journey",
        subtitle: "Previene attacchi di opportunità",
        description: "Your movement doesn't provoke opportunity attacks for the rest of the turn",
        reference: "PHB, pg. 192.",
        bullets: [
        ]
    },
    {
        title: "Schivata",
        icon: "aura",
        subtitle: "Aumenta le difese.",
        description: "Focus entirely on avoiding attacks",
        reference: "PHB, pg. 192.",
        bullets: [
            "Until the start of your next turn, any attack roll made against you has disadvantage if you can see the attacker, and you make Dexterity saving throws with advantage.",
            "You lose this benefit if you are <i>incapacitated</i> or if your speed drops to 0."
        ]
    },
    {
        title: "Escape",
        icon: "manacles",
        subtitle: "Escape a grapple",
        description: "Escape a grapple",
        reference: "PHB, pg. 195.",
        bullets: [
            "To escape a grapple, you must succeed on a Strength (Athletics) or Dexterity (Acrobatics) check contested by the grappler's Strength (Athletics) check.",
            "Escaping other conditions that restrain you (such as manacles) may require a Dexterity or Strength check, as specified by the condition."
        ]
    },
    {
        title: "Aiuto",
        icon: "telepathy",
        subtitle: "Fornisce vantaggio ad un alleato",
        description: "Grant an ally advantage on an ability check or attack",
        reference: "PHB, pg. 192.",
        bullets: [
            "The target gains advantage on the next ability check it makes to perform the task you are helping with.",
            "Alternatively, the target gains advantage on the next attack roll against against a creature within 5 feet of you.",
            "The advantage lasts until the start of your next turn."
        ]
    },
    {
        title: "Usare un oggetto.",
        icon: "snatch",
        subtitle: "Interazione, uso di abilità speciali",
        description: "Interact with a second object or use special object abilities",
        reference: "PHB, pg. 193.",
        bullets: [
            "You can interact with one object for free during your turn (such as drawing a weapon or opening a door). If you want to interact with a second object, use this action.",
            "When an object requires your action for its use, you also take this action."
        ]
    },
    {
        title: "Usa scudo",
        icon: "round-shield",
        subtitle: "Equipaggia o disequipaggia uno scudo",
        description: "Equip or unequip a shield",
        reference: "PHB, pgs. 144-146.",
        bullets: [
            "A shield always takes an action to equip or unequip.",
            "Armor takes several minutes to equip or unequip."
        ]
    },
    {
        title: "Nascondersi",
        icon: "hood",
        subtitle: "",
        description: "Tentativo di nascondersi",
        reference: "PHB, pg. 192.",
        bullets: [
            "Non puoi nasconderti da una creatura che può vederti. Devi avere copertura totale, essere in area molto buia, essere invisible o deve esserci qualcosa che blocchi la vista del nemico",
            "Se fai rumore (come urlare un avvertimento o far cadere un vaso), sarai scoperto.",
            "Quando provi a nasconderti, effettua una prova di Destrezza (Furtività) e annota il risultato. Finchè non sei scoperto o smetti di nasconderti, quel valore è opposto alla prova di Saggezza (Percezione) di ogni creature che ATTIVAMENTE cercano tracce della tua presenza.",
            "Una creatura ti noterà anche se non sta cercando a meno che la tua prova di Furtività è più alta della sua Percezione Passiva.",
            "Fuori dal combattimento, puoi anche usare una prova di Destrezza (Furtività) per azioni come nascondersi dai nemici, sgusciare alle spalle delle guardie, dileguarsi senza essere notato o aggredire qualcuno alle spalle senza essere visto o sentito."
        ]
    },
    {
        title: "Cercare",
        icon: "magnifying-glass",
        subtitle: "",
        description: "Concentra la tua attenzione per trovare qualcosa",
        reference: "PHB, pg. 193.",
        bullets: [
            "Depending on the nature of your search, the DM might have you make a Wisdom (Perception) check or an Intelligence (Investigation) check."
        ]
    },
    {
        title: "Prepararsi",
        icon: "stopwatch",
        subtitle: "Scegli l'innesco e la reazione",
        description: "Choose a trigger and a response reaction",
        reference: "PHB, pg. 193.",
        bullets: [
            "First, you decide what perceivable circumstance will trigger your reaction.",
            "Per prima cosa, il giocatore deve decidere quale circostanza percettibile innescherà la reazione del personaggio.",
            "Then, you choose the action you will take in response to that trigger, or you choose to move up to your speed in response to it.",
            "When the trigger occurs, you can either take your reaction right after the trigger finishes or ignore the trigger.",
            "When you ready a spell, you cast it as normal but hold its energy, which you release with your reaction when the trigger occurs. To be readied, a spell must have a casting time of 1 action, and holding onto the spell's magic requires concentration"
        ]
    },
    {
        title: "Usa un talento di classe",
        icon: "embrassed-energy",
        subtitle: "Alcuni talenti usano un'azione",
        description: "Use a racial or class feature that uses an action",
        reference: "See class page for more information.",
        bullets: [

        ]
    },
    {
        title: "Stabilizzare una creature",
        icon: "first-aid",
        subtitle: "Somministra cure di pronto soccorso ad una creatura morente",
        description: "Una creatura stabile non effettua tiri salvezza con morte",
        reference: "PHB, pg. 197.",
        bullets: [
            "Effettua una prova di Saggezza (Medicina) con CD 10.",
            "Con un successo, la creature è stabile e non ha più bisogno di effettuare tiri salvezza contro la morte",
            "Una creatura stabile recupera 1 punto ferita dopo 1d4 ore"
        ]
    },
    {
        title: "Improvvisa",
        icon: "juggler",
        subtitle: "Ogni azione non in questa lista",
        description: "Perform any action you can imagine",
        reference: "PHB, pg. 193.",
        bullets: [
            "When you describe an action not detailed elsewhere in the rules, the DM tells you whether that action is possible and what kind of roll you need to make, if any, to determine success or failure."
        ]
    }
]
