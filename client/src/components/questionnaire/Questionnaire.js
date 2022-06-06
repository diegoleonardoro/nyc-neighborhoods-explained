import React, { useState } from "react";
import "./Questionnaire.css";

import MapBox from "../map/MapBox"

const Questionnaire = () => {
  const [displayKeyWord, setDisplayKeyWord] = useState(["email"]);
  const [neighborhood, setNeighborhood] = useState('');
  const [displayMap, setDisplayMap] = useState(false);
  const [selectedNhood, setSelectedNhood] = useState('');

  const prevQuestion = () => {
    const displayedQuestion = document.getElementsByClassName("display")[0];
    const keyWord = displayedQuestion.className.split(" ")[0];
    setDisplayKeyWord([keyWord]);


    if(displayedQuestion.className.indexOf('neighborhoodInput')>-1){
        setDisplayMap(false);
    }


  };

  const nextQuestion = () => {

    const displayedQuestion = document.getElementsByClassName("display")[0];
  
    if(displayedQuestion.className.indexOf('recommendationsScale')>-1){
        
        const selectedIndecesArray =[];
        const selectElements = displayedQuestion.querySelectorAll('select');
        selectElements.forEach(e => selectedIndecesArray.push(e.selectedOptions[0].className))
        setDisplayKeyWord(selectedIndecesArray);

    } else if(displayedQuestion.className.indexOf('recomendationsExplanation')>-1){

        setDisplayKeyWord(['favoritePlaces']);

    }else{
       
        const keyWord = displayedQuestion.className.split(" ")[1];
        setDisplayKeyWord([keyWord]);

        if(displayedQuestion.className.indexOf('neighborhoodInput')>-1){
            setNeighborhood(displayedQuestion.children[0].value)
        }

        if(displayedQuestion.className.indexOf('emailInput')>-1){
            setDisplayMap(true);
        }

    }
  };




  const displayQuestion = keyWord => {
    if (displayKeyWord.indexOf(keyWord)>-1) {
      return "display";
    } else {
      return "notDisplay";
    }
  };

  return (

    <div className ="map-questionnaire-container">
        <form className="form">
            <div  className={"__ whatNeighborhood emailInput " + displayQuestion("email")}>      
                <input type="text" id="email"  placeholder=" "></input>
                <label className= "floating-label" id="email-label" htmlFor="email">What is your email?</label>
            </div>

            <div className={"email yearsInNeighborhood neighborhoodInput " + displayQuestion("whatNeighborhood")}>
                <input id="neighborhood" onChange={(e)=>{
                    
                        setSelectedNhood(selectNeighborhood (e));      
                    }
                    
                    } placeholder=" ">
                    
                </input>
                <label className= "floating-label" htmlFor="neighborhood">What neighborhood do you live in?</label>
            </div>

            <div className={"whatNeighborhood describeNeighborhood " + displayQuestion("yearsInNeighborhood")}>
                <h3 >How long have you been living in <span className='nhoodName'>{neighborhood}</span></h3>
                <select name="yearsInNeighborhood" id="yearsInNeighborhood">
                    <option value="Less than one year">Less than one year</option>
                    <option value="Between 1 and 5 years">Between 1 and 5 years</option>
                    <option value="Between 6 and 10 years">Between 6 and 10 years</option>
                    <option value="Between 11 and 15 years">Between 11 and 15 years</option>
                    <option value="Between 16 and 20 years">Between 16 and 20 years </option>
                    <option value="For more than 20 years">For more than 20 years </option>
                    <option value="I do not live in this neighborhood">I do not live in this neighborhood </option>
                </select>
            </div>

            <div className={"yearsInNeighborhood recommendations " + displayQuestion("describeNeighborhood")}>
                <h3 className="description-header">How would you describe <span className='nhoodName'>{neighborhood}</span> to someone who is visiting for the first time? </h3> 
                <textarea id='nhoodDescription'></textarea> 
            </div>




            <div className ={"describeNeighborhood __  " + displayQuestion("recommendations") + " recommendationsScale"} >

                <h3>What are your recommendations for people visiting <span className='nhoodName'>{neighborhood}</span>:</h3>

                <span className ="recomendations-span">
                    <label className="label-recommendations" htmlFor="yearsInNeighborhood">Using public transportation: </label>
                    <select >
                        <option value="">Select an option</option>
                        <option className="whyRecommendPublicTransport" value="Recommended">Recommended</option>
                        <option className="whyNeutralPublicTransport" value="Neutral">Neutral</option>
                        <option className="whyNotRecommendPublicTransport" value="Not recommended">Not recommended</option>
                    </select>
                </span>

                <span className ="recomendations-span">
                    <label className="label-recommendations" htmlFor="yearsInNeighborhood">Walking around: </label>
                    <select >
                        <option value="">Select an option</option>
                        <option className="whyRecommendWalkingAround" value="Recommended">Recommended</option>
                        <option className="whyNeutralWalkingAround" value="Neutral">Neutral</option>
                        <option className="whyNotRecommendWalkingAround" value="Not recommended">Not recommended</option>
                    </select>
                </span>


                <span className ="recomendations-span">
                    <label className="label-recommendations" htmlFor="yearsInNeighborhood">Biking: </label>
                    <select >
                        <option value="">Select an option</option>
                        <option className="whyRecommendBiking" value="Recommended">Recommended</option>
                        <option className="whyNeutralBiking" value="Neutral">Neutral</option>
                        <option className="whyNotRecommendBiking" value="Not recommended">Not recommended</option>
                    </select>
                </span>

                <span className ="recomendations-span">
                    <label className="label-recommendations" htmlFor="yearsInNeighborhood">Trying out the food: </label>
                    <select >
                        <option value="">Select an option</option>
                        <option className="whyRecommendFood" value="Recommended">Recommended</option>
                        <option className="whyNeutralFood" value="Neutral">Neutral</option>
                        <option className="whyNotRecommendFood" value="Not recommended">Not recommended</option>
                    </select>
                </span> 


                <span className ="recomendations-span">
                    <label className="label-recommendations" htmlFor="yearsInNeighborhood">Nighlife: </label>
                    <select >
                        <option value="">Select an option</option>
                        <option className="whyRecommendNightlife" value="Recommended">Recommended</option>
                        <option className="whyNeutralNightlife" value="Neutral">Neutral</option>
                        <option className="whyNotRecommendNightlife"value="Not recommended">Not recommended</option>
                    </select>
                </span>                        

            </div>



        
            <div className={"recommendations favoritePlaces " + displayQuestion("whyRecommendPublicTransport") + " recomendationsExplanation"}>
                <label >Why do you recommend using public transportation in <span className='nhoodName'>{neighborhood}</span>?</label>
                <textarea ></textarea>
            </div>

            <div className={"recommendations " + displayQuestion("whyNeutralPublicTransport")}>
                <label>Why do you feel neutral about public transportation in <span className='nhoodName'>{neighborhood}</span>?</label>
                <textarea ></textarea>
            </div>

            <div className={"recommendations " + displayQuestion("whyNotRecommendPublicTransport")}>
                <label>Why do you not recommend using public transportation in <span className='nhoodName'>{neighborhood}</span>?</label>
                <textarea ></textarea>
            </div>      



                

                
                
            <div className={"recommendations " + displayQuestion("whyRecommendWalkingAround")}>
                <label >Why do you recommend walking around <span className='nhoodName'>{neighborhood}</span>?</label>
                <textarea ></textarea>
            </div>

            <div className={"recommendations " + displayQuestion("whyNeutralWalkingAround")}>
                <label>Why do you feel neutral about walking around <span className='nhoodName'>{neighborhood}</span>?</label>
                <textarea ></textarea>
            </div>

            <div className={"recommendations " + displayQuestion("whyNotRecommendWalkingAround")}>
                <label>Why do you not recommend walking around <span className='nhoodName'>{neighborhood}</span>?</label>
                <textarea ></textarea>
            </div>      







            <div className={"recommendations " + displayQuestion("whyRecommendBiking")}>
                <label >Why do you recommend biking around <span className='nhoodName'>{neighborhood}</span>?</label>
                <textarea ></textarea>
            </div>

            <div className={"recommendations " + displayQuestion("whyNeutralBiking")}>
                <label>Why do you feel neutral about biking around <span className='nhoodName'>{neighborhood}</span>?</label>
                <textarea ></textarea>
            </div>

            <div className={"recommendations " + displayQuestion("whyNotRecommendBiking")}>
                <label>Why do you not recommend biking around <span className='nhoodName'>{neighborhood}</span>?</label>
                <textarea ></textarea>
            </div>     

                
                
                

            <div className={"recommendations " + displayQuestion("whyRecommendFood")}>
                <label >Why do you recommend trying out the food of <span className='nhoodName'>{neighborhood}</span>?</label>
                <textarea ></textarea>
            </div>

            <div className={"recommendations " + displayQuestion("whyNeutralFood")}>
                <label>Why do you feel neutral about trying out the food of <span className='nhoodName'>{neighborhood}</span>?</label>
                <textarea ></textarea>
            </div>

            <div className={"recommendations " + displayQuestion("whyNotRecommendFood")}>
                <label>Why do you not recommend trying out the food of <span className='nhoodName'>{neighborhood}</span>?</label>
                <textarea ></textarea>
            </div>     



            
            

            <div className={"recommendations " + displayQuestion("whyRecommendNightlife")}>
                <label >Why do you recommend <span className='nhoodName'>{neighborhood}'s</span> nigh life?</label>
                <textarea ></textarea>
            </div>

            <div className={"recommendations " + displayQuestion("whyNeutralNightlife")}>
                <label>Why do you feel neutral about <span className='nhoodName'>{neighborhood}'s</span> night life?</label>
                <textarea ></textarea>
            </div>


            <div className={"recommendations " + displayQuestion("whyNotRecommendNightlife")}>
                <label>Why do you not recommend <span className='nhoodName'>{neighborhood}'s</span> night life?</label>
                <textarea ></textarea>
            </div>   





            <div className={"recommendations submit " + displayQuestion("favoritePlaces")}>
                <h2 className="fav-places-element">What are your favorite places in <span className='nhoodName'>{neighborhood}</span> </h2>

                <label className="fav-places-label" >Place address or name:</label>
                <input className="fav-places-answer" ></input>
                <label className="fav-places-label" htmlFor ='nhoodDescription'>Why is this one of your favorite places in <span className='nhoodName'>{neighborhood}</span> </label>
                <textarea className="fav-places-answer" id='nhoodDescription'></textarea>
                <label className="fav-places-label" htmlFor ='placeImage'>Upload a picture of this place: </label>
                <input className="fav-places-answer" type="file" name="placeImage" id ="placeImage" />       
            </div>   


            <div className={"favoritePlaces " + displayQuestion("submit")}>
                <label>Submit form: </label>
                <input type='submit'></input>
            </div>   




                    

            <div className ="arrows-container">

                <i
                    onClick={() => {
                    prevQuestion();
                    }}
                    id="prev"
                    className="fa-solid fa-caret-left"
                ></i>

                <i
                    onClick={() => {
                    nextQuestion();
                    }}
                    id="next"
                    className="fa-solid fa-caret-right"
                ></i>

            </div>

        </form>

 
        <MapBox displayMap={displayMap} selectedNhood ={selectedNhood} />

    </div>   
  )
};



export default Questionnaire;

function selectNeighborhood (e){

    let selectedNeighborhood =" ";
    
    var a, b, i, val =e.target.value;

    let inp = e.target;

    closeAllLists();

    var currentFocus;

    if (!val) { return false;}
    currentFocus = -1;
    a = document.createElement("DIV");
    a.setAttribute("id", inp.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");

    inp.parentNode.appendChild(a);



    if(val.length >1){

        for (i = 0; i < arr.length; i++) {

            if (arr[i].substr(0, val.length).toUpperCase() === val.toUpperCase()) {

                b = document.createElement("DIV"); 
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";


                if(inp.value.toUpperCase() === arr[i].toUpperCase()){
                    return arr[i];
                }

                b.addEventListener("click", function(e) {
                    inp.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                });

                a.appendChild(b);
            }
        }
    }

    const  aaaa = (value)=>{

        // console.log(value);
        // console.log('kokokoko');
        // selectedNeighborhood = value;

         return value;

    }

    inp.addEventListener("keydown",  (e)=>{

        var x = document.getElementById(inp.id + "autocomplete-list");

        if (x) x = x.getElementsByTagName("div");

        if (e.keyCode === 40) {
          
            currentFocus++;
            addActive(x);

        } else if (e.keyCode === 38) { 
            
            currentFocus--;
            addActive(x);
        
        } else if (e.keyCode === 13) {
        
            e.preventDefault();
            if (currentFocus > -1) {

                if (x) {
                
                    x[currentFocus].click();
                    aaaa(inp.value);
                    
                    // console.log(inp.value);
                    // selectedNeighborhood = inp.value;
                    // console.log(inp.value);
                    return inp.value;

                };
            
            }
        }
    });

    
    function addActive(x) {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt !== x[i] && elmnt !== inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }

    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });




    console.log(inp.innerHTML);




    // console.log(selectedNeighborhood)
    // return inp.value;
    // console.log(selectedNeighborhood);
    // return selectedNeighborhood;

}




var arr = [
    "Wakefield",
    "Co-op City",
    "Eastchester",
    "Fieldston",
    "Riverdale",
    "Kingsbridge",
    "Marble Hill",
    "Woodlawn",
    "Norwood",
    "Williamsbridge",
    "Baychester",
    "Pelham Parkway",
    "City Island",
    "Bedford Park",
    "University Heights",
    "Morris Heights",
    "Fordham",
    "East Tremont",
    "West Farms",
    "High  Bridge",
    "Melrose",
    "Mott Haven",
    "Port Morris",
    "Longwood",
    "Hunts Point",
    "Morrisania",
    "Soundview",
    "Clason Point",
    "Throgs Neck",
    "Country Club",
    "Parkchester",
    "Westchester Square",
    "Van Nest",
    "Morris Park",
    "Belmont",
    "Spuyten Duyvil",
    "North Riverdale",
    "Pelham Bay",
    "Schuylerville",
    "Edgewater Park",
    "Castle Hill",
    "Olinville",
    "Pelham Gardens",
    "Concourse",
    "Unionport",
    "Edenwald",
    "Bay Ridge",
    "Bensonhurst",
    "Sunset Park",
    "Greenpoint",
    "Gravesend",
    "Brighton Beach",
    "Sheepshead Bay",
    "Manhattan Terrace",
    "Flatbush",
    "Crown Heights",
    "East Flatbush",
    "Kensington",
    "Windsor Terrace",
    "Prospect Heights",
    "Brownsville",
    "Williamsburg",
    "Bushwick",
    "Bedford Stuyvesant",
    "Brooklyn Heights",
    "Cobble Hill",
    "Carroll Gardens",
    "Red Hook",
    "Gowanus",
    "Fort Greene",
    "Park Slope",
    "Cypress Hills",
    "East New York",
    "Starrett City",
    "Canarsie",
    "Flatlands",
    "Mill Island",
    "Manhattan Beach",
    "Coney Island",
    "Bath Beach",
    "Borough Park",
    "Dyker Heights",
    "Gerritsen Beach",
    "Marine Park",
    "Clinton Hill",
    "Sea Gate",
    "Downtown",
    "Boerum Hill",
    "Prospect Lefferts Gardens",
    "Ocean Hill",
    "City Line",
    "Bergen Beach",
    "Midwood",
    "Prospect Park South",
    "Georgetown",
    "Spring Creek",
    "East Williamsburg",
    "North Side",
    "South Side",
    "Navy Yard",
    "Ocean Parkway",
    "Fort Hamilton",
    "Chinatown",
    "Washington Heights",
    "Inwood",
    "Hamilton Heights",
    "Manhattanville",
    "Central Harlem",
    "East Harlem",
    "Upper East Side",
    "Yorkville",
    "Lenox Hill",
    "Roosevelt Island",
    "Upper West Side",
    "Lincoln Square",
    "Clinton",
    "Midtown",
    "Murray Hill",
    "Chelsea",
    "Greenwich Village",
    "East Village",
    "Lower East Side",
    "Tribeca",
    "Little Italy",
    "Soho",
    "West Village",
    "Manhattan Valley",
    "Morningside Heights",
    "Gramercy",
    "Battery Park City",
    "Financial District",
    "Astoria",
    "Woodside",
    "Jackson Heights",
    "Elmhurst",
    "Howard Beach",
    "South Corona",
    "Forest Hills",
    "Kew Gardens",
    "Richmond Hill",
    "Downtown Flushing",
    "Long Island City",
    "Sunnyside",
    "East Elmhurst",
    "Maspeth",
    "Ridgewood",
    "Glendale",
    "Rego Park",
    "Woodhaven",
    "Ozone Park",
    "South Ozone Park",
    "College Point",
    "Whitestone",
    "Bayside",
    "Auburndale",
    "Little Neck",
    "Douglaston",
    "Glen Oaks",
    "Bellerose",
    "Kew Gardens Hills",
    "Fresh Meadows",
    "Briarwood",
    "Jamaica Center",
    "Oakland Gardens",
    "Queens Village",
    "Hollis",
    "South Jamaica",
    "St. Albans",
    "Rochdale",
    "Springfield Gardens",
    "Cambria Heights",
    "Rosedale",
    "Far Rockaway",
    "Broad Channel",
    "Breezy Point",
    "Steinway",
    "Beechhurst",
    "Bay Terrace",
    "Edgemere",
    "Arverne",
    "Seaside",
    "Neponsit",
    "Murray Hill",
    "Floral Park",
    "Holliswood",
    "Jamaica Estates",
    "Queensboro Hill",
    "Hillcrest",
    "Ravenswood",
    "Lindenwood",
    "Laurelton",
    "Lefrak City",
    "Belle Harbor",
    "Rockaway Park",
    "Somerville",
    "Brookville",
    "Bellaire",
    "North Corona",
    "Forest Hills Gardens",
    "St. George",
    "New Brighton",
    "Stapleton",
    "Rosebank",
    "West Brighton",
    "Grymes Hill",
    "Todt Hill",
    "South Beach",
    "Port Richmond",
    "Mariner's Harbor",
    "Port Ivory",
    "Castleton Corners",
    "New Springville",
    "Travis",
    "New Dorp",
    "Oakwood",
    "Great Kills",
    "Eltingville",
    "Annadale",
    "Woodrow",
    "Tottenville",
    "Tompkinsville",
    "Silver Lake",
    "Sunnyside",
    "Ditmas Park",
    "Wingate",
    "Rugby",
    "Park Hill",
    "Westerleigh",
    "Graniteville",
    "Arlington",
    "Arrochar",
    "Grasmere",
    "Old Town",
    "Dongan Hills",
    "Midland Beach",
    "Grant City",
    "New Dorp Beach",
    "Bay Terrace",
    "Huguenot",
    "Pleasant Plains",
    "Butler Manor",
    "Charleston",
    "Rossville",
    "Arden Heights",
    "Greenridge",
    "Heartland Village",
    "Chelsea",
    "Bloomfield",
    "Bulls Head",
    "Carnegie Hill",
    "Noho",
    "Civic Center",
    "Midtown South",
    "Richmond Town",
    "Shore Acres",
    "Clifton",
    "Concord",
    "Emerson Hill",
    "Randall Manor",
    "Howland Hook",
    "Elm Park",
    "Remsen Village",
    "New Lots",
    "Paerdegat Basin",
    "Mill Basin",
    "Jamaica Hills",
    "Utopia",
    "Pomonok",
    "Astoria Heights",
    "Claremont Village",
    "Concourse Village",
    "Mount Eden",
    "Mount Hope",
    "Sutton Place",
    "Hunters Point",
    "Turtle Bay",
    "Tudor City",
    "Stuyvesant Town",
    "Flatiron",
    "Sunnyside Gardens",
    "Blissville",
    "Fulton Ferry",
    "Vinegar Hill",
    "Weeksville",
    "Broadway Junction",
    "Dumbo",
    "Manor Heights",
    "Willowbrook",
    "Sandy Ground",
    "Egbertville",
    "Roxbury",
    "Homecrest",
    "Middle Village",
    "Prince's Bay",
    "Lighthouse Hill",
    "Richmond Valley",
    "Malba",
    "Highland Park",
    "Madison"
]


/*
    execute a function when someone clicks in the document:
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
*/



// next is goin to get the element with 'display' in its class name.
// It then is going to retreie the second word in the class name of that element, and will provide it as value of displayKeyWord.
// the the compoenent will rerender and displayQuestion() will compare displayKeyWord to its value, if they match, the will be displayed.