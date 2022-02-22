import "./carousel.css"
export default function Carousel(props) {

   return(
    <div class="container">
    <br></br>
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
      </ol>
  
    
      <div class="carousel-inner" role="listbox">
  
        <div class="item active">
          <img class="carousel-photo" src="./images/pic1.png" alt="Chania" width="460" height="345"/>
          <div class="carousel-caption">
            <h3>Chania</h3>
            <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
          </div>
        </div>
  
        <div class="item">
          <img class="carousel-photo" src="./images/pic2.jpeg" alt="Chania" width="460" height="345"/>
          <div class="carousel-caption">
            <h3>Chania</h3>
            <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
          </div>
        </div>
      
        <div class="item">
          <img class="carousel-photo" src="./images/pic3.jpeg" alt="Flower" width="460" height="345"/>
          <div class="carousel-caption">
            <h3>Flowers</h3>
            <p>Beautiful flowers in Kolymbari, Crete.</p>
          </div>
        </div>
  
        <div class="item">
          <img class="carousel-photo" src="./images/pic2.jpeg" alt="Flower" width="460" height="345"/>
          <div class="carousel-caption">
            <h3>Flowers</h3>
            <p>Beautiful flowers in Kolymbari, Crete.</p>
          </div>
        </div>
    
      </div>
  
    
      <a class="left carousel-control a-control" href="#myCarousel" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control a-control" href="#myCarousel" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
  
   )

}
