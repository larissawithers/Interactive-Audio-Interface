let song = document.createElement("audio")
let songimg1 = document.getElementById("sPic")
let ppimg = document.getElementById("playpauseimg")

let songList = [{
    name: "Warm Light",
    img: "songimg/warmLight.jpg",
    path: "audio/WarmLight.mp3"
    
},
{
    name: "Quite Time",
    img: "songimg/QuiteTime.jpg",
    path: "audio/QuiteTime.mp3"
},{
    name: "Nature",
    img: "songimg/nature.jpg",
    path: "audio/Nature.mp3"
},{
    name: "Healing Water",
    img: "songimg/waterfall.jpg",
    path: "audio/HealingWater.mp3"
}]

let index = 0
let isplaying = false


function loadSongs(index){
    song.src=songList[index].path
    songimg1.src=songList[index].img
 
    song.load()
}
loadSongs(index);

function playAudio(){
    if(isplaying==false){
        playmusic()
        
    }else{
        pausemusic()
        
        
    }
}



function playmusic(){
    song.play()
    document.getElementById("songName").innerHTML=songList[index].name
    songimg1.src=songList[index].img
    document.getElementById("playpauseimg").src="img/Pause.png"
    isplaying = true
}

function pausemusic(){
    song.pause()
    document.getElementById("playpauseimg").src="img/Play.png"
    isplaying = false
}

function nextSong(){
    if(index < songList.length -1){
        index += 1
        loadSongs(index)
        playmusic()
    }else{
        index=0
        loadSongs(index)
        playmusic()
    }
}

function previousSong(){
    if(index > 0 ){
        index -= 1
        loadSongs(index)
        playmusic()
    }else{
        index = songList.length
        loadSongs(index)
        playmusic()
        }
    
}

function healingwateralone(){
    index = 3
    song.src=songList[index].path
    songimg1.src=songList[index].img
    song.load()
    playmusic()

}
function naturealone(){
    index = 2
    song.src=songList[index].path
    songimg1.src=songList[index].img
    song.load()
    playmusic()

}
function quitetimealone(){
    index = 1
    song.src=songList[index].path
    songimg1.src=songList[index].img
    song.load()
    playmusic()

}function warmlightalone(){
    index = 0
    song.src=songList[index].path
    songimg1.src=songList[index].img
    song.load()
    playmusic()

}