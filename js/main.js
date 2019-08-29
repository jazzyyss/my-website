var changeStyle = 1;

function changeBtn() {
    if (changeStyle == 1) {
        document.querySelector("#navBtn").classList.add(".navBtnOpened");
        document.querySelector("#navBtn").classList.remove(".navBtnClosed");
        document.querySelector("#navBtn").innerHTML = '<i onclick="changeBtn()" class="fas fa-times"></i>';
        document.querySelector("#box").innerHTML = '<style>a{color:black;}*{outline:none;}a:hover{color:white;background-color:blackk}</style><div class="btnLink link1"><a href="/php/websiteProject/"><i class="fas fa-home"></i></a><P>HOME</P></div><div class="btnLink link2"><a href="/php/websiteProject/nav/contact.html"><i class="fas fa-phone-square"></i></a><P>CONTACT</P></div><div class="btnLink link3"><a href="/php/websiteProject/nav/workSample.html"><i class="fas fa-book-reader"></i></a><P>WORK<BR>SAMPLE</P></div><div class="btnLink link4"><a href="/php/websiteProject/nav/query.html"><i class="fas fa-question"></i></a><p>FEEDBACK/<BR>QUERY</p></div><div class="btnLink link5"><a href="/php/websiteProject/nav/hire.html"><i class="fas fa-briefcase"></i></a><p>HIRE</p></div>';
        document.querySelector("#box").classList.add("box");
        changeStyle = 0;
    } else {
        document.querySelector("#navBtn").classList.remove(".navBtnOpened");
        document.querySelector("#navBtn").classList.add(".navBtnClosed");
        document.querySelector("#navBtn").innerHTML = '<i onclick="changeBtn()" class="fas fa-bars"></i>';
        document.querySelector("#box").innerHTML = '';
        document.querySelector("#box").classList.remove("box");
        changeStyle = 1;
    }
}

var devMenuStatus = 0;

function changeDevMenu(n) {
    devMenuStatus = n;
    if (devMenuStatus == 1) {
        document.querySelector(".devInfo").innerHTML = '<h2>I am a Web Developer</h2><p><i class="fas fa-caret-right"></i>I am a full stack web developer and can manage both front-end and back-end websites including the database connectivity.<br>Also I build new websites from scratch.</p><p><i class="fas fa-caret-right"></i>I am a computer science engineer from India and i love to write the scripts and codes.</p>';
        //devMenuStatus = 1;
    } else if (devMenuStatus == 2) {
        document.querySelector(".devInfo").innerHTML = '<img src="../img/jaspreet/devImg1.jpg"><img src="../img/jaspreet/devImg2.jpg"><img src="../img/jaspreet/devImg3.jpg"><img src="../img/jaspreet/devImg4.jpg">';
        // devMenuStatus = 2;
    } else if (devMenuStatus == 3) {
        document.querySelector(".devInfo").innerHTML = '<h2>SKILLS</h2><p><i class="fas fa-caret-right"></i><span>Fron-End</span> : HTML5, CSS3, SCSS, Javascript</p><p><i class="fas fa-caret-right"></i><span>Back-End</span> : PHP </p> <p><i class="fas fa-caret-right"></i><span>Database</span> : mysqli </p>';
        //devMenuStatus = 3;
    } else if (devMenuStatus == 4) {
        document.querySelector(".devInfo").innerHTML = '<h2>I am a Pro Gamer</h2><p><i class="fas fa-caret-right"></i>I am a professional gamer and i want to be a part of ubisoft.</p><p><i class="fas fa-caret-right"></i>I am a computer science engineer from India and i love to play and build games.</p>';
        //devMenuStatus = 4;
    } else if (devMenuStatus == 5) {
        document.querySelector(".devInfo").innerHTML = '<img src="../img/kuljeet/devImg1.jpg"><img src="../img/kuljeet/devImg2.jpg"><img src="../img/kuljeet/devImg3.jpg"><img src="../img/kuljeet/devImg4.jpg">';
        // devMenuStatus = 5;
    } else if (devMenuStatus == 6) {
        document.querySelector(".devInfo").innerHTML = '<h2>SKILLS</h2><p><i class="fas fa-caret-right"></i>C++</p><p><i class="fas fa-caret-right"></i>Unreal Engine</p> <p><i class="fas fa-caret-right"></i>Designer </p>';
        //devMenuStatus = 6;
    } else if (devMenuStatus == 7) {
        document.querySelector(".devInfo").innerHTML = '<h2>I am Programmer</h2><p><i class="fas fa-caret-right"></i>I am a backend programmer mastered in c#.</p><p><i class="fas fa-caret-right"></i>I am a computer science engineer from India and i love to photoshop.</p>';
        //devMenuStatus = 7;
    } else if (devMenuStatus == 8) {
        document.querySelector(".devInfo").innerHTML = '<img src="../img/rajdeep/devImg1.jpg"><img src="../img/rajdeep/devImg2.jpg"><img src="../img/rajdeep/devImg3.jpg"><img src="../img/rajdeep/devImg4.jpg">';
        // devMenuStatus = 8;
    } else if (devMenuStatus == 9) {
        document.querySelector(".devInfo").innerHTML = '<h2>SKILLS</h2><p><i class="fas fa-caret-right"></i>C#</p><p><i class="fas fa-caret-right"></i>.NET</p> <p><i class="fas fa-caret-right"></i>Photoshop </p>';
        //devMenuStatus = 9;
    } else if (devMenuStatus == 10) {
        document.querySelector(".devInfo").innerHTML = '<h2>I am Game Developer</h2><p><i class="fas fa-caret-right"></i>I am game developer by profession and also i test games and i am proud of my intelligence.</p><p><i class="fas fa-caret-right"></i>I am a computer science engineer from India and i love play devil may cry series.</p>';
        //devMenuStatus = 10;
    } else if (devMenuStatus == 11) {
        document.querySelector(".devInfo").innerHTML = '<img src="../img/nikhil/devImg1.jpg"><img src="../img/nikhil/devImg2.jpg"><img src="../img/nikhil/devImg3.jpg"><img src="../img/nikhil/devImg4.jpg">';
        // devMenuStatus = 11;
    } else if (devMenuStatus == 12) {
        document.querySelector(".devInfo").innerHTML = '<h2>SKILLS</h2><p><i class="fas fa-caret-right"></i>C++</p><p><i class="fas fa-caret-right"></i>Python</p> <p><i class="fas fa-caret-right"></i>Vegas Pro</p>';
        //devMenuStatus = 12;
    } else if (devMenuStatus == 13) {
        document.querySelector(".devInfo").innerHTML = '<h2>I am Developer</h2><p><i class="fas fa-caret-right"></i>I am a python programmer and developer and i have keen interest in working on new and efficient softwares.</p><p><i class="fas fa-caret-right"></i>I am a computer science engineer from India and i love to sleep while coding.</p>';
        //devMenuStatus = 13;
    } else if (devMenuStatus == 14) {
        document.querySelector(".devInfo").innerHTML = '<img src="../img/bharat/devImg1.jpg"><img src="../img/bharat/devImg2.jpg"><img src="../img/bharat/devImg3.jpg"><img src="../img/bharat/devImg4.jpg">';
        // devMenuStatus = 14;
    } else if (devMenuStatus == 15) {
        document.querySelector(".devInfo").innerHTML = '<h2>SKILLS</h2><p><i class="fas fa-caret-right"></i>Python</p><p><i class="fas fa-caret-right"></i>Core Python</p> <p><i class="fas fa-caret-right"></i>Sleeping </p>';
        //devMenuStatus = 15;
    } else if (devMenuStatus == 16) {
        document.querySelector(".devInfo").innerHTML = '<h2>I am Tester</h2><p><i class="fas fa-caret-right"></i>I am good at finding and solving issues and bugs in program or software.<br>I have worked on java and java applications.</p><p><i class="fas fa-caret-right"></i>I am a computer science engineer from India and i love eat and sleep.</p>';
        //devMenuStatus = 16;
    } else if (devMenuStatus == 17) {
        document.querySelector(".devInfo").innerHTML = '<img src="../img/kanhaiya/devImg1.jpg"><img src="../img/kanhaiya/devImg2.jpg"><img src="../img/kanhaiya/devImg3.jpg"><img src="../img/kanhaiya/devImg4.jpg">';
        // devMenuStatus = 17;
    } else if (devMenuStatus == 18) {
        document.querySelector(".devInfo").innerHTML = '<h2>SKILLS</h2><p><i class="fas fa-caret-right"></i>MS Office</p><p><i class="fas fa-caret-right"></i>Python</p> <p><i class="fas fa-caret-right"></i>Java </p>';
        //devMenuStatus = 18;
    } else if (devMenuStatus == 19) {
        document.querySelector(".devInfo").innerHTML = '<h2>I am Business Admin</h2><p><i class="fas fa-caret-right"></i>I am a accountant and i have worked with the top firms in society managing their accounts and databases.</p><p><i class="fas fa-caret-right"></i>I am a business administrator from India and i love to manage and create databases.</p>';
        //devMenuStatus = 19;
    } else if (devMenuStatus == 20) {
        document.querySelector(".devInfo").innerHTML = '<img src="../img/harpreet/devImg1.jpg"><img src="../img/harpreet/devImg2.jpg"><img src="../img/harpreet/devImg3.jpg"><img src="../img/harpreet/devImg4.jpg">';
        // devMenuStatus = 20;
    } else if (devMenuStatus == 21) {
        document.querySelector(".devInfo").innerHTML = '<h2>SKILLS</h2><p><i class="fas fa-caret-right"></i>Tally</p><p><i class="fas fa-caret-right"></i>Accountant</p> <p><i class="fas fa-caret-right"></i>Share Market</p>';
        //devMenuStatus = 21;
    }
}