var width0, width1, width2;
var height0, height1, height2;
var sizeIndex = 1;

width0 = "40%";
width1 = "50%";
width2 = "60%";

height0 = "40%";
height1 = "50%";
height2 = "60%";

function extendImages() {
    if (sizeIndex < 2) {
        sizeIndex++;
        if (sizeIndex == 0) {
            document.getElementById("image1").style.width = width0;
            document.getElementById("image1").style.height = height0;
            document.getElementById("image2").style.width = width0;
            document.getElementById("image2").style.height = height0;
            document.getElementById("image3").style.width = width0;
            document.getElementById("image3").style.height = height0;
            document.getElementById("image4").style.width = width0;
            document.getElementById("image4").style.height = height0;
            document.getElementById("image5").style.width = width0;
            document.getElementById("image5").style.height = height0;
            document.getElementById("image6").style.width = width0;
            document.getElementById("image6").style.height = height0;
            document.getElementById("image7").style.width = width0;
            document.getElementById("image7").style.height = height0;
            document.getElementById("image8").style.width = width0;
            document.getElementById("image8").style.height = height0;
            document.getElementById("image9").style.width = width0;
            document.getElementById("image9").style.height = height0;
        }
        if (sizeIndex == 1) {
            document.getElementById("image1").style.width = width1;
            document.getElementById("image1").style.height = height1;
            document.getElementById("image2").style.width = width1;
            document.getElementById("image2").style.height = height1;
            document.getElementById("image3").style.width = width1;
            document.getElementById("image3").style.height = height1;
            document.getElementById("image4").style.width = width1;
            document.getElementById("image4").style.height = height1;
            document.getElementById("image5").style.width = width1;
            document.getElementById("image5").style.height = height1;
            document.getElementById("image6").style.width = width1;
            document.getElementById("image6").style.height = height1;
            document.getElementById("image7").style.width = width1;
            document.getElementById("image7").style.height = height1;
            document.getElementById("image8").style.width = width1;
            document.getElementById("image8").style.height = height1;
            document.getElementById("image9").style.width = width1;
            document.getElementById("image9").style.height = height1;
        }
        if (sizeIndex == 2) {
            document.getElementById("image1").style.width = width2;
            document.getElementById("image1").style.height = height2;
            document.getElementById("image2").style.width = width2;
            document.getElementById("image2").style.height = height2;
            document.getElementById("image3").style.width = width2;
            document.getElementById("image3").style.height = height2;
            document.getElementById("image4").style.width = width2;
            document.getElementById("image4").style.height = height2;
            document.getElementById("image5").style.width = width2;
            document.getElementById("image5").style.height = height2;
            document.getElementById("image6").style.width = width2;
            document.getElementById("image6").style.height = height2;
            document.getElementById("image7").style.width = width2;
            document.getElementById("image7").style.height = height2;
            document.getElementById("image8").style.width = width2;
            document.getElementById("image8").style.height = height2;
            document.getElementById("image9").style.width = width2;
            document.getElementById("image9").style.height = height2;
        }
    }
}

function shrinkImages() {
    if (sizeIndex > 0) {
        sizeIndex--;
        if (sizeIndex == 0) {
            document.getElementById("image1").style.width = width0;
            document.getElementById("image1").style.height = height0;
            document.getElementById("image2").style.width = width0;
            document.getElementById("image2").style.height = height0;
            document.getElementById("image3").style.width = width0;
            document.getElementById("image3").style.height = height0;
            document.getElementById("image4").style.width = width0;
            document.getElementById("image4").style.height = height0;
            document.getElementById("image5").style.width = width0;
            document.getElementById("image5").style.height = height0;
            document.getElementById("image6").style.width = width0;
            document.getElementById("image6").style.height = height0;
            document.getElementById("image7").style.width = width0;
            document.getElementById("image7").style.height = height0;
            document.getElementById("image8").style.width = width0;
            document.getElementById("image8").style.height = height0;
            document.getElementById("image9").style.width = width0;
            document.getElementById("image9").style.height = height0;
        }
        if (sizeIndex == 1) {
            document.getElementById("image1").style.width = width1;
            document.getElementById("image1").style.height = height1;
            document.getElementById("image2").style.width = width1;
            document.getElementById("image2").style.height = height1;
            document.getElementById("image3").style.width = width1;
            document.getElementById("image3").style.height = height1;
            document.getElementById("image4").style.width = width1;
            document.getElementById("image4").style.height = height1;
            document.getElementById("image5").style.width = width1;
            document.getElementById("image5").style.height = height1;
            document.getElementById("image6").style.width = width1;
            document.getElementById("image6").style.height = height1;
            document.getElementById("image7").style.width = width1;
            document.getElementById("image7").style.height = height1;
            document.getElementById("image8").style.width = width1;
            document.getElementById("image8").style.height = height1;
            document.getElementById("image9").style.width = width1;
            document.getElementById("image9").style.height = height1;
        }
        if (sizeIndex == 2) {
            document.getElementById("image1").style.width = width2;
            document.getElementById("image1").style.height = height2;
            document.getElementById("image2").style.width = width2;
            document.getElementById("image2").style.height = height2;
            document.getElementById("image3").style.width = width2;
            document.getElementById("image3").style.height = height2;
            document.getElementById("image4").style.width = width2;
            document.getElementById("image4").style.height = height2;
            document.getElementById("image5").style.width = width2;
            document.getElementById("image5").style.height = height2;
            document.getElementById("image6").style.width = width2;
            document.getElementById("image6").style.height = height2;
            document.getElementById("image7").style.width = width2;
            document.getElementById("image7").style.height = height2;
            document.getElementById("image8").style.width = width2;
            document.getElementById("image8").style.height = height2;
            document.getElementById("image9").style.width = width2;
            document.getElementById("image9").style.height = height2;
        }
    }
}


var box1 = '  <div class="grid-item"><div class="container"><img src = "Data/dogs.jpg" alt= "Reservoir Dogs" id="image1"><div class="overlay"><h1>Reservoir Dogs</h1></div></div><h3>IMBD rating: 8.3</h3><h4> When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.</h4><h5>Source: <a href="https://www.imdb.com/title/tt0105236/?ref_=nm_flmg_wr_27" style="text-decoration: none;color: #c52f0ad8;">IMBD</a></h5> </div>';
var box2 = '  <div class="grid-item"><div class="container"><img src = "Data/pulp.jpg" alt= "Pulp Fiction" id="image2"><div class="overlay">  <h1>Pulp Fiction</h1></div></div><h3>IMBD rating: 8.9</h3><h4> The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.</h4><h5>Source: <a href="https://www.imdb.com/title/tt0110912/?ref_=nm_flmg_wr_24" style="text-decoration: none;color: #c52f0ad8;">IMBD</a></h5> </div>';
var box3 = '   <div class="grid-item"><div class="container"><img src = "Data/jackie.jpg" alt= "Jackie Brown" id="image3" ><div class="overlay"><h1>Jackie Brown</h1></div></div><h3>IMBD rating: 7.5</h3><h4>A middle-aged woman finds herself in the middle of a huge conflict that will either make her a profit or cost her life.</h4><h5>Source: <a href="https://www.imdb.com/title/tt0119396/?ref_=nm_flmg_wr_18" style="text-decoration: none;color: #c52f0ad8;">IMBD</a></h5> </div>';
var box4 = '  <div class="grid-item"><div class="container"> <img src = "Data/kill1.jpg" alt= "Kill Bill: Vol 1." id="image4"><div class="overlay"><h1>Kill Bill: Vol 1</h1></div> </div><h3>IMBD rating: 8.1</h3><h4> After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.</h4><h5> Source: <a href="https://www.imdb.com/title/tt0266697/?ref_=nm_flmg_wr_16" style="text-decoration: none;color: #c52f0ad8;" >IMBD</a> </h5>  </div>';
var box5 = '     <div class="grid-item"><div class="container"><img src = "Data/kill2.jpg" alt= "Kill Bill: Vol 2." id="image5"><div class="overlay"><h1>Kill Bill: Vol 2</h1></div> </div><h3>IMBD rating: 8.0</h3> <h4>The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd, and the treacherous, one-eyed Elle.</h4><h5>Source: <a href="https://www.imdb.com/title/tt0378194/?ref_=nm_flmg_wr_15" style="text-decoration: none;color: #c52f0ad8;">IMBD</a></h5> </div>';
var box6 = '  <div class="grid-item"><div class="container"><img src = "Data/basterds.jpg" alt= "Inglourious Basterds" id="image6"><div class="overlay"><h1>Inglourious Basterds</h1></div></div><h3>IMBD rating: 8.3</h3><h4> In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner`s vengeful plans for the same.</h4><h5>Source: <a href="https://www.imdb.com/title/tt0361748/?ref_=nm_flmg_wr_10" style="text-decoration: none;color: #c52f0ad8;">IMBD</a></h5> </div>';
var box7 = '  <div class="grid-item"><div class="container"><img src = "Data/django.jpg" alt= "Django Unchained" id="image7"><div class="overlay"><h1>Django Unchained</h1></div></div><h3>IMBD rating: 8.4</h3> <h4>With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.</h4><h5>Source: <a href="https://www.imdb.com/title/tt1853728/?ref_=nm_flmg_wr_8" style="text-decoration: none;color: #c52f0ad8;">IMBD</a></h5> </div>';
var box8 = '  <div class="grid-item"><div class="container"><img src = "Data/eight.jpg" alt= "The Hateful Eight" id="image8"><div class="overlay"><h1>The Hateful Eight</h1></div></div><h3>IMBD rating: 7.8</h3> <h4>In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a cabin currently inhabited by a collection of nefarious characters.</h4><h5>Source: <a href="https://www.imdb.com/title/tt3460252/?ref_=nm_flmg_wr_6" style="text-decoration: none;color: #c52f0ad8;">IMBD</a></h5> </div>';
var box9 = '  <div class="grid-item"><div class="container"><img src = "Data/once.jpg" alt= "Once Upon a Time... in Hollywood" id="image9"><div class="overlay"><h1>Once Upon a Time... in Hollywood</h1></div></div><h3>IMBD rating: 7.8</h3><h4> A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood`s Golden Age in 1969 Los Angeles.</h4><h5>Source: <a href="https://www.imdb.com/title/tt7131622/?ref_=nm_flmg_wr_4" style="text-decoration: none;color: #c52f0ad8;">IMBD</a></h5> </div>';


function ReplaceContentInContainer(id, content) {
    var container = document.getElementById(id);
    container.innerHTML = content;
}



function hideMovies(id){
    
    var x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}

function umaMovies() {
    chronological();
    hideMovies("div1");
    hideMovies("div3");
    hideMovies("div6");
    hideMovies("div7");
    hideMovies("div8");
    hideMovies("div9");

    hideMovies("button2");
    hideMovies("button3");
    hideMovies("button4");
    hideMovies("button5");
    hideMovies("button6");
    hideMovies("button7");
}

function samuelMovies() {
    chronological();
    hideMovies("div1");
    hideMovies("div4");
    hideMovies("div9");

    hideMovies("button1");
    hideMovies("button3");
    hideMovies("button4");
    hideMovies("button5");
    hideMovies("button6");
    hideMovies("button7");
}

function bradMovies() {
    chronological();
    hideMovies("div1");
    hideMovies("div3");
    hideMovies("div5");
    hideMovies("div7");
    hideMovies("div8");
    hideMovies("div4");
    hideMovies("div2");
    
    hideMovies("button2");
    hideMovies("button3");
    hideMovies("button1");
    hideMovies("button5");
    hideMovies("button6");
    hideMovies("button7");
}

function leoMovies() {
    chronological();
    hideMovies("div1");
    hideMovies("div3");
    hideMovies("div6");
    hideMovies("div4");
    hideMovies("div8");
    hideMovies("div5");
    hideMovies("div2");
    
    hideMovies("button2");
    hideMovies("button3");
    hideMovies("button4");
    hideMovies("button1");
    hideMovies("button6");
    hideMovies("button7");
}

function christophMovies() {
    
    chronological();

    hideMovies("div1");
    hideMovies("div3");
    hideMovies("div9");
    hideMovies("div4");
    hideMovies("div8");
    hideMovies("div5");
    hideMovies("div2");
    
    hideMovies("button2");
    hideMovies("button1");
    hideMovies("button4");
    hideMovies("button5");
    hideMovies("button6");
    hideMovies("button7");
}

function scoreIMBD(){
    
  ReplaceContentInContainer("div1", box2);
  ReplaceContentInContainer("div2", box7);
  ReplaceContentInContainer("div3", box6);
  ReplaceContentInContainer("div4", box1);
  ReplaceContentInContainer("div5", box4);
  ReplaceContentInContainer("div6", box5);
  ReplaceContentInContainer("div7", box9);
  ReplaceContentInContainer("div8", box8);
  ReplaceContentInContainer("div9", box3);

  document.getElementById("button6").style.visibility = 'visible';
  document.getElementById("button7").style.visibility = 'hidden';
}

function chronological(){
    
  ReplaceContentInContainer("div1", box1);
  ReplaceContentInContainer("div2", box2);
  ReplaceContentInContainer("div3", box3);
  ReplaceContentInContainer("div4", box4);
  ReplaceContentInContainer("div5", box5);
  ReplaceContentInContainer("div6", box6);
  ReplaceContentInContainer("div7", box7);
  ReplaceContentInContainer("div8", box8);
  ReplaceContentInContainer("div9", box9);

  document.getElementById("button7").style.visibility = 'visible';
  document.getElementById("button6").style.visibility = 'hidden';
}