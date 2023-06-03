import $ from 'jquery'
window.jQuery = window.$ = $

$(document).ready(function () {

    /**
     * FORMULAIRE VALIDETTA
     */
    // $("#formulaire").validetta();

    /**
     * BOUTON SUBMIT
     */
    $("#send").click(function(e){
        e.preventDefault()
        // APPEL
        const name = $("#name").val()
        const email = $("#email").val()
        // const date = $("#obj").val()
        const num = $("#number").val()

        // AJAX
        $.ajax({
            url: 'https://anais.techniques-graphiques.be/chafe/email.php',

            type: 'POST',

            data: {
                name: name,
                email: email,
                num: num
            },

            dataType: 'html',

            success: function(data){
                $(".see h3").show().html(data)
            }
        })
    })


/**
 * CAT ONE
 */
$(".cardOne").on("click", function () {
    let htmlIn = '';
  
    // CARD CAT
    htmlIn += '<div class="cardOne card">';
    htmlIn += '<div class="item1">';
    htmlIn += '<img src="assets/Lilie-440b571e.jpg" alt="Lilie">';
    htmlIn += '</div>';
    htmlIn += '<div class="item2">';
    htmlIn += '<div class="nom">';
    htmlIn += '<h3>Lilie</h3>';
    htmlIn += '</div>';
    htmlIn += '<div class="description">';
    htmlIn += '<p>Lilie, the most playful and affectionate cat in the café! With her boundless energy and infinite tenderness, she will melt your heart in an instant.</p>';
    htmlIn += '</div>';
    htmlIn += '<hr>';
    htmlIn += '<div class="caracteristiques">';
    htmlIn += '<div class="age">';
    htmlIn += '<h4>AGE</h4>';
    htmlIn += '<p>6 yrs.</p>';
    htmlIn += '</div>';
    htmlIn += '<div class="gender">';
    htmlIn += '<h4>GENDER</h4>';
    htmlIn += '<div id="test"><img src="assets/female-1549b594.png" alt="Female"></div>';
    htmlIn += '</div>';
    htmlIn += '</div>';
    htmlIn += '</div>';
    htmlIn += '<button class="crossOne cross">';
    htmlIn += '<span>&#10799;</span>';
    htmlIn += '</button>';
  
    // RESPONSIVE
    var width = $(window).width();
    if (width < 640) {
      $(".catOne").css("height", "600px");
      $(".catOne").css("width", "300px");
      $(".catOne").html(htmlIn);
    } else {
      $(".catOne").css("height", "300px");
      $(".catOne").css("width", "550px");
      $(".catOne").html(htmlIn);
    }
  });
  
  // CLOSE
  $(document).on("click", ".crossOne", function () {
    var htmlOut = '';
  
    htmlOut += '<div class="cardOne card">';
    htmlOut += '<img src="assets/Lilie-440b571e.jpg" alt="Lilie">';
    htmlOut += '</div>';
  
    $(".catOne").html(htmlOut);
    $(".catOne").css("height", "250px");
    $(".catOne").css("width", "250px");
  });
  
    /**
     * CAT TWO
     */
    $(".cardTwo").click(function () {
        let htmlIn = ''

        // CARD CAT
        htmlIn += '<div class="cardTwo card">'
        htmlIn += '<div class="item1">'
        htmlIn += '<img src="assets/Calypso-de7f0be5.jpg" alt="Calypso">'
        htmlIn += '</div>'
        htmlIn += '<div class="item2">'
        htmlIn += '<div class="nom">'
        htmlIn += '<h3>Calypso</h3>'
        htmlIn += '</div>'
        htmlIn += '<div class="description">'
        htmlIn += '<p>Calypso, likes her solitude but also appreciates cuddly moments with her lo' +
                'ved ones. Her curious side leads her to explore her world at her own pace.</p>' 
        htmlIn += '</div>'
        htmlIn += '<hr>'
        htmlIn += '<div class="caracteristiques">'
        htmlIn += '<div class="age">'
        htmlIn += '<h4>AGE</h4>'
        htmlIn += '<p>9 yrs.</p>'
        htmlIn += '</div>'
        htmlIn += '<div class="gender">'
        htmlIn += '<h4>GENDER</h4>'
        htmlIn += '<div id="test"><img src="assets/male-92c36e2d.png" alt="Male"></div>'
        htmlIn += '</div>'
        htmlIn += '</div>'
        htmlIn += '</div>'
        htmlIn += '<button class="crossTwo cross">' 
        htmlIn += '<span>&#10799;</span>'
        htmlIn += '</button>'
        htmlIn += '</div>'

        // RESPONSIVE
        var width = $(window).width();
        if (width < 640) {
            $(".catTwo").css("height", "600px")
            $(".catTwo").css("width", "300px")
            $(".catTwo").html(htmlIn)
        } else {
            $(".catTwo").css("height", "300px")
            $(".catTwo").css("width", "550px")
            $(".catTwo").html(htmlIn)
        }

        // CLOSE
        $(".crossTwo").on("click", function () {
            var htmlOut = ''
    
            htmlOut += '<div class="cardTwo card">'
            htmlOut += '<img src="assets/Calypso-de7f0be5.jpg" alt="Calypso">'
            htmlOut += '</div>'
    
            $(".catTwo").html(htmlOut)
            $(".catTwo").css("height", "250px")
            $(".catTwo").css("width", "250px")
        });
    });

    /**
     * CAT THREE
     */
    $(".cardThree").click(function () {
        let htmlIn = ''

        // CARD CAT
        htmlIn += '<div class="cardThree card">'
        htmlIn += '<div class="item1">'
        htmlIn += '<img src="assets/Moka-f6349bb5.jpg" alt="Moka">'
        htmlIn += '</div>'
        htmlIn += '<div class="item2">'
        htmlIn += '<div class="nom">'
        htmlIn += '<h3>Moka</h3>'
        htmlIn += '</div>'
        htmlIn += '<div class="description">'
        htmlIn += '<p>Moka, zen and thoughtful, will tame even the most timid with her infinite s' +
                'weetness. She loves to spend time relaxing and cuddling.</p>' 
        htmlIn += '</div>'
        htmlIn += '<hr>'
        htmlIn += '<div class="caracteristiques">'
        htmlIn += '<div class="age">'
        htmlIn += '<h4>AGE</h4>'
        htmlIn += '<p>2 yrs.</p>'
        htmlIn += '</div>'
        htmlIn += '<div class="gender">'
        htmlIn += '<h4>GENDER</h4>'
        htmlIn += '<div id="test"><img src="assets/female-1549b594.png" alt="Female"></div>'
        htmlIn += '</div>'
        htmlIn += '</div>'
        htmlIn += '</div>'
        htmlIn += '<button class="crossThree cross">' 
        htmlIn += '<span>&#10799;</span>'
        htmlIn += '</button>'
        htmlIn += '</div>'

        // RESPONSIVE
        var width = $(window).width();
        if (width < 640) {
            $(".catThree").css("height", "600px")
            $(".catThree").css("width", "300px")
            $(".catThree").html(htmlIn)
        } else {
            $(".catThree").css("height", "300px")
            $(".catThree").css("width", "550px")
            $(".catThree").html(htmlIn)
        }

        // CLOSE
        $(".crossThree").on("click", function () {
            var htmlOut = ''
    
            htmlOut += '<div class="cardThree card">'
            htmlOut += '<img src="assets/Moka-f6349bb5.jpg" alt="Moka">'
            htmlOut += '</div>'
        
            $(".catThree").html(htmlOut)
            $(".catThree").css("height", "250px")
            $(".catThree").css("width", "250px")
        });
    });

    /**
     * CAT FOUR
     */
    $(".cardFour").click(function () {
        let htmlIn = ''

        // CARD CAT
        htmlIn += '<div class="cardFour card">'
        htmlIn += '<div class="item1">'
        htmlIn += '<img src="assets/Nala-0d497dd7.jpg" alt="Nala">'
        htmlIn += '</div>'
        htmlIn += '<div class="item2">'
        htmlIn += '<div class="nom">'
        htmlIn += '<h3>Nala</h3>'
        htmlIn += '</div>'
        htmlIn += '<div class="description">'
        htmlIn += '<p>Nala, mischievous and affectionate, will make you fall in love in an instan' +
                't with her contagious joie de vivre. Always ready for new games.</p>' 
        htmlIn += '</div>'
        htmlIn += '<hr>'
        htmlIn += '<div class="caracteristiques">'
        htmlIn += '<div class="age">'
        htmlIn += '<h4>AGE</h4>'
        htmlIn += '<p>7 mths.</p>'
        htmlIn += '</div>'
        htmlIn += '<div class="gender">'
        htmlIn += '<h4>GENDER</h4>'
        htmlIn += '<div id="test"><img src="assets/female-1549b594.png" alt="Female"></div>'
        htmlIn += '</div>'
        htmlIn += '</div>'
        htmlIn += '</div>'
        htmlIn += '<button class="crossFour cross">' 
        htmlIn += '<span>&#10799;</span>'
        htmlIn += '</button>'
        htmlIn += '</div>'

        // RESPONSIVE
        var width = $(window).width();
        if (width < 640) {
            $(".catFour").css("height", "600px")
            $(".catFour").css("width", "300px")
            $(".catFour").html(htmlIn)
        } else {
            $(".catFour").css("height", "300px")
            $(".catFour").css("width", "550px")
            $(".catFour").html(htmlIn)
        }

        // CLOSE
        $(".crossFour").on("click", function () {
            var htmlOut = ''
    
            htmlOut += '<div class="cardThree card">'
            htmlOut += '<img src="assets/Nala-0d497dd7.jpg" alt="Nala">'
            htmlOut += '</div>'
        
            $(".catFour").html(htmlOut)
            $(".catFour").css("height", "250px")
            $(".catFour").css("width", "250px")
        });
    });

    /**
     * CAT FIVE
     */
    $(".cardFive").click(function () {
        let htmlIn = ''

        // CARD CAT
        htmlIn += '<div class="cardFive card">'
        htmlIn += '<div class="item1">'
        htmlIn += '<img src="assets/Pixel-bfc9db75.jpg" alt="Pixel">'
        htmlIn += '</div>'
        htmlIn += '<div class="item2">'
        htmlIn += '<div class="nom">'
        htmlIn += '<h3>Pixel</h3>'
        htmlIn += '</div>'
        htmlIn += '<div class="description">'
        htmlIn += '<p>Pixel, greedy and affectionate, spends most of the day sleeping. He loves t' +
                'o spend time together and to be cuddled.</p>' 
        htmlIn += '</div>'
        htmlIn += '<hr>'
        htmlIn += '<div class="caracteristiques">'
        htmlIn += '<div class="age">'
        htmlIn += '<h4>AGE</h4>'
        htmlIn += '<p>10 mths.</p>'
        htmlIn += '</div>'
        htmlIn += '<div class="gender">'
        htmlIn += '<h4>GENDER</h4>'
        htmlIn += '<div id="test"><img src="assets/male-92c36e2d.png" alt="Male"></div>'
        htmlIn += '</div>'
        htmlIn += '</div>'
        htmlIn += '</div>'
        htmlIn += '<button class="crossFive cross">' 
        htmlIn += '<span>&#10799;</span>'
        htmlIn += '</button>'
        htmlIn += '</div>'

        // RESPONSIVE
        var width = $(window).width();
        if (width < 640) {
            $(".catFive").css("height", "600px")
            $(".catFive").css("width", "300px")
            $(".catFive").html(htmlIn)
        } else {
            $(".catFive").css("height", "300px")
            $(".catFive").css("width", "550px")
            $(".catFive").html(htmlIn)
        }

        // CLOSE
        $(".crossFive").on("click", function () {
            var htmlOut = ''
    
            htmlOut += '<div class="cardFive card">'
            htmlOut += '<img src="assets/Pixel-bfc9db75.jpg" alt="Pixel">'
            htmlOut += '</div>'
        
            $(".catFive").html(htmlOut)
            $(".catFive").css("height", "250px")
            $(".catFive").css("width", "250px")
        });
    });

    /**
     * CAT SIX
     */
    $(".cardSix").click(function () {
        let htmlIn = ''

        // CARD CAT
        htmlIn += '<div class="cardSix card">'
        htmlIn += '<div class="item1">'
        htmlIn += '<img src="assets/Simbaï-6d629eea.jpg" alt="Simbaï">'
        htmlIn += '</div>'
        htmlIn += '<div class="item2">'
        htmlIn += '<div class="nom">'
        htmlIn += '<h3>Simbaï</h3>'
        htmlIn += '</div>'
        htmlIn += '<div class="description">'
        htmlIn += '<p>Simbaï, proud and courageous, is independent but he loves to spend time wit' +
                'h humans, to be petted and to play.</p>' 
        htmlIn += '</div>'
        htmlIn += '<hr>'
        htmlIn += '<div class="caracteristiques">'
        htmlIn += '<div class="age">'
        htmlIn += '<h4>AGE</h4>'
        htmlIn += '<p>2 yrs.</p>'
        htmlIn += '</div>'
        htmlIn += '<div class="gender">'
        htmlIn += '<h4>GENDER</h4>'
        htmlIn += '<div id="test"><img src="assets/male-92c36e2d.png" alt="Male"></div>'
        htmlIn += '</div>'
        htmlIn += '</div>'
        htmlIn += '</div>'
        htmlIn += '<button class="crossSix cross">' 
        htmlIn += '<span>&#10799;</span>'
        htmlIn += '</button>'
        htmlIn += '</div>'

        // RESPONSIVE
        var width = $(window).width();
        if (width < 640) {
            $(".catSix").css("height", "600px")
            $(".catSix").css("width", "300px")
            $(".catSix").html(htmlIn)
        } else {
            $(".catSix").css("height", "300px")
            $(".catSix").css("width", "550px")
            $(".catSix").html(htmlIn)
        }

        // CLOSE
        $(".crossSix").on("click", function () {
            var htmlOut = ''
    
            htmlOut += '<div class="cardSix card">'
            htmlOut += '<img src="assets/Simbaï-6d629eea.jpg" alt="Simbaï">'
            htmlOut += '</div>'
        
            $(".catSix").html(htmlOut)
            $(".catSix").css("height", "250px")
            $(".catSix").css("width", "250px")
        });
    });
});