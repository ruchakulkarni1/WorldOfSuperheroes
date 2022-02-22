import "./about.css"
export default function About() {

   return(
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 aboutHeading">
                <h1>About</h1>
            </div>
        </div>
    <div class="row">
        <div class="col-4 author">
            <h4 class="authorName">Rucha Kulkarni</h4>
            <img src="./icons/woman1.png" alt="clipart1" class="aboutIcon"/>
            <h4><a href="https://github.com/ruchakulkarni1">GitHub</a></h4>
        </div>
        <div class="col-4 author">
            <h4 class="authorName">Siri Koduru</h4>
            <img src="./icons/woman2.png" alt="clipart2" class="aboutIcon"/>
            <h4><a href="https://github.com/sirikoduru24">GitHub</a></h4>
        </div>
        <div class="col-4 author">
            <h4 class="authorName">Larrisa Carvalho</h4>
            <img src="./icons/woman3.png" alt="clipart3" class="aboutIcon"/>
            <h4><a href="https://github.com/larrisacarvalho">GitHub</a></h4>
        </div>
    </div>
    </div>
  
   )

}
