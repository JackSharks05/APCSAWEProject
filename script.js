//--------------------Set Up Google Analytics--------------------
var _AnalyticsCode = 'UA-186374678-1';
var _gaq = _gaq || [];
_gaq.push(['_setAccount', _AnalyticsCode]);
_gaq.push(['_trackPageview']);
(function() {
  var ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
})();

//--------------------Tracking Amount of Times Button is Clicked --------------------

function trackButtonClick(e) {
  _gaq.push(['_trackEvent', e.target.id, 'clicked']);
}

document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelector('#orgButton');
  buttons.addEventListener('click', trackButtonClick);
});

//--------------------Time Feature--------------------

function showTime(){
  var time = new Date();
  var h = time.getHours(); // 0 - 23
  var m = time.getMinutes(); // 0 - 59
  var s = time.getSeconds(); // 0 - 59
  
  var session = "AM";
    
  if(h == 0){
    h = 12;
  }
    
  if(h >= 12){
    session = "PM";
    if(h > 12){
      h = h - 12;
    }
  }
    
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
    
  var time2 = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time2;
  document.getElementById("MyClockDisplay").textContent = time2;
    
  setTimeout(showTime, 1000);
}
showTime();

//--------------------Date Feature--------------------
var date; var dd; var mm; var yy;

function showDate(){
  date = new Date();
  dd = date.getDate(); 
  mm = date.getMonth()+1;
  yy = date.getFullYear();

  var date2 = mm + "/" + dd + "/" + yy
  
  document.getElementById("MyDateDisplay").innerText = date2;
  document.getElementById("MyDateDisplay").textContent = date2;

  setTimeout(showDate, 1000);
}

showDate();

//--------------------Facts, Tips, and Sources--------------------
var range = 50 /*number of generic facts*/

// change every time
var facts = ["100,000 marine mammals and turtles and 1 million sea birds are killed by marine plastic pollution annually.", 
"In the United States alone, 30 million trees are cut down to produce wrapping paper every year.",
"We have a garbage island floating in our ocean, mostly comprised of plastics - the size of India, Europe and Mexico combined!",
"Every year, we extract an estimated 55 billion tons of fossil energy, minerals, metals and bio mass from the Earth.",
"Each day 70,000 acres of rainforest are lost to deforestation.",
"The Arctic has warmed at twice the rate of the rest of the globe on average.",
"If Earth's history is compared to 1 year, 1/3 of all Earth's natural resources have been consumed by modern humans in the last 0.2 seconds.",
"More than 10.3 million acres of forests were burned in wildfires 2020.",
"The concentration of carbon dioxide (CO2)​​​​​​​ in our atmosphere, as of May 2020, is the highest it has been in human history.",
"The greenhouse gas emissions from deforestation are comparable to the emissions from all the passenger vehicles on this planet.",
"When forests are cut down to make space for palm oil plantations, carbon is released into the atmosphere, contributing to global warming.",
"The Amazon is losing nearly one million soccer fields worth of  forest each year.",
"Every day approximately 8 million pieces of plastic pollution find their way into our oceans.",
"Every hour, 1,692 acres of productive dry land become desert.",
"We are using up 50% more natural resources than the Earth can provide. At our current population, we need 1.5 Earths, which we do not have.",
"Between 1993 and 2019, Antarctica has lost about 148 billion tons of ice per year.",
"Average wildlife populations have dropped by 60 percent in just over 40 years.",
"The 20 warmest years on record have been in the past 22 years.",
"A single quart of motor oil dumped on the ground or in the trash, can contaminate up to two million gallons of fresh water.",
"We are in the midst of the sixth mass extinction of animal species. This extinction is caused by the impact of modern humans on the natural world.",
"About 8.3 billion tons of plastic has been produced since the 1950s, and only about 9% of this plastic has been recycled.",
"There are five trillion pieces of plastic in our oceans, enough to circle the Earth over 400 times.",
"Cars and light trucks emitted 1.1 billion metric tons carbon dioxide or 17% of the total U.S. greenhouse gas emissions in 2018.",
"Scientists have documented 700 marine species affected by ocean plastic.",
"Nearly 80% of all plastic waste ever created by humans is still in the environment.",
"Creating and shipping junk mail produces more greenhouse gas emissions than 9 million cars.",
"Currently only about 7% of all plastics generated is recycled.",
"The temperature in the U.S. has increased by 2 degrees in the last 50 years.",
"Since 1870, global sea levels have risen by about 8 inches.",
"The Arctic ice is melting rapidly. By 2040 the region is expected to have a completely ice-free summer or even earlier.",
"Human activities release around 37 billion metric tons of carbon dioxide per year.",
"Due to global warming and pollution, coral reefs are suffering the worst bleaching with the highest dying record since 1980.",
"More than 1 million species have become extinct due to disappearing habitats, ecosystems, and acidic oceans, all caused by global warming.",
"Deforestation is the second largest human-made source of carbon dioxide",
"Carbon dioxide levels in the atmosphere are the highest they have been in 650,000 years.",
"Land ice at the poles has declined  by 413 gigatons a year since 2002.",
"Air pollution is responsible for 33% of the toxic contaminants that end up in oceans and coastal waters.",
"Each year, three times as much garbage is dumped into the world’s oceans as the weight of fish caught.",
"The waste in the ocean takes a long time to decompose. Styrofoam takes 80 years, aluminum takes 200 years, and plastic takes 400 years.",
"Over 100,000 marine animals die every year from plastic entanglement and ingestion.",
"We lose Arctic sea ice at a rate of almost 13% per decade.",
"Over the past 30 years, the oldest and thickest ice in the Arctic has declined by a stunning 95%.",
"From 1967-2012, the global amount of snow cover in June decreased by about 53%.",
"The destruction of the Amazon rainforest threatens the habitat of over 52,000 animal and plant species, some only found in the Amazon.",
"Globally, 91% of the world population is exposed to unhealthy levels of pollution.",
"Species are dying off 1,000 times more frequently today than during the 60 million years before the arrival of humans.",
"2.57 million pounds of carbon dioxide is emitted into the air every second.",
"Greenhouse gases are at a higher level now than at any time in the last 800,000 years.",
"Scientists estimate we’re now losing species at 1,000 to 10,000 times the “background” rate, with dozens going extinct every day.",
"99% of currently threatened species are at risk from human activities, primarily those driving habitat loss, introduction of exotic species, and global warming"];
var tips = ["If you see litter, pick it up and dispose of it properly in the recycle or trash.",
"Use fabric or recyclable paper instead.",
"Whenever you can, avoid single use plastic items. Things reusable water bottles and straws are great alternatives!",
"Try to walk or ride a bike places instead of taking a car in order to reduce fossil fuel consumption!",
"Try to use fewer paper products - for example, use cloth napkins instead of disposable paper ones.",
"A key contributor to the melting Arctic is greenhouse gas emissions. One way to minimize your emissions is by turning the lights off whenever you leave a room.",
"Don't idle your car. If you are stopped for a while, completely turn off the engine rather than waiting with it on.",
"Be careful to take safety precautions when handling things like sparklers or campfires and properly extinguish flames to avoid them spreading",
"When you can, take public transportation, ride a bike, or even walk to your destination",
"Be conscious of what you are printing and don't print documents if you don't need to. If you are printing, try to print double-sided.",
"When you buy a product with palm oil in it, make sure the brand sources their palm oil sustainably!",
"Deforestation in the Amazon is often a result of bad farming practices. If you can, try to buy produce from brands that are sustainable and local.",
"If you see litter, pick it up and dispose of it properly in the recycle or trash.",
"To reduce the emmission of greenhouse gases overall, you have to to reduce your carbon footprint. One way to do this is to walk places instead of driving or using reusable items instead of single use disposables.",
"Be mindful of the disposable products you use. Try to find reusable and sustainable alternatives.",
"A lot of greenhouse gases that harm the environment are created by big manufacturing plants. Before buying something new, see if you can reuse something you already own!",
"Do your best to preserve animal habitats by respecting any posted information about sensitive wildlife and cleaning up after yourself.",
"Try to be a responsible consumer! When buying a something, see if you can choose a brand that creates their product sustainably!",
"Properly dispose of all your waste. If you are unsure what to do with something, a quick google search will reveal whether it needs to be disposed of in a specific way.",
"Focus on using reusable products. By avoiding disposables, you help keep environments clean and reduce the demand for destruction of habitats for resources.",
"Recycle as often as you can and encourage those around you to also recycle.",
"If you see litter, pick it up and dispose of it properly in the recycle or trash so it doesn't end up in the ocean!",
"Make sure your car’s tires are properly inflated. Fuel efficiency decreases by 0.2% for each 1 PSI decrease.",
"Whenever you see litter on the ground, try to clean it up so it doesn't end up in the ocean.",
"A lot of greenhouse gases are created by big manufacturing plants. Before buying something new, see if you can reuse something you already own!",
"If you get junkmail you don't want, you can write to the Direct Marketing Association Preference Service, and let them know you do not want to receive marketing mail.",
"When you are buying single use plastic products, look for ones that can be recycled. It's even better if you decide on a reusable option instead!",
"Ocean levels rising is caused by the emmission of greenhouse gases, so try to reduce your carbon footprint by making sure not to idle your car or expend other resources without necessity!",
"Global warming is caused by the emmission of greenhouse gases into the environment, so try to reduce your carbon footprint. One way to do this is to walk places instead of driving.",
"A key contributor to the melting Arctic is greenhouse gas emissions. One way to minimize your emissions is by reusing items instead of buying new ones.",
"Many greenhouse gases are emitted during deforestation, so try to buy produce from brands that are sustainable and local to reduce the need for it!",
"A key contributor to the melting Arctic is greenhouse gas emissions. One way to minimize your emissions is by turning the lights off whenever you leave a room.",
"Global warming is caused by the emission of greenhouse gases into the environment, so try to reduce your carbon footprint!",
"Many forests are being threatened because of their natural resources. When you use a reusable product, you reduce the needs for those resources!",
"Try to be a responsible consumer! When buying a something, see if you can choose a brand that creates their product sustainably!",
"Global warming is caused by the emission of greenhouse gases into the environment, so try to reduce your carbon footprint. One way to do this is to walk places instead of driving.",
"Don't idle your car. This small act reduces the amount of pollution you put into the environment!",
"Try to avoid using single use plastic items when you can. Opt for a reusable product instead!",
"Whenever you see litter on the ground, try to clean it up so it doesn't end up in the ocean.",
"When using single use plastics, make sure to dispose of them properly!",
"Try to avoid using single use products when you can. Go for a reusable option instead, because it reduces carbon emisions in the long run.",
"Don't idle your car. This small act reduces the amount of pollution you put into the environment!",
"Global warming is caused by the emmission of greenhouse gases into the environment, so try to reduce your carbon footprint. One way to do this is to walk places instead of driving.",
"Many companies rely on palm oil, which is one of the reasons the amazon is in danger! Try to use products that source their palm oil sustainably or don't use any at all!",
"Try to be a responsible consumer! When buying a product, see if you can choose a brand that uses resources sustainably!",
"A lot of species that are endangered are endangered because of issues like habitat loss, try to use sustainable products in order to reduce human destruction of animal habitats for resources.",
"A lot of greenhouse gases are created by big manufacturing plants. Before buying something new, see if you can reuse something you already own!",
"Try to create more eco friendly habits like not idling your car or turning off the lights when you leave a room.",
"Try to avoid using single use products when you can. Go for a reusable option instead, because it reduces carbon emisions in the long run.",
"Try to be a responsible consumer! When buying a product, see if you can choose a brand that uses resources sustainably!"];
var sources = ["https://www.sas.org.uk/our-work/plastic-pollution/plastic-pollution-facts-figures/",
"https://www.treehugger.com/ask-pablo-holiday-wrapping-paper-4854622",
"https://www.theworldcounts.com/stories/environmental-degradation-facts",
"https://www.theworldcounts.com/stories/environmental-degradation-facts",
"https://www.rainforesttrust.org/?gclid=CjwKCAiAirb_BRBNEiwALHlnD2HVUzBJ20TMR7G20TRONpfqhy3W6BPgR5SMsgfIw4j_C5yndUQVuRoChu4QAvD_BwE",
"https://www.biologicaldiversity.org/programs/climate_law_institute/the_arctic_meltdown/arctic_extinction_report.html",
"https://www.theworldcounts.com/stories/amazing_environmental_facts",
"https://www.iii.org/fact-statistic/facts-statistics-wildfires#:~:text=More%20than%2010.3%20million%20acres,4.7%20million%20acres%20in%202019.",
"Willeit, M., Ganopolski, A., Calov, R., & Brovkin, V. (2019). Mid-Pleistocene transition in glacial cycles explained by declining CO2 and regolith removal. Science Advances, 5(4), eaav7337. https://doi.org/10.1126/sciadv.aav7337",
"https://www.conservation.org/stories/11-climate-change-facts-you-need-to-know",
"https://www.nationalgeographic.com/environment/global-warming/global-warming-solutions/",
"https://www.nationalgeographic.com/environment/global-warming/global-warming-solutions/#/10-global-warming-gallery.jpg",
"https://www.sas.org.uk/our-work/plastic-pollution/plastic-pollution-facts-figures/",
"https://www.theworldcounts.com/stories/environmental-degradation-facts",
"https://www.theworldcounts.com/stories/environmental-degradation-facts",
"https://climate.nasa.gov/evidence/",
"https://livingplanet.panda.org/en-us/",
"http://ane4bf-datap1.s3-eu-west-1.amazonaws.com/wmocms/s3fs-public/ckeditor/files/Draft_Statement_7_February.pdf?5.6rzIGwBm5lwDSTPbgprB2_EgrjzRVY",
"https://www.epa.gov/clean-air-act-overview/progress-cleaning-air-and-improving-peoples-health",
"https://advances.sciencemag.org/content/advances/1/5/e1400253.full.pdf",
"https://advances.sciencemag.org/content/3/7/e1700782.full",
"https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0111913",
"http://css.umich.edu/factsheets/carbon-footprint-factsheet",
"https://www.researchgate.net/publication/272297502_The_impact_of_debris_on_marine_life",
"https://www.recyclenow.com/plastic-planet?gclid=Cj0KCQjw6sHzBRCbARIsAF8FMpXfV4nQZMLIv8RdLbIzxSVaDoSExphLESgQ3bJfsdVB7cR7pQj7VfIaAggmEALw_wcB",
"http://www.oceanfutures.org/news/press-releases/stop-your-junk-mail-and-save-environment#:~:text=The%20world's%20temperate%20forests%20absorb,recycle%20junk%20mail%20each%20year.",
"https://ecocycle.org/",
"U.S. Global Change Research Program. 'Global Climate Change Impacts in the United States.'",
"The Intergovernmental Panel on Climate Change. 'Summary for Policymakers. In: Managing the Risks of Extreme Events and Disasters to Advance Climate Change Adaptation.' Cambridge University Press.",
"https://www.nrdc.org/stories/global-warming-101, https://climate.nasa.gov/evidence/, https://www.conserve-energy-future.com/various-global-warming-facts.php",
"https://www.nrdc.org/stories/global-warming-101, https://climate.nasa.gov/evidence/, https://www.conserve-energy-future.com/various-global-warming-facts.php",
"https://www.nrdc.org/stories/global-warming-101, https://climate.nasa.gov/evidence/, https://www.conserve-energy-future.com/various-global-warming-facts.php",
"https://www.nrdc.org/stories/global-warming-101, https://climate.nasa.gov/evidence/, https://www.conserve-energy-future.com/various-global-warming-facts.php",
"https://www.livescience.com/37003-global-warming.html",
"https://www.livescience.com/37003-global-warming.html",
"https://www.livescience.com/37003-global-warming.html",
"https://marinebio.org/creatures/facts/",
"https://marinebio.org/creatures/facts/",
"https://plasticoceans.org/infographic-ocean-pollution-affects-humans/",
"http://oceancrusaders.org/plastic-crusades/plastic-statistics/",
"https://www.worldwildlife.org/pages/six-ways-loss-of-arctic-ice-impacts-everyone#:~:text=Polar%20ice%20caps%20are%20melting,declined%20by%20a%20stunning%2095%25.",
"https://www.worldwildlife.org/pages/six-ways-loss-of-arctic-ice-impacts-everyone#:~:text=Polar%20ice%20caps%20are%20melting,declined%20by%20a%20stunning%2095%25.",
"http://css.umich.edu/factsheets/climate-change-science-and-impacts-factsheet",
"https://wwf.panda.org/discover/knowledge_hub/where_we_work/amazon/about_the_amazon/wildlife_amazon/",
"https://datatopics.worldbank.org/world-development-indicators/stories/the-global-distribution-of-air-pollution.html",
"https://news.brown.edu/articles/2014/09/extinctions",
"https://www.usatoday.com/story/news/world/2017/11/13/global-carbon-dioxide-emissions-reach-record-high/859659001/",
"https://www.nationalgeographic.com/environment/global-warming/global-warming-overview/",
"Center for Biological Diversity. 'The Extinction Crisis.'",
"Center for Biological Diversity. 'The Extinction Crisis'"];

//--------------------Set Up Tags and Things that Change Based on Tags--------------------
/*ocean = 0
  wildlife = 1 
  trees = 2
  arctic = 3
  cons = 4
  gw = 5
  pollution = 6
  */
//each index corresponds to a fact's index so this links facts and tags
  var tags = [0,2,0,4,2,3,4,2,6,5,2,2,0,5,4,3,1,5,0,1,4,0,6,0,4,4,4,5,0,3,6,0,1,2,6,3,3,0,0,0,3,3,5,1,6,1,6,5,1,1]

//possible background pictures for each tag
var ocean = ["ocean1.jpg","ocean2.jpg","ocean3.jpg","ocean4.jpg","ocean5.jpg"];
var wildlife = ["wildlife.jpg","wildlife1.jpg","wildlife2.jpg","wildlife3.jpg","wildlife4.jpg"];
var trees = ["trees1.jpg","trees2.jpg","trees3.jpg","trees4.jpg"];
var arctic = ["arctic1.jpg","arctic2.jpg","arctic3.jpg","arctic4.jpg"];
var cons = ["cons1.jpg","cons2.jpg","cons3.jpg","cons4.jpg"];
var gw = ["globalwarming1.jpg","globalwarming2.jpg","globalwarming3.jpg","globalwarming4.jpg"];
var pollution = ["pollution1.jpg","pollution2.jpg","pollution4.jpg"];

//organization information
var orgs =["https://www.oceancare.org/en/our-work/ocean-conservation/", "https://www.wcs.org/","https://www.rainforesttrust.org/?gclid=CjwKCAiAirb_BRBNEiwALHlnD2HVUzBJ20TMR7G20TRONpfqhy3W6BPgR5SMsgfIw4j_C5yndUQVuRoChu4QAvD_BwE","https://www.nrdc.org/protect-arctic-national-wildlife-refuge","https://www.greenpeace.org/usa/","https://www.un.org/en/climatechange ","https://www.catf.us/"];
var orgNames = ["OceanCare","WCS", "Rainforest Trust", "NRDC", "Greenpeace", "UN Climate Action","Clean Air Task Force"];
var orgPics = ["oceancareorgpic.png", "wcsorgpic.png","rainforesttrustorgpic.png", "nrdcorgpic.png","greenpeaceorgpic.png","unorgpic.png","cleanairtaskforceorgpic.jpg"];

//--------------------Choose Random Fact and Random Background Pic--------------------

//chooses random number which will be used as the index for a fact + a tag + a source
var num = Math.floor(Math.random()* range);
//find the associated tag in the list of tags as integers
var tagNum = tags[num];

//randomly choose a background image from the associated tag's list of background images
var image;
if (tagNum == 0){
  num2 = Math.floor(Math.random()* (ocean.length-1))
  image = ocean[num2];
}
if (tagNum == 1){
  num2 = Math.floor(Math.random()* (wildlife.length-1));
  image = wildlife[num2];
}
if (tagNum == 2){
  num2 = Math.floor(Math.random()* (trees.length-1));
  image = trees[num2];
}
if (tagNum == 3){
  num2 = Math.floor(Math.random()* (arctic.length-1));
  image = arctic[num2];
}
if (tagNum == 4){
  num2 = Math.floor(Math.random()* (cons.length-1));
  image = cons[num2];
}
if (tagNum == 5){
  num2 = Math.floor(Math.random()* (gw.length-1));
  image = gw[num2];
}
if (tagNum == 6){
  num2 = Math.floor(Math.random()* (pollution.length-1));
  image = pollution[num2];
}

//--------------------Change HTML Elements to Reflect Fact+Tip+Source and Tag Info--------------------

document.getElementsByTagName('BODY')[0].style.backgroundImage = 'url(../Images/' + image + ')';

document.getElementById("fact2").innerHTML = facts[num];

document.getElementById("tip2").innerHTML = tips[num];

document.getElementById("orgName").innerHTML = orgNames[tagNum];

document.getElementById("source").innerHTML = sources[num];

document.getElementById('orgLogo').style.backgroundImage = 'url(../Images/' + orgPics[tagNum] + ')';

//--------------------Set Up Button that Goes to Organization Webpage--------------------

document.getElementById("orgButton").onclick = function(){
  self.location=orgs[tagNum]
};

//--------------------Change Font Size Based on Window Dimensions--------------------

document.getElementsByTagName("BODY")[0].onresize = function() {size()};

var w; var h;
function size(){
  w = window.innerWidth;
  h = window.innerHeight;
  console.log(w);
  console.log(h);
  if (((w > 1400) && (h < 600))){
    document.getElementById('fact2').style.fontSize= "5vh";
    document.getElementById('searchBar').style.fontSize= "5vh";
    document.getElementById('orgHead').style.fontSize= "5vh";
    document.getElementById('clickOrg').style.fontSize= "3vh";
    document.getElementById('tip2').style.fontSize= "5vh";
  }
}