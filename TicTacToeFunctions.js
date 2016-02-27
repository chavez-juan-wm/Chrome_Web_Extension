var Player = 1;
var keepTrack = 0;
var player1Score = [false,false,false,false,false,false,false,false,false];
var player2Score = [false,false,false,false,false,false,false,false,false];
var winner1 = 0;
var winner2 = 0;

$(document).ready(function()
{
    function fade()
    {
        setTimeout(function()
        {
            $("#winner").fadeOut(1000);
        },1000);

        setTimeout(function()
        {
            document.getElementById("winner").innerHTML = "";
            $("#winner").fadeIn(1);
        }, 2000);
    }

    function reset()
    {
        for(var counter = 0; counter <= 8; counter++)
        {
            player1Score[counter] = false;
            player2Score[counter] = false;
            var id = counter + 1;
            var string = id.toString();
            document.getElementById(string).innerHTML = "<button></button>";
        }

        keepTrack = 0;
        Player = 1;
        document.getElementById("scores").innerHTML = "<h5>Score: " + winner1 + " | " + winner2  + "</h5>";
        document.getElementById("player").innerHTML = "<h5> Player 1 </h5>";
    }

    function Score()
    {
        if((player1Score[0] && player1Score[1] && player1Score[2]) || (player1Score[3] && player1Score[4] && player1Score[5]) || (player1Score[6] && player1Score[7] && player1Score[8]) || (player1Score[0] && player1Score[4] && player1Score[8]) || (player1Score[2] && player1Score[4] && player1Score[6]) || (player1Score[0] && player1Score[3] && player1Score[6]) || (player1Score[1] && player1Score[4] && player1Score[7]) || (player1Score[2] && player1Score[5] && player1Score[8]))
        {
            document.getElementById("winner").innerHTML = "<h5>Player 1 won!</h5>";
            winner1++;
            reset();
            fade();
        }
        else if((player2Score[0] && player2Score[1] && player2Score[2]) || (player2Score[3] && player2Score[4] && player2Score[5]) || (player2Score[6] && player2Score[7] && player2Score[8]) || (player2Score[0] && player2Score[4] && player2Score[8]) || (player2Score[2] && player2Score[4] && player2Score[6]) || (player2Score[0] && player2Score[3] && player2Score[6]) || (player2Score[1] && player2Score[4] && player2Score[7]) || (player2Score[2] && player2Score[5] && player2Score[8]))
        {
            document.getElementById("winner").innerHTML = "<h5>Player 2 won!</h5>";
            winner2++;
            reset();
            fade();
        }
        else if(keepTrack == 9)
        {
            document.getElementById("winner").innerHTML = "<h5>It was a tie.</h5>";
            reset();
            fade();
        }
    }

    $('td').click(function()
    {
        var par = document.getElementById(this.id);
        var img = document.createElement('img');

        if(Player == 1)
        {
            if(!player1Score[this.id - 1] && !player2Score[this.id - 1])
            {
                img.src = 'http://demo.ksankaran.com/tictactoe/images/letter-x.jpg';
                img.height = 80;
                img.width = 80;
                player1Score[this.id - 1] = true;
                Player++;
                document.getElementById("player").innerHTML = "<h5>Player 2</h5>";
                keepTrack++;
                par.innerHTML = "";
                par.appendChild(img);
                Score();
            }
        }

        else if(Player == 2)
        {
            if(!player1Score[this.id - 1] && !player2Score[this.id - 1])
            {
                img.src = 'http://cf067b.medialib.glogster.com/media/d2/d288f67bbd7805521ac44c0771a2f93362e7e60657079f8e71f8dedac4316022/let-o.jpg';
                img.height = 90;
                img.width = 100;
                player2Score[this.id - 1] = true;
                Player--;
                document.getElementById("player").innerHTML = "<h5>Player 1</h5>";
                keepTrack++;
                par.innerHTML = "";
                par.appendChild(img);
                Score();
            }
        }
    });
});