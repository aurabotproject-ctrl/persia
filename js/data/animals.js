/* Animal Cards — collected weekly. Week 1: the Zagros mountain community. */
(function(){
const RR=window.RR;
RR.ANIMALS=[
 {id:"leopard", asset:"ANIMAL-01", week:1, name:"Persian Leopard", sci:"Panthera pardus tulliana", habitat:"Rocky mountains & oak woodland", diet:"Carnivore", status:"Endangered", rarity:3, hue:"#d9a441", bg:["#2a1a4a","#7a3a5a"],
  adapt:["Rosette-spotted coat — camouflage among rocks and shadows","Powerful body and claws — an excellent climber","Stalks and ambushes prey such as ibex and wild sheep"],
  fun:"A leopard’s spots are called rosettes — just like the Persian pattern you will paint on Thursday!"},
 {id:"ibex", asset:"ANIMAL-02", week:1, name:"Bezoar Ibex", sci:"Capra aegagrus", habitat:"Steep, rocky mountain slopes", diet:"Herbivore", status:"Wild goat of the mountains", rarity:1, hue:"#a98760", bg:["#1c2f5a","#5a7ab0"],
  adapt:["Hard-rimmed, grippy hooves — grip on steep rock","Very long curved horns (males can grow horns over a metre long)","Thick winter coat — warmth in the cold mountains"],
  fun:"Ibex can leap between ledges that would make you dizzy. They have a cousin in Aotearoa: the introduced Himalayan tahr."},
 {id:"bear", asset:"ANIMAL-03", week:1, name:"Brown Bear", sci:"Ursus arctos", habitat:"Mountain forest & meadows", diet:"Omnivore", status:"Least Concern worldwide (small local populations)", rarity:2, hue:"#6b4a30", bg:["#14301f","#4a7a4a"],
  adapt:["Thick fur — keeps warm through cold winters","Long, strong claws — for digging roots and insects","Eats plants AND meat — can find food in every season"],
  fun:"Brown bears can smell food from a very long way off — their sense of smell is far better than a dog’s."},
 {id:"eagle", asset:"ANIMAL-04", week:1, name:"Golden Eagle", sci:"Aquila chrysaetos", habitat:"High cliffs & open mountain sky", diet:"Carnivore", status:"Least Concern", rarity:2, hue:"#8a5a2a", bg:["#3a1a5a","#e08a4a"],
  adapt:["Far sharper eyesight than ours — spots prey from high above","Hooked beak and strong talons — for catching and tearing food","Broad wings — soars on warm air currents without flapping"],
  fun:"A golden eagle can dive at more than 150 km/h to catch its prey."}
];

RR.ANIMALS.push(
 {id:"onager", asset:"ANIMAL-05", week:2, name:"Persian Onager", sci:"Equus hemionus onager", habitat:"Open dry grassland & semi-desert", diet:"Herbivore", status:"Endangered", rarity:2, hue:"#c9a26a", bg:["#3a2a1a","#c98a4a"],
  adapt:["Long legs and tough hooves — built for running on hard, stony ground","Large ears and sharp senses — spots danger across open plains","Can go without water for a time and eat coarse, dry grass"],
  fun:"The onager is a wild cousin of the donkey — and one of the fastest equids, able to sprint at about 70 km/h."},
 {id:"gazelle", asset:"ANIMAL-06", week:2, name:"Goitered Gazelle", sci:"Gazella subgutturosa", habitat:"Plains, steppe & semi-desert", diet:"Herbivore", status:"Vulnerable", rarity:1, hue:"#d6b27a", bg:["#2a3a2a","#a8a060"],
  adapt:["Sandy coat — blends into dry grassland","Fast and agile — outruns many predators","Gets most of its water from the plants it eats"],
  fun:"Male goitered gazelles can puff up their throats when calling — that is where the ‘goitered’ name comes from."},
 {id:"cheetah", asset:"ANIMAL-07", week:2, name:"Asiatic Cheetah", sci:"Acinonyx jubatus venaticus", habitat:"Open plains & dry hills", diet:"Carnivore", status:"Critically Endangered", rarity:3, hue:"#e0b050", bg:["#3a2a1a","#d9a441"],
  adapt:["Slim body and long legs — the fastest land animal over short bursts","Claws that do not fully retract — extra grip for sprinting","Dark ‘tear lines’ below the eyes — reduce sun glare"],
  fun:"Only a few dozen Asiatic cheetahs survive, all in Iran — people are working hard to protect them."},
 {id:"lion", asset:"ANIMAL-08", week:3, name:"Asiatic Lion", sci:"Panthera leo persica", habitat:"Dry woodland & scrub", diet:"Carnivore", status:"Gone from Iran; a small population survives in India", rarity:3, hue:"#c8903a", bg:["#3a1a1a","#c98a3a"],
  adapt:["Powerful jaws and claws — for hunting large prey","Lives in family groups (prides) — hunts and guards together","A skin fold along the belly — one way to tell it from African lions"],
  fun:"Lions once roamed Persia — kings of the ancient world carved them into stone at Persepolis."},
 {id:"caspiantiger", asset:"ANIMAL-09", week:3, name:"Caspian Tiger", sci:"Panthera tigris virgata", habitat:"River thickets & forest near the Caspian Sea", diet:"Carnivore", status:"Extinct (last seen about the 1970s)", rarity:3, hue:"#c07a30", bg:["#14301f","#6a8a4a"],
  adapt:["Striped coat — camouflage in reeds and shadows","Strong swimmer — hunted along rivers","Ambush hunter — silent paws, powerful pounce"],
  fun:"A reminder that when habitats vanish, animals can too — and that we are called to look after creation."},
 {id:"bactrian", asset:"ANIMAL-10", week:4, name:"Wild Bactrian Camel", sci:"Camelus ferus", habitat:"Rocky desert & gravel plains", diet:"Herbivore", status:"Critically Endangered", rarity:3, hue:"#b08a58", bg:["#3a2a1a","#d9b070"],
  adapt:["Two humps store fat — energy when food is scarce","Thick double eyelashes and closable nostrils — keep sand out","Can drink salty water and go long periods without any"],
  fun:"The camel in Stage 4 can drink over 100 litres of water in just a few minutes!"},
 {id:"sandcat", asset:"ANIMAL-11", week:4, name:"Sand Cat", sci:"Felis margarita", habitat:"Sandy and stony desert", diet:"Carnivore", status:"Least Concern", rarity:2, hue:"#e0c080", bg:["#4a3a1a","#e0b060"],
  adapt:["Furry paw pads — walk on hot sand without burning","Big ears — hear prey under the sand and shed heat","Sandy colouring — camouflage in the desert"],
  fun:"A sand cat can survive for long periods without drinking — it gets water from its prey."},
 {id:"jerboa", asset:"ANIMAL-12", week:4, name:"Jerboa", sci:"Jaculus (desert jerboa)", habitat:"Sandy desert", diet:"Omnivore", status:"Least Concern", rarity:1, hue:"#d6b27a", bg:["#2a2040","#c08a60"],
  adapt:["Huge back legs — leaps long distances to escape predators","Long tail — balance when hopping","Burrows by day, active in the cool of night"],
  fun:"A jerboa is a tiny kangaroo-like rodent that can hop more than a metre in one bound."},
 {id:"flamingo", asset:"ANIMAL-13", week:5, name:"Greater Flamingo", sci:"Phoenicopterus roseus", habitat:"Shallow salt lakes & wetlands", diet:"Filter feeder", status:"Least Concern", rarity:2, hue:"#e88a9a", bg:["#2a2a4a","#e08a9a"],
  adapt:["Bent beak — filters tiny shrimp and algae from the water","Long legs — wades in deep shallows","Pink feathers come from pigments in its food"],
  fun:"Flamingos often feed with their heads upside-down — and thousands gather at Iran’s salt lakes."},
 {id:"buffalo", asset:"ANIMAL-14", week:5, name:"Water Buffalo", sci:"Bubalus bubalis", habitat:"Marshes, river plains & wet fields", diet:"Herbivore", status:"Domesticated (wild populations endangered)", rarity:1, hue:"#5a4a40", bg:["#1c2f2a","#5a8a6a"],
  adapt:["Broad hooves — walk on soft, muddy ground","Wallowing in mud — keeps cool and keeps insects away","Strong body — pulls ploughs and carts"],
  fun:"Farmers in the river plains of Khuzestan have kept water buffalo for generations."}
);

RR.ANIMALS.push(
 {id:"fallowdeer", asset:"ANIMAL-17", week:6, name:"Persian Fallow Deer", sci:"Dama mesopotamica", habitat:"River woodland & open forest", diet:"Herbivore", status:"Endangered (rediscovered and slowly recovering)", rarity:3, hue:"#c9a060", bg:["#14301f","#8a8a4a"],
  adapt:["Spotted summer coat — camouflage in dappled woodland light","Flat, spreading antlers (males) — used in contests during the rutting season","Grazes and browses — can eat grass, leaves and shoots"],
  fun:"People once feared this deer was extinct — then a few were found again in Iran, just as Nehemiah’s people rebuilt what had been broken."},
 {id:"dugong", asset:"ANIMAL-16", week:9, name:"Dugong", sci:"Dugong dugon", habitat:"Warm, shallow seagrass beds", diet:"Herbivore (seagrass)", status:"Vulnerable", rarity:3, hue:"#7aa0a8", bg:["#0e2a3a","#3a8aa0"],
  adapt:["Paddle-like flippers and tail — swims slowly and steadily","Down-turned snout — grazes seagrass on the seabed","Surfaces to breathe air — a mammal, not a fish"],
  fun:"Dugongs are called ‘sea cows’ because they graze underwater meadows. Sailors long ago may have mistaken them for mermaids!"},
 {id:"caspianseal", asset:"ANIMAL-15", week:9, name:"Caspian Seal", sci:"Pusa caspica", habitat:"The Caspian Sea (a huge, salty lake)", diet:"Carnivore (small fish)", status:"Endangered", rarity:3, hue:"#9a9aa8", bg:["#1c2f5a","#6a8ab0"],
  adapt:["Thick blubber — keeps warm in cold water and ice","Streamlined body — fast, agile swimmer","Pups are born on winter sea ice, with soft white fur"],
  fun:"The Caspian Sea is the biggest lake on Earth, and the Caspian seal lives nowhere else."},
 {id:"hawksbill", asset:"ANIMAL-18", week:10, name:"Hawksbill Turtle", sci:"Eretmochelys imbricata", habitat:"Coral reefs of the Persian Gulf", diet:"Omnivore (sponges, algae)", status:"Critically Endangered", rarity:3, hue:"#b08a40", bg:["#0e2a3a","#c09a50"],
  adapt:["Hooked, pointed beak — reaches into reef crevices for sponges","Flippers — strong swimmer across oceans","Patterned shell — camouflage among coral"],
  fun:"Hawksbills nest on beaches in the Persian Gulf, such as Iran’s Qeshm and Hormuz islands."}
);
RR.animal=id=>RR.ANIMALS.find(a=>a.id===id);
})();
